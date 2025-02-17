'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from './ui/button'
import { useState } from 'react'
import { X } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    try {
      await authClient.signIn.social({ provider })
    } catch (error) {
      console.error('Sign in error:', error)
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='fixed inset-0 bg-black/50'
        onClick={() => setIsOpen(false)}
      />
      <div className='relative bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg'>
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
        >
          <X className='h-5 w-5' />
        </button>
        <h2 className='text-2xl font-bold mb-4'>Sign in to continue</h2>
        <p className='text-gray-600 mb-6'>
          Please sign in to proceed with checkout
        </p>
        <div className='flex flex-col gap-3'>
          <Button
            onClick={() => handleSignIn('google')}
            disabled={isLoading}
            className='w-full'
          >
            {isLoading ? 'Loading...' : 'Sign in with Google'}
          </Button>
          <Button
            onClick={() => handleSignIn('github')}
            disabled={isLoading}
            variant='outline'
            className='w-full'
          >
            {isLoading ? 'Loading...' : 'Sign in with GitHub'}
          </Button>
        </div>
      </div>
    </div>
  )
}
