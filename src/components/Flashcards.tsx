import { useState } from 'react';
import { flashcardsData } from '../data/flashcardsData';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    }, 150);
  };

  const currentCard = flashcardsData[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase mb-2 block">Knowledge Check</span>
        <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85] text-[#1A1A1A]">
          Flashcards.
        </h1>
        <p className="mt-6 text-sm text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
          Test your knowledge against {flashcardsData.length} core concepts spanning all 5 exam domains. 
          Use these cards to validate your understanding of the Cheat Sheet material before taking the AIF-C01 exam.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Progress */}
        <div className="w-full max-w-2xl flex justify-between items-center mb-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
          <span>{currentCard.domain}</span>
          <span>{currentIndex + 1} / {flashcardsData.length}</span>
        </div>

        {/* Card Container */}
        <div 
          className="relative w-full max-w-2xl h-[400px] perspective-1000 cursor-pointer group"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#1A1A1A] p-10 flex flex-col justify-center items-center text-center shadow-[8px_8px_0_0_#FF9900] group-hover:shadow-[12px_12px_0_0_#FF9900] transition-shadow">
              <span className="text-[10px] uppercase tracking-widest text-[#FF9900] font-bold absolute top-6 left-6">Question</span>
              <div className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A] leading-relaxed">
                {currentCard.question}
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 absolute bottom-6">Click to reveal</span>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] p-10 flex flex-col justify-center items-center text-center rotate-y-180 shadow-[8px_8px_0_0_#FF9900] group-hover:shadow-[12px_12px_0_0_#FF9900] transition-shadow">
              <span className="text-[10px] uppercase tracking-widest text-[#FF9900] font-bold absolute top-6 left-6">Answer</span>
              <div className="text-xl md:text-2xl font-sans text-white/90 leading-relaxed max-w-lg">
                <ReactMarkdown>{currentCard.answer}</ReactMarkdown>
              </div>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-[#1A1A1A] rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-8 py-3 bg-transparent text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-bold border border-[#1A1A1A] flex items-center gap-2 hover:bg-[#1A1A1A]/5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Flip Card
          </button>

          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-[#1A1A1A] rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
