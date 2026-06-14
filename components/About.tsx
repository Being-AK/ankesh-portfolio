import React, { useState, useEffect, useRef } from 'react';
import { FloatingIcon, FinanceIcons } from './FinanceElements';
import { Icon3D, Icons3D } from './Icons3D';

const About: React.FC = () => {
  const ABOUT_IMAGE_URL = "https://i.postimg.cc/LXJD8Xrg/Portfolio.png";
  
  const [auditCount, setAuditCount] = useState(0);
  const [turnoverCount, setTurnoverCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(setAuditCount, 0, 30, 2000);
          animateValue(setTurnoverCount, 0, 300, 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setter(Math.floor(easeOutQuart * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Floating Elements using 3D Icons */}
      <FloatingIcon icon={<Icon3D icon={Icons3D.Coins} theme="gold" size="md" />} className="top-10 right-10" delay="1s" />
      <FloatingIcon icon={<Icon3D icon={Icons3D.Dollar} theme="emerald" size="md" />} className="bottom-10 left-10" delay="2s" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Visual Placeholder */}
          <div className="w-full md:w-1/2 relative group">
             <div className="aspect-[4/5] bg-navy dark:bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl border-8 border-white dark:border-slate-800 transform transition-transform duration-500 group-hover:scale-[1.01]">
                <img 
                    src={ABOUT_IMAGE_URL}
                    alt="Ankesh Kumar - Professional" 
                    className="w-full h-full object-cover object-[50%_34%] opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-block px-3 py-1 mb-2 bg-gold text-white text-xs font-bold uppercase tracking-wider rounded-sm">Based in</div>
                    <p className="text-2xl font-bold">Hyderabad, India</p>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-1 mb-2">
              <span className="w-3.5 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3.5 h-1 bg-slate-300 dark:bg-slate-400 rounded-full"></span>
              <span className="w-3.5 h-1 bg-emerald-500 rounded-full"></span>
            </div>
            <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">About Me</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
              Professional <span className="text-orange-500">Background</span> & <span className="text-emerald-500">Expertise</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                    I am a <strong className="text-navy dark:text-white">CA Finalist</strong> and <strong>B.Com (Computer Applications)</strong> graduate with a strong foundation in digital accounting and compliance.
                </p>
                <p>
                    Currently serving as an Article Assistant at <strong className="text-corporate dark:text-gold">GPHK & Associates</strong>, I blend academic rigor with practical expertise in handling large-scale audits and international tax compliance.
                </p>
                <p>
                    I have a reputation for taking ownership. Unlike typical assistance roles, I handle assignments <strong>end-to-end</strong>—from visiting client offices and gathering raw data to preparing final financial statements and compliance reports. My focus is on accuracy, regulatory adherence, and operational efficiency.
                </p>
                
                <div className="pt-6 grid grid-cols-2 gap-6 relative">
                    {/* Stat Card 1 */}
                    <div className="bg-slate-50 dark:bg-darkCard p-5 rounded-lg border-l-4 border-gold shadow-sm border border-slate-100 dark:border-slate-700 transition-all relative group/card hover:-translate-y-1 hover:shadow-md">
                        <span className="block text-3xl font-bold text-navy dark:text-white tabular-nums mb-1 group-hover/card:scale-105 transition-transform origin-left">{auditCount}+</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">Statutory Audits</span>
                        {/* Orbiting Coin */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity animate-bounce-gentle">
                            <Icon3D icon={Icons3D.Coins} theme="gold" size="sm" />
                        </div>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="bg-slate-50 dark:bg-darkCard p-5 rounded-lg border-l-4 border-corporate shadow-sm border border-slate-100 dark:border-slate-700 transition-all relative group/card hover:-translate-y-1 hover:shadow-md">
                        <span className="block text-3xl font-bold text-navy dark:text-white tabular-nums mb-1 group-hover/card:scale-105 transition-transform origin-left">₹{turnoverCount} Cr+</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wide">Client Turnover Handled</span>
                         {/* Orbiting Graph */}
                         <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                            <Icon3D icon={Icons3D.Graph} theme="corporate" size="sm" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;