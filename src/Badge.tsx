import React from 'react'
import statusDotActive from './assets/status-dot-active.svg'
import statusDotNeutral from './assets/status-dot-neutral.svg'

export interface BadgeProps {
  label: string
  variant?: 'active' | 'neutral'
}

const styles = {
  active: { background: '#fff1e6', color: '#d97706', dot: statusDotActive },
  neutral: { background: '#f2e9e3', color: '#8c7a74', dot: statusDotNeutral },
}

export function Badge({ label, variant = 'active' }: BadgeProps) {
  const s = styles[variant]
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        padding: '0 10px',
        borderRadius: 100,
        background: s.background,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <img src={s.dot} alt="" width={6} height={6} style={{ display: 'block', flexShrink: 0 }} />
      <span style={{ fontWeight: 500, fontSize: 12, color: s.color, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  )
}
