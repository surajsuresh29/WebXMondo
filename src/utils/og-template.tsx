/**
 * og-template.tsx — Design-system aligned OpenGraph layout template.
 * Sized at 1200x630. Uses #F4F1EA (Surface), #FF6B00 (Accent), #0E0E0D (Ink), and #E2DED4 (Line).
 * Headings use Space Grotesk; metadata uses IBM Plex Mono.
 */

export interface OgTemplateProps {
  title: string;
  client: string;
}

export function getOgTemplate({ title, client }: OgTemplateProps) {
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
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '7px',
                backgroundColor: '#FF6B00',
                marginRight: '12px',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0E0E0D',
                fontFamily: 'Space Grotesk',
                letterSpacing: '-0.02em',
                display: 'flex',
              }}
            >
              Web Mondo
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
            webmondo.com/work
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
