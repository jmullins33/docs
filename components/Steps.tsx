import React from 'react'

interface StepProps {
  title: string
  children: React.ReactNode
}

export function Step({ children }: StepProps) {
  return <>{children}</>
}

interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  const steps = React.Children.toArray(children)
  return (
    <div style={{ margin: '1.25rem 0' }}>
      {steps.map((child, i) => {
        const el = child as React.ReactElement<StepProps>
        return (
          <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', position: 'relative' }}>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', left: '0.9375rem', top: '2.25rem',
                bottom: 0, width: '2px', background: '#e5e7eb',
              }} />
            )}
            <div style={{
              flexShrink: 0, width: '1.875rem', height: '1.875rem',
              borderRadius: '50%', background: '#EA580C', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.8rem', zIndex: 1,
            }}>
              {i + 1}
            </div>
            <div style={{ flex: 1, paddingTop: '0.125rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.375rem', fontSize: '0.95rem' }}>
                {el.props?.title}
              </div>
              <div style={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                {el.props?.children}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
