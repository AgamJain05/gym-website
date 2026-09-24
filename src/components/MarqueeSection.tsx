'use client';

const TOP_TICKER = [
  'TRAIN HARD',
  'STAY STRONG',
  'NEVER QUIT',
  'PUSH YOUR LIMITS',
  'BUILT NOT BOUGHT',
  'NO EXCUSES',
  'SHARK MENTALITY',
  'EARN IT',
];

const BOTTOM_TICKER = [
  'STRENGTH',
  'DISCIPLINE',
  'TRANSFORMATION',
  'ENERGY',
  'COMMUNITY',
  'RESULTS',
  'CONSISTENCY',
  'POWER',
];

function TickerContent({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  /*
   * Two identical groups.
   * The animation moves exactly one group width.
   */
  return (
    <div
      className={`ticker-track ${reverse ? 'ticker-track-reverse' : ''
        }`}
    >
      {[0, 1].map((group) => (
        <div
          key={group}
          className="ticker-group"
        >
          {items.map((item, index) => (
            <div
              key={`${group}-${index}`}
              className="ticker-item"
            >
              <span className="ticker-text">
                {item}
              </span>

              <span className="ticker-slash">
                /
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      id="marquee"
      className="
        relative
        z-10
        h-[220px]
        sm:h-[240px]
        md:h-[260px]
        overflow-hidden
        bg-[#030303]
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              #030303 0%,
              transparent 25%,
              transparent 75%,
              #030303 100%
            )
          `,
        }}
      />

      {/* subtle horizontal technical line */}
      <div
        className="
          absolute
          left-0
          right-0
          top-1/2
          h-px
          bg-[#C6FF00]/10
        "
      />

      {/* =====================================================
          BACK TAPE
      ====================================================== */}

      <div
        className="
          absolute
          left-[-25%]
          right-[-25%]
          top-1/2
          z-10
          -translate-y-1/2
          rotate-[5deg]
        "
      >
        <div
          className="
            relative
            w-full
            overflow-hidden
            bg-[#B4E900]
            border-y
            border-black/10
            py-3
            sm:py-4
            md:py-[18px]
            shadow-[0_12px_35px_rgba(0,0,0,0.35)]
          "
        >
          <TickerContent items={TOP_TICKER} />
        </div>
      </div>

      {/* =====================================================
          FRONT TAPE
      ====================================================== */}

      <div
        className="
          absolute
          left-[-25%]
          right-[-25%]
          top-1/2
          z-20
          -translate-y-1/2
          -rotate-[5deg]
        "
      >
        <div
          className="
            relative
            w-full
            overflow-hidden
            bg-[#C6FF00]
            border-y
            border-black/15
            py-3
            sm:py-4
            md:py-[18px]
            shadow-[0_15px_40px_rgba(0,0,0,0.45)]
          "
        >
          <TickerContent
            items={BOTTOM_TICKER}
            reverse
          />
        </div>
      </div>

      {/* =====================================================
          TOP FADE
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-16
          z-30
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(to bottom, #030303, transparent)',
        }}
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          h-16
          z-30
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(to top, #030303, transparent)',
        }}
      />

      {/* =====================================================
          TECHNICAL LABEL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          z-40
          hidden
          md:flex
          items-center
          gap-3
          whitespace-nowrap
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/20
        "
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
        }}
      >
        <span className="w-7 h-px bg-[#C6FF00]/30" />

        THE SHARK FITNESS
        <span className="text-[#C6FF00]/50">
          /
        </span>
        INDORE

        <span className="w-7 h-px bg-[#C6FF00]/30" />
      </div>
    </section>
  );
}