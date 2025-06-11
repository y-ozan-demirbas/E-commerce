import ProductCard from "./ProductCard";

export default function ProductCards() {
  return (
    <section className="flex w-full px-4 py-10 gap-10 !m-auto !p-10 !max-w-full">
      
      {/* Sol Görsel Alanı (Sadece Çerçeve) */}
      <div className="w-2/5 !h-[780px] !rounded-xl !bg-gray-100 !border !border-dashed !border-gray-300 flex items-center justify-center">
        <span className="text-gray-400 text-sm italic">Image Placeholder</span>
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="w-3/5 flex flex-col items-center justify-center gap-4">
        {/* Başlıklar */}
        <p className="!text-sm !font-medium !text-gray-500 !mb-2">Featured Products</p>
        <h2 className="!text-3xl !font-extrabold !text-gray-800 !leading-tight !mb-2">
          Featured Products
        </h2>
        <p className="!text-gray-500 !mb-4 !max-w-md !text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Kartlar */}
        <div className="flex flex-row gap-6 w-full flex-wrap justify-center">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
