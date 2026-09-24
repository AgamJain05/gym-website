/**
 * SectionDivider — Strong visual separator between sections.
 * A full-width element with a lime accent line, a subtle gradient fade,
 * and an optional floating label chip.
 */
export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="relative w-full" style={{ height: label ? '48px' : '32px', background: '#000' }}>
      {/* Top thin line — right-to-left lime fade */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, #C6FF00 0%, rgba(198,255,0,0.3) 30%, rgba(198,255,0,0) 80%)',
        }}
      />

      {/* Bottom thin line — very subtle */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.04)',
        }}
      />

      {/* Middle content: optional label or decorative dots */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20 gap-4">
        {label ? (
          <>
            <div
              style={{
                background: '#C6FF00',
                color: '#000',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 700,
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 100%, 0 100%)',
                flexShrink: 0,
              }}
            >
              {label}
            </div>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(198,255,0,0.2), transparent)',
              }}
            />
            {/* Right decorative: 3 dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    height: '3px',
                    background: i === 0 ? '#C6FF00' : `rgba(198,255,0,${0.3 - i * 0.1})`,
                    borderRadius: '50%',
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(198,255,0,0.15), transparent)',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
