import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
import { kabra10, kabra15, kabra20, kabra25, kabratrend1 } from "../../assets";

const WeddingCollections = () => {
  const carouselRef = useRef(null);

  const weddingCollections = [
    {
      id: 1,
      name: "Bridal Lehenga",
      image: kabratrend1,
      price: "₹45,000+",
      link: "/bridal-lehenga",
      description: "Exquisite bridal lehenga with intricate embroidery",
      rating: 5,
    },
    {
      id: 2,
      name: "Wedding Sarees",
      image: kabratrend1,
      price: "₹25,000+",
      link: "/wedding-sarees",
      description: "Traditional wedding sarees with fine zari work",
      rating: 5,
    },
    {
      id: 3,
      name: "Groom Sherwani",
      image: kabratrend1,
      price: "₹35,000+",
      link: "/sherwani",
      description: "Royal sherwani for the groom's special day",
      rating: 4,
    },
    {
      id: 4,
      name: "Bride's Reception",
      image: kabratrend1,
      price: "₹50,000+",
      link: "/reception-wear",
      description: "Grand reception outfits for the beautiful bride",
      rating: 5,
    },
    {
      id: 5,
      name: "Wedding Jewelry",
      image: kabratrend1,
      price: "₹15,000+",
      link: "/wedding-jewelry",
      description: "Traditional wedding jewelry sets with gemstones",
      rating: 5,
    },
    {
      id: 6,
      name: "Bridal Accessories",
      image: kabratrend1,
      price: "₹8,000+",
      link: "/bridal-accessories",
      description: "Complete bridal accessory sets for perfection",
      rating: 4,
    },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 320;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/80 to-rose-50/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-uppercase text-xl sm:text-3xl md:text-4xl font-bold text-start text-amber-900 mb-3 md:mb-4 leading-tight tracking-wide">
            Wedding Collections
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4 md:mb-6 rounded-full" />
          {/* <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center font-medium">
            Discover perfect ensembles meticulously crafted for your special day
          </p> */}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-2">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollCarousel("left")}
            className="hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 md:p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-2 md:p-3 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 sm:gap-6 md:gap-8 pb-6 px-1"
            style={{ scrollBehavior: "smooth" }}
          >
            {weddingCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="shrink-0 w-[180px] sm:w-[300px] md:w-[320px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={collection.link}
                  className="block bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-amber-100"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-54 sm:h-60 md:h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Wedding Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-md">
                        Wedding
                      </div>
                    </div>
                    {/* Price Tag */}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-2 md:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/wedding-collections"
            className="inline-flex items-center px-7 sm:px-9 py-2 sm:py-3.5 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:from-amber-600 hover:to-rose-600 transition-all duration-300 text-base sm:text-lg"
          >
            Explore Wedding Collections
            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(Math.ceil(weddingCollections.length / 2))].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (carouselRef.current) {
                  const cardWidth = 320;
                  carouselRef.current.scrollTo({
                    left: i * cardWidth * 2,
                    behavior: "smooth",
                  });
                }
              }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400/60 to-rose-400/60 hover:from-amber-500 hover:to-rose-500 transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCollections;
