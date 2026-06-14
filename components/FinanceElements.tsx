import React, { useState, useEffect, useRef } from 'react';
import { Calculator, Coins, PieChart, TrendingUp, DollarSign, Percent, Brain, Lightbulb, Gift } from 'lucide-react';

// 1. Cursor Trail Effect
export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number; symbol: string }[]>([]);
  const symbols = ['₹', '%', '$', '₹', '+', '₵'];
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Limit frequency slightly to avoid state overload
      if (Math.random() > 0.3) return;

      const newPoint = {
        x: e.clientX,
        y: e.clientY + window.scrollY, // Adjust for scroll
        id: Date.now(),
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
      };

      setTrail(prev => [...prev.slice(-12), newPoint]); // Keep last 12
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cleanup old points
  useEffect(() => {
    const cleanup = () => {
      setTrail(prev => prev.filter(p => Date.now() - p.id < 800)); // 800ms lifetime
      requestRef.current = requestAnimationFrame(cleanup);
    };
    requestRef.current = requestAnimationFrame(cleanup);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trail.map((point) => (
        <div
          key={point.id}
          className="absolute text-gold/60 font-bold text-sm select-none"
          style={{
            left: point.x - 10, // Offset to center relative to pointer
            top: point.y - window.scrollY - 20, // Relative to viewport
            opacity: Math.max(0, 1 - (Date.now() - point.id) / 800),
            transform: `translateY(-${(Date.now() - point.id) / 20}px) scale(${1 - (Date.now() - point.id) / 1000}) rotate(${Math.sin(point.id) * 20}deg)`,
            transition: 'opacity 0.1s linear'
          }}
        >
          {point.symbol}
        </div>
      ))}
    </div>
  );
};

// 2. Coin Creature (Cute Coin with Face)
export const CoinCreature: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative w-14 h-14 rounded-full bg-yellow-400 border-4 border-yellow-500 shadow-xl flex items-center justify-center animate-bounce-gentle hover:animate-wiggle cursor-pointer transition-transform hover:scale-110 z-20 ${className}`}>
      {/* Face */}
      <div className="absolute top-4 left-3.5 w-1.5 h-1.5 bg-yellow-900 rounded-full"></div> {/* Left Eye */}
      <div className="absolute top-4 right-3.5 w-1.5 h-1.5 bg-yellow-900 rounded-full"></div> {/* Right Eye */}
      <div className="absolute bottom-3.5 w-5 h-2.5 border-b-3 border-yellow-900 rounded-[50%]"></div> {/* Smile */}
      
      {/* Rupee Symbol Faint */}
      <span className="text-yellow-700/20 font-bold text-2xl select-none absolute">₹</span>
    </div>
  );
};

// 3. Floating Icon Wrapper
export const FloatingIcon: React.FC<{ icon: React.ReactNode; delay?: string; className?: string }> = ({ icon, delay = '0s', className }) => {
  return (
    <div 
      className={`absolute opacity-10 dark:opacity-20 animate-float pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
    >
      {icon}
    </div>
  );
};

// 4. Background Particles
export const BackgroundParticles: React.FC = () => {
    // Generate static positions to avoid re-renders causing layout shifts
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${(i * 7) % 100}%`,
        top: `${(i * 13) % 100}%`,
        delay: `${i * 0.5}s`,
        duration: `${10 + (i % 5)}s`,
        size: i % 3 === 0 ? 8 : 4,
        color: i % 2 === 0 ? 'bg-gold/20' : 'bg-corporate/20'
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <div 
                    key={p.id}
                    className={`absolute rounded-full ${p.color} animate-float`}
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        animationDelay: p.delay,
                        animationDuration: p.duration
                    }}
                />
            ))}
        </div>
    );
};

// 5. Wealth Builder Animation (Thinking Man -> Idea -> Money)
export const WealthBuilder: React.FC<{ className?: string }> = ({ className }) => {
    const [stage, setStage] = useState(0); // 0: Thinking, 1: Idea, 2: Success

    useEffect(() => {
        const interval = setInterval(() => {
            setStage(prev => (prev + 1) % 3);
        }, 3000); // Change stage every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
            <div className={`absolute transition-all duration-500 transform ${stage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative">
                    <Brain size={40} className="text-slate-400 dark:text-slate-500" />
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-300 rounded-full animate-pulse"></div>
                </div>
            </div>
            
            <div className={`absolute transition-all duration-500 transform ${stage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative">
                    <Lightbulb size={40} className="text-yellow-400 filter drop-shadow-lg" />
                    <div className="absolute -top-4 -right-4 text-gold font-bold text-xs animate-bounce">Aha!</div>
                </div>
            </div>

            <div className={`absolute transition-all duration-500 transform ${stage === 2 ? 'opacity-100 scale-100' : 'opacity-0 translate-y-4'}`}>
                <div className="relative">
                    <Gift size={40} className="text-emerald-500" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                         <span className="text-white font-bold text-[10px]">$</span>
                    </div>
                    {/* Flying particles */}
                    <div className="absolute -top-4 -left-4 text-emerald-400 text-xs font-bold animate-ping">₹</div>
                    <div className="absolute -top-6 right-0 text-emerald-400 text-xs font-bold animate-bounce">₹</div>
                </div>
            </div>
        </div>
    );
};

// 6. Piggy Bank Creature
export const PiggyBankCreature: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`relative w-20 h-16 ${className} group cursor-pointer`}>
            {/* Body */}
            <div className="absolute inset-0 bg-pink-400 rounded-2xl rounded-tr-3xl shadow-lg animate-bounce-gentle group-hover:animate-wiggle">
                {/* Snout */}
                <div className="absolute top-4 -right-1 w-4 h-6 bg-pink-500 rounded-r-lg"></div>
                {/* Eye */}
                <div className="absolute top-3 right-5 w-2 h-2 bg-white rounded-full">
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-black rounded-full"></div>
                </div>
                {/* Ear */}
                <div className="absolute -top-2 right-8 w-4 h-4 bg-pink-500 rounded-tl-lg transform -rotate-12"></div>
                {/* Coin Slot */}
                <div className="absolute top-1 left-1/2 w-6 h-1 bg-pink-700 -translate-x-1/2 rounded-full"></div>
            </div>
            {/* Floating Coin entering */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold animate-bounce">
                <Coins size={20} />
            </div>
        </div>
    );
};

// Helper to provide icons
export const FinanceIcons = {
  Calculator: <Calculator size={32} className="text-corporate dark:text-blue-300" />,
  Coins: <Coins size={32} className="text-gold" />,
  Chart: <PieChart size={32} className="text-green-500" />,
  Graph: <TrendingUp size={32} className="text-purple-500" />,
  Dollar: <DollarSign size={24} className="text-emerald-600" />,
  Percent: <Percent size={24} className="text-orange-500" />
};