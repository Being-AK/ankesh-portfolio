import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Icon3D, Icons3D } from './Icons3D';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onOpenMagic?: () => void; // New prop
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme, onOpenMagic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Compliance Hub', href: '#compliance-hub' },
    { name: 'Compliance Suite', href: '#tech-compliance-desk' },
    { name: 'Contact', href: '#contact' },
  ];

  // Resume path
  const RESUME_PATH = "/Sample_Resume.pdf";

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/80 dark:bg-darkBg/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        
        {/* Logo Section */}
        <a href="#home" className="flex flex-col leading-tight group relative z-50">
            <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl text-corporate dark:text-white tracking-tight transition-all duration-300 group-hover:tracking-normal">
                  Ankesh
                  <span className="text-navy dark:text-gold ml-1">Kumar</span>
                </span>
                {/* Decorative 3D Icon appearing on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 scale-75">
                   <Icon3D icon={Icons3D.Briefcase} theme="gold" size="sm" className="w-8 h-8 p-1.5" />
                </div>
            </div>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase group-hover:text-corporate dark:group-hover:text-gold transition-colors duration-300">
              CA Finalist & Article
            </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300 hover:text-navy dark:hover:text-white transition-colors group py-1"
              >
                {link.name}
                {/* Sliding Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </nav>
          
          {/* Magic Button - AI Experience */}
          {onOpenMagic && (
              <button
                onClick={onOpenMagic}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-500/30 text-xs font-bold text-purple-600 dark:text-purple-300 transition-all hover:scale-105"
                title="Try AI Hand Gestures"
              >
                 <Sparkles size={14} className="text-purple-500" />
                 <span>AI Demo</span>
              </button>
          )}

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

          {/* Theme Toggle with Rotation Animation */}
          <button 
            onClick={toggleTheme} 
            className="group p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:rotate-[30deg] hover:scale-110"
            aria-label="Toggle Theme"
          >
            <Icon3D 
                icon={darkMode ? Icons3D.Sun : Icons3D.Moon} 
                theme={darkMode ? 'gold' : 'navy'} 
                size="sm" 
                className="w-9 h-9 p-1.5 shadow-none ring-2 ring-transparent group-hover:ring-slate-200 dark:group-hover:ring-slate-700 rounded-xl" 
            />
          </button>

          {/* Resume Download Button with Lift & Glow */}
          <a 
            href={RESUME_PATH}
            download="Ankesh_Kumar_Resume.pdf"
            className="group relative flex items-center gap-3 bg-corporate dark:bg-white text-white dark:text-navy pl-5 pr-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 dark:shadow-none transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            
            <span className="relative z-10">Resume</span>
            <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Icon3D icon={Icons3D.Download} theme={darkMode ? 'navy' : 'gold'} size="sm" className="w-7 h-7 p-1.5 shadow-none bg-transparent" />
            </div>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden relative z-50">
             {/* Mobile Magic Button */}
             {onOpenMagic && (
                <button 
                    onClick={onOpenMagic}
                    className="p-2 text-purple-500 bg-purple-100 dark:bg-purple-900/30 rounded-full"
                >
                    <Sparkles size={20} />
                </button>
             )}

             <button 
                onClick={toggleTheme} 
                className="transform active:scale-90 transition-transform"
            >
                <Icon3D icon={darkMode ? Icons3D.Sun : Icons3D.Moon} theme={darkMode ? 'gold' : 'navy'} size="sm" className="w-10 h-10 p-2" />
            </button>
            <button 
                className="text-navy dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-navy/30 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Panel (Slide-in from Right) */}
      <div 
        className={`fixed top-0 right-0 z-40 h-full w-[300px] bg-white dark:bg-darkCard shadow-2xl transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col pt-28 px-8 border-l border-slate-100 dark:border-slate-800 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-3.5 text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-corporate dark:hover:text-gold hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.name}
              </a>
            ))}
        </nav>

        <div 
            className={`mt-auto mb-12 pt-8 border-t border-slate-100 dark:border-slate-700 transition-all duration-500 delay-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
             <a 
                href={RESUME_PATH}
                download="Ankesh_Kumar_Resume.pdf"
                className="flex items-center justify-center gap-3 w-full bg-corporate dark:bg-gold text-white dark:text-navy px-4 py-4 rounded-xl font-bold shadow-lg shadow-corporate/20 active:scale-95 transition-transform group"
            >
                <span>Download Resume</span>
                 <Icon3D icon={Icons3D.Download} theme={darkMode ? 'navy' : 'white'} size="sm" className="w-6 h-6 p-1 shadow-none bg-white/20 rounded-lg" />
            </a>
            
            <div className="mt-8 flex justify-center gap-6 opacity-60">
                {/* Decorative floating icons for mobile menu */}
                <div className="animate-float" style={{ animationDelay: '0s' }}>
                    <Icon3D icon={Icons3D.Calculator} theme="blue" size="sm" />
                </div>
                <div className="animate-float" style={{ animationDelay: '1s' }}>
                    <Icon3D icon={Icons3D.Chart} theme="gold" size="sm" />
                </div>
                <div className="animate-float" style={{ animationDelay: '2s' }}>
                    <Icon3D icon={Icons3D.Coins} theme="purple" size="sm" />
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;