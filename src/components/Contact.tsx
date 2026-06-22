import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Map, Send, CheckCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: '',
    weightNeeded: 'Es Kristal',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const address = 'Purbalingga wetan, Purbalingga, Jawa Tengah';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', business: '', message: '', weightNeeded: 'Es Kristal' });
    }, 4000);
  };

  const handleOpenMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Purbalingga wetan Purbalingga')}`, '_blank');
  };

  const handleWhatsApp = () => {
    const text = `Halo Admin Avis, perkenalkan nama saya ${formData.name} dari ${formData.business || 'pribadi'}. Saya membutuhkan produk *${formData.weightNeeded}*. Mohon informasikan ketersediaan serta jadwal pengiriman ke lokasi kami di Purbalingga. Terima kasih!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6289637051171?text=${encoded}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur atmosphere inside */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-cyan-600 uppercase bg-cyan-100/60 px-3.5 py-1.5 rounded-full inline-block">
            KONTAK & LOKASI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Hubungi Customer Service Kami
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Butuh berkonsultasi mengenai pengiriman terjadwal harian? Tim support kami yang ramah siap melayani seluruh pertanyaan dan pesanan Anda secara responsif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Info & Interactive Form */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Direct Info List cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3.5">
                <div className="p-2.5 bg-cyan-50 text-cyan-650 rounded-xl inline-block">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-950 text-sm">Jam Operasional</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Setiap Hari: 09:00 - 19:00 <br/>
                    (Termasuk Libur Nasional)
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3.5">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl inline-block">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-950 text-sm">Hubungi Langsung</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    WhatsApp: 0896-3705-1171
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Consultation Form with Interactive messaging validation */}
            <div className="p-6 sm:p-8 bg-sky-50/50 rounded-3xl border border-sky-100 text-slate-800 space-y-6">
              <div className="space-y-1.5">
                <h3 className="font-display font-black text-slate-950 text-base sm:text-lg">
                  Kirim Pertanyaan Cepat
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Isi data Anda dan kirim pesanan khusus secara otomatis ter-formatting ke admin WhatsApp instan.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nama Anda:</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all"
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nama Usaha/Mitra:</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all"
                      placeholder="Contoh: Cafe Senja Baru"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Produk Yang Dibutuhkan:</label>
                    <select
                      className="w-full bg-white border border-slate-200 rounded-xl px-4.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-cyan-400 transition-all"
                      value={formData.weightNeeded}
                      onChange={(e) => setFormData({ ...formData, weightNeeded: e.target.value })}
                    >
                      <option value="Es Kristal">Es Kristal</option>
                      <option value="Es Kiloan">Es Kiloan</option>
                      <option value="Es Serut">Es Serut</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Kirim lewat media apa?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        disabled={!formData.name}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-3 text-[11px] font-black tracking-wide text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl cursor-pointer shadow-sm transition-all"
                      >
                        <MessageSquare className="h-3.5 w-3.5" /> Kirim WhatsApp
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pesan/Catatan Tambahan:</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4.5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-cyan-400 transition-all"
                    placeholder="Contoh: Butuh pasokan es batu ruting dikirim jam 6 pagi setiap hari..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-900 active:scale-95 text-white font-black text-xs rounded-xl shadow-md cursor-pointer transition-all"
                  >
                    <Send className="h-4 w-4" /> Kirim Formulir Minta Penawaran
                  </button>
                </div>
              </form>

              {/* Toast response simulating safe submit */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Pertanyaan berhasil disimulasikan! Kami menyarankan Anda mengeklik tombol "Kirim WhatsApp" untuk respons balik tercepat secara real-time.</span>
                </motion.div>
              )}
            </div>

          </div>

          {/* Column 2: Maps & Interactive Address Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Address Block */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-left space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-xl shadow-sm shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-slate-900 text-base">Alamat Pusat Distribusi</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-850 cursor-pointer shadow-sm transition-all"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  {copied ? 'Tersalin' : 'Salin Alamat'}
                </button>
                <button
                  onClick={handleOpenMaps}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black rounded-xl text-xs cursor-pointer shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all"
                >
                  <Map className="h-4 w-4" /> Buka Google Maps
                </button>
              </div>
            </div>

            {/* Custom Interactive Google Map Placeholder Card (Extremely Stylish!) */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-cyan-50 flex items-center justify-center p-3 group">
              {/* Fake Map Grid Drawing */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-cyan-50 z-0">
                {/* Simulated Roads Grid Lines */}
                <div className="absolute inset-x-0 h-1 bg-white top-1/4 origin-center rotate-6"></div>
                <div className="absolute inset-x-0 h-2.5 bg-amber-100/40 top-1/2 -rotate-12"></div>
                <div className="absolute inset-y-0 w-2 bg-white left-1/3 origin-center -rotate-45"></div>
                <div className="absolute inset-y-0 w-1.5 bg-slate-200 left-2/3 rotate-12"></div>
                <div className="absolute top-1/3 left-1/4 w-32 h-20 rounded-full bg-emerald-150/40 blur-md"></div> {/* Fake Park */}
                <div className="absolute bottom-1/4 right-1/4 w-40 h-28 rounded-full bg-blue-150/30 blur-md"></div> {/* Fake River */}
              </div>

              {/* Fake Map Elements on top of grid */}
              <div className="relative z-10 text-center space-y-4">
                {/* Red Pin Anchor */}
                <div className="relative inline-block">
                  <div className="h-10 w-10 text-rose-500 animate-bounce flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 fill-rose-500 text-rose-600 stroke-[2]" />
                  </div>
                  <div className="h-3 w-8 bg-black/15 rounded-full blur-sm mx-auto -mt-1 scale-[0.7]"></div>
                  
                  {/* Floating interactive tooltip card */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white border border-slate-800 rounded-2xl p-3.5 shadow-2xl text-left w-52 space-y-1 cursor-pointer" onClick={handleOpenMaps}>
                    <p className="text-[10px] text-cyan-400 font-extrabold tracking-widest uppercase">Pusat Distribusi</p>
                    <h5 className="font-display font-black text-sm">Avis Ice Co.</h5>
                    <p className="text-[10px] text-slate-300 font-medium">Buka Hari Ini, Tutup jam 19:00</p>
                    <p className="text-[9px] text-cyan-200 hover:underline font-bold pt-1 flex items-center gap-1 justify-between">
                      Dapatkan Rute Arah <Map className="h-3 w-3" />
                    </p>
                  </div>
                </div>

                {/* Satellite Switcher and Controls */}
                <div className="absolute top-2 right-2 bg-white border border-slate-200 rounded-xl p-1 flex gap-1 shadow-md text-[10px] font-black tracking-wide text-slate-700">
                  <span className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded-lg">Peta</span>
                  <span className="px-2 py-1 hover:bg-slate-50 rounded-lg cursor-pointer" onClick={handleOpenMaps}>Satelit</span>
                </div>

                <div className="absolute bottom-2 left-2 bg-white/95 border border-slate-250 backdrop-blur-sm rounded-xl p-2 text-[10px] font-bold text-slate-800 flex items-center gap-2 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Lokasi Pengiriman Ideal (Radius 5KM Bergaransi)
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
