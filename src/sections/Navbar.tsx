import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { name: 'OBSESSIO X1', href: '#products' },
        { name: 'OBSESSIO X2', href: '#products' },
        { name: 'DISTANCIO', href: '#products' },
        { name: 'HORIZIO XY', href: '#products' },
        { name: 'EXTENSO', href: '#products' },
        { name: 'Module THx', href: '#products' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Partnerships', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Wireless signal arcs */}
                <path
                  d="M25 45 Q35 25 50 25 Q65 25 75 45"
                  fill="none"
                  stroke="#54b9ff"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="transition-all duration-300 group-hover:stroke-[#2c3e50]"
                />
                <path
                  d="M20 35 Q35 10 50 10 Q65 10 80 35"
                  fill="none"
                  stroke="#54b9ff"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="transition-all duration-300 group-hover:stroke-[#2c3e50]"
                />
                {/* Letter A circle */}
                <circle
                  cx="50"
                  cy="65"
                  r="22"
                  fill="none"
                  stroke="#54b9ff"
                  strokeWidth="6"
                  className="transition-all duration-300 group-hover:stroke-[#2c3e50]"
                />
                {/* Dot in center */}
                <circle
                  cx="50"
                  cy="65"
                  r="6"
                  fill="#2c3e50"
                  className="transition-all duration-300 group-hover:fill-[#54b9ff]"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#2c3e50]' : 'text-white'
              } group-hover:text-[#54b9ff]`}>
                ADVARNA
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#54b9ff]' : 'text-white/80'
              }`}>
                IoT Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                        isScrolled ? 'text-[#2c3e50]' : 'text-white'
                      } hover:text-[#54b9ff]`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-scale-in">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                            className="block px-4 py-2 text-sm text-[#2c3e50] hover:bg-[#e8f4fc] hover:text-[#54b9ff] transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-[#2c3e50]' : 'text-white'
                    } hover:text-[#54b9ff]`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button className={`px-3 py-1 text-sm font-medium rounded transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#54b9ff] text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}>
              EN
            </button>
            <button className={`px-3 py-1 text-sm font-medium rounded transition-all duration-300 ${
              isScrolled 
                ? 'text-[#2c3e50] hover:bg-gray-100' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}>
              FR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-[#2c3e50]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200/20 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className={`flex items-center justify-between w-full text-sm font-medium ${
                          isScrolled ? 'text-[#2c3e50]' : 'text-white'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProductsOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                              className={`text-sm ${
                                isScrolled ? 'text-gray-600' : 'text-white/70'
                              } hover:text-[#54b9ff]`}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className={`text-sm font-medium ${
                        isScrolled ? 'text-[#2c3e50]' : 'text-white'
                      } hover:text-[#54b9ff]`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200/20">
                <button className="px-4 py-2 text-sm font-medium bg-[#54b9ff] text-white rounded">
                  EN
                </button>
                <button className={`px-4 py-2 text-sm font-medium ${
                  isScrolled ? 'text-[#2c3e50]' : 'text-white'
                }`}>
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
