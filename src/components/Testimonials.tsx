import { motion } from 'motion/react';
import { Star, MessageSquareCode, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Rian Hermawan',
      role: 'Owner',
      businessName: 'Kopi Senja Utama',
      comment: 'Semenjak beralih menggunakan Avis Ice, komplain pelanggan mengenai rasa kopi susu yang encer drastis berkurang. Es tubular mereka luar biasa padat, membuat es kopi susu gula aren buatan kami segar maksimal lebih lama! Pengantaran pagi buta selalu tepat waktu.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 'test-2',
      name: 'Amelia Putri',
      role: 'Purchasing Manager',
      businessName: 'Boba Bliss Cafe & Resto',
      comment: 'Es batu kristal dari supplier ini benar-benar bening bebas sisa mineral. Hasil lab higienis murninya sangat memberi rasa tenang bagi tim kontrol kualitas makanan kami. Rekomendasi utama bagi pengelola FnB berskala franchise besar!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 'test-3',
      name: 'Chef Gunawan',
      role: 'Head Chef & Owner',
      businessName: 'Ocean Catch Seafood Resto',
      comment: 'Kami menggunakan produk paket langganan grosir es kristal jumbo dari Avis Ice. Esnya kokoh luar biasa untuk display seafood harian agar tetap awet beku sepanjang siang hingga malam. Pelayanan support WhatsApp darurat mereka juga jempolan!',
      rating: 5,
      avatar: '👨‍🍳',
    },
  ];

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-gradient-to-br from-sky-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
            DUKUNGAN MITRA KULINER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Cerita Sukses Pelanggan Kami
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Dengarkan langsung ulasan jujur dari para pemilik kedai kopi, boba, restoran seafood, dan katering yang mengandalkan suplai es batu murni harian kami.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={test.id}
              className="p-8 rounded-3xl bg-white border border-slate-150/80 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative group"
            >
              {/* Quote icon background decoration */}
              <div className="absolute top-6 right-6 text-cyan-500/10 group-hover:text-cyan-500/15 group-hover:rotate-12 transition-all">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Five star rating component */}
                <div className="flex items-center text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Comment body */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Profile card footer */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-4">
                {/* Styled avatar box using emojis/illustrations */}
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 border border-slate-100 flex items-center justify-center text-2xl shadow-sm">
                  {test.avatar}
                </div>

                <div className="text-left leading-tight">
                  <h4 className="font-display font-black text-slate-900 text-sm">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-0.5 uppercase tracking-wide">
                    {test.role} {test.businessName && <span className="text-cyan-600"> @ {test.businessName}</span>}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Micro statistics */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <MessageSquareCode className="h-4 w-4 text-cyan-500" />
            TINGKAT KEPUASAN MITRA AKTIF MENCAPAI <span className="text-cyan-600 font-black">99.4%</span> BERDASIKAN TANGGAPAN SURVEI 2026
          </p>
        </div>

      </div>
    </section>
  );
}
