import { Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0D0D0D] px-6 pb-10 pt-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">Spare Orbit</h4>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#B0B0B0]">
              Spare Orbit is your trusted online marketplace for genuine automobile spare parts, connecting customers and dealers across India.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-[#F5F5F5]">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-[#B0B0B0]">
              <li><a href="#" className="transition hover:text-white">Home</a></li>
              <li><a href="#lead-form" className="transition hover:text-white">Shop</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
              <li><a href="#" className="transition hover:text-white">Terms</a></li>
              <li><a href="#" className="transition hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-[#F5F5F5]">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-[#B0B0B0]">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@spareorbit.com</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="WhatsApp" href="https://wa.me/919000000000" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10"><MessageCircle className="h-4 w-4" /></a>
              <a aria-label="Instagram" href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#B0B0B0]">
          © 2025 Spare Orbit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
