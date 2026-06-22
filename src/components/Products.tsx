import { ShoppingBag, Snowflake, Sparkles } from 'lucide-react';
import { Product } from '../types';

export default function Products() {
  const products: Product[] = [
    {
      id: 'es-kristal',
      name: 'Es Kristal',
      weight: 'Kemasan 5kg & 10kg',
      price: 15000,
      description: 'Es kristal tube/silinder premium yang bening, padat, lambat cair, dan 100% higienis. Sangat cocok untuk cafe, restoran, coffee shop, atau kebutuhan pesta.',
      image: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=500&q=80',
      category: 'retail',
      tag: 'Best Seller',
    },
    {
      id: 'es-kiloan',
      name: 'Es Kiloan',
      weight: 'Per Kilogram',
      price: 3000,
      description: 'Es batu kristal higienis berkualitas tinggi yang dijual eceran per kilogram. Pilihan paling hemat dan fleksibel untuk pedagang minuman gerobak dan UMKM kuliner harian.',
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=500&q=80',
      category: 'retail',
      tag: 'Paling Hemat',
    },
    {
      id: 'es-serut',
      name: 'Es Serut',
      weight: 'Kemasan Khusus',
      price: 8000,
      description: 'Es serut halus bertekstur salju lembut yang steril dan higienis. Sangat pas untuk menu es campur, es teler, bingsu, jus buah, atau hidangan penutup lainnya.',
      image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=80',
      category: 'retail',
      tag: 'Tekstur Lembut',
    },
  ];

  const handleOrderWhatsApp = (productName: string, price: number) => {
    const formatNumber = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
    const message = `Halo Admin Avis, saya ingin memesan produk:\n\n*${productName}*\nHarga: ${formatNumber(price)}\n\nApakah bisa dikirim hari ini ke wilayah Purbalingga? Terima kasih.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6289637051171?text=${encoded}`, '_blank');
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
            DAFTAR PRODUK KAMI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Pilihan Es Batu Kristal Premium
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Menyediakan es batu kristal berkualitas tinggi, bersih, dan higienis untuk menyegarkan setiap sajian minuman Anda. Melayani pengantaran cepat khusus untuk wilayah Purbalingga dan sekitarnya.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const formattedPrice = new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0
            }).format(product.price);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full relative"
              >
                {/* Floating Tags */}
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md inline-flex items-center gap-1">
                    <Sparkles className="h-3 w-3 animate-pulse" /> {product.tag}
                  </span>
                )}

                {/* Thumbnail */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 border border-white px-2.5 py-1 rounded-xl text-xs font-black">
                    {product.weight}
                  </div>
                </div>

                {/* Body Info */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-slate-950 text-base leading-tight group-hover:text-cyan-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5 mb-3.5 flex-wrap">
                      <span className="font-display font-extrabold text-lg sm:text-xl text-slate-950 leading-none">
                        {formattedPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderWhatsApp(product.name, product.price)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 bg-sky-50 text-cyan-700 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white rounded-2xl text-xs font-extrabold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <ShoppingBag className="h-4 w-4" /> Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
