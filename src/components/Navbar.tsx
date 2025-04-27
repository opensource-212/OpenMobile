
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom mx-auto flex items-center justify-between h-20">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="font-grotesk font-bold text-2xl">
              <span className="text-forge-dark">Open</span>
              <span className="text-forge-blue">Mobile</span>
              <span className="text-forge-purple">Forge</span>
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#showcase" className="nav-link">Apps</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button variant="outline" className="flex items-center gap-2">
            <Github size={18} />
            <span>GitHub</span>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="py-4 px-6 space-y-4">
          <a href="#features" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#showcase" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Apps</a>
          <a href="#testimonials" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="block nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Button variant="outline" className="flex items-center gap-2 w-full justify-center">
            <Github size={18} />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
