/**
 * og-template.tsx — Design-system aligned OpenGraph layout template.
 * Sized at 1200x630. Uses #F4F1EA (Surface), #FF6B00 (Accent), #0E0E0D (Ink), and #E2DED4 (Line).
 * Headings use Space Grotesk; metadata uses IBM Plex Mono.
 */

import { siteUrl } from '../config/site';

export interface OgTemplateProps {
  title: string;
  client: string;
}

export function getOgTemplate({ title, client }: OgTemplateProps) {
  const siteHostname = new URL(siteUrl).hostname;
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        backgroundColor: '#F4F1EA',
        display: 'flex',
        flexDirection: 'column',
        padding: '36px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FAF8F5',
          border: '1px solid #E2DED4',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '54px 64px',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header: Brand Wordmark + Case Study Badge */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginRight: '12px', display: 'flex' }}
            >
              <path
                d="M 18.8 5.8 A 9.2 9.2 0 1 0 18.8 18.2"
                stroke="#0E0E0D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="18.8" cy="5.8" r="1.8" fill="#FF5500" />
              <circle cx="18.8" cy="18.2" r="1.8" fill="#FF5500" />
            </svg>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0E0E0D',
                fontFamily: 'Space Grotesk',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>Web</span>
              <span style={{ color: '#FF5500', margin: '0 6px' }}>X</span>
              <span>Mondo</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid #E2DED4',
              fontSize: '13px',
              fontWeight: 500,
              color: '#6E6D68',
              letterSpacing: '0.08em',
              fontFamily: 'IBM Plex Mono',
            }}
          >
            CASE STUDY
          </div>
        </div>

        {/* Center: Client Identifier + Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#FF6B00',
                marginRight: '10px',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#FF6B00',
                letterSpacing: '0.08em',
                fontFamily: 'IBM Plex Mono',
                display: 'flex',
              }}
            >
              CLIENT / {client.toUpperCase()}
            </div>
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#0E0E0D',
              fontFamily: 'Space Grotesk',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              maxWidth: '960px',
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom Bar: Permalink / URL + Discipline Summary */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderTop: '1px solid #E2DED4',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#6E6D68',
              fontFamily: 'IBM Plex Mono',
              display: 'flex',
            }}
          >
            {`${siteHostname}/work`}
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#6E6D68',
              letterSpacing: '0.06em',
              fontFamily: 'IBM Plex Mono',
              display: 'flex',
            }}
          >
            DESIGN · BUILD · SCALE
          </div>
        </div>
      </div>
    </div>
  );
}
