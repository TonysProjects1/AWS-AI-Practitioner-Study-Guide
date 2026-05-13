import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Send, Bot, User, Loader2, X, Minimize2, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function AITutor({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! I'm your AWS Certified AI Practitioner tutor. What topic would you like to discuss?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Tutor'}: ${m.content}`).join('\n');
      const prompt = `You are an expert tutor helping a user study for the AWS Certified AI Practitioner (AIF-C01) exam.
Keep your answers concise, accurate, and focused on the AWS exam context. Use Markdown for formatting.

Conversation History:
${history}

User: ${userMessage}
Tutor:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'model', content: response.text || 'Sorry, I could not generate a response.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Sorry, I encountered an error. Please check your API key and try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed right-8 bottom-8 w-[400px] max-w-[calc(100vw-4rem)] bg-[#1A1A1A] text-white flex flex-col transition-all duration-300 z-50 border-[6px] border-[#FF9900] ${isMinimized ? 'h-16' : 'h-[600px] max-h-[calc(100vh-6rem)] shadow-[12px_12px_0_0_#1A1A1A]'}`}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1A1A1A]">
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF9900]">
          <span>Artificial Assistant</span>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:text-white transition-colors">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={onClose} className="p-1 hover:text-[#FF9900] transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#1A1A1A]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'border-[#FF9900] text-[#FF9900]' : 'border-white/20 text-white/50 bg-white/5'} text-[10px] font-mono tracking-tighter`}>
                  {msg.role === 'user' ? 'USR' : 'SYS'}
                </div>
                <div className={`max-w-[80%] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'text-white' 
                    : 'text-white/80'
                }`}>
                  {msg.role === 'user' ? (
                    msg.content
                  ) : (
                    <div className="prose prose-invert prose-sm font-sans">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-white/20 text-white/50 bg-white/5 text-[10px] font-mono tracking-tighter">
                  SYS
                </div>
                <div className="text-white/80 text-sm flex items-center gap-3 py-1">
                  <div className="w-1.5 h-1.5 bg-[#FF9900] animate-ping" />
                  <span className="font-serif italic opacity-70">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-0 border-t border-white/10 bg-[#1A1A1A]">
            <div className="relative flex items-center bg-transparent">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Query assistant..."
                className="w-full py-5 pl-6 pr-16 bg-[#1A1A1A] text-sm text-white placeholder-white/30 focus:outline-none focus:bg-white/5 transition-all font-mono"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-4 p-2 text-[#FF9900] hover:text-white disabled:opacity-20 disabled:hover:text-[#FF9900] transition-colors"
              >
                <span className="text-xl leading-none">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
