import { useState, useEffect } from "react";
import { FaArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import gym1 from "../assets/gym1.jpg"
import gym2 from "../assets/gym2.jpg"
const heroVideos = [
  {
    id: 1,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-undergoing-a-rigorous-crossfit-workout-41907-large.mp4",
    posterUrl: gym1,
    label: "Strength & Power",
    tagline: "Body Temple • Luxury Strength Training",
    titleLine1: "FORGE",
    titleLine2: "YOUR",
    titleHighlight: "LEGACY",
    description: "Where raw discipline meets premium performance. High-end training, recovery science, and luxury amenities."
  },
  {
    id: 2,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-gym-41915-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    label: "Athletic Conditioning",
    tagline: "Body Temple • High Performance",
    titleLine1: "BREAK",
    titleLine2: "YOUR",
    titleHighlight: "LIMITS",
    description: "Ignite your potential with elite coaches and periodized athletic programming built to build speed, power, and stamina."
  },
  {
    id: 3,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-box-jumps-in-a-gym-41914-large.mp4",
    posterUrl: gym2,
    label: "High Intensity Cardio",
    tagline: "Body Temple • Metabolic Fitness",
    titleLine1: "SHAPE",
    titleLine2: "YOUR",
    titleHighlight: "FUTURE",
    description: "Recharge your metabolic health, increase cardiovascular endurance, and burn fat inside a supportive, luxury community environment."
  },
];

function HeroSection({ heroRef, cursorPosition }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === heroVideos.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? heroVideos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === heroVideos.length - 1 ? 0 : prev + 1));
  };

  return (
    <header
      ref={heroRef}
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden bg-[#090909]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,57,70,0.25),_transparent_40%),radial-gradient(circle_at_70%_20%,_rgba(255,255,255,0.08),_transparent_30%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(9,9,9,0.2)_0%,_rgba(9,9,9,0.6)_60%,_rgba(9,9,9,1)_100%)] z-10 pointer-events-none" />

      {/* Video Background Carousel Layers (stacked absolutely for GSAP compatibility) */}
      {heroVideos.map((slide, index) => {
        const isActive = index === activeSlide;
        return (
          <div
            key={slide.id}
            data-hero-layer
            className="absolute inset-0 scale-125 bg-cover bg-center transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{
              opacity: isActive ? 0.85 : 0,
              zIndex: isActive ? 5 : 1,
            }}
          >
            <video
              src={slide.videoUrl}
              poster={slide.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}

      {/* Fade elements */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#090909] to-transparent z-10 pointer-events-none" />
      <div data-hero-veil className="absolute inset-0 bg-[#090909] pointer-events-none z-10" style={{ opacity: 0.25 }} />

      {/* Hero content */}
      <div className="relative z-20 flex h-full items-center px-6 lg:px-12 mx-auto max-w-7xl">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-start w-full"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[0.7rem] uppercase tracking-[0.45em] text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#E63946] animate-pulse" />
                {heroVideos[activeSlide].tagline}
              </div>

              <h1 className="font-bebas text-5xl sm:text-8xl lg:text-[5.5rem] uppercase leading-[0.9] sm:leading-[0.8] tracking-tight text-white select-none">
                {heroVideos[activeSlide].titleLine1} <br />
                {heroVideos[activeSlide].titleLine2} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E63946]">
                  {heroVideos[activeSlide].titleHighlight}
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-lg text-white/80 sm:text-xl font-light leading-relaxed min-h-[60px] sm:min-h-[56px]">
                {heroVideos[activeSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#membership"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#090909] transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(230,57,70,0.6)]"
            >
              Explore Memberships
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#E63946]/60 bg-[#E63946]/10 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#E63946] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(230,57,70,0.3)]"
            >
              Book Free Pass
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Carousel Controls & Indicators */}
      <div className="absolute right-6 bottom-24 lg:right-12 z-20 flex flex-col items-end gap-4">
        {/* Navigation buttons */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full border border-white/10 bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-105"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-full border border-white/10 bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-105"
            aria-label="Next Slide"
          >
            <FaChevronRight size={12} />
          </button>
        </div>

        {/* Indicators Dots and label */}
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-[0.55rem] uppercase tracking-[0.2em] text-white/50">
            {heroVideos[activeSlide].label}
          </span>
          <div className="flex gap-1.5">
            {heroVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${idx === activeSlide ? "w-6 bg-[#E63946]" : "w-1.5 bg-white/30"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-xs uppercase tracking-[0.45em] text-white/50"
      >
        <div className="mb-2">Scroll</div>
        <FaArrowDown className="mx-auto animate-bounce text-[#E63946] text-lg" />
      </motion.div>

      {/* Interactive mouse cursor highlight glow */}
      {cursorPosition && (
        <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
          <div
            className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E63946]/8 blur-[40px]"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          />
        </div>
      )}
    </header>
  );
}

export default HeroSection;
