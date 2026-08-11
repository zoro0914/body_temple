import { useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaEnvelope, FaPaperPlane } from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 px-6 py-20 lg:px-12 relative overflow-hidden">
      
      {/* Background decoration grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(230,57,70,0.03),_transparent_35%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Top footer row */}
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2 mb-16">
          
          {/* Logo & Brand statement */}
          <div>
            <span className="font-anton text-2xl uppercase tracking-wider text-white">
              BODY<span className="text-[#E63946]">TEMPLE</span>
            </span>
            <p className="mt-6 text-sm text-white/55 leading-relaxed">
              We engineer luxury training environments for elite athletes and performance-focused individuals. No excuses, only progression.
            </p>
            <div className="mt-6 flex gap-4 text-white/60">
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition hover:bg-[#E63946] hover:text-white hover:scale-105">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition hover:bg-[#E63946] hover:text-white hover:scale-105">
                <FaXTwitter size={14} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition hover:bg-[#E63946] hover:text-white hover:scale-105">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-anton text-sm uppercase tracking-[0.2em] text-white">
              Sitemap
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-widest text-white/55">
              <a href="#" className="hover:text-white transition-colors py-1">Home</a>
              <a href="#stats" className="hover:text-white transition-colors py-1">Stats</a>
              <a href="#about" className="hover:text-white transition-colors py-1">About</a>
              <a href="#why-choose-us" className="hover:text-white transition-colors py-1">Why Us</a>
              <a href="#programs" className="hover:text-white transition-colors py-1">Programs</a>
              <a href="#trainers" className="hover:text-white transition-colors py-1">Trainers</a>
              <a href="#tour" className="hover:text-white transition-colors py-1">Tour</a>
              <a href="#transformations" className="hover:text-white transition-colors py-1">Results</a>
              <a href="#membership" className="hover:text-white transition-colors py-1">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors py-1">FAQ</a>
            </div>
          </div>

          {/* Staff Hours */}
          <div className="flex flex-col gap-4 text-xs uppercase tracking-widest text-white/55">
            <h4 className="font-anton text-sm uppercase tracking-[0.2em] text-white">
              Studio Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Weekdays</span>
                <span className="text-white font-medium">6:00AM - 10:00PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Weekends</span>
                <span className="text-white font-medium">8:00AM - 8:00PM</span>
              </li>
              <li className="flex justify-between text-[#E63946] font-semibold">
                <span>Members Door access</span>
                <span>24/7 Access</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col gap-4">
            <h4 className="font-anton text-sm uppercase tracking-[0.2em] text-white">
              Weekly Forge newsletter
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Get training program releases, custom macro advice, and priority studio scheduling events directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-xs text-white focus:outline-none focus:border-[#E63946] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 h-8 w-8 rounded-lg bg-[#E63946] text-white flex items-center justify-center transition hover:bg-white hover:text-black"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={10} />
              </button>
            </form>
            {subscribed && (
              <span className="text-[0.65rem] text-[#E63946] font-semibold uppercase tracking-wider block animate-pulse">
                Successfully Subscribed! Look for our email.
              </span>
            )}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-xs text-white/40 uppercase tracking-widest gap-4">
          <div>
            © {new Date().getFullYear()} BODY TEMPLE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Membership Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
