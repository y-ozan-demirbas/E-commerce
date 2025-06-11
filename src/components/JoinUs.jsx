import ProductCard from "./ProductCard";

export default function JoinUs() {
  return (
    <section className="flex w-full px-4 py-10 gap-40 ml-30 p-30 max-w-full">
      
      {/* Sol Görsel Alanı (Sadece Çerçeve) */}
      <div className="w-1/2 h-[700px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
        <span className="text-gray-400 text-sm italic">Image Placeholder</span>
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="w-1/2 flex flex-col justify-center gap-4">
        {/* Başlıklar */}
        <p className="text-sm font-medium text-gray-500 mb-2">SUMMER 2020</p>
        <h2 className="text-3xl font-extrabold text-gray-800 leading-tight mb-2">
          Part of the Neural<br />Universe
        </h2>
        <p className="text-gray-500 mb-4 max-w-md ">
          We know how large object will act, but things on a small scale.
        </p>
        <div className="flex flex-row gap-6 w-full flex-wrap">
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition">
        BUY NOW
      </button>
      <button className="bg-white text-green-500 border border-green-500 font-bold py-2 px-6 rounded hover:bg-green-600 transition">
        READ MORE
      </button>
      </div>
      </div>
    </section>
  );
}