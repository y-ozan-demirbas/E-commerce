export default function EditorsPick() {
  return (
    <section className="py-16 px-4 md:px-20 text-center">
      {/* Başlık */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">EDITOR’S PICK</h2>
      <p className="text-gray-500 mb-10">Problems trying to resolve the conflict between</p>

      {/* Grid alanı */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-auto max-w-7xl rounded-sm">
        {/* Sol büyük kutu */}
        <div className="relative h-[700px] md:col-span-2 bg-gray-200 flex items-end justify-center">
          <button className="mb-4 px-6 py-2 bg-white text-black font-semibold">MEN</button>
        </div>

        {/* Orta kutu */}
        <div className="relative h-[700px] bg-gray-200 flex items-end justify-center">
          <button className="mb-4 px-6 py-2 bg-white text-black font-semibold">WOMEN</button>
        </div>

        {/* Sağ iki küçük kutu */}
        <div className="flex flex-col gap-4">
          <div className="relative h-[342px] bg-gray-200 flex items-end justify-center">
            <button className="mb-4 px-4 py-2 bg-white text-black font-semibold">ACCESSORIES</button>
          </div>
          <div className="relative h-[342px] bg-gray-200 flex items-end justify-center">
            <button className="mb-4 px-6 py-2 bg-white text-black font-semibold">KIDS</button>
          </div>
        </div>
      </div>
    </section>
  );
}
// Bu bileşen, "Editor’s Pick" bölümünü oluşturur.