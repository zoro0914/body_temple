import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo1.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tour", href: "#tour" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#090909]/90 border-b border-white/10 backdrop-blur-md py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img src={logo} className="w-auto h-12 md:h-14 transition-transform duration-300 group-hover:scale-105" alt="logo" />
            <span className="font-anton text-2xl md:text-3xl uppercase tracking-wider text-white transition-colors duration-300">
              BODY<span className="text-[#E63946] group-hover:text-white transition-all duration-300">TEMPLE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.2em] font-medium text-white/70 transition-all duration-300 hover:text-white py-1.5 group/link"
              >
                {link.name}
                {/* Underline hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E63946] transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Join Us CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#membership"
              className="rounded-full bg-[#E63946] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
            >
              join us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/90 focus:outline-none transition-colors duration-300 hover:text-[#E63946]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#090909]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between py-12 px-6 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {/* Drawer Header (Logo + Close Button) */}
        <div className="flex justify-between items-center px-4 w-full">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-auto h-11" alt="logo" />
            <span className="font-anton text-3xl uppercase tracking-wider text-white">
              BODY<span className="text-[#E63946]">TEMPLE</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-[#E63946] transition-colors duration-300"
            aria-label="Close menu"
          >
            <FaXmark size={26} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-anton text-3xl sm:text-4xl uppercase tracking-widest text-white transition-colors duration-300 hover:text-[#E63946]"
              style={{
                transitionDelay: `${idx * 50}ms`
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="flex flex-col items-center gap-4 px-4 w-full">
          <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-sm text-center rounded-full bg-[#E63946] py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Forge Membership
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
