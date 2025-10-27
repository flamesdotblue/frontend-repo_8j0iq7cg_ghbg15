import { useEffect, useMemo, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, meta, text }) => (
  <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#1A1D21]/60 p-6">
    <div>
      <div className="flex items-center gap-2 text-[#FF3C3C]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-sm text-[#F5F5F5]">“{text}”</p>
    </div>
    <div className="mt-6 text-sm">
      <p className="font-medium text-white">{name}</p>
      <p className="text-[#B0B0B0]">{meta}</p>
    </div>
  </div>
);

const Reviews = () => {
  const items = useMemo(
    () => [
      { name: 'Ravi Sharma', meta: 'Delhi — Hyundai i20', text: 'Found genuine parts at great prices. Fast delivery and smooth experience.' },
      { name: 'Priya Nair', meta: 'Kochi — Honda City', text: 'Their support team helped me find the exact part I needed. Highly recommended!' },
      { name: 'Arjun Mehta', meta: 'Mumbai — Maruti Swift', text: 'Verified dealers make this my go-to place for all car parts.' },
      { name: 'Neha Verma', meta: 'Pune — Tata Nexon', text: 'Affordable pricing and quick updates — Spare Orbit truly delivers.' },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  return (
    <section className="w-full bg-[#0D0D0D] px-6 py-16 text-white sm:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-xl font-semibold sm:text-2xl">What Our Customers Say</h3>
        <div className="relative mt-8 overflow-hidden">
          <div
            className="grid grid-cols-1 gap-6 transition-transform duration-700 ease-in-out sm:grid-cols-2 lg:grid-cols-3"
            style={{ transform: `translateX(-${(active % 3) * 33.3333}%)` }}
          >
            {items.concat(items).map((r, idx) => (
              <ReviewCard key={idx} name={r.name} meta={r.meta} text={r.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
