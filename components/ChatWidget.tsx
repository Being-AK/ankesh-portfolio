import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Shield, Globe } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: { title: string; uri: string }[];
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello. I am Ankesh's virtual assistant. How can I help you with Audit or Taxation inquiries today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
    }));

    const response = await sendMessageToGemini(userText, history);

    setMessages(prev => [...prev, { 
      role: 'model', 
      text: response.text, 
      sources: response.sources 
    }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-darkCard rounded-t-lg rounded-bl-lg shadow-2xl w-[340px] sm:w-[380px] h-[500px] flex flex-col mb-4 border border-slate-200 dark:border-slate-700 animate-fade-in-up overflow-hidden transition-colors">
          {/* Header */}
          <div className="bg-navy dark:bg-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-3 text-slate-50">
                <div className="bg-white/10 p-1.5 rounded">
                    <Shield size={18} className="text-gold" />
                </div>
                <div>
                    <h3 className="font-bold text-sm tracking-wide">Assistant</h3>
                    <p className="text-[10px] text-slate-300 uppercase tracking-wider">Professional Support</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-darkBg/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-corporate dark:bg-gold text-slate-50 dark:text-navy font-medium' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                }`}>
                  <div>{msg.text}</div>
                  
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
                        <Globe size={10} className="text-slate-400 dark:text-gold" /> Checked Websites:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.sources.map((src, sIdx) => {
                          let label = src.title;
                          try {
                            const urlObj = new URL(src.uri);
                            label = urlObj.hostname.replace('www.', '');
                          } catch (e) {}

                          return (
                            <a 
                              key={sIdx} 
                              href={src.uri} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1 text-[11px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-corporate dark:hover:border-gold hover:text-corporate dark:hover:text-gold text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded transition-all max-w-full truncate font-mono"
                              title={src.title}
                            >
                              <span className="truncate">{label}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded shadow-sm">
                  <Loader2 size={16} className="animate-spin text-corporate dark:text-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-darkCard border-t border-slate-100 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your inquiry..."
                className="flex-1 bg-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-corporate dark:focus:border-gold focus:ring-1 text-navy dark:text-white placeholder-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="bg-navy hover:bg-corporate dark:bg-gold dark:hover:bg-white dark:hover:text-navy text-white p-2.5 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-navy dark:bg-gold hover:bg-corporate dark:hover:bg-white dark:hover:text-navy text-white dark:text-navy rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white dark:border-slate-700"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold dark:bg-white"></span>
            </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;