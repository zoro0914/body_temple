import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo1.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tour", href: "#tour" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarState, setNavbarState] = useState("hero"); // "hero" | "scrolled" | "shrunk"
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll states and visibility triggers
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine scrolled & shrunk state thresholds
      if (currentScrollY <= 50) {
        setNavbarState("hero");
      } else if (currentScrollY > 50 && currentScrollY <= 150) {
        setNavbarState("scrolled");
      } else {
        setNavbarState("shrunk");
      }

      // 2. Hide on scroll down past 300px, show on scroll up
      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlight tracking
  useEffect(() => {
    const sectionIds = ["home", "about", "tour", "why-choose-us", "faq", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section occupies the focal area
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback: force highlight home when very close to top
    const handleScrollTop = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScrollTop, { passive: true });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  // Premium smooth scrolling handler
  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.startsWith("#") ? href : `#${href}`;
    if (targetId === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      // Offset values based on shrink states
      const navbarHeight = navbarState === "shrunk" ? 64 : navbarState === "scrolled" ? 72 : 88;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight + 2;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          navbarState === "shrunk"
            ? "bg-[#090909]/95 border-b border-white/10 backdrop-blur-md py-3 shadow-2xl"
            : navbarState === "scrolled"
            ? "bg-[#090909]/90 border-b border-white/5 backdrop-blur-md py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
          {/* Logo with scaling animations */}
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "#home")}
            className="flex items-center gap-3.5 group"
          >
            <img
              src={logo}
              className={`w-auto transition-all duration-500 ease-in-out group-hover:scale-105 ${
                navbarState === "shrunk" ? "h-9" : navbarState === "scrolled" ? "h-11" : "h-12 md:h-14"
              }`}
              alt="logo"
            />
            <span
              className={`font-anton uppercase tracking-wider text-white transition-all duration-500 ease-in-out ${
                navbarState === "shrunk" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              }`}
            >
              BODY
              <span className="text-[#E63946] group-hover:text-white transition-all duration-300">
                TEMPLE
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 py-1.5 group/link ${
                    isActive ? "text-[#E63946] font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Underline hover / active slide in */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#E63946] transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Join Us CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#membership"
              onClick={(e) => handleNavLinkClick(e, "#membership")}
              className={`rounded-full bg-[#E63946] text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] ${
                navbarState === "shrunk" ? "px-5 py-2" : "px-6 py-2.5"
              }`}
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
          {navLinks.map((link, idx) => {
            const targetId = link.href.substring(1);
            const isActive = activeSection === targetId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`font-anton text-3xl sm:text-4xl uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Drawer CTA */}
        <div className="flex flex-col items-center gap-4 px-4 w-full">
          <a
            href="#membership"
            onClick={(e) => handleNavLinkClick(e, "#membership")}
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
