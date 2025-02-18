// Shirt color Tailwind classes
// bg-zinc-900 border-zinc-900 (black)
// bg-white border-zinc-200 (white)
// bg-blue-950 border-blue-950 (blue)
// bg-red-950 border-red-950 (red)
// bg-green-950 border-green-950 (green)

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  { label: 'White', value: 'white', tw: 'white' },
  { label: 'Blue', value: 'blue', tw: 'blue-950' },
  { label: 'Red', value: 'red', tw: 'red-950' },
  { label: 'Green', value: 'green', tw: 'green-950' },
] as const

export const SIZES = {
  name: 'size',
  options: [
    { label: 'XS', value: 'xs' },
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' },
    { label: 'XL', value: 'xl' },
    { label: 'XXL', value: 'xxl' },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Cotton',
      value: 'cotton',
      description: '100% premium cotton',
      price: PRODUCT_PRICES.material.cotton,
    },
    {
      label: 'Polycotton',
      value: 'polycotton',
      description: 'Durable cotton-polyester blend',
      price: PRODUCT_PRICES.material.polycotton,
    },
    {
      label: 'Dryfit',
      value: 'dryfit',
      description: 'Moisture-wicking performance fabric',
      price: PRODUCT_PRICES.material.dryfit,
    },
  ],
} as const

export const FITS = {
  name: 'fit',
  options: [
    {
      label: 'Regular Fit',
      value: 'regular',
      description: 'Classic comfortable fit',
      price: PRODUCT_PRICES.fit.regular,
    },
    {
      label: 'Oversized Fit',
      value: 'oversized',
      description: 'Relaxed, roomy fit',
      price: PRODUCT_PRICES.fit.oversized,
    },
    {
      label: 'Slim Fit',
      value: 'slim',
      description: 'Tailored, close-fitting',
      price: PRODUCT_PRICES.fit.slim,
    },
  ],
} as const
