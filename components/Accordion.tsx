import React from 'react'

interface AccordionProps {
  title: string
  icon?: string
  children: React.ReactNode
}

export function Accordion({ title, children }: AccordionProps) {
  return (
    <details
      className="diq-accordion"
      style={{ border: '1px solid #e5e7eb', borderRadius: '0.375rem', marginBottom: '0.5rem' }}
    >
      <summary style={{
        padding: '0.75rem 1rem',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
      }}>
        {title}
        <span className="diq-chevron" style={{ transition: 'transform 0.2s', fontSize: '0.75rem' }}>▶</span>
      </summary>
      <div style={{ padding: '0.875rem 1rem', borderTop: '1px solid #e5e7eb', fontSize: '0.88rem', lineHeight: 1.6 }}>
        {children}
      </div>
    </details>
  )
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: '1rem 0' }}>{children}</div>
}
