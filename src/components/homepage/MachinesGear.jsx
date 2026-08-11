import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../SectionHeading";
import chest1 from "../../assets/chest.webp";
const categories = ["All", "Chest & Bench", "Back", "Smith & Squat", "Legs & Plates"];

const gearItems = [
  {
    id: 1,
    name: "Bench Press",
    category: "Chest & Bench",
    brand: "Eleiko / Sweden",
    description: "Competition-grade flat bench with adjustable safety racks and high-friction grip upholstery.",
    specs: ["IPF Approved", "Wear-Resistant Padding", "Knurled Bar Hooks"],
    image: chest1,
  },
  {
    id: 2,
    name: "Incline Chest Press Machine",
    category: "Chest & Bench",
    brand: "Gym80 / Germany",
    description: "Plate-loaded converging incline press targeting upper pectorals with an ergonomic biomechanical seat setup.",
    specs: ["Upper Chest Focus", "Converging Press Path", "Biomechanical Alignment"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Converging Lat Pulldown",
    category: "Back",
    brand: "Gym80 / Germany",
    description: "German-engineered converging handles that match the body's natural pulling path for deep lat isolation.",
    specs: ["Converging Motion", "Independent Pulley Arms", "Custom Knee Anchors"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Iso-Lateral T-Bar Row",
    category: "Back",
    brand: "Hammer Strength",
    description: "Independent chest-supported pulling motion designed to build mid-back thickness and lat detail.",
    specs: ["Iso-Lateral Pulling", "Chest-Supported Pad", "Dual Grip Positions"],
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Linear Smith Machine",
    category: "Smith & Squat",
    brand: "Gym80 / Germany",
    description: "German steel guide rods with linear ball bearings for frictionless squatting and pressing.",
    specs: ["Counter-Balanced Bar", "Frictionless Slides", "12 Lock Positions"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Eleiko Olympic Squat Rack",
    category: "Smith & Squat",
    brand: "Eleiko / Sweden",
    description: "Heavy-duty commercial squat cage equipped with premium magnetic J-cups and drop-safe safety spotter arms.",
    specs: ["Magnetic J-Cups", "Multi-Grip Pullup Bar", "Laser-Cut Steel"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Arsenal Strength Leg Press",
    category: "Legs & Plates",
    brand: "Arsenal Strength",
    description: "Heavy-duty plate-loaded leg press with a massive non-slip footplate and converging safety catch system.",
    specs: ["1000kg Capacity", "Adjustable Seat Angle", "Dual Lockout Levers"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Calibrated Weight Plates",
    category: "Legs & Plates",
    brand: "Eleiko / Sweden",
    description: "IPF-certified competition steel plates calibrated to within 10 grams of weight accuracy for elite lifting.",
    specs: ["IPF Calibrated", "Slim Disc Profile", "Vibrant Color Coding"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  }
];

function MachinesGear() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? gearItems
    : gearItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gear" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading eyebrow="MACHINES & GEAR" title="Precision Engineered Equipment" />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Train with the world's most sophisticated training gear. We host competition-grade rigs, biomechanical lifting units, and advanced bio-tech recovery systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${activeCategory === cat
                  ? "bg-[#E63946] border-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Catalog */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl h-[420px] flex flex-col justify-between"
              >
                {/* Background Image with Hover Zoom & Fade */}
                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Premium overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent z-1" />
                  <div className="absolute inset-0 bg-[#E63946]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
                </div>

                {/* Top Badge (Brand & Category) */}
                <div className="relative z-10 p-6 flex justify-between items-start">
                  <span className="text-[0.6rem] uppercase tracking-[0.25em] bg-black/65 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
                    {item.brand}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.25em] bg-[#E63946] px-3 py-1 rounded-full text-white font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Details Content */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/85 to-transparent pt-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-anton text-2xl uppercase tracking-wider text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Technical Specifications (Fades in on Hover) */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="text-[0.55rem] uppercase tracking-wider bg-white/5 border border-white/10 text-white/80 rounded px-2.5 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default MachinesGear;
