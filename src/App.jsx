import Hero from './components/Hero';
import Sections from './components/Sections';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] font-inter text-white">
      {/* Hero with Spline background */}
      <Hero />

      {/* Main sections: Lead form, Categories, Features, Partners, Newsletter */}
      <Sections />

      {/* Reviews carousel */}
      <Reviews />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919000000000?text=Hi%20Spare%20Orbit%2C%20Need%20immediate%20assistance%20finding%20a%20spare%20part."
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#25D366]/30 transition hover:translate-y-[-1px] hover:shadow-xl"
      >
        <MessageCircle className="h-4 w-4" />
        Need immediate assistance? Click here to chat
      </a>
    </div>
  );
}

export default App;
