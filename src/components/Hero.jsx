import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const hero1 = useSelector((state) => state.images.localImages.hero1);

  const slides = useMemo(() => [
    {
      id: 1,
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description: "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
      image: hero1,
    },
    {
      id: 2,
      title: "LIMITED EDITION",
      subtitle: "WINTER 2020",
      description: "Discover unique winter pieces now.",
      button: "EXPLORE",
      bgColor: "bg-indigo-600",
    },
  ], [hero1]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 200000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
  <div
    key={slide.id}
    className={`w-full min-w-full h-[600px] flex items-center justify-between px-6 md:px-24 ${slide.bgColor || ""} text-white`}
    style={
      idx === 0 && slide.image
        ? {
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }
        : {}
    }
          >
            {/* Sol içerik */}
            <div className="!space-y-4 !max-w-lg !p-6 !rounded-xl !m-30">
      <p className="text-sm !font-semibold !tracking-wide !uppercase">{slide.subtitle}</p>
      <h2 className="text-4xl !md:text-5xl !font-extrabold">{slide.title}</h2>
      <p className="!text-lg">{slide.description}</p>
      <button className="!bg-green-500 !text-white !font-bold !py-2 !px-6 !rounded !hover:bg-green-600 !transition">
        {slide.button}
      </button>
    </div>

            {/* Sağ görsel veya placeholder */}
            {idx !== 0 && slide.image ? (
      <img
        src={slide.image}
        alt={slide.title}
        className="hidden md:block object-cover rounded-xl shadow"
      />
    ) : idx !== 0 ? (
      <div className="hidden md:block rounded-xl bg-white/20 border-2 border-dashed border-white m-auto"></div>
    ) : null}
          </div>
        ))}
      </div>

      {/* Oklar */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Slide göstergeleri */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
