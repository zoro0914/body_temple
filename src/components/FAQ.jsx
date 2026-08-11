import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    q: "What are the hours of operation?",
    a: "Body Temple is open 24/7/365 for all active members. Entry is fully automated via your biometric registry or mobile NFC token. Concierge staff and coaches are on-site daily from 6:00 AM to 10:00 PM.",
  },
  {
    q: "Can I bring a guest to train with me?",
    a: "Yes. Annual Legacy members receive 5 complimentary guest passes each month. For other tiers, guest day-passes can be purchased directly at the concierge desk for $35 per session.",
  },
  {
    q: "Is parking available at the facility?",
    a: "Yes. We provide complimentary, fully-validated multi-level underground parking for up to 3 hours per day for all members. Simply scan your membership code at the exit gate.",
  },
  {
    q: "Are lockers, towels, and grooming amenities provided?",
    a: "Absolutely. We supply chilled eucalyptus towels on the gym floor, and fresh bath sheets in locker suites. Lockers feature digital key locks. Showers are fully stocked with premium organic grooming and hair products.",
  },
  {
    q: "How do I pause or cancel my membership?",
    a: "Members can freeze or terminate billing cycles directly via the Body Temple app, or by emailing concierge@bodytemple.com. We require a 7-day advance notice before your billing date to process freezes. There are zero cancellation fees.",
  },
];

function FAQAccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/5 py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none py-2 group"
      >
        <span className="font-anton text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#E63946] transition-colors">
          {question}
        </span>
        <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:bg-[#E63946]/10 group-hover:text-white transition-all duration-300">
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-3xl pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <SectionHeading eyebrow="FAQ" title="Frequently Answered questions" />
        </div>

        <div className="rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-12 shadow-2xl shadow-black/60">
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
