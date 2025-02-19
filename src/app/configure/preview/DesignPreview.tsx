'use client'

import Tshirt from '@/components/Tshirt'
import { Button } from '@/components/ui/button'
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { cn, formatPrice } from '@/lib/utils'
import { COLORS, MATERIALS, FITS, SIZES } from '@/validators/option-validator'
import { Configuration } from '../../../../prisma/generated/client'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { createCheckoutSession } from './actions'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { authClient } from '@/lib/auth-client'
import LoginModal from '@/components/LoginModal'

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const router = useRouter()
  const { toast } = useToast()
  const { id } = configuration
  const { useSession } = authClient
  const { data: session } = useSession()
  const user = session?.user || null
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  useEffect(() => setShowConfetti(true))

  const { color, size, fit, material } = configuration

  const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

  const sizeLabel = size
    ? SIZES.options.find(({ value }) => value === size)?.label || size.toUpperCase()
    : 'Custom'

  let totalPrice = BASE_PRICE
  if (material === 'polycotton')
    totalPrice += PRODUCT_PRICES.material.polycotton
  if (material === 'dryfit')
    totalPrice += PRODUCT_PRICES.material.dryfit
  if (fit === 'oversized')
    totalPrice += PRODUCT_PRICES.fit.oversized
  if (fit === 'slim')
    totalPrice += PRODUCT_PRICES.fit.slim

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ['get-checkout-session'],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url)
      else throw new Error('Unable to retrieve payment URL.')
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      })
    },
  })

  const handleCheckout = () => {
    if (user) {
      // create payment session
      createPaymentSession({ configId: id })
    } else {
      // need to log in
      localStorage.setItem('configurationId', id)
      setIsLoginModalOpen(true)
    }
  }

  return (
    <>
      <div
        aria-hidden='true'
        className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className='mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-14 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
        <div className='md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2 relative z-0'>
          <Tshirt
            className={cn("relative z-0", `w-[${configuration.width}px] h-[${configuration.height}px]`)}
            imgSrc={configuration.croppedImageUrl!}
            width={configuration.width}
            height={configuration.height}
          />
        </div>

        <div className='mt-6  sm:col-span-9 md:row-end-1 relative z-10'>
          <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
            Your {sizeLabel} Shirt
          </h3>
          <div className='mt-3 flex items-center gap-1.5 text-base'>
            <Check className='h-4 w-4 text-green-500' />
            In stock and ready to ship
          </div>
        </div>

        <div className='sm:col-span-12 md:col-span-9 text-base relative z-10'>
          <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
            <div>
              <p className='font-medium text-zinc-950'>Highlights</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>240 GSM great quality material</li>
                  <li>Machine washable</li>
                  <li>5 year print warranty</li>
                <li>Packaging made from recycled materials</li>
              </ol>
            </div>
            <div>
              <p className='font-medium text-zinc-950'>Materials</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>High-quality, 240 gsm fabric</li>
                <li>5 year print guarantee</li>
              </ol>
            </div>
          </div>

          <div className='mt-8'>
            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
              <div className='flow-root text-sm'>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Base price</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {fit === 'oversized' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Oversized fit</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.fit.oversized / 100)}
                    </p>
                  </div>
                ) : null}

                {fit === 'slim' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Slim fit</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.fit.slim / 100)}
                    </p>
                  </div>
                ) : null}

                {material === 'polycotton' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Polycotton material</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.material.polycotton / 100)}
                    </p>
                  </div>
                ) : null}

                {material === 'dryfit' ? (
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Dryfit material</p>
                    <p className='font-medium text-gray-900'>
                      {formatPrice(PRODUCT_PRICES.material.dryfit / 100)}
                    </p>
                  </div>
                ) : null}

                <div className='my-2 h-px bg-gray-200' />

                <div className='flex items-center justify-between py-2'>
                  <p className='font-semibold text-gray-900'>Order total</p>
                  <p className='font-semibold text-gray-900'>
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8 flex justify-end pb-12'>
              <Button
                onClick={() => handleCheckout()}
                className='px-4 sm:px-6 lg:px-8'>
                Check out <ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignPreview
