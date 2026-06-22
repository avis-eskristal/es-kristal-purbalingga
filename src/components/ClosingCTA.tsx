import { motion } from 'motion/react';
import { Snowflake, MessageCircle, ArrowRight } from 'lucide-react';

export default function ClosingCTA() {
  const handleOrderNow = () => {
    const text = 'Halo Admin Avis, saya tertarik memesan es batu kristal berkualitas tinggi untuk kebutuhan usaha minuman saya. Mohon informasi pricelist langganan selengkapnya. Terima kasih!';
    window.open(`https://wa.me/6289637051171?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white overflow-hidden text-center rounded-t-[3rem] -mt-6 z-10 shadow-2xl">
      {/* Decorative Cold mist and dots */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow"></div>
        
        {/* Subtle geometric particles */}
        <div className="absolute top-10 left-10 text-cyan-400 rotate-12 scale-150 opacity-20"><Snowflake className="h-20 w-20 animate-spin-slow" /></div>
        <div className="absolute bottom-10 right-10 text-blue-300 -rotate-45 scale-125 opacity-15"><Snowflake className="h-16 w-16" /></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-extrabold text-cyan-300 tracking-wider"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
          KUALITAS BEKU SEMPURNA
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Butuh Es Batu Kristal Berkualitas?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed"
          >
            Pesan sekarang untuk jaminan persediaan es segar yang higienis, bersih dan anti-terlambat untuk kelancaran operasional kedai kopi atau warung minuman Anda!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2"
        >
          <button
            onClick={handleOrderNow}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 rounded-2xl font-black text-sm sm:text-base leading-none shadow-xl shadow-cyan-400/20 hover:shadow-cyan-450 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <MessageCircle className="h-5 w-5 fill-current" /> Order Sekarang
            <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <span className="text-xs text-slate-400 font-bold sm:ml-2">
            *Pengiriman cepat terjadwal khusus wilayah Purbalingga
          </span>
        </motion.div>
      </div>
    </section>
  );
}
