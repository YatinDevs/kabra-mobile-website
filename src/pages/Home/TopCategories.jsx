import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type1, type3, type4, type5, type6, type7 } from "../../assets";

const TopCategories = () => {
  const topCategories = [
    {
      id: 1,
      name: "Silk Sarees",
      image: type7,
      count: "300+",
      link: "/silk-sarees",
      description: "Luxurious silk sarees",
    },
    {
      id: 2,
      name: "Designer Lehengas",
      image: type1,
      count: "200+",
      link: "/designer-lehengas",
      description: "Contemporary lehengas",
    },
    {
      id: 3,
      name: "Kanjeevaram",
      image: type4,
      count: "150+",
      link: "/kanjeevaram",
      description: "Traditional Kanchipuram",
    },
    {
      id: 4,
      name: "Paithani Sarees",
      image: type5,
      count: "120+",
      link: "/paithani",
      description: "Authentic Paithani",
    },
    {
      id: 5,
      name: "Wedding Sarees",
      image: type3,
      count: "180+",
      link: "/wedding-sarees",
      description: "Opulent wedding sarees",
    },
    {
      id: 6,
      name: "Party Wear",
      image: type6,
      count: "250+",
      link: "/party-wear",
      description: "Glamorous outfits",
    },
  ];

  return (
    <section className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
            Top Categories
          </h2>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our most popular collections
          </p>
        </motion.div>

        {/* Mobile View - 3 columns, images only with overlay CTA */}
        <div className="lg:hidden grid grid-cols-3 gap-3 md:gap-4">
          {topCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <a href={category.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Transparent CTA Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-medium whitespace-nowrap">
                        Explore
                      </span>
                    </div>
                  </div>

                  {/* Category Name - Always visible */}
                  <div className="absolute bottom-2 left-0 right-0 px-2">
                    <h3 className="text-white text-xs font-semibold text-center line-clamp-1">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Full Grid with content */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {topCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <a
                href={category.link}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-amber-200 h-full"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                      <span className="text-amber-700 font-bold text-sm">
                        {category.count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-amber-600 font-medium text-base group-hover:text-amber-700 transition-colors">
                      Explore Collection
                    </span>
                    <div className="w-10 h-10 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-amber-700" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/categories"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
          >
            View All Categories
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCategories;
