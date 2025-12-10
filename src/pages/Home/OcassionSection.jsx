import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { kabra2, kabra7, kabra11, kabra16 } from "../../assets";

const OccasionSection = () => {
  const occasionsRef = useRef(null);

  const occasions = [
    {
      id: 1,
      name: "Haldi Hues",
      description: "Vibrant yellow outfits for Haldi ceremony",
      image: kabra2,
      link: "/occasions/haldi",
      color: "from-yellow-400/20 to-amber-100",
    },
    {
      id: 2,
      name: "Cocktail Parties",
      description: "Elegant evening wear for cocktail events",
      image: kabra7,
      link: "/occasions/cocktail",
      color: "from-purple-400/20 to-pink-100",
    },
    {
      id: 3,
      name: "Sangeet Moments",
      description: "Dazzling dance outfits for Sangeet night",
      image: kabra11,
      link: "/occasions/sangeet",
      color: "from-blue-400/20 to-indigo-100",
    },
    {
      id: 4,
      name: "Reception Looks",
      description: "Grand attire for wedding reception",
      image: kabra16,
      link: "/occasions/reception",
      color: "from-red-400/20 to-rose-100",
    },
  ];

  const scrollCarousel = (direction) => {
    if (occasionsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      occasionsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-4 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-4 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Heading with Montserrat font */}
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase text-amber-900 mb-1 md:mb-4 font-montserrat">
            Shop by Occasions
          </h2>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4 md:mb-6" />

          {/* Description with Nunito Sans font */}
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-nunito-sans">
            Discover perfect outfits tailored for every special moment in your
            journey
          </p>
        </motion.div>

        {/* Desktop Grid View - 1 row, 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              className="shrink-0  snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={occasion.link}
                className="block group relative overflow-hidden rounded-t-full h-[380px] shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative  overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-[380px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${occasion.color} opacity-50`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-center">
                    {occasion.name}
                  </h3>
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-0.5 bg-amber-300"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Grid View - 2 columns, 2 rows */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:hidden">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              className="shrink-0  snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={occasion.link}
                className="block group relative overflow-hidden rounded-t-full h-[200px] md:h-[300px] shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative  overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${occasion.color} opacity-50`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-center">
                    {occasion.name}
                  </h3>
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-0.5 bg-amber-300"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/occasions"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-nunito-sans"
          >
            View All Occasions
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>

        {/* Decorative Elements */}
        <div className="hidden lg:flex justify-center mt-12 md:mt-16 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-amber-300 opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionSection;
