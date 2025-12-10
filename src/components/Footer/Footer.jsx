import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = React.useState(null);

  const categories = [
    "Designer Sarees",
    "Silk Sarees",
    "Bridal Collection",
    "Paithani Sarees",
    "Lehengas",
    "Party Wear",
    "Kanjeevaram",
    "Cotton Sarees",
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-10 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Kabra Emporium
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Nashik's premier destination for exquisite sarees and traditional
              wear since 1984.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <span className="text-amber-400 mr-2 text-xs">›</span>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Collections
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <span className="text-amber-400 mr-2 text-xs">›</span>
                  <Link
                    to={`/collections/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  className="text-amber-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="leading-tight">
                  PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
                  COLONY, NASHIK - 422002
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-amber-400" size={16} />
                <a
                  href="mailto:connect@kabraemporium.com"
                  className="hover:text-white transition-colors"
                >
                  connect@kabraemporium.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-amber-400 mt-1" size={16} />
                <div className="space-y-1">
                  <a
                    href="tel:+919890533709"
                    className="hover:text-white transition-colors block"
                  >
                    +91 98905 33709
                  </a>
                  <a
                    href="tel:+919763404340"
                    className="hover:text-white transition-colors block"
                  >
                    +91 97634 04340
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="text-amber-400" size={16} />
                <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {/* About Section - Always visible on mobile */}
          <div className="pb-4 border-b border-gray-800">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-amber-400">
                Kabra Emporium
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    aria-label={label}
                    className="bg-amber-700 hover:bg-amber-600 p-1.5 rounded-full text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nashik's premier destination for exquisite sarees and traditional
              wear since 1984.
            </p>
          </div>

          {/* Quick Links Accordion */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection("quickLinks")}
              className="w-full flex justify-between items-center py-3"
            >
              <span className="text-base font-semibold text-amber-400">
                Quick Links
              </span>
              {openSection === "quickLinks" ? (
                <ChevronUp className="text-gray-400" size={20} />
              ) : (
                <ChevronDown className="text-gray-400" size={20} />
              )}
            </button>
            {openSection === "quickLinks" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-4"
              >
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center py-1.5"
                      >
                        <span className="text-amber-400 mr-2 text-xs">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Categories Accordion */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection("categories")}
              className="w-full flex justify-between items-center py-3"
            >
              <span className="text-base font-semibold text-amber-400">
                Collections
              </span>
              {openSection === "categories" ? (
                <ChevronUp className="text-gray-400" size={20} />
              ) : (
                <ChevronDown className="text-gray-400" size={20} />
              )}
            </button>
            {openSection === "categories" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-4"
              >
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/collections/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center py-1.5"
                      >
                        <span className="text-amber-400 mr-2 text-xs">›</span>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Contact Accordion */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex justify-between items-center py-3"
            >
              <span className="text-base font-semibold text-amber-400">
                Contact Us
              </span>
              {openSection === "contact" ? (
                <ChevronUp className="text-gray-400" size={20} />
              ) : (
                <ChevronDown className="text-gray-400" size={20} />
              )}
            </button>
            {openSection === "contact" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-4"
              >
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="text-amber-400 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span className="leading-tight">
                      PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
                      COLONY, NASHIK - 422002
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-amber-400" size={16} />
                    <a
                      href="mailto:connect@kabraemporium.com"
                      className="hover:text-white transition-colors"
                    >
                      connect@kabraemporium.com
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="text-amber-400 mt-1" size={16} />
                    <div className="space-y-1">
                      <a
                        href="tel:+919890533709"
                        className="hover:text-white transition-colors block"
                      >
                        +91 98905 33709
                      </a>
                      <a
                        href="tel:+919763404340"
                        className="hover:text-white transition-colors block"
                      >
                        +91 97634 04340
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="text-amber-400" size={16} />
                    <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          {/* Mobile Social Links */}
          <div className="lg:hidden flex justify-center space-x-4 mb-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">Kabra Emporium</span>.
              All Rights Reserved
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <Link
                to="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <Link
                to="/terms"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600 hidden sm:inline">|</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
