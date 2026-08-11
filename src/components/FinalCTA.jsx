import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../assets/logo1.png"

function FinalCTA() {
  return (
    <section className="reveal relative py-25 px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Image Watermark */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Red accent radial light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E63946]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-[#090909] pointer-events-none" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-4xl text-center z-10 flex flex-col items-center">
        <span className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#E63946] font-semibold mb-6 block">
          Forge Your Path
        </span>

        <h2 className="font-anton text-5xl sm:text-7xl lg:text-[4.5rem] uppercase leading-[0.9] text-white max-w-3xl mb-8">
          ARE YOU READY <br className="hidden sm:inline" />
          TO FORGE YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E63946]">
            ULTIMATE SELF?
          </span>
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-white/70 font-light leading-relaxed mb-10">
          Join a community of elite athletes, access state-of-the-art facilities, and take advantage of precision coaching. Your 90-day transformation starts today.
        </p>

        {/* Action Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="#membership"
            className="inline-flex items-center gap-3 rounded-full bg-[#E63946] hover:bg-white text-white hover:text-black font-semibold uppercase tracking-widest px-10 py-5 text-sm transition-all duration-300 shadow-xl shadow-[#E63946]/10 hover:shadow-white/10"
          >
            <span>Claim Your Membership</span>
            <FaArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Accent corner borders */}
      <div className="absolute left-6 bottom-6 lg:left-12 lg:bottom-12 font-anton text-xs text-white/15 tracking-widest uppercase">
        Body Temple Studio
      </div>
      <div className="absolute right-6 bottom-6 lg:right-12 lg:bottom-12 font-anton text-xs text-white/15 tracking-widest uppercase">
        No Excuses • Only Results
      </div>
    </section>
  );
}

export default FinalCTA;
