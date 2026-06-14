import React from 'react';
import { Mail, Linkedin, ExternalLink, Calculator, ShieldCheck, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  
  // Custom dispatcher helper to notify the compliance suite
  const triggerTool = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('select-compliance-tool', { detail: { id } });
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-white dark:bg-darkBg pt-20 pb-10 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand & Central Node */}
            <div className="space-y-5">
                <a href="#home" className="flex flex-col leading-tight group w-fit">
                    <span className="font-extrabold text-2xl text-corporate dark:text-white tracking-tight">
                    Ankesh
                    <span className="text-navy dark:text-gold ml-0.5">.in</span>
                    </span>
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase">Partner Tech Compliance</span>
                </a>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-xs">
                  India's most reliable, easy-to-use, and partnership-friendly corporate compliance platform. Combining human-supported CA diligence with software-enabled reporting.
                </p>
                
                <div className="space-y-2 pt-2 text-xs font-semibold">
                  <a 
                    href="mailto:ankeshkumar9949@gmail.com" 
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-corporate dark:hover:text-gold transition-colors"
                  >
                    <Mail size={14} className="text-corporate dark:text-gold" /> ankeshkumar9949@gmail.com
                  </a>
                </div>
            </div>

            {/* Column 2: Legal Services & Incorporations */}
            <div>
                <h4 className="font-bold text-navy dark:text-white mb-6 uppercase text-xs tracking-wider border-b border-slate-100 dark:border-slate-800/50 pb-2 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-corporate dark:text-gold" /> Legal Services
                </h4>
                <ul className="space-y-2 text-xs font-medium">
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('gstin-reg', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Udyam Registration Setup
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('lei-reg', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        LEI Registration (Global Identifier)
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('gstin-reg', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        GSTIN New Registration
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('demat', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Dematerialization of Shares
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#compliance-hub" 
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Limited Liability Partnership (LLP)
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#compliance-hub" 
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Private Limited Company Registration
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#compliance-hub" 
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        One Person Company (OPC) Setup
                      </a>
                    </li>
                </ul>
            </div>

            {/* Column 3: Search Verification Suite */}
            <div>
                <h4 className="font-bold text-navy dark:text-white mb-6 uppercase text-xs tracking-wider border-b border-slate-100 dark:border-slate-800/50 pb-2 flex items-center gap-1.5">
                  <Cpu size={14} className="text-corporate dark:text-gold" /> Search & APIs
                </h4>
                <ul className="space-y-2 text-xs font-medium">
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('gstin-search', e)}
                        className="font-bold text-corporate dark:text-gold hover:underline flex items-center gap-1"
                      >
                        GSTIN Search & Verification <span className="bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded text-[8px] font-black uppercase">Free</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('udyam-search', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Udyam Company Search
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('company-search', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        MCA Corporate Index Search
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('director-search', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Director DIN Search
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('developer-sandbox', e)}
                        className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                      >
                        API Integration Portal 🧑‍💻
                      </a>
                    </li>
                </ul>
            </div>

            {/* Column 4: Business Calculators */}
            <div>
                <h4 className="font-bold text-navy dark:text-white mb-6 uppercase text-xs tracking-wider border-b border-slate-100 dark:border-slate-800/50 pb-2 flex items-center gap-1.5">
                  <Calculator size={14} className="text-corporate dark:text-gold" /> Calculators
                </h4>
                <ul className="space-y-2 text-xs font-medium">
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-compound', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Compound Interest Calculator
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-roi', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Return on Investment (ROI)
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-savings', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Lumpsum & SIP Calculator
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-savings', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Savings & Goal Projections
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-emi', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Home Loan EMI Calculator
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-emi', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        Lease & Hire Purchase Rates
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-compliance-desk" 
                        onClick={(e) => triggerTool('calc-salary', e)}
                        className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors"
                      >
                        In-Hand Salary Calculator
                      </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom copyright line with sub links */}
        <div className="border-t border-slate-150 dark:border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-550 dark:text-slate-500 text-xs font-semibold">
                © 2026 Ankesh.in Compliance and CA Ankesh Kumar. Premium Regulatory Services.
            </p>
            <div className="flex gap-6 text-xs text-slate-400 font-bold">
                <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Terms of Service</a>
                <a href="https://linkedin.com/in/ankeshkumar9949" target="_blank" rel="noreferrer" className="hover:text-corporate dark:hover:text-gold transition-all duration-300">
                  <Linkedin size={15} className="inline mr-1" /> LinkedIn
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
