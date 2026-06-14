import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Zap, Lock, BarChart3 } from 'lucide-react';

const WhyChooseMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const reasons = [
    {
      title: "Operational Ownership",
      desc: "I don't just execute tasks; I own the outcome. From data collection to final reporting, I handle the full lifecycle independently.",
      icon: <CheckCircle2 className="text-gold group-hover:animate-wiggle" size={24} />
    },
    {
      title: "High-Volume Speed",
      desc: "Proven track record of filing 100+ returns and handling massive datasets without compromising accuracy.",
      icon: <Zap className="text-gold group-hover:animate-wiggle" size={24} />
    },
    {
      title: "Regulatory Precision",
      desc: "Deep understanding of complex compliance frameworks (Transfer Pricing, ROC, GST) ensuring zero-penalty filings.",
      icon: <Lock className="text-gold group-hover:animate-wiggle" size={24} />
    },
    {
      title: "Financial Clarity",
      desc: "I turn chaotic raw data into structured, audit-ready financial statements that give you clear visibility.",
      icon: <BarChart3 className="text-gold group-hover:animate-wiggle" size={24} />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-darkBg border-t border-slate-100 dark:border-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
            <div className={`w-full md:w-1/3 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-1 mb-2">
                  <span className="w-3.5 h-1 bg-orange-500 rounded-full"></span>
                  <span className="w-3.5 h-1 bg-slate-300 dark:bg-slate-400 rounded-full"></span>
                  <span className="w-3.5 h-1 bg-emerald-500 rounded-full"></span>
                </div>
                <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Value Proposition</h2>
                <h3 className="text-3xl font-extrabold text-navy dark:text-white mb-6">
                  Why <span className="text-orange-500">Partner</span> With <span className="text-emerald-500">Me?</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    In a field where accuracy is non-negotiable, I bring a proactive approach. I combine the technical rigor of a CA Finalist with the practical speed of a seasoned operator.
                </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {reasons.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`flex gap-4 p-4 rounded-xl transition-all duration-700 group hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${(idx * 150) + 300}ms` }}
                    >
                        <div className="mt-1 shrink-0 bg-light dark:bg-slate-800 p-2 rounded-full h-fit transition-transform group-hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-700">{item.icon}</div>
                        <div>
                            <h4 className="font-bold text-navy dark:text-white text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;