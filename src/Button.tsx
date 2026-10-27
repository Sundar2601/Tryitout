import React from 'react'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

export function Button({ label, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
