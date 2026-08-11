import { motion } from "framer-motion";

function ProgramCard({ title, description, icon }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:border-[#E63946]/40 transition-colors duration-300 relative overflow-hidden group"
    >
      {/* Glow highlight */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#E63946]/5 rounded-full blur-2xl group-hover:bg-[#E63946]/15 transition-all duration-500" />
      
      {/* Icon Container */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.02] border border-white/10 text-xl text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <h3 className="font-anton text-2xl uppercase tracking-wider text-white">{title}</h3>
      <p className="mt-4 text-sm text-white/70 leading-relaxed">{description}</p>
      
      {/* CTA overlay link detail */}
      <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E63946] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span>Explore Plan</span>
        <span>→</span>
      </div>
    </motion.article>
  );
}

export default ProgramCard;
