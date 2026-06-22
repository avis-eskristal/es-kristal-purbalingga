import { motion } from 'motion/react';
import { Snowflake, ArrowRight, ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      {/* Absolute Decorative Blobs / Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-cyan-300/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-indigo-200/25 blur-3xl animate-pulse-slow"></div>
        
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e90a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e90a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs sm:text-sm font-bold tracking-wide self-center lg:self-start shadow-sm"
            >
              <Snowflake className="h-4 w-4 text-cyan-500 animate-spin-slow" />
              <span>SUPPLIER ES BATU KRISTAL PURBALINGGA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight"
            >
              Es Batu Kristal <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Higienis</span> & Berkualitas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Menyediakan es batu kristal bersih, bening, higienis, dan tahan lama. Melayani pengiriman cepat khusus untuk wilayah Purbalingga dan sekitarnya untuk kebutuhan usaha kuliner, cafe, restoran, catering, pernikahan maupun pribadi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={() => scrollTo('produk')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
              >
                Pesan Sekarang
                <ArrowRight className="h-5 w-5 font-bold group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('kontak')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl font-bold border-2 border-slate-200/80 hover:border-slate-300 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                Hubungi Kami
              </button>
            </motion.div>

            {/* Floating Ratings / Stats bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-6 border-t border-slate-200/60 mt-4 flex-wrap"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-700">
                      {['☕', '🍹', '🍧', '🥤'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Mitra Cafe Terpercaya</p>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold text-slate-800">100% Food Grade</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Air RO Tersterilisasi</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Preview Column (3D-like Mock-up/Image Frame) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-4 glass-panel shadow-2xl overflow-hidden border border-white/60 group"
            >
              {/* Product Card Inside */}
              <div className="absolute inset-0 z-0 select-none">
                <img
                  src="https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=800&q=80"
                  alt="Es batu kristal bening higienis"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/10"></div>
              </div>

              {/* Floating badges */}
              <div className="relative z-10 h-full flex flex-col justify-between text-white p-4">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center gap-2">
                    <div className="p-1.5 bg-cyan-400 rounded-lg text-slate-950">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-extrabold tracking-widest text-cyan-200">DELIVERY SPEED</p>
                      <p className="text-xs font-bold">Express Antar Dingin</p>
                    </div>
                  </div>

                  <span className="bg-cyan-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Benar-benar Padat
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 bg-cyan-400/20 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-cyan-200 border border-cyan-400/30">
                    <Award className="h-3.5 w-3.5 text-cyan-400" />
                    Standardisasi Lab Kemenkes
                  </div>
                  <h3 className="font-display text-2xl font-black leading-tight tracking-tight">
                    Avis Ice <br />
                    <span className="text-cyan-400 text-lg sm:text-xl font-bold">Sensasi Dingin Sempurna</span>
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Diproduksi dengan penyaringan multimedia, karbon aktif, cartridge mikro, Reverse Osmosis, dan disterilkan dengan sinar UV ultra modern.
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs font-bold text-cyan-100">
                    <span className="flex items-center gap-1">
                      ❄️ Tanpa Kimia
                    </span>
                    <span className="flex items-center gap-1">
                      ❄️ Bentuk Tube Konsisten
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Accents Removed */}
          </div>

        </div>
      </div>
    </section>
  );
}
