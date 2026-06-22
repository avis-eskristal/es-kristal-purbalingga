import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp, X, Sparkles, Snowflake } from 'lucide-react';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Show WA notification bubble after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenWhatsApp = () => {
    const text = 'Halo Admin Avis, saya mengunjungi website Anda dan ingin bertanya tentang pemesanan es batu kristal premium di Purbalingga. Terima kasih!';
    window.open(`https://wa.me/6289637051171?text=${encodeURIComponent(text)}`, '_blank');
    setShowNotification(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end pointer-events-none">
      
      {/* 1. Floating WhatsApp Button & Popup notification */}
      <div className="relative flex flex-col items-end pointer-events-auto">
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              className="absolute bottom-20 right-0 bg-slate-950 text-white p-4.5 rounded-3xl shadow-2xl border border-slate-800 text-left w-[290px]"
            >
              {/* Fake speech bubble tip */}
              <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-slate-950 border-r border-b border-slate-800 rotate-45"></div>

              {/* Close notification banner */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                className="absolute top-2.5 right-2.5 p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Tutup notifikasi"
              >
                <X className="h-3.5 w-3.5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="text-2xl">🧊</span>
                    <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 bg-cyan-400 border-2 border-slate-950 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h5 className="font-display font-black text-xs sm:text-sm">Admin Avis</h5>
                    <p className="text-[9px] text-cyan-400 font-extrabold tracking-widest uppercase flex items-center gap-1">
                      <Snowflake className="h-2.5 w-2.5 animate-spin-slow" /> Online & Fast Response
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                  "Halo Kak! Ada yang bisa kami bantu mengenai pesanan atau pengiriman cepat es batu kristal higienis di wilayah Purbalingga? Chat saya yuk!"
                </p>

                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-black rounded-xl text-center shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-current" /> Hubungi Admin Sekarang
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing main WhatsApp Button with persistent/clear label */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 bg-slate-950/90 border border-slate-800 text-white px-3 py-1.5 rounded-xl shadow-xl font-bold text-[10px] sm:text-xs tracking-wide backdrop-blur-md select-none border-cyan-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            Tanya Admin / Pesan Es
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpenWhatsApp}
            className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-2xl relative cursor-pointer"
            aria-label="Chat WhatsApp"
          >
            {/* Pulsating backdrop rings */}
            <span className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping opacity-75"></span>
            <MessageCircle className="h-6.5 w-6.5 fill-current relative z-10" />

            {/* Mini pulse count online indicator */}
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 border border-white rounded-full flex items-center justify-center text-[7px] font-black text-white">
              1
            </span>
          </motion.button>
        </div>
      </div>

      {/* 2. Scroll Back To Top Button */}
      <div className="pointer-events-auto">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.7 }}
              onClick={handleScrollToTop}
              className="p-3.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-cyan-400 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
