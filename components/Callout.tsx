import React from 'react'

type CalloutType = 'info' | 'warning' | 'tip' | 'error'

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

const variants = {
  info:    { bg: '#eff6ff', border: '#3b82f6' },
  warning: { bg: '#fffbeb', border: '#f59e0b' },
  tip:     { bg: '#f0fdf4', border: '#22c55e' },
  error:   { bg: '#fef2f2', border: '#ef4444' },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const v = variants[type]
  return (
    <div style={{
      background: v.bg,
      borderLeft: `4px solid ${v.border}`,
      borderRadius: '0.375rem',
      padding: '0.875rem 1rem',
      margin: '1rem 0',
      fontSize: '0.88rem',
      lineHeight: 1.6,
    }}>
      {children}
    </div>
  )
}

export function Note({ children }: { children: React.ReactNode }) {
  return <Callout type="info">{children}</Callout>
}

export function Warning({ children }: { children: React.ReactNode }) {
  return <Callout type="warning">{children}</Callout>
}

export function Tip({ children }: { children: React.ReactNode }) {
  return <Callout type="tip">{children}</Callout>
}
