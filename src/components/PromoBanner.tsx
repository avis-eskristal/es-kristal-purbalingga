import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight, Truck } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600 text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-between overflow-hidden shadow-inner font-medium text-center z-50"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_100%)] animate-pulse-slow"></div>
        <div className="flex items-center gap-2 mx-auto justify-center flex-wrap">
          <span className="inline-flex items-center gap-1 bg-white/20 text-white rounded-full px-2.5 py-0.5 font-bold tracking-wide shadow-sm backdrop-blur-md animate-bounce text-[10px] sm:text-xs">
            <Sparkles className="h-3 w-3" /> PROMO BULAN INI
          </span>
          <span className="text-blue-50">
            Melayani pengiriman cepat es batu kristal higienis khusus wilayah Purbalingga dan sekitarnya!
          </span>
          <a
            href="#produk"
            className="inline-flex items-center gap-1 text-white hover:text-cyan-150 underline underline-offset-4 font-bold transition-all ml-1"
          >
            Lihat Paket <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 p-1 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
          aria-label="Tutup banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
