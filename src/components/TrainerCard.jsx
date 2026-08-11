import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function TrainerCard({ name, role, image }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40 aspect-[3/4] group"
    >
      {/* Background Image with Zoom on Hover */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E63946]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Social links (shown on hover) */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-110"
        >
          <FaInstagram size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-110"
        >
          <FaXTwitter size={14} />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md transition hover:bg-[#E63946] hover:border-[#E63946] hover:scale-110"
        >
          <FaLinkedinIn size={14} />
        </a>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-0 inset-x-0 p-8 z-10 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[#E63946] font-semibold mb-2">
          Body Temple Certified Coach
        </span>
        <h3 className="font-anton text-2xl uppercase tracking-wider text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {role}
        </p>

        {/* Small bio text that fades in */}
        <p className="mt-4 text-xs text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          Specializing in periodized hypertrophy, dynamic physical conditioning, and high-performance recovery pathways.
        </p>
      </div>
    </motion.article>
  );
}

export default TrainerCard;
