import React from 'react'
import arrowRight from './assets/arrow-right.svg'

export interface CardProps {
  title: string
  description: string
  actionLabel: string
  onAction?: () => void
}

export function Card({ title, description, actionLabel, onAction }: CardProps) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'flex-start',
        width: 420,
        padding: 24,
        background: '#fff',
        border: '1px solid #e2e6ed',
        borderRadius: 12,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <p style={{ margin: 0, fontWeight: 600, fontSize: 16, color: '#182230' }}>{title}</p>
      <p style={{ margin: 0, fontWeight: 400, fontSize: 14, lineHeight: 1.45, color: '#667085' }}>{description}</p>
      <button
        onClick={onAction}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: 0,
          border: 0,
          background: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 500,
          fontSize: 12,
          color: '#2563eb',
        }}
      >
        {actionLabel}
        <img src={arrowRight} alt="" width={14} height={14} style={{ display: 'block' }} />
      </button>
    </div>
  )
}
