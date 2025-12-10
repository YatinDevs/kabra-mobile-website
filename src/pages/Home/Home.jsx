import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
import {
  kabra1,
  kabra2,
  kabra3,
  kabra4,
  kabra5,
  kabra6,
  kabra7,
  kabra8,
  kabra9,
  kabra10,
  kabra11,
  kabra12,
  kabra13,
  kabra14,
  kabra15,
  kabra16,
  kabra17,
  kabra18,
  kabra19,
  kabra20,
  kabra21,
  kabra22,
  kabra23,
  kabra24,
  kabra25,
  kabra26,
  kabra27,
  kabra28,
  kabra29,
  kabra30,
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  type7,
  type8,
} from "../../assets";
import OcassionSection from "./OcassionSection";
import HeroSection from "./HeroSection";
import TopCategories from "./TopCategories";
import WeddingCollections from "./WeddingCollections";
import InstagramFamousTrends from "./InstagramFamousTrends";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const categoriesRef = useRef(null);
  const occasionsRef = useRef(null);

  // Hero Carousel Data
  const heroSlides = [
    {
      id: 1,
      title: "Designer Sarees Collection",
      description: "Exclusive contemporary designs for the modern woman",
      image: kabra1,
      link: "/designer-sarees",
      category: "Designer Sarees",
    },
    {
      id: 2,
      title: "Luxurious Silk Sarees",
      description: "Pure silk with intricate zari work",
      image: kabra3,
      link: "/silk-sarees",
      category: "Silk Sarees",
    },
    {
      id: 3,
      title: "Bridal Collection",
      description: "Opulent wedding wear for your special day",
      image: kabra5,
      link: "/bridal-collection",
      category: "Bridal",
    },
    {
      id: 4,
      title: "Authentic Paithani",
      description: "Traditional Maharashtrian Paithani sarees",
      image: kabra8,
      link: "/paithani-sarees",
      category: "Paithani",
    },
    {
      id: 5,
      title: "Designer Lehengas",
      description: "Trendy lehengas for weddings and parties",
      image: kabra12,
      link: "/lehengas",
      category: "Lehengas",
    },
    {
      id: 6,
      title: "Party Wear Collection",
      description: "Glamorous outfits for evening events",
      image: kabra17,
      link: "/party-wear",
      category: "Party Wear",
    },
  ];

  // Top Categories Data
  const topCategories = [
    {
      id: 1,
      name: "Silk Sarees",
      image: type7,
      count: "300+",
      link: "/silk-sarees",
    },
    {
      id: 2,
      name: "Designer Lehengas",
      image: type1,
      count: "200+",
      link: "/designer-lehengas",
    },
    {
      id: 3,
      name: "Kanjeevaram",
      image: type4,
      count: "150+",
      link: "/kanjeevaram",
    },
    {
      id: 4,
      name: "Paithani Sarees",
      image: type5,
      count: "120+",
      link: "/paithani",
    },
    {
      id: 5,
      name: "Grand Wedding Sarees",
      image: type3,
      count: "180+",
      link: "/wedding-sarees",
    },
    {
      id: 6,
      name: "Party Wear",
      image: type6,
      count: "250+",
      link: "/party-wear",
    },
  ];

  // Wedding Collections Data
  const weddingCollections = [
    {
      id: 1,
      name: "Bridal Lehenga",
      image: kabra10,
      price: "₹45,000+",
      link: "/bridal-lehenga",
    },
    {
      id: 2,
      name: "Wedding Sarees",
      image: kabra15,
      price: "₹25,000+",
      link: "/wedding-sarees",
    },
    {
      id: 3,
      name: "Groom Sherwani",
      image: kabra20,
      price: "₹35,000+",
      link: "/sherwani",
    },
    {
      id: 4,
      name: "Bride's Reception",
      image: kabra25,
      price: "₹50,000+",
      link: "/reception-wear",
    },
  ];

  // Trending Collections Data
  const trendingCollections = [
    {
      id: 1,
      name: "Banarasi Silk",
      image: kabra14,
      trending: true,
      link: "/banarasi",
    },
    {
      id: 2,
      name: "Contemporary Sarees",
      image: kabra19,
      trending: true,
      link: "/contemporary",
    },
    {
      id: 3,
      name: "Designer Anarkali",
      image: kabra22,
      trending: true,
      link: "/anarkali",
    },
    {
      id: 4,
      name: "Chikankari Kurtis",
      image: kabra27,
      trending: true,
      link: "/chikankari",
    },
  ];

  // Shop by Occasions Data
  const occasions = [
    { id: 1, name: "Wedding", image: kabra2, link: "/occasions/wedding" },
    { id: 2, name: "Engagement", image: kabra7, link: "/occasions/engagement" },
    { id: 3, name: "Reception", image: kabra11, link: "/occasions/reception" },
  ];

  // Auto slide hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Scroll functions for carousels
  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TopCategories />
      <InstagramFamousTrends />
      <WeddingCollections />
      {/* Trending Collections Section */}
      {/* <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-8 bg-purple-600 rounded"></div>
                <span className="text-sm font-semibold text-purple-600">
                  TRENDING NOW
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trending Collections
              </h2>
            </div>
            <a
              href="/trending"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
            >
              View All Trends <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCollections.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <a href={item.link} className="block">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.trending && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        🔥 Trending
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">Shop the trend</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <OcassionSection />
    </div>
  );
};

export default Home;
