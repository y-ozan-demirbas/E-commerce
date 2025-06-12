import ProductCard from "./ProductCard";

export default function JoinUs() {
  return (
    <section className="flex flex-col md:flex-row w-full px-4 py-10 gap-10 md:gap-40 max-w-screen-xl mx-auto">
      
      {/* Sol Görsel Alanı (Sadece Çerçeve) */}
      <div className="w-full md:w-1/2 h-64 md:h-[700px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
        <span className="text-gray-400 text-sm italic">Image Placeholder</span>
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
        {/* Başlıklar */}
        <p className="text-sm font-medium text-gray-500">SUMMER 2020</p>
        <h2 className="text-3xl font-extrabold text-gray-800 leading-tight">
          Part of the Neural<br />Universe
        </h2>
        <p className="text-gray-500 max-w-md">
          We know how large object will act, but things on a small scale.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition">
            BUY NOW
          </button>
          <button className="bg-white text-green-500 border border-green-500 font-bold py-2 px-6 rounded hover:bg-green-600 hover:text-white transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
