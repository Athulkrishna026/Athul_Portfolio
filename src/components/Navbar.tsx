import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-surface rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">A<span className="text-gradient">thul.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-white">
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Area */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
