import React from 'react';
import { 
  Calculator, Coins, PieChart, TrendingUp, DollarSign, Percent, 
  Building2, Factory, Cpu, Briefcase, ShoppingBag, Quote, Shield, 
  FileText, Users, Globe, Landmark, Zap, Lock, BarChart3, CheckCircle2,
  MapPin, Mail, Linkedin, ArrowRight, Menu, X, Download, Sun, Moon,
  Calendar, ClipboardCheck, ClipboardList, ShoppingCart
} from 'lucide-react';

export const Icons3D = {
  // Finance
  Calculator, Coins, Chart: PieChart, Graph: TrendingUp, Dollar: DollarSign, Percent,
  // Industries
  Building: Building2, Factory, Cpu, Briefcase, Cart: ShoppingBag, 
  // UI
  Quote, Shield, FileText, Users, Globe, Landmark, Zap, Lock, BarChart: BarChart3, CheckCircle: CheckCircle2,
  // Contact
  MapPin, Mail, Linkedin, ArrowRight,
  // Nav
  Menu, X, Download, Sun, Moon,
  // Misc
  Calendar, ClipboardCheck, ClipboardList
};

interface Icon3DProps {
  icon: React.ElementType;
  theme?: 'gold' | 'corporate' | 'emerald' | 'purple' | 'blue' | 'navy' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Icon3D: React.FC<Icon3DProps> = ({ icon: Icon, theme = 'gold', size = 'md', className = '' }) => {
  
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-12 h-12 p-2.5',
    lg: 'w-16 h-16 p-3.5',
    xl: 'w-20 h-20 p-4'
  };

  const themeClasses = {
    gold: 'from-amber-300 to-amber-500 shadow-amber-600/20 text-white',
    corporate: 'from-blue-400 to-blue-600 shadow-blue-700/20 text-white',
    emerald: 'from-emerald-400 to-emerald-600 shadow-emerald-700/20 text-white',
    purple: 'from-purple-400 to-purple-600 shadow-purple-700/20 text-white',
    blue: 'from-sky-400 to-sky-600 shadow-sky-700/20 text-white',
    navy: 'from-slate-700 to-slate-900 shadow-slate-900/20 text-white',
    white: 'bg-white text-slate-800 shadow-sm',
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${themeClasses[theme]} shadow-[0_4px_0_rgba(0,0,0,0.1)] ${sizeClasses[size]} ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>
      <Icon className="relative z-10 w-full h-full drop-shadow-sm" />
    </div>
  );
};