'use client';

const TICKER_1 = ['TRAIN HARD', 'STAY STRONG', 'NEVER QUIT', 'PUSH YOUR LIMITS', 'BUILT NOT BOUGHT', 'NO EXCUSES', 'SHARK MENTALITY', 'EARN IT'];
const TICKER_2 = ['STRENGTH', 'DISCIPLINE', 'TRANSFORMATION', 'ENERGY', 'COMMUNITY', 'RESULTS', 'CONSISTENCY', 'POWER'];

function TickerTrack({ items, reverse = false, speed = 'animate-marquee' }: {
  items: string[];
  reverse?: boolean;
  speed?: string;
}) {
  // Replicate the items 6 times. This ensures the total width is massive, 
  // preventing any blank spaces on ultra-wide monitors. 
  // Since the CSS animation translates by -50%, having a longer track
  // also naturally increases the speed of the scroll.
  const extended = Array(6).fill(items).flat();
  return (
    <div className={`flex overflow-hidden ${reverse ? 'flex-row-reverse' : ''}`} aria-hidden="true">
      <div className={`flex shrink-0 gap-0 ${speed} ${reverse ? 'animate-marquee-reverse' : ''}`}>
        {extended.map((item, i) => (
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
    <section id="marquee" className="relative overflow-hidden py-24 md:py-32 z-10 bg-black flex items-center justify-center min-h-[300px]">
      {/* Top diagonal slash - keep it if you want, or just black bg */}
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-[#030303] z-20"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      {/* Container for the overlapping tapes */}
      <div className="relative w-full max-w-[100vw] h-full flex items-center justify-center">
        
        {/* Tape 1 — Tilted Down (Back) */}
        <div 
          className="absolute w-[130%] left-[-15%] bg-[#C6FF00] py-4 md:py-5 shadow-2xl z-10"
          style={{ transform: 'rotate(6deg)' }}
        >
          <TickerTrack items={TICKER_1} speed="animate-marquee" />
        </div>

        {/* Tape 2 — Tilted Up (Front) */}
        <div 
          className="absolute w-[130%] left-[-15%] bg-[#C6FF00] py-4 md:py-5 shadow-2xl z-20"
          style={{ transform: 'rotate(-6deg)' }}
        >
          <TickerTrack items={[...TICKER_1].reverse()} reverse speed="animate-marquee-slow" />
        </div>
      </div>
    </section>
  );
}
