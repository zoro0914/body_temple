import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";

const reviews = [
  {
    quote: "“The atmosphere is unreal. Every session feels like a private performance. The coaching is scientifically rigorous, and the recovery suite is absolute state-of-the-art.”",
    author: "Christian Kane",
    role: "Competitive Lifter",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "“This is the first gym that feels intentional, sharp, and deeply motivating. The recovery suite alone (saunas and contrast plunges) is worth the membership twice over.”",
    author: "Serena Thorne",
    role: "Marathon Athlete",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "“The coaches don't just count reps; they analyze alignment, energy pathways, and bio-metrics. I fully rebuilt my shoulder stability and baseline power here.”",
    author: "Marcus Sterling",
    role: "Founder / Entrepreneur",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeReview = reviews[activeIndex];

  return (
    <section id="testimonials" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <SectionHeading eyebrow="Testimonials" title="What the Strongest Say" />
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-16 shadow-2xl shadow-black/70 flex flex-col items-center">
          
          {/* Quote Icon watermark */}
          <div className="absolute top-10 left-10 font-anton text-9xl text-white/[0.02] select-none leading-none pointer-events-none">
            “
          </div>

          <div className="w-full relative min-h-[250px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center max-w-3xl"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-[#E63946]">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xl sm:text-2xl font-light text-white/90 leading-relaxed italic mb-8 px-4">
                  {activeReview.quote}
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={activeReview.image}
                    alt={activeReview.author}
                    className="h-14 w-14 rounded-full object-cover border border-[#E63946]/30 shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-anton text-lg uppercase tracking-wider text-white">
                      {activeReview.author}
                    </h4>
                    <span className="text-xs uppercase tracking-widest text-[#E63946] font-medium">
                      {activeReview.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-10 z-20">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-105"
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft size={16} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-[#E63946]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-105"
              aria-label="Next Testimonial"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
