import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import logo from "../assets/logo1.png";

function About({ storyRef }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="reveal relative px-6 py-28 lg:px-12 bg-[#090909] overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 left-0 w-96 h-20 bg-[#E63946]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-20 bg-[#ffffff]/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Background watermark logo */}
      <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none z-0">
        <img src={logo} className="w-full h-full object-contain filter invert" alt="" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Collage / Image Container */}
          <div
            ref={storyRef}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl shadow-black/80 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=80"
              alt="Athlete training in premium gym setup"
              className="h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay badge with floating text */}
            <div className="absolute bottom-8 left-8 z-20 max-w-xs">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] bg-[#E63946] px-3 py-1 rounded-full text-white font-semibold">
                Est. 2021
              </span>
              <h3 className="mt-3 font-anton text-2xl uppercase tracking-wider text-white">
                BODY TEMPLE WORKOUT MATRIX
              </h3>
              <p className="mt-1 text-xs text-white/70">
                Precision engineering designed to unlock your body's hidden power and endurance potential.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="ABOUT BODY TEMPLE"
              title="Where Raw Grit Meets Luxury Performance"
            />

            <p className="mt-8 text-lg leading-8 text-white/75 font-light">
              Body Temple was founded on a simple truth: fitness should be intentional, uncompromising, and deeply scientific. We built a sanctuary where state-of-the-art sports science interfaces with raw iron.
            </p>


            {/* View More Button */}
            <div className="mt-4 mb-2">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-xs uppercase tracking-widest text-[#E63946] font-bold hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>{showMore ? "View Less" : "View More"}</span>
                <span className={`text-[0.6rem] transform transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
            </div>

            {/* Expandable details content */}
            <motion.div
              initial={false}
              animate={{
                height: showMore ? "auto" : 0,
                opacity: showMore ? 1 : 0,
                marginTop: showMore ? 12 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-base leading-7 text-white/60">
                Whether you are training for competition, recovering from an injury, or rebuilding your daily energy baseline, our coaches design custom progression pathways tailored to your body's unique bio-metrics and mechanics. No clutter, no compromises.
              </p>
            </motion.div>

            {/* List details */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-3">
              <div>
                <h4 className="font-anton text-lg uppercase tracking-wider text-white">
                  01 / HYPER CUSTOM
                </h4>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Every program begins with a full biometric screen and posture alignment analysis.
                </p>
              </div>
              <div>
                <h4 className="font-anton text-lg uppercase tracking-wider text-white">
                  02 / HIGH SCIENCE
                </h4>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Train utilizing top-of-the-line platforms, smart biometric feedback, and professional recovery tools.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#tour"
                className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black hover:border-white"
              >
                Learn About Our Philosophy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
