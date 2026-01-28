'use client'

import HandleComponent from '@/components/HandleComponent'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn, formatPrice } from '@/lib/utils'
import NextImage from 'next/image'
import { Rnd } from 'react-rnd'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useRef, useState } from 'react'
import {
  COLORS,
  FITS,
  MATERIALS,
  SIZES,
} from '@/validators/option-validator'
import { Label } from '@/components/ui/label'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, ChevronsUpDown } from 'lucide-react'
import { BASE_PRICE } from '@/config/products'
import { useUploadThing } from '@/lib/uploadthing'
import { useToast } from '@/components/ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import { saveConfig as _saveConfig, SaveConfigArgs } from './actions'
import { useRouter } from 'next/navigation'

interface DesignConfiguratorProps {
  configId: string
  imageUrl: string
  imageDimensions: { width: number; height: number }
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  const { toast } = useToast()
  const router = useRouter()

  const { mutate: saveConfig, isPending } = useMutation({
    mutationKey: ['save-config'],
    mutationFn: async (args: SaveConfigArgs) => {
      await Promise.all([saveConfiguration(), _saveConfig(args)])
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      router.push(`/configure/preview?id=${configId}`)
    },
  })

  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number]
    size: (typeof SIZES.options)[number]
    material: (typeof MATERIALS.options)[number]
    fit: (typeof FITS.options)[number]
  }>({
    color: COLORS[0],
    size: SIZES.options[0],
    material: MATERIALS.options[0],
    fit: FITS.options[0],
  })

  const [renderedDimension, setRenderedDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  })

  const [renderedPosition, setRenderedPosition] = useState({
    x: 100,
    y: 150,
  })

  const tshirtRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { startUpload } = useUploadThing('imageUploader')

  async function saveConfiguration() {
    try {
      const {
        left: caseLeft,
        top: caseTop,
        width,
        height,
      } = tshirtRef.current!.getBoundingClientRect()

      const { left: containerLeft, top: containerTop } =
        containerRef.current!.getBoundingClientRect()

      const leftOffset = caseLeft - containerLeft
      const topOffset = caseTop - containerTop

      const actualX = renderedPosition.x - leftOffset
      const actualY = renderedPosition.y - topOffset

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      const userImage = new Image()
      userImage.crossOrigin = 'anonymous'
      userImage.src = imageUrl
      await new Promise((resolve) => (userImage.onload = resolve))

      ctx?.drawImage(
        userImage,
        actualX,
        actualY,
        renderedDimension.width,
        renderedDimension.height
      )

      const base64 = canvas.toDataURL()
      const base64Data = base64.split(',')[1]

      const blob = base64ToBlob(base64Data, 'image/png')
      const file = new File([blob], 'filename.png', { type: 'image/png' })

      await startUpload([file], { configId })
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description:
          'There was a problem saving your config, please try again.',
        variant: 'destructive',
      })
    }
  }

  function base64ToBlob(base64: string, mimeType: string) {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  return (
    <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
      <div
        ref={containerRef}
        className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 bg-gray-100 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
        <div className='relative w-[500px] pointer-events-none aspect-[1/1.2]'>
          <AspectRatio
            ref={tshirtRef}
            ratio={1 / 1.2}
            className='pointer-events-none relative z-10 aspect-[1/1.2] w-full'>
            <NextImage
              fill
              alt='tshirt image'
              src='/t.png'
              className='pointer-events-none z-10 select-none object-contain'
            />
          </AspectRatio>
        </div>

        <Rnd
          default={{
            x: 100,
            y: 150,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          onResizeStop={(_, __, ref, ___, { x, y }) => {
            setRenderedDimension({
              height: parseInt(ref.style.height.slice(0, -2)),
              width: parseInt(ref.style.width.slice(0, -2)),
            })

            setRenderedPosition({ x, y })
          }}
          onDragStop={(_, data) => {
            const { x, y } = data
            setRenderedPosition({ x, y })
          }}
          className='absolute z-50 border-[3px] border-primary'
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}>
          <div className='relative w-full h-full'>
            <NextImage
              src={imageUrl}
              fill
              alt='your image'
              className='pointer-events-none'
            />
          </div>
        </Rnd>
      </div>

      <div className='h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white'>
        <ScrollArea className='relative flex-1 overflow-auto'>
          <div
            aria-hidden='true'
            className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'
          />

          <div className='px-8 pb-12 pt-8'>
            <h2 className='tracking-tight font-bold text-3xl'>
              Customize your shirt
            </h2>

            <div className='w-full h-px bg-zinc-200 my-6' />

            <div className='relative mt-4 h-full flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                <RadioGroup
                  value={options.color.value}
                  onValueChange={(val) => {
                    const selectedColor = COLORS.find((c) => c.value === val)
                    if (selectedColor) {
                      setOptions((prev) => ({
                        ...prev,
                        color: selectedColor,
                      }))
                    }
                  }}>
                  <Label>Color: {options.color.label}</Label>
                  <div className='mt-3 flex items-center space-x-3'>
                    {COLORS.map((color) => {
                      const isSelected = options.color.value === color.value
                      const bgClasses: Record<string, string> = {
                        'zinc-900': 'bg-zinc-900',
                        'white': 'bg-white',
                        'blue-950': 'bg-blue-950',
                        'red-950': 'bg-red-950',
                        'green-950': 'bg-green-950',
                      }
                      const borderClasses: Record<string, string> = {
                        'zinc-900': 'border-zinc-900',
                        'white': 'border-zinc-200',
                        'blue-950': 'border-blue-950',
                        'red-950': 'border-red-950',
                        'green-950': 'border-green-950',
                      }
                      return (
                        <label
                          key={color.label}
                          className={cn(
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 transition-colors',
                            isSelected
                              ? borderClasses[color.tw] || 'border-zinc-900'
                              : 'border-transparent'
                          )}>
                          <RadioGroupItem
                            value={color.value}
                            className='sr-only'
                          />
                          <span
                            className={cn(
                              bgClasses[color.tw] || 'bg-zinc-900',
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </label>
                      )
                    })}
                  </div>
                </RadioGroup>

                <div className='relative flex flex-col gap-3 w-full'>
                  <Label>Size</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        role='combobox'
                        className='w-full justify-between'>
                        {options.size.label}
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {SIZES.options.map((size) => (
                        <DropdownMenuItem
                          key={size.label}
                          className={cn(
                            'flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100',
                            {
                              'bg-zinc-100':
                                size.label === options.size.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({ ...prev, size }))
                          }}>
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              size.label === options.size.label
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {size.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {[MATERIALS, FITS].map(
                  ({ name, options: selectableOptions }) => {
                    const currentValue = name === 'material' 
                      ? options.material.value 
                      : options.fit.value
                    
                    return (
                      <RadioGroup
                        key={name}
                        value={currentValue}
                        onValueChange={(val) => {
                          const selectedOption = selectableOptions.find(
                            (opt) => opt.value === val
                          )
                          if (selectedOption) {
                            setOptions((prev) => ({
                              ...prev,
                              [name]: selectedOption,
                            }))
                          }
                        }}>
                        <Label>
                          {name.slice(0, 1).toUpperCase() + name.slice(1)}
                        </Label>
                        <div className='mt-3 space-y-4'>
                          {selectableOptions.map((option) => {
                            const isSelected = currentValue === option.value
                            return (
                              <label
                                key={option.value}
                                className={cn(
                                  'relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between transition-colors',
                                  isSelected
                                    ? 'border-primary'
                                    : 'border-zinc-200'
                                )}>
                                <RadioGroupItem
                                  value={option.value}
                                  className='sr-only'
                                />
                                <span className='flex items-center'>
                                  <span className='flex flex-col text-sm'>
                                    <span className='font-medium text-gray-900'>
                                      {option.label}
                                    </span>

                                    {option.description ? (
                                      <span className='text-gray-500'>
                                        <span className='block sm:inline'>
                                          {option.description}
                                        </span>
                                      </span>
                                    ) : null}
                                  </span>
                                </span>

                                <span className='mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right'>
                                  <span className='font-medium text-gray-900'>
                                    {formatPrice(option.price / 100)}
                                  </span>
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      </RadioGroup>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className='w-full px-8 h-16 bg-white'>
          <div className='h-px w-full bg-zinc-200' />
          <div className='w-full h-full flex justify-end items-center'>
            <div className='w-full flex gap-6 items-center'>
              <p className='font-medium whitespace-nowrap'>
                {formatPrice(
                  (BASE_PRICE + options.fit.price + options.material.price) /
                    100
                )}
              </p>
              <Button
                // isLoading={isPending}
                disabled={isPending}
                // loadingText="Saving"
                onClick={() =>
                  saveConfig({
                    configId,
                    color: options.color.value,
                    fit: options.fit.value,
                    material: options.material.value,
                    size: options.size.value,
                  })
                }
                size='sm'
                className='w-full'>
                {isPending ? 'Saving...' : 'Continue'}
                <ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignConfigurator