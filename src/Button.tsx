import React from 'react'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

const variantStyles = {
  primary: { background: '#d97706', border: '1px solid #d97706', color: '#fff' },
  secondary: { background: '#fff', border: '1px solid #e7ded6', color: '#3e2b24' },
}

export function Button({ label, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        padding: '0 16px',
        borderRadius: 8,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: 'nowrap',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...variantStyles[variant],
      }}
    >
      {label}
    </button>
  )
}
