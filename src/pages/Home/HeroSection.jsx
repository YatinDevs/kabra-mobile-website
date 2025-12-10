import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { kabra1, kabra3, kabra5, kabra8, kabra12, kabra17 } from "../../assets";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Designer Sarees",
      mobileTitle: "Designer Sarees",
      description: "Contemporary designs for modern women",
      mobileDescription: "Contemporary designs",
      image: kabra1,
      link: "/designer-sarees",
      category: "Sarees",
      gradient: "from-amber-800/0 to-amber-600/50",
    },
    {
      id: 2,
      title: "Luxurious Silk Sarees",
      mobileTitle: "Silk Sarees",
      description: "Pure silk with intricate zari work",
      mobileDescription: "Pure silk collection",
      image: kabra3,
      link: "/silk-sarees",
      category: "Silk",
      gradient: "from-purple-800/0 to-pink-700/50",
    },
    {
      id: 3,
      title: "Bridal Collection",
      mobileTitle: "Bridal Wear",
      description: "Opulent wedding wear",
      mobileDescription: "Wedding collections",
      image: kabra5,
      link: "/bridal-collection",
      category: "Bridal",
      gradient: "from-rose-800/0 to-pink-700/50",
    },
    {
      id: 4,
      title: "Authentic Paithani",
      mobileTitle: "Paithani",
      description: "Traditional Maharashtrian sarees",
      mobileDescription: "Traditional sarees",
      image: kabra8,
      link: "/paithani-sarees",
      category: "Traditional",
      gradient: "from-emerald-800/0 to-teal-700/50",
    },
    {
      id: 5,
      title: "Designer Lehengas",
      mobileTitle: "Lehengas",
      description: "Trendy for weddings & parties",
      mobileDescription: "Party wear",
      image: kabra12,
      link: "/lehengas",
      category: "Lehengas",
      gradient: "from-amber-800/0 to-orange-700/50",
    },
    {
      id: 6,
      title: "Party Wear Collection",
      mobileTitle: "Party Wear",
      description: "Glamorous evening outfits",
      mobileDescription: "Evening outfits",
      image: kabra17,
      link: "/party-wear",
      category: "Party",
      gradient: "from-violet-800/0 to-purple-700/50",
    },
  ];

  // Auto slide hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].gradient}`}
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-8 flex items-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          className="text-white max-w-xs sm:max-w-sm md:max-w-xl"
        >
          {/* Category Badge */}
          <span className="ml-8 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4 border border-white/20">
            {heroSlides[currentSlide].category}
          </span>

          {/* Title */}
          <h1 className="ml-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
            <span className="md:hidden">
              {heroSlides[currentSlide].mobileTitle}
            </span>
            <span className="hidden md:inline">
              {heroSlides[currentSlide].title}
            </span>
          </h1>

          {/* Description */}
          <p className="ml-8 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90 leading-relaxed">
            <span className="md:hidden">
              {heroSlides[currentSlide].mobileDescription}
            </span>
            <span className="hidden md:inline">
              {heroSlides[currentSlide].description}
            </span>
          </p>

          {/* CTA Button */}
          <motion.a
            href={heroSlides[currentSlide].link}
            className="ml-8 inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-white text-amber-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 text-sm sm:text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
            <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Slide Indicators - Mobile */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8 h-1.5 sm:h-2"
                : "bg-white/50 w-2 sm:w-3 h-1.5 sm:h-2 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop */}
      <div className="hidden md:block">
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>

      {/* Navigation Arrows - Mobile (Smaller) */}
      <div className="md:hidden">
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-1.5 rounded-full backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-1.5 rounded-full backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Decorative Elements - Desktop only */}
      <div className="absolute top-4 right-4 hidden lg:block">
        <div className="flex items-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-4 bg-white/40 rounded-full"
              animate={{ height: ["1rem", "1.5rem", "1rem"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
