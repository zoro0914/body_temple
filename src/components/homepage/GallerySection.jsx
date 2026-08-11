import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaExpand } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    category: "strength",
    alt: "Powerlifter preparing on dynamic platform",
  },
  {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    category: "strength",
    alt: "Focused athlete pulling dynamic heavy weights",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    category: "cardio",
    alt: "Active running blocks conditioning session",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    category: "strength",
    alt: "Intense core hypertrophy workout",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    category: "recovery",
    alt: "Infrared heat recovery sauna room",
  },
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1200&q=80",
    category: "cardio",
    alt: "Rowing speed conditioning rows",
  },
];

const categories = [
  { id: "all", label: "All Facilities" },
  { id: "strength", label: "Strength Arena" },
  { id: "cardio", label: "Cardio Deck" },
  { id: "recovery", label: "Recovery Lounge" },
];

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading eyebrow="Gallery" title="Facilities In Action" />
          
          {/* Filters List */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-white text-black border-white"
                    : "border-white/5 bg-white/[0.01] text-white/50 hover:text-white hover:border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] aspect-video relative group cursor-pointer shadow-lg shadow-black/40"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Screen */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="h-12 w-12 rounded-full bg-[#E63946] text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <FaExpand size={16} />
                  </div>
                </div>

                {/* Info tags */}
                <div className="absolute bottom-4 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform pointer-events-none">
                  <span className="text-[0.6rem] uppercase tracking-widest text-[#E63946] font-bold block mb-1">
                    Category: {item.category}
                  </span>
                  <p className="text-xs text-white/80 font-medium">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Lightbox Overlay */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-md"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition hover:bg-[#E63946] hover:border-[#E63946] z-50"
                onClick={() => setLightboxImage(null)}
                aria-label="Close image preview"
              >
                <FaXmark size={20} />
              </button>

              {/* Large Image Frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl"
                />
                
                {/* Description under lightbox image */}
                <div className="text-center mt-6 text-sm text-white/70 uppercase tracking-widest max-w-xl">
                  {lightboxImage.alt}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default GallerySection;
