import React from 'react';
import { Table, BookOpen, Monitor, FileSpreadsheet } from 'lucide-react';

const Skills: React.FC = () => {
  const tools = [
    {
      category: "Accounting Software",
      items: [
        { name: "Tally Prime", desc: "Review & Edit Log Expert", icon: <Table size={20} /> },
        { name: "QuickBooks", desc: "Cloud Accounting", icon: <BookOpen size={20} /> },
        { name: "Focus", desc: "ERP Management", icon: <Monitor size={20} /> },
      ]
    },
    {
      category: "Office Productivity",
      items: [
        { name: "MS Excel (Advanced)", desc: "Lookups, Pivots, Audit Analytics", icon: <FileSpreadsheet size={20} /> },
        { name: "MS Word", desc: "Reporting & Documentation", icon: <FileTextIcon size={20} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkBg border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Technical Proficiency</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white">Tools & Technologies</h3>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {tools.map((group, idx) => (
                <div key={idx}>
                    <h4 className="text-lg font-bold text-corporate dark:text-blue-300 mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">{group.category}</h4>
                    <div className="space-y-4">
                        {group.items.map((tool, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-4 bg-light dark:bg-darkCard p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-corporate dark:hover:border-gold transition-colors">
                                {/* Fix: Force white background for icons so they pop in dark mode. Text is navy to contrast with white. */}
                                <div className="text-navy bg-white p-2.5 rounded-lg shadow-sm shrink-0">
                                    {tool.icon}
                                </div>
                                <div>
                                    <p className="font-bold text-navy dark:text-white text-sm">{tool.name}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// Helper icon component for Word
const FileTextIcon = ({ size }: { size: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
);

export default Skills;