import { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "strength",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", program: "strength", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Column: Form & Info */}
          <div>
            <SectionHeading eyebrow="Contact" title="Claim Your Free Pass" />
            <p className="mt-6 text-sm text-white/60 leading-relaxed mb-8">
              Fill out the form below to register your information. Our concierge team will reach out within 2 hours to confirm your private physical assessment and tour session.
            </p>

            {/* Quick Contact Details */}
            <div className="grid gap-4 sm:grid-cols-2 mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex gap-3 text-xs text-white/80 uppercase tracking-wider">
                <FaLocationDot className="text-[#E63946] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Location</span>
                  <span className="text-white/60">41 Mercer Avenue, Downtown Core</span>
                </div>
              </div>
              <div className="flex gap-3 text-xs text-white/80 uppercase tracking-wider">
                <FaPhone className="text-[#E63946] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">Phone</span>
                  <span className="text-white/60">+1 (310) 555-0189</span>
                </div>
              </div>
              <div className="flex gap-3 text-xs text-white/80 uppercase tracking-wider">
                <FaEnvelope className="text-[#E63946] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">E-mail</span>
                  <span className="text-white/60">concierge@bodytemple.com</span>
                </div>
              </div>
              <div className="flex gap-3 text-xs text-white/80 uppercase tracking-wider">
                <FaWhatsapp className="text-[#E63946] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">WhatsApp</span>
                  <span className="text-white/60">Chat live with Concierge</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[0.65rem] uppercase tracking-widest text-white/50 mb-2 font-semibold">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[0.65rem] uppercase tracking-widest text-white/50 mb-2 font-semibold">
                    E-mail Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[0.65rem] uppercase tracking-widest text-white/50 mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="program" className="text-[0.65rem] uppercase tracking-widest text-white/50 mb-2 font-semibold">
                    Preferred Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63946] transition-colors appearance-none"
                  >
                    <option value="strength" className="bg-[#090909]">Strength & Conditioning</option>
                    <option value="conditioning" className="bg-[#090909]">High-Intensity Conditioning</option>
                    <option value="crossfit" className="bg-[#090909]">CrossFit & Athletic Blocks</option>
                    <option value="personal" className="bg-[#090909]">1-on-1 Elite Coaching</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[0.65rem] uppercase tracking-widest text-white/50 mb-2 font-semibold">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness history and physical goals"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E63946] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full rounded-xl bg-[#E63946] py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black hover:shadow-lg disabled:bg-white/20 disabled:text-white/40"
              >
                {submitted ? "Claim Confirmed! Check your phone." : "Register for Free Pass"}
              </button>
            </form>
          </div>

          {/* Right Column: Styled Google Map */}
          <div className="relative rounded-[2rem] border border-white/10 overflow-hidden h-[400px] lg:h-auto min-h-[400px] shadow-2xl shadow-black/80">
            {/* Map wrapper applying grayscale filters to match dark layout */}
            <iframe
              title="BODY TEMPLE Gym Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.94026844428095!2d77.93956751982222!3d27.218340840752592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397479004796586d%3A0xd81923c7670b15b3!2sBody%20Temple%20Gym%20And%20Fitness%20Centre!5e0!3m2!1sen!2sin!4v1786454463880!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 filter grayscale invert-[0.92] contrast-[1.25]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            {/* Top red map overlay border block */}
            <div className="absolute inset-0 border-[3px] border-[#E63946]/10 pointer-events-none rounded-[2rem]" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
