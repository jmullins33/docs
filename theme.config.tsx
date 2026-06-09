import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#EA580C', letterSpacing: '-0.02em' }}>
      Dirt IQ
    </span>
  ),
  primaryHue: 22,
  primarySaturation: 90,
  project: {
    link: 'https://github.com/jmullins33/docs',
  },
  docsRepositoryBase: 'https://github.com/jmullins33/docs/tree/main',
  useNextSeoProps() {
    return { titleTemplate: '%s – Dirt IQ' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Odds compilation and risk modeling for dirt track motorsports." />
      <meta name="og:title" content="Dirt IQ" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {
    extraContent: (
      <a
        href="https://app.dirtiq.com/api-keys"
        target="_blank"
        rel="noreferrer"
        style={{
          background: '#EA580C',
          color: 'white',
          padding: '0.35rem 0.85rem',
          borderRadius: '0.375rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Get API Key
      </a>
    ),
  },
  footer: {
    text: (
      <span style={{ fontSize: '0.82rem', color: '#888' }}>
        © {new Date().getFullYear()} Dirt IQ · Predictive analytics for dirt track racing
      </span>
    ),
  },
}

export default config
