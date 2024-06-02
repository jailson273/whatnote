'use client'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export const Button = ({ children, active = false, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type='button'
      data-active={Boolean(active)}
      className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-black text-sm text-white data-[active=true]:bg-[#FF3F25]'
    >
      {children}
    </button>
  )
}
