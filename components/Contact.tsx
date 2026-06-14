import React from 'react';
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="bg-navy dark:bg-darkCard rounded-xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
            {/* Decorative Geometric Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
                <div className="w-full md:w-1/2 text-white">
                    <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Open for Full-time Roles & Freelance Projects.</h3>
                    <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                        Whether you need assistance with Statutory Audits, Transfer Pricing compliance, or are looking for a dedicated finance professional to join your team, I am just a message away.
                    </p>
                    
                    <div className="space-y-6">
                        <a href="mailto:ankeshkumar9949@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center group-hover:bg-corporate dark:group-hover:bg-gold transition-colors text-white">
                                <Mail size={20} />
                            </div>
                            <span className="font-medium">ankeshkumar9949@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-4 text-slate-300">
                             <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-white">
                                <MapPin size={20} />
                            </div>
                            <span className="font-medium">Hyderabad, India</span>
                        </div>
                        <a href="https://linkedin.com/in/ankeshkumar9949" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                             <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center group-hover:bg-[#0077b5] transition-colors text-white">
                                <Linkedin size={20} />
                            </div>
                            <span className="font-medium">linkedin.com/in/ankeshkumar9949</span>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white dark:bg-darkCard backdrop-blur-sm rounded-lg p-8 shadow-lg">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                             <div>
                                <label className="block text-xs font-bold text-navy dark:text-slate-300 uppercase mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:border-corporate dark:focus:border-gold focus:ring-1 outline-none transition-all text-navy dark:text-white placeholder-slate-400" placeholder="Full Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy dark:text-slate-300 uppercase mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:border-corporate dark:focus:border-gold focus:ring-1 outline-none transition-all text-navy dark:text-white placeholder-slate-400" placeholder="Email Address" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-navy dark:text-slate-300 uppercase mb-2">Purpose</label>
                            <select className="w-full px-4 py-3 bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:border-corporate dark:focus:border-gold focus:ring-1 outline-none transition-all text-slate-600 dark:text-slate-300">
                                <option>Audit / Freelance Project</option>
                                <option>Full-time Opportunity</option>
                                <option>Networking</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-navy dark:text-slate-300 uppercase mb-2">Message</label>
                            <textarea rows={3} className="w-full px-4 py-3 bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:border-corporate dark:focus:border-gold focus:ring-1 outline-none transition-all text-navy dark:text-white placeholder-slate-400" placeholder="How can I assist you?"></textarea>
                        </div>
                        <button className="w-full bg-corporate dark:bg-gold hover:bg-navy dark:hover:bg-white dark:hover:text-navy text-slate-50 font-bold py-4 rounded transition-colors flex items-center justify-center gap-2 shadow-lg">
                            Send Message <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;