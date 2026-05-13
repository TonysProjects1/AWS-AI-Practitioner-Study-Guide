import { useState, useEffect } from 'react';
import { practiceQuestionsData, PracticeQuestion } from '../data/practiceQuestionsData';
import { ChevronRight, RotateCcw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function PracticeExams() {
  const [examState, setExamState] = useState<'setup' | 'running' | 'results'>('setup');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(10);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  
  const [activeQuestions, setActiveQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(7200); // 120 minutes in seconds

  const domains = [
    { id: 'all', name: 'All Domains (Full Exam Prep)' },
    { id: 'domain-1', name: 'Domain 1: Fundamentals of AI & ML' },
    { id: 'domain-2', name: 'Domain 2: Fundamentals of GenAI' },
    { id: 'domain-3', name: 'Domain 3: Applications of Foundation Models' },
    { id: 'domain-4', name: 'Domain 4: Guidelines for Responsible AI' },
    { id: 'domain-5', name: 'Domain 5: Security, Compliance & Governance' },
  ];

  const questionCounts = [5, 10, 25, 50, 100, 'All'];

  // Timer effect
  
  useEffect(() => {
    if (examState === 'running' && isExamMode && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && examState === 'running') {
      handleFinishExamMode();
    }
  }, [examState, isExamMode, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartPractice = () => {
    let filtered = practiceQuestionsData;
    if (selectedDomain !== 'all') {
      filtered = filtered.filter(q => q.domainId === selectedDomain);
    }
    
    // Shuffle
    filtered = [...filtered].sort(() => Math.random() - 0.5);

    if (selectedQuestionCount !== 'All' && typeof selectedQuestionCount === 'number') {
      filtered = filtered.slice(0, selectedQuestionCount);
    }

    if (filtered.length === 0) {
      alert("No questions found for the selected criteria.");
      return;
    }

    setActiveQuestions(filtered);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswerId(null);
    setIsAnswerRevealed(false);
    setUserAnswers({});
    setIsExamMode(false);
    setExamState('running');
  };

  const handleStartSimulation = () => {
    setIsExamMode(true);
    let filtered = [...practiceQuestionsData].sort(() => Math.random() - 0.5);
    // Standard AIF-C01 exam is 85 questions
    filtered = filtered.slice(0, Math.min(85, filtered.length));
    
    if (filtered.length === 0) {
      alert("No questions available.");
      return;
    }

    setActiveQuestions(filtered);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswerId(null);
    setIsAnswerRevealed(false);
    setUserAnswers({});
    setTimeLeft(7200); // 120 minutes
    setExamState('running');
  };

  const currentQuestion = activeQuestions[currentIndex];

  const handleSelectAnswer = (id: string) => {
    if (isAnswerRevealed && !isExamMode) return;
    setSelectedAnswerId(id);
    if (isExamMode) {
      setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: id }));
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswerId) return;
    setIsAnswerRevealed(true);
    
    const isCorrect = currentQuestion.options.find(o => o.id === selectedAnswerId)?.isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      if (isExamMode) {
        const existingAnswer = userAnswers[activeQuestions[currentIndex + 1].id];
        setSelectedAnswerId(existingAnswer || null);
      } else {
        setSelectedAnswerId(null);
        setIsAnswerRevealed(false);
      }
    } else {
      if (!isExamMode) {
        setExamState('results');
      } else {
        handleFinishExamMode();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0 && isExamMode) {
      setCurrentIndex(prev => prev - 1);
      const existingAnswer = userAnswers[activeQuestions[currentIndex - 1].id];
      setSelectedAnswerId(existingAnswer || null);
    }
  };

  const handleFinishExamMode = () => {
    let finalScore = 0;
    activeQuestions.forEach(q => {
      const uAnswer = userAnswers[q.id];
      const correctOpt = q.options.find(o => o.isCorrect);
      if (uAnswer === correctOpt?.id) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setExamState('results');
  };

  const handleRestart = () => {
    setExamState('setup');
  };

  if (examState === 'setup') {
    return (
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase mb-2 block">Exam Simulator</span>
          <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85] text-[#1A1A1A]">
            Practice Exams.
          </h1>
          <p className="mt-6 text-sm text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
            Configure your practice session. Choose a specific domain to focus your study, or select all domains to simulate the final exam experience. Includes detailed explanations for every answer.
          </p>
        </div>

        <div className="bg-white border border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-8 md:p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">Select Domain</label>
              <div className="grid grid-cols-1 gap-3">
                {domains.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDomain(d.id)}
                    className={`p-4 border text-left transition-colors font-sans text-sm ${selectedDomain === d.id ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] hover:border-[#FF9900]'}`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">Number of Questions</label>
              <div className="flex flex-wrap gap-4">
                {questionCounts.map(count => (
                  <button
                    key={count}
                    onClick={() => setSelectedQuestionCount(count as number)}
                    className={`px-8 py-3 border text-sm font-bold transition-colors ${selectedQuestionCount === count ? 'bg-[#FF9900] text-white border-[#FF9900]' : 'bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-50'}`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <button 
                onClick={handleStartSimulation}
                className="px-10 py-4 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-gray-50 transition-colors text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2"
              >
                Start Simulated Exam (85 Q's, 120m)
              </button>
              <button 
                onClick={handleStartPractice}
                className="px-10 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 inline-flex"
              >
                Start Practice Run
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (examState === 'results') {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const passed = percentage >= 70; // 700/1000 passing score

    return (
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-12 text-center mb-8">
          <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase mb-4 block">
            {isExamMode ? "Exam Simulation Complete" : "Practice Complete"}
          </span>
          <h2 className="text-6xl font-serif italic font-bold text-[#1A1A1A] mb-2">{percentage}%</h2>
          <p className="text-lg opacity-70 mb-8">{score} out of {activeQuestions.length} correct</p>
          
          <div className="inline-flex flex-col items-center gap-3 px-6 py-6 border-2 border-[#1A1A1A] mb-12 min-w-[250px]">
            {passed ? (
              <><CheckCircle2 className="w-8 h-8 text-green-600 mb-2" /><span className="font-bold tracking-widest text-[#1A1A1A]">PASSING SCORE</span></>
            ) : (
              <><XCircle className="w-8 h-8 text-red-600 mb-2" /><span className="font-bold tracking-widest text-[#1A1A1A]">NEEDS IMPROVEMENT</span></>
            )}
            <div className="text-xs opacity-60 mt-1">AWS requires approx. 70% to pass</div>
          </div>

          <div>
             <button 
                onClick={handleRestart}
                className="px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Configure New Exam
              </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-8 py-16 min-h-screen">
      <div className="mb-8 flex items-end justify-between border-b pb-4 border-[#1A1A1A]/10">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase block">
            {isExamMode ? "Simulated Exam" : currentQuestion.domainName}
          </span>
          <span className="text-sm font-bold text-[#1A1A1A] mt-1 block">Question {currentIndex + 1} of {activeQuestions.length}</span>
        </div>
        <div className="text-right">
          {isExamMode ? (
            <div className={`text-xl font-mono font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-[#1A1A1A]'}`}>
              {formatTime(timeLeft)}
            </div>
          ) : (
            <div className="text-sm opacity-60">Score: {score}</div>
          )}
        </div>
      </div>

      <div className="bg-white border border-[#1A1A1A] p-8 lg:p-12 shadow-[8px_8px_0_0_#1A1A1A] mb-8">
        <h2 className="text-xl md:text-2xl font-serif text-[#1A1A1A] leading-relaxed mb-10">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((opt) => {
            let stateClass = "border-[#1A1A1A]/20 hover:border-[#1A1A1A] cursor-pointer";
            
            if (isExamMode) {
               if (selectedAnswerId === opt.id) {
                 stateClass = "border-[#1A1A1A] bg-gray-50 shadow-[4px_4px_0_0_#1A1A1A]";
               }
            } else {
              if (isAnswerRevealed) {
                stateClass = "cursor-default ";
                if (opt.isCorrect) {
                   stateClass += "border-green-600 bg-green-50 shadow-[4px_4px_0_0_#16a34a]";
                } else if (selectedAnswerId === opt.id) {
                   stateClass += "border-red-600 bg-red-50 shadow-[4px_4px_0_0_#dc2626]";
                } else {
                   stateClass += "border-[#1A1A1A]/10 opacity-60";
                }
              } else if (selectedAnswerId === opt.id) {
                stateClass = "border-[#FF9900] bg-[#FF9900]/10 shadow-[4px_4px_0_0_#FF9900]";
              }
            }

            return (
              <div key={opt.id} className={`border-2 p-6 transition-all ${stateClass}`} onClick={() => handleSelectAnswer(opt.id)}>
                <div className="flex gap-4 items-start">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5
                    ${selectedAnswerId === opt.id && (!isAnswerRevealed || isExamMode) ? (isExamMode ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#FF9900] bg-[#FF9900]') : 'border-[#1A1A1A]/30'}
                    ${isAnswerRevealed && !isExamMode && opt.isCorrect ? 'border-green-600 bg-green-600 text-white' : ''}
                    ${isAnswerRevealed && !isExamMode && !opt.isCorrect && selectedAnswerId === opt.id ? 'border-red-600 bg-red-600 text-white' : ''}
                  `}>
                    {isAnswerRevealed && !isExamMode && opt.isCorrect && <CheckCircle2 className="w-4 h-4" />}
                    {isAnswerRevealed && !isExamMode && !opt.isCorrect && selectedAnswerId === opt.id && <XCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-[15px] leading-relaxed text-[#1A1A1A] font-medium">{opt.text}</div>
                    {isAnswerRevealed && !isExamMode && (
                      <div className={`mt-3 text-sm pt-3 border-t ${opt.isCorrect ? 'border-green-200 text-green-800' : 'border-red-200 text-red-800'}`}>
                        {opt.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        {isExamMode ? (
          <button
            onClick={handlePreviousQuestion}
            disabled={currentIndex === 0}
            className="px-8 py-4 bg-white border border-[#1A1A1A] text-[#1A1A1A] hover:bg-gray-50 transition-colors text-[10px] uppercase tracking-[0.2em] font-bold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
        ) : <div />}
        
        {isExamMode ? (
          <div>
            {currentIndex + 1 === activeQuestions.length ? (
               <button
                onClick={handleFinishExamMode}
                className="px-10 py-4 bg-[#FF9900] text-white hover:bg-[#1A1A1A] hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                Submit Exam
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-10 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center gap-2"
              >
                Next Question
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          !isAnswerRevealed ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswerId}
              className="px-10 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-10 py-4 bg-[#FF9900] text-white hover:bg-[#1A1A1A] hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center gap-2"
            >
              {currentIndex + 1 < activeQuestions.length ? 'Next Question' : 'View Results'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )
        )}
      </div>

    </div>
  );
}
