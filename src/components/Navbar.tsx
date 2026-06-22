import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Snowflake, Phone, Clock, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'tentang', 'produk', 'keunggulan', 'galeri', 'testimoni', 'kontak'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'produk', label: 'Daftar Produk' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Hubungi Kami' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset navbar height
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/85 backdrop-blur-md shadow-lg border-b border-cyan-500/20 py-3 text-white'
          : 'bg-transparent py-5 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleScrollTo('home')}
          >
            <div className="relative p-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-md group-hover:rotate-12 transition-transform duration-300">
              <Snowflake className="h-6 w-6 text-white" />
              <div className="absolute -inset-0.5 bg-cyan-400 rounded-xl blur-sm opacity-30 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <span className={`font-display font-extrabold text-lg sm:text-xl tracking-wide ${scrolled ? 'text-white' : 'text-slate-900'}`}>
                AVIS <span className="text-cyan-600 font-black">ICE</span>
              </span>
              <p className={`text-[9px] -mt-1 tracking-widest font-semibold uppercase ${scrolled ? 'text-cyan-300' : 'text-slate-500'}`}>
                Premium Crystal Ice
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-cyan-300 bg-cyan-500/10'
                      : 'text-cyan-600 bg-cyan-50'
                    : scrolled
                    ? 'text-slate-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-cyan-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Nav Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleScrollTo('kontak')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-sm font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/45 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                scrolled 
                  ? 'border-white/10 hover:bg-white/5 text-white' 
                  : 'border-slate-200 hover:bg-slate-100 text-slate-800'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-t mt-3 overflow-hidden ${
              scrolled ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100'
            }`}
          >
            <div className="px-4 py-4 space-y-1.5 shadow-inner">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === item.id
                      ? scrolled
                        ? 'bg-cyan-500/20 text-cyan-300 border-l-4 border-cyan-400'
                        : 'bg-cyan-50 text-cyan-600 border-l-4 border-cyan-500'
                      : scrolled
                      ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <Snowflake className={`h-4 w-4 opacity-0 transition-opacity ${activeSection === item.id ? 'opacity-100 text-cyan-500' : ''}`} />
                </button>
              ))}
              <div className="pt-4 border-t border-dashed border-slate-200 dark:border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 text-xs font-semibold text-slate-400">
                  <Clock className="h-3.5 w-3.5" /> Jam Operasional: 09:00 - 19:00
                </div>
                <button
                  onClick={() => handleScrollTo('kontak')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold shadow-lg"
                >
                  <Phone className="h-4 w-4" /> Hubungi Kami
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
