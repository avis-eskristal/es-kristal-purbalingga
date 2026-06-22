import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon, Snowflake } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Kristal Es Murni Berkilau',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=800&q=80',
      description: 'Butir es batu kristal tube berkualitas tinggi yang bening murni tanpa serat udara di dalamnya, memberi sensasi dingin dan estetika berkelas.',
    },
    {
      id: 'gal-2',
      title: 'Penyaringan Air Reverse Osmosis',
      category: 'production',
      image: 'https://images.unsplash.com/photo-1534080391025-09795d193153?auto=format&fit=crop&w=800&q=80',
      description: 'Langkah sterilisasi mutakhir menyaring seluruh kandungan air hingga setara farmasi sebelum dibekukan menjadi es kristal.',
    },
    {
      id: 'gal-3',
      title: 'Pengemasan Food Grade Tebal',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1516224484737-18c7ea9a402f?auto=format&fit=crop&w=800&q=80',
      description: 'Plastik PE tebal bersertifikat aman makanan mengunci seluruh kebersihan es kristal agar terjaga dari bakteri sekunder di dalam freezer.',
    },
    {
      id: 'gal-4',
      title: 'Pengiriman Sigap Motor Box',
      category: 'delivery',
      image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
      description: 'Armada pengiriman siap menyuplai kebutuhan kafe harian dengan box khusus penahan dingin tebal berlapis isolator suhu terbaik.',
    },
    {
      id: 'gal-5',
      title: 'Es Tubular Simetris',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80',
      description: 'Bentuk tube silinder es berlubang tengah seragam untuk pencairan lambat yang stabil tanpa merusak konsentrasi sirup minuman gula.',
    },
    {
      id: 'gal-6',
      title: 'Penyajian Mocktail Mewah',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      description: 'Es kristal murni melengkapi kemewahan rasa mojito mint dan mocktail segar di salah satu cafe mitra setia kami.',
    },
  ];

  // Filter items
  const filteredItems = galleryItems;

  const openLightbox = (id: string) => {
    const globalIndex = galleryItems.findIndex(item => item.id === id);
    if (globalIndex !== -1) {
      setSelectedItemIndex(globalIndex);
    }
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const showNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex === 0 ? galleryItems.length - 1 : selectedItemIndex - 1
      );
    }
  };

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background visual elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-400/20 px-3.5 py-1.5 rounded-full inline-block">
            GALERI OPERASIONAL & PRODUK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dokumentasi Kualitas Nyata
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            Meningkatkan kepercayaan Anda melalui keterbukaan proses sterilisasi air murni, sistem pembungkusan higienis, dan ketepatan rantai pengiriman harian kami ke seluruh wilayah Purbalingga.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-slate-700 bg-slate-800 shadow-lg hover:shadow-cyan-500/5 duration-300"
              >
                {/* Thumb Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Cyber-Cold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="space-y-2">
                    <span className="text-[10px] sm:text-xs font-black tracking-widest text-cyan-400 uppercase bg-cyan-400/15 border border-cyan-400/30 px-2.5 py-0.5 rounded-full inline-block">
                      {item.category === 'product' ? 'Produk' : item.category === 'production' ? 'Produksi' : item.category === 'packaging' ? 'Kemasan' : 'Pengiriman'}
                    </span>
                    <h3 className="font-display text-base font-bold text-white flex items-center justify-between gap-2.5">
                      {item.title}
                      <ZoomIn className="h-4.5 w-4.5 text-cyan-400 flex-shrink-0" />
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Non-hover indicator */}
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-950/70 border border-white/10 group-hover:opacity-0 transition-opacity">
                  <ZoomIn className="h-4.5 w-4.5 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Lightbox Popup Modal */}
        <AnimatePresence>
          {selectedItemIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                {/* Close Button top-right */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-950 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Prev Node */}
                <button
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-950 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Next Node */}
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-950 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Content Inside Lightbox */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-7 bg-slate-950 aspect-[4/3] sm:aspect-video md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={galleryItems[selectedItemIndex].image}
                      alt={galleryItems[selectedItemIndex].title}
                      className="w-full h-full object-cover max-h-[75vh]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="md:col-span-5 p-6 flex flex-col justify-between text-left bg-slate-900">
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-cyan-400 bg-cyan-400/15 border border-cyan-400/30 px-3 py-1 rounded-full uppercase">
                          <Snowflake className="h-3 w-3 animate-pulse" /> {galleryItems[selectedItemIndex].category === 'product' ? 'Produk' : galleryItems[selectedItemIndex].category === 'production' ? 'Produksi' : galleryItems[selectedItemIndex].category === 'packaging' ? 'Kemasan' : 'Pengiriman'}
                        </span>
                        <span className="text-slate-500 font-bold text-xs">
                          {selectedItemIndex + 1} dari {galleryItems.length}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-black text-white leading-snug">
                        {galleryItems[selectedItemIndex].title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                        {galleryItems[selectedItemIndex].description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-3.5">
                      <div className="p-2 bg-slate-950 rounded-xl text-cyan-400 border border-slate-800">
                        <ImageIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Sumber Verifikasi</p>
                        <p className="text-xs text-slate-350 font-bold">Produksi Asli Avis Ice</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
