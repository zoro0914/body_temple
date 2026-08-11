import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";


const transformations = [
  {
    id: 1,
    name: "Rohan Sharma",
    stats: { weight: "-2.4 kg", fat: "-6.2%", muscle: "+3.8 kg" },
    program: "90-Day Back Sculpt & Conditioning",
    description: "Rohan achieved dramatic lat width and upper-back definition through progressive pull training and structured recomposition coaching.",
    beforeImage: t5,
    afterImage: t4,
  },
  {
    id: 2,
    name: "Jeff seid",
    stats: { weight: "+4.8 kg", fat: "-3.5%", muscle: "+5.2 kg" },
    program: "12-Week Lean Bulking & Shredding",
    description: "Vikram focused on building dense muscle volume. Guided sports science programming allowed him to sculpt a fuller chest, shoulders, and defined abs.",
    beforeImage: t2,
    afterImage: t3,
  }
];

function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Reset slider position on slide change
  useEffect(() => {
    setSliderPosition(50);
  }, [currentIndex]);

  // Update container width on mount, resize, and slide transition
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };

    // Run initial update
    updateWidth();

    // Set a tiny timeout to ensure DOM has fully settled after any slide changes
    const timer = setTimeout(updateWidth, 100);

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="transformations" className="reveal relative py-28 px-6 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="TRANSFORMATIONS"
            title="Real Results, Forged in Grit"
          />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Drag the slider to see the physical evolution of our members after completing their 90-day custom strength and nutrition blocks.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-black/40 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-2xl select-none">
          <div className="grid gap-8 lg:grid-cols-12 items-center">

            {/* Left Column: Interactive Comparison (Before/After Slider) */}
            <div className="lg:col-span-7 w-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-black/60">
                <div
                  ref={containerRef}
                  className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                >
                  {/* Background / After Image */}
                  <img
                    src={transformations[currentIndex].afterImage}
                    alt={`${transformations[currentIndex].name} After`}
                    className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  />
                  <div className="absolute right-4 bottom-4 z-10 rounded-lg bg-[#E63946] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-md">
                    AFTER / DAY 90
                  </div>

                  {/* Foreground / Before Image */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={transformations[currentIndex].beforeImage}
                      alt={`${transformations[currentIndex].name} Before`}
                      className="absolute inset-0 h-full object-cover max-w-none pointer-events-none"
                      style={{ width: containerWidth || "100%" }}
                    />
                    <div className="absolute left-4 bottom-4 z-10 rounded-lg bg-black/70 border border-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/70 shadow-md">
                      BEFORE / DAY 01
                    </div>
                  </div>

                  {/* Draggable Vertical Splitter Line */}
                  <div
                    className="absolute inset-y-0 w-1 bg-white hover:bg-[#E63946] cursor-ew-resize z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Circular Handle */}
                    <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-[#E63946] text-white flex items-center justify-center shadow-lg pointer-events-auto hover:scale-105 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-4 h-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          transform="rotate(90 12 12)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drag Hint */}
              <div className="text-center mt-4 text-[0.65rem] text-white/40 uppercase tracking-widest animate-pulse">
                ◄ Drag center handle to compare ►
              </div>
            </div>

            {/* Right Column: Transformer Details & Carousel Navigation */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6">

              {/* Animated Text Content (Smooth switch between members) */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col space-y-4"
                  >
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[#E63946] font-bold block mb-2">
                        {transformations[currentIndex].program}
                      </span>
                      <h3 className="font-anton text-4xl uppercase tracking-wide text-white mb-4">
                        {transformations[currentIndex].name}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed min-h-[80px]">
                        {transformations[currentIndex].description}
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 border-y border-white/5 py-6 my-2">
                      <div className="text-center border-r border-white/5">
                        <span className="block text-[0.65rem] uppercase tracking-wider text-white/40 mb-1">
                          Weight
                        </span>
                        <span className="font-anton text-xl text-[#E63946] tracking-wide">
                          {transformations[currentIndex].stats.weight}
                        </span>
                      </div>
                      <div className="text-center border-r border-white/5">
                        <span className="block text-[0.65rem] uppercase tracking-wider text-white/40 mb-1">
                          Body Fat
                        </span>
                        <span className="font-anton text-xl text-white tracking-wide">
                          {transformations[currentIndex].stats.fat}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="block text-[0.65rem] uppercase tracking-wider text-white/40 mb-1">
                          Muscle Mass
                        </span>
                        <span className="font-anton text-xl text-white tracking-wide">
                          {transformations[currentIndex].stats.muscle}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls (Bullets & Arrows) */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                {/* Bullets */}
                <div className="flex gap-2">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? "w-6 bg-[#E63946]" : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E63946] hover:border-[#E63946] transition-all duration-300"
                    aria-label="Previous Transformation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E63946] hover:border-[#E63946] transition-all duration-300"
                    aria-label="Next Transformation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Transformations;
