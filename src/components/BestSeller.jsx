export default function BestSeller() {
  const products = Array(8).fill(null); // Şimdilik 8 adet boş ürün placeholder’ı

  return (
    <section className="py-16 px-4 md:px-20 text-center">
      {/* Başlık */}
      <p className="text-gray-500 text-sm">Featured Products</p>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">BESTSELLER PRODUCTS</h2>
      <p className="text-gray-500 mb-10">Problems trying to resolve the conflict between</p>

      {/* Grid alanı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 m-auto max-w-7xl">
        {products.map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {/* Görsel placeholder */}
            <div className="w-full h-[550px] bg-gray-200 rounded-sm" />

            {/* Ürün bilgisi */}
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>

            {/* Fiyatlar */}
            <div className="space-x-2">
              <span className="text-gray-400 line-through">$16.48</span>
              <span className="text-green-600 font-semibold">$6.48</span>
            </div>

            {/* Renk noktaları */}
            <div className="flex gap-2 justify-center">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-700"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
