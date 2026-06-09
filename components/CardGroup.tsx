import React from 'react'

interface CardGroupProps {
  cols?: number
  children: React.ReactNode
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  return (
    <div
      className="diq-card-group"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: '1rem',
        margin: '1.25rem 0',
      }}
    >
      {children}
    </div>
  )
}
