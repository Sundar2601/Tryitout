import React from 'react'

export interface InputProps {
  label: string
  placeholder?: string
  helperText?: string
  value?: string
  onChange?: (value: string) => void
}

export function Input({ label, placeholder, helperText, value, onChange }: InputProps) {
  const id = React.useId()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', width: 420, fontFamily: 'Inter, sans-serif' }}>
      <label htmlFor={id} style={{ fontWeight: 500, fontSize: 12, color: '#182230' }}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          boxSizing: 'border-box',
          width: '100%',
          height: 40,
          padding: '0 12px',
          background: '#fff',
          border: '1px solid #e2e6ed',
          borderRadius: 8,
          fontFamily: 'inherit',
          fontSize: 14,
          color: '#182230',
        }}
      />
      {helperText && <span style={{ fontSize: 12, color: '#667085' }}>{helperText}</span>}
    </div>
  )
}
