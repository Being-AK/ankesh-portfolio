import React from 'react';
import { FileText, Shield, Landmark, ClipboardList } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Comprehensive Tax Filing",
      desc: "End-to-end ITR & GST filing for Corporates, LLPs, and Individuals. 100+ Returns experience.",
      icon: <Shield size={28} />,
    },
    {
      title: "Audit Readiness",
      desc: "Preparation of Financial Statements, Audit Schedules, and Verification for Statutory/Tax Audits.",
      icon: <ClipboardList size={28} />,
    },
    {
      title: "Corporate Compliance",
      desc: "ROC Filings, Company Incorporation, and specialized Transfer Pricing (Form 3CEB) documentation.",
      icon: <Landmark size={28} />,
    },
    {
      title: "Outsourced Accounting",
      desc: "Full-cycle Bookkeeping (Tally/QuickBooks) and monthly MIS Reporting for SMEs.",
      icon: <FileText size={28} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-light dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="w-3.5 h-1 bg-orange-500 rounded-full"></span>
            <span className="w-3.5 h-1 bg-slate-200 dark:bg-slate-750 rounded-full"></span>
            <span className="w-3.5 h-1 bg-emerald-500 rounded-full"></span>
          </div>
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white">
            Professional <span className="text-orange-500">CA Freelance</span> <span className="text-emerald-500">Services</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
                key={idx} 
                className="bg-white dark:bg-darkCard p-8 rounded-xl border border-slate-200 dark:border-slate-700 group flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold"
            >
                <div className="w-14 h-14 bg-navy dark:bg-slate-700 text-white dark:text-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-corporate dark:group-hover:bg-gold dark:group-hover:text-white transition-colors shadow-md">
                    {service.icon}
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-corporate dark:group-hover:text-gold transition-colors">
                    {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {service.desc}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;