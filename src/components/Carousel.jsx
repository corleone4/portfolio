import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    
      <div className="relative w-full max-w-8xl mx-auto overflow-hidden h-[70vh]">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center hover:scale-95 transition-transform duration-500 ${current === index ? "scale-100" : "scale-90 opacity-50"
                }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full max-w-4xl h-[70vh] object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Setas */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          &#10095;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    
  );
}
