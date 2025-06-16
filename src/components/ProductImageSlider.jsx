import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductImageSlider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Ana görsel */}
      <div className="relative w-[600px] h-[400px] overflow-hidden rounded-sm shadow-md">
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Sağ-Sol Oklar */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail'lar */}
      <div className="flex gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-20 object-cover rounded border-2 ${
              currentIndex === index ? "border-blue-500" : "border-gray-300"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}
