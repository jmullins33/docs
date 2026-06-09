import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  icon?: string
  href?: string
  horizontal?: boolean
  children?: React.ReactNode
}

export function Card({ title, href, horizontal, children }: CardProps) {
  const style: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: horizontal ? '0.875rem 1.25rem' : '1.25rem',
    display: 'flex',
    flexDirection: horizontal ? 'row' : 'column',
    alignItems: horizontal ? 'center' : 'flex-start',
    gap: '0.625rem',
    color: 'inherit',
    textDecoration: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  }

  const inner = (
    <>
      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{title}</div>
      {children && (
        <div style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.55 }}>
          {children}
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} style={style} className="diq-card">
        {inner}
      </Link>
    )
  }
  return <div style={style}>{inner}</div>
}
