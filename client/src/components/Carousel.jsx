import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-blue-900 group">
      {/* Slides */}
      <div 
        className="flex transition-transform ease-out duration-700 h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
                  {slide.subtitle}
                </p>
                {slide.ctaText && (
                  <Button 
                    onClick={() => navigate(slide.ctaLink)} 
                    className="text-lg px-8 py-3 shadow-lg"
                  >
                    {slide.ctaText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Controls (Arrows) */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
      >
        <ChevronRight size={32} />
      </button>

      {/* Manual Controls (Dots) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;