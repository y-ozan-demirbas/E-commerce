export default function WorkWithUs() {
  return (
    <section className="w-full min-h-[600px] pb-12 flex flex-col md:flex-row">
      {/* Sol: Mavi alan ve içerik */}
      <div className="md:basis-3/5 flex-1 bg-[#368fd6] flex items-center justify-center py-16 px-8">
        <div className="max-w-md w-full text-white space-y-6">
          <div className="text-lg font-bold uppercase">WORK WITH US</div>
          <h2 className="text-4xl md:text-5xl font-extrabold">Now Let’s grow Yours</h2>
          <p className="text-base md:text-lg font-medium">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>
          <button className="mt-6 px-10 py-3 border border-white rounded transition font-bold hover:bg-white hover:text-[#368fd6]">
            Button
          </button>
        </div>
      </div>
      {/* Sağ: Görsel */}
      <div className="md:basis-2/5 flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="https://placehold.co/300x600?text=Productİmages"
          alt="Work With Us"
          className="object-cover w-full h-full max-h-[600px]"
        />
      </div>
    </section>
  );
}