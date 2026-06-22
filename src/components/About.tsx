import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28 bg-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-square max-w-[450px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-cyan-200 to-slate-200 p-2 border border-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80"
                alt="Air higienis diproses modern"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent"></div>
              
              {/* Overlay Stat Block */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white shadow-xl text-slate-800">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-sm">PROSES STERIL OTOMATIS</h4>
                    <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Mesin & Teknologi Modern</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  Kami menjamin seluruh es batu kristal bebas bau, bebas bakteri, jernih mengkilap, dan memiliki ketahanan cair terbaik.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100/50 px-3.5 py-1.5 rounded-full inline-block">
                TENTANG KAMI
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Komitmen Kami Adalah <br/>
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">Kebersihan & Kepuasan</span> Anda
              </h2>
            </div>

            <p className="text-slate-600 font-medium leading-relaxed">
              <strong>Avis Ice</strong> didirikan atas dasar kepedulian terhadap kualitas minuman dingin yang disajikan oleh pelaku kuliner di Purbalingga. Es batu biasa seringkali terbuat dari air mentah yang mengandung bakteri. Kami hadir memberi solusi es kristal premium yang 100% aman untuk dikonsumsi langsung.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5 items-start">
                <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Air Baku Tersertifikasi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Memenuhi standar kelayakan air minum dari Kemenkes RI.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Bebas Rasa & Bau</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Hasil air RO murni tanpa sisa rasa kimia atau zat kapur.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Bentuk Silinder Solid</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Lebih padat sehingga tidak cepat mengubah rasa minuman.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Layanan Antar Cepat</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Armada delivery profesional untuk wilayah Purbalingga.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
