import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

function MembershipCard({ name, price, period, description, features = [], isPopular }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`w-full max-w-sm mx-auto rounded-[1.8rem] border p-6 md:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between ${
        isPopular
          ? "border-[#E63946] bg-gradient-to-b from-[#E63946]/12 to-[#090909] shadow-[#E63946]/5"
          : "border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#E63946] text-white text-[0.6rem] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-bl-2xl shadow-md">
          Most Popular
        </div>
      )}

      {/* Plan Header */}
      <div>
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50 block mb-2">
          Membership Tier
        </span>
        <h3 className="font-anton text-2xl uppercase tracking-wider text-white">
          {name}
        </h3>
        <p className="mt-2 text-xs text-white/60 leading-relaxed">
          {description}
        </p>

        {/* Pricing */}
        <div className="mt-5 mb-5 flex items-baseline gap-1.5">
          <span className="font-anton text-4xl text-white tracking-wide">
            {price}
          </span>
          <span className="text-xs uppercase tracking-widest text-white/40 font-medium">
            / {period}
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-3 border-t border-white/5 pt-6 mb-6">
          {features.map((feat, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-white/80">
              <span className="mt-0.5 inline-flex items-center justify-center h-4 w-4 shrink-0 rounded-full bg-[#E63946]/10 text-[#E63946]">
                <FaCheck size={9} />
              </span>
              <span className="leading-tight">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <a
        href="#contact"
        className={`w-full text-center inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
          isPopular
            ? "bg-white text-black hover:bg-[#E63946] hover:text-white"
            : "bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black"
        }`}
      >
        <span>Forge Membership</span>
        <FaArrowRight size={10} />
      </a>
    </motion.article>
  );
}

export default MembershipCard;
