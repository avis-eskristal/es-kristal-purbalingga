import { motion } from 'motion/react';
import { ShieldCheck, Snowflake, Cpu, Receipt, Users, Truck, Sparkles } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      title: '100% Higienis & Steril',
      desc: 'Diproses dari air suling Reverse Osmosis (RO) murni dan disterilisasi sinar UV ganda untuk membunuh 99.9% patogen merugikan.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-50',
      border: 'hover:border-emerald-250',
    },
    {
      id: 2,
      title: 'Bening & Lambat Cair',
      desc: 'Melalui pembekuan konsisten suhu sub-nol ekstrim, menghasilkan bentuk kristal sangat padat yang solid dan memperlambat pencairan.',
      icon: Snowflake,
      color: 'text-cyan-500 bg-cyan-50',
      border: 'hover:border-cyan-250',
    },
    {
      id: 3,
      title: 'Teknologi Steril Otomatis',
      desc: 'Seluruh es dicetak otomatis oleh mesin food-grade steril. Higienitas terjamin tanpa tersentuh tangan manusia sama sekali.',
      icon: Cpu,
      color: 'text-blue-500 bg-blue-50',
      border: 'hover:border-blue-250',
    },
    {
      id: 4,
      title: 'Harga Ekonomis Bersaing',
      desc: 'Biaya hemat untuk mendukung profit margin usaha Anda. Dapatkan tambahan diskon grosir menarik untuk langganan rutin bulanan.',
      icon: Receipt,
      color: 'text-amber-500 bg-amber-50',
      border: 'hover:border-amber-250',
    },
    {
      id: 5,
      title: 'Mitra Utama Kafe & Resto',
      desc: 'Menjadi rantai pasok terpercaya puluhan UMKM dan restoran ternama. Siap mensponsori sarana freezer pembeku khusus mitra kami.',
      icon: Users,
      color: 'text-indigo-500 bg-indigo-50',
      border: 'hover:border-indigo-250',
    },
    {
      id: 6,
      title: 'Pengiriman Kilat Bergaransi',
      desc: 'Kurir khusus sigap meluncur mengendarai motor box berinsulasi termal tinggi. Es dijamin beku utuh 100% tiba di lokasi Anda.',
      icon: Truck,
      color: 'text-sky-500 bg-sky-50',
      border: 'hover:border-sky-250',
    },
  ];

  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
            MENGAPA PILIH AVIS ICE?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Keunggulan Es Kristal Premium Kami
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Kami mengintegrasikan teknologi pemurni air terdepan dan komitmen armada kirim handal demi menjamin kualitas konsumsi es tersteril di kelasnya.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                key={item.id}
                className={`p-7 rounded-3xl bg-slate-50 border border-slate-100/80 text-left transition-all duration-300 shadow-sm ${item.border} flex flex-col justify-between group cursor-default`}
              >
                <div className="space-y-4">
                  <div className={`p-3.5 rounded-2xl inline-flex justify-center items-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-black text-slate-950 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs text-cyan-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="h-3.5 w-3.5" /> Jaminan Kualitas No. 1
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Micro-Banner Quote inside section */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-950 text-sm sm:text-base">
              Ragu dengan keamanan es balok biasa di luar sana?
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Es balok balikan pinggir jalan umum umumnya dilarang diminum langsung menurut audit BPOM karena terindikasi mengandung cemaran es mentah. Upgrade ke es kristal tube modern sekarang juga!
            </p>
          </div>
          <a
            href="#produk"
            className="px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-extrabold tracking-wide shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Pesan Es Higienis
          </a>
        </div>

      </div>
    </section>
  );
}
