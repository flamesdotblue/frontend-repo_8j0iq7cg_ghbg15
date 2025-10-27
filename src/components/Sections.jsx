import { useMemo, useState } from 'react';
import { ShieldCheck, Truck, IndianRupee, Headphones } from 'lucide-react';

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="w-full bg-[#0D0D0D] px-6 py-16 text-white sm:px-8 md:py-20">
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

const LeadForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ make: '', model: '', year: '', part: '', name: '', contact: '' });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // In a real app, send to backend. For now, simple feedback.
      alert('Thanks! We\'ll get back to you with the best offers for your part.');
      setSubmitting(false);
      setForm({ make: '', model: '', year: '', part: '', name: '', contact: '' });
    }, 900);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#1A1D21]/40 p-6 backdrop-blur sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Find Your Part</h2>
          <p className="mt-1 text-sm text-[#B0B0B0]">Tell us about your vehicle and the part you need. We\'ll connect you to verified dealers.</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="make" value={form.make} onChange={onChange} required placeholder="Vehicle Make (e.g., Maruti)" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <input name="model" value={form.model} onChange={onChange} required placeholder="Model (e.g., Swift)" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <input name="year" value={form.year} onChange={onChange} required placeholder="Year (e.g., 2019)" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <input name="part" value={form.part} onChange={onChange} required placeholder="Part Needed (e.g., Head Light)" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <input name="name" value={form.name} onChange={onChange} required placeholder="Your Name" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <input name="contact" value={form.contact} onChange={onChange} required placeholder="Email or Phone" className="rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]" />
        <div className="sm:col-span-2">
          <button disabled={submitting} className="w-full rounded-md bg-[#FF3C3C] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#FF3C3C]/30 transition hover:bg-[#C62828] disabled:cursor-not-allowed disabled:opacity-70">
            {submitting ? 'Submitting...' : 'Request Quotes'}
          </button>
        </div>
      </form>
    </div>
  );
};

const Categories = () => {
  const items = useMemo(() => [
    { title: 'Head Lights', img: 'https://images.unsplash.com/photo-1586074297106-596f7b5b1bdb?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Shock Absorbers', img: 'https://images.unsplash.com/photo-1604291586468-76b34aedf66a?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Rear View Mirrors', img: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Rear Lights', img: 'https://images.unsplash.com/photo-1530041687812-57d2a90a1f97?q=80&w=1600&auto=format&fit=crop' },
  ], []);

  return (
    <div className="mt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">Popular Categories</h3>
          <p className="mt-1 text-sm text-[#B0B0B0]">Explore our most in-demand spare parts — quality assured, price guaranteed.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1D21]">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-70" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-medium">{it.title}</h4>
              <button className="mt-3 inline-flex items-center rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-0 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C3C]/10 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const feats = [
    { Icon: ShieldCheck, title: 'Verified Dealers', text: 'Only trusted sellers with verified part authenticity.' },
    { Icon: Truck, title: 'Nationwide Delivery', text: 'Fast shipping anywhere in India.' },
    { Icon: IndianRupee, title: 'Affordable Pricing', text: 'Genuine parts at fair market rates.' },
    { Icon: Headphones, title: 'Customer Support', text: '24/7 assistance for orders and queries.' },
  ];
  return (
    <div className="mt-16">
      <h3 className="text-center text-xl font-semibold sm:text-2xl">Why Choose Spare Orbit</h3>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {feats.map(({ Icon, title, text }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-[#1A1D21]/40 p-5 transition hover:translate-y-[-2px] hover:bg-[#2A2E34]/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF3C3C]/15 text-[#FF3C3C]">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-medium">{title}</h4>
            </div>
            <p className="mt-2 text-sm text-[#B0B0B0]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Partners = () => {
  const logos = new Array(6).fill(0).map((_, i) => `Partner ${i + 1}`);
  return (
    <div className="mt-16">
      <h3 className="text-center text-xl font-semibold sm:text-2xl">Trusted By Top Dealers & Workshops</h3>
      <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((label) => (
          <div key={label} className="flex h-16 items-center justify-center rounded-lg border border-white/10 bg-[#1A1D21]/40 grayscale transition hover:grayscale-0">
            <span className="text-xs font-medium text-[#B0B0B0]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 2000);
    setEmail('');
  };
  return (
    <div className="mt-16 rounded-xl border border-white/10 bg-[#1A1D21]/40 p-6 sm:p-8">
      <h3 className="text-lg font-medium sm:text-xl">Stay Updated with Our Latest Offers and Spare Part Arrivals</h3>
      <form onSubmit={submit} className="mt-4 flex flex-col items-start gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full flex-1 rounded-md border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0] focus:border-[#FF3C3C]"
        />
        <button className="w-full rounded-md bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 sm:w-auto">
          {done ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

const Sections = () => {
  return (
    <>
      <SectionWrapper id="lead-form">
        <LeadForm />
        <Categories />
        <Features />
        <Partners />
        <Newsletter />
      </SectionWrapper>
    </>
  );
};

export default Sections;
