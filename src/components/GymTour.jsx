import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tourZones = [
  {
    id: "strength",
    name: "01 / Strength Platform",
    title: "The Iron Sanctum",
    desc: "20 custom heavy-lifting racks, Eleiko competitions barbells, and solid rubberized impact platforms engineered for pure power output.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Eleiko Premium Barbells", "Custom Rigs & Dumbbells (up to 150 lbs)", "Solid Impact Absorbing Turf Tracks"],
  },
  {
    id: "recovery",
    name: "02 / Recovery Lounge",
    title: "Bio-Scientific Rest",
    desc: "Dedicated contrast therapy, sub-zero cold plunge pools, infrared heat saunas, and pneumatic active compression devices to optimize recovery.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Infrared Dry-Heat Saunas", "Sub-Zero Cold Plunge Pools", "Biometric Compression Therapy Sleeves"],
  },
  {
    id: "turf",
    name: "03 / The Turf Track",
    title: "Dynamic Conditioning",
    desc: "Dual 30-meter high-friction athletic sled turf lanes, heavy conditioning tires, kettlebells, and dynamic rope anchors.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Dual 30m Athletic Turf Lanes", "Weighted Sleds & Wall-Ball Targets", "Kettlebell Grid (ranging 8kg - 48kg)"],
  },
  {
    id: "cardio",
    name: "04 / Cardio Deck",
    title: "Aerobic Capacity",
    desc: "Smart air-bikes, Concept2 rowing systems, and curved non-motorized woodway treadmills built for metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Concept2 Erg Rowing & Ski Towers", "Assault Air-Bikes (High Output)", "Woodway Curved Manual Treadmills"],
  },
];

function GymTour() {
  const [activeZone, setActiveZone] = useState(tourZones[0]);

  return (
    <section id="tour" className="reveal relative py-28 px-6 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="GYM TOUR"
            title="Explore the Body Temple Facility"
          />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Take a virtual tour through our purpose-built zones, designed to facilitate elite performance, focus, and rehabilitation.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          
          {/* Controls & Copy Panel */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Zone Selector Buttons */}
            <div className="flex flex-col gap-3">
              {tourZones.map((zone) => {
                const isActive = activeZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone)}
                    className={`text-left py-4 px-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "border-[#E63946] bg-[#E63946]/5 text-white"
                        : "border-white/5 bg-white/[0.01] text-white/50 hover:text-white/80 hover:border-white/10"
                    }`}
                  >
                    <span className="font-anton text-lg uppercase tracking-wider">{zone.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="h-2 w-2 rounded-full bg-[#E63946]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Zone Information */}
            <div className="mt-4 p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
              <h3 className="font-anton text-2xl uppercase tracking-wider text-[#E63946] mb-3">
                {activeZone.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {activeZone.desc}
              </p>
              
              {/* Amenities list */}
              <ul className="space-y-3 border-t border-white/5 pt-6">
                {activeZone.amenities.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-xs text-white/80 uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E63946]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Screen Display Panel */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 aspect-[4/3] shadow-2xl shadow-black/80 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={activeZone.image}
                  alt={activeZone.title}
                  className="h-full w-full object-cover"
                />
                
                {/* Glow & Fog overlay on screen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Live Broadcast Badge */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-[#E63946] px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.25em] font-semibold text-white shadow-lg animate-pulse">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Live Preview
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GymTour;
