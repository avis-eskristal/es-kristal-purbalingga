import { Snowflake, MapPin, Phone, Clock, ShieldAlert, BadgeInfo } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-medium py-16 sm:py-20 relative overflow-hidden border-t border-slate-900">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.03)_0%,transparent_80%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleScrollTo('home')}>
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl">
                <Snowflake className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-wide">
                  AVIS <span className="text-cyan-400">ICE</span>
                </span>
                <p className="text-[10px] -mt-1 tracking-widest font-semibold uppercase text-cyan-300">
                  Premium Crystal Ice
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold max-w-sm">
              Penyedia es batu kristal higienis, steril, bebas bakteri dan terpercaya. Kami siap menyuplai kebutuhan es kristal harian bagi cafe, kafe, restoran, catering, pernikahan dan pesta Anda dengan pengiriman cepat radius 5km.
            </p>

            {/* Social handles */}
            <div className="flex gap-3 pt-2">
              {['Instagram', 'Facebook', 'TikTok', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="https://wa.me/6289637051171"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs text-slate-350 hover:text-white rounded-xl transition-all font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-black text-white text-sm tracking-widest uppercase">
              Pinto Cepat
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold text-slate-400">
              <button onClick={() => handleScrollTo('home')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Beranda Utama
              </button>
              <button onClick={() => handleScrollTo('tentang')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Tentang Usaha
              </button>
              <button onClick={() => handleScrollTo('produk')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Daftar Produk
              </button>
              <button onClick={() => handleScrollTo('keunggulan')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Keunggulan Es
              </button>
              <button onClick={() => handleScrollTo('galeri')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Dokumentasi Galeri
              </button>
              <button onClick={() => handleScrollTo('testimoni')} className="hover:text-cyan-400 text-left cursor-pointer transition-colors">
                Testimoni Pengusaha
              </button>
            </div>
          </div>

          {/* Core contact details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display font-black text-white text-sm tracking-widest uppercase">
              Hubungi Head Office
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-semibold">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed text-xs">
                  Purbalingga wetan, Purbalingga, Jawa Tengah
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400 text-xs">
                  WhatsApp: 0896-3705-1171
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <Clock className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400 text-xs text-cyan-300">
                  Operasional: Setiap Hari (09:00 - 19:00)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright notice */}
        <div className="pt-8 border-t border-slate-900 text-center space-y-4 text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
          <div className="flex items-center justify-center gap-1 text-slate-400 text-xs">
            <BadgeInfo className="h-4 w-4 text-cyan-400" />
            <span>Keterangan Legalitas: Air baku diuji lab secara berkala untuk memenuhi standar kelayakan Permenkes.</span>
          </div>
          <p>
            &copy; {currentYear} AVIS ICE. Seluruh Hak Cipta Dilindungi Undang-Undang. <br/>
            Dibuat secara profesional untuk mempromosikan UMKM Es Batu Kristal Higienis Premium Indonesia.
          </p>
        </div>

      </div>
    </footer>
  );
}
