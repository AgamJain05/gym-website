'use client';

const TICKER_1 = ['TRAIN HARD', 'STAY STRONG', 'NEVER QUIT', 'PUSH YOUR LIMITS', 'BUILT NOT BOUGHT', 'NO EXCUSES', 'SHARK MENTALITY', 'EARN IT'];
const TICKER_2 = ['STRENGTH', 'DISCIPLINE', 'TRANSFORMATION', 'ENERGY', 'COMMUNITY', 'RESULTS', 'CONSISTENCY', 'POWER'];

function TickerTrack({ items, reverse = false, speed = 'animate-marquee' }: {
  items: string[];
  reverse?: boolean;
  speed?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex overflow-hidden ${reverse ? 'flex-row-reverse' : ''}`} aria-hidden="true">
      <div className={`flex shrink-0 gap-0 ${speed} ${reverse ? 'animate-marquee-reverse' : ''}`}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className="px-6 text-black font-display whitespace-nowrap"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em', fontSize: 'clamp(18px, 2.5vw, 28px)' }}
            >
              {item}
            </span>
            <span className="text-black/40 font-display text-xl shrink-0" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section id="marquee" className="relative overflow-hidden py-0 z-10">
      {/* Top diagonal slash */}
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-black z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      {/* Row 1 — Lime */}
      <div className="bg-[#C6FF00] py-3 relative overflow-hidden">
        <TickerTrack items={TICKER_1} speed="animate-marquee" />
      </div>

      {/* Row 2 — Dark with lime text */}
      <div className="bg-[#050505] py-2.5 relative overflow-hidden border-y border-[#C6FF00]/10">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 gap-0 animate-marquee-slow animate-marquee-reverse">
            {[...TICKER_2, ...TICKER_2].map((item, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span
                  className="px-6 text-[#C6FF00]/40 font-display whitespace-nowrap"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.15em', fontSize: 'clamp(13px, 1.5vw, 18px)' }}
                >
                  {item}
                </span>
                <span className="text-[#C6FF00]/20 text-sm shrink-0">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 — Lime again, slightly slower */}
      <div className="bg-[#C6FF00] py-3 relative overflow-hidden">
        <TickerTrack items={[...TICKER_1].reverse()} reverse speed="animate-marquee-slow" />
      </div>
    </section>
  );
}
