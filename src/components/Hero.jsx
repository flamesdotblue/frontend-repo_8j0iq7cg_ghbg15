import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handlePrimaryClick = useCallback(() => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#0D0D0D]" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/80 to-[#0D0D0D]/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-8">
        <div className="max-w-3xl animate-[fadeIn_1s_ease_forwards] opacity-0 [animation-delay:.15s]">
          <span className="inline-block rounded-full bg-[#1A1D21]/70 px-3 py-1 text-xs tracking-wide text-[#B0B0B0] ring-1 ring-white/10">
            Spare Orbit • Genuine Parts Marketplace
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find Genuine Auto Parts at the Best Prices
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#B0B0B0] sm:text-lg">
            Connecting vehicle owners and trusted dealers across India — reliable, affordable, and fast.
          </p>

        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 animate-[fadeInUp_.9s_ease_forwards] opacity-0 [animation-delay:.35s]">
          <button
            onClick={handlePrimaryClick}
            className="group inline-flex items-center gap-2 rounded-md bg-[#FF3C3C] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#FF3C3C]/30 transition hover:bg-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#FF3C3C] focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
          >
            Get Your Spare Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
          >
            Become a Dealer
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Hero;
