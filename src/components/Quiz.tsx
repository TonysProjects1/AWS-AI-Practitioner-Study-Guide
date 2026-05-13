import ReactMarkdown from 'react-markdown';
import { Topic } from '../data/courseData';
import { CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

interface QuizProps {
  topic: Topic;
  onComplete: () => void;
}

export function Quiz({ topic, onComplete }: QuizProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = topic.quiz[currentQuestionIdx];

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestionIdx < topic.quiz.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  if (!question) {
    return <div className="p-6 text-center text-slate-500">No quiz available for this topic.</div>;
  }

  return (
    <div className="bg-[#FDFCFB] border border-[#1A1A1A] relative mt-12 mb-20 shadow-[8px_8px_0_0_#1A1A1A]">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF9900] flex items-center justify-center text-[#1A1A1A] font-bold text-xl border border-[#1A1A1A]">
        ?
      </div>
      <div className="border-b border-[#1A1A1A] p-8 pb-6 ml-4">
        <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
          Knowledge Verification: {topic.title}
        </h3>
      </div>
      
      <div className="p-8 space-y-8">
        <div className="text-2xl font-serif italic text-[#1A1A1A] leading-tight max-w-2xl">
          {question.question}
        </div>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correctAnswer;
            const showCorrect = showExplanation && isCorrect;
            const showIncorrect = showExplanation && isSelected && !isCorrect;

            let btnClass = "w-full text-left p-4 border transition-all flex items-start gap-4 text-sm ";
            
            if (showCorrect) {
              btnClass += "bg-[#1A1A1A] border-[#1A1A1A] text-white";
            } else if (showIncorrect) {
              btnClass += "bg-white border-[#1A1A1A] text-[#1A1A1A] opacity-50 line-through";
            } else if (isSelected) {
              btnClass += "bg-[#FF9900] border-[#1A1A1A] text-[#1A1A1A] font-medium shadow-[4px_4px_0_0_#1A1A1A]";
            } else if (!showExplanation) {
              btnClass += "bg-transparent border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/5 hover:shadow-[4px_4px_0_0_#1A1A1A]";
            } else {
              btnClass += "bg-transparent border-[#1A1A1A]/20 text-[#1A1A1A]/40";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showExplanation}
                className={btnClass}
              >
                <span className="font-mono text-xs opacity-60 mt-0.5 w-6 block shrink-0">0{idx + 1}</span>
                <span className="leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="p-6 border-l-4 bg-[#1A1A1A]/5 border-[#1A1A1A] mt-6">
            <p className="font-bold mb-2 text-[10px] uppercase tracking-widest text-[#1A1A1A]">
              {selectedAnswer === question.correctAnswer ? 'Correct Verification' : 'Incorrect Assessment'}
            </p>
            <p className="text-sm opacity-90 leading-relaxed font-serif text-[#1A1A1A] font-medium italic">{question.explanation}</p>
          </div>
        )}

        <div className="pt-8 flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] disabled:opacity-30 disabled:hover:bg-[#1A1A1A] disabled:hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold border border-[#1A1A1A]"
            >
              Verify Response
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-[#FF9900] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-3"
            >
              {currentQuestionIdx < topic.quiz.length - 1 ? 'Next Sequence' : 'Conclude Assessment'} <span className="text-lg leading-none">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
