import { useState, useEffect } from 'react';
import { courseData, Topic } from './data/courseData';
import { Quiz } from './components/Quiz';
import { AITutor } from './components/AITutor';
import { CheatSheet } from './components/CheatSheet';
import { BookOpen, CheckCircle2, ChevronRight, Menu, MessageSquareText, Shield, Cloud, BrainCircuit, X, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [currentView, setCurrentView] = useState<'course' | 'cheatsheet'>('course');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(courseData[0].topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  
  // Load progress from local storage
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('aws-ai-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('aws-ai-progress', JSON.stringify(Array.from(completedTopics)));
  }, [completedTopics]);

  const handleTopicComplete = (topicId: string) => {
    setCompletedTopics(prev => {
      const next = new Set(prev);
      next.add(topicId);
      return next;
    });
  };

  // Find the currently selected topic details
  let selectedTopic: Topic | undefined;
  let selectedDomainTitle = '';
  for (const domain of courseData) {
    const topic = domain.topics.find(t => t.id === selectedTopicId);
    if (topic) {
      selectedTopic = topic;
      selectedDomainTitle = domain.title;
      break;
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white text-[#1A1A1A]">
      
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <button 
          className="lg:hidden fixed inset-0 bg-slate-900/20 z-40"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-80 bg-[#FDFCFB] border-r border-[#1A1A1A]/10 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col">
          <div className="p-8 pb-6 border-b border-[#1A1A1A]/10 flex items-baseline justify-between mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase mb-1">Certified Compendium</span>
              <span className="text-xs font-mono opacity-60 text-[#1A1A1A]">AIF-C01 // SESSION</span>
            </div>
            <button className="lg:hidden p-2 hover:bg-[#1A1A1A]/5 rounded" onClick={() => setIsSidebarOpen(false)}>
              <X className="w-5 h-5 text-[#1A1A1A]" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 pt-2 space-y-8">
            <div className="space-y-4">
              <div className="border-t border-[#1A1A1A] pt-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF9900]">
                  Resources
                </span>
              </div>
              <div className="space-y-0 text-[#1A1A1A]">
                <button
                  onClick={() => {
                    setCurrentView('cheatsheet');
                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left py-3 border-b border-[#1A1A1A]/5 transition-all flex justify-between items-center group
                    ${currentView === 'cheatsheet' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
                  `}
                >
                  <div className={`pr-4 flex items-center gap-2 ${currentView === 'cheatsheet' ? 'text-lg font-serif italic' : 'text-sm font-sans'}`}>
                    <FileText className="w-4 h-4" />
                    Cheat Sheet
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {currentView === 'cheatsheet' && <div className="h-2 w-2 rounded-full bg-[#FF9900]" />}
                  </div>
                </button>
              </div>
            </div>

            {courseData.map((domain, index) => {
               return (
                <div key={domain.id} className="space-y-4">
                  <div className="border-t border-[#1A1A1A] pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                      0{index + 1}. {domain.title.split(':')[0]}
                    </span>
                  </div>
                  
                  <div className="space-y-0 text-[#1A1A1A]">
                    {domain.topics.map(topic => {
                      const isSelected = topic.id === selectedTopicId;
                      const isCompleted = completedTopics.has(topic.id);
                      
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopicId(topic.id);
                            setCurrentView('course');
                            if (window.innerWidth < 1024) setIsSidebarOpen(false);
                          }}
                          className={`w-full text-left py-3 border-b border-[#1A1A1A]/5 transition-all flex justify-between items-center group
                            ${isSelected && currentView === 'course' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
                          `}
                        >
                          <div className={`pr-4 ${isSelected && currentView === 'course' ? 'text-lg font-serif italic' : 'text-sm font-sans'}`}>
                            {topic.title}
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            {isCompleted && (
                              <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold hidden xl:block">Done</span>
                            )}
                            {isSelected && currentView === 'course' && <div className="h-2 w-2 rounded-full bg-[#FF9900]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
               );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-full scroll-smooth bg-[#FDFCFB] border-t-8 border-l-8 md:border-t-[12px] md:border-l-[12px] border-white text-[#1A1A1A]">
        <header className="sticky top-0 z-30 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-[#1A1A1A]/5 rounded text-[#1A1A1A]" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-semibold tracking-widest uppercase">
              {currentView === 'cheatsheet' ? (
                <>
                  <span className="opacity-60">Resources</span>
                  <span className="text-[#FF9900]">/</span>
                  <span>Cheat Sheet</span>
                </>
              ) : (
                <>
                  <span className="opacity-60">{selectedDomainTitle}</span>
                  <span className="text-[#FF9900]">/</span>
                  <span>{selectedTopic?.title}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#1A1A1A]">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
              Completion: {Math.round((completedTopics.size / courseData.reduce((acc, d) => acc + d.topics.length, 0)) * 100)}%
            </div>
          </div>
        </header>

        {currentView === 'cheatsheet' ? (
          <CheatSheet />
        ) : (
          <div className="max-w-4xl mx-auto px-8 py-16">
            {selectedTopic && (
              <>
                <div className="flex flex-col md:flex-row md:items-end gap-12 mb-16">
                  <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85] md:w-2/3">
                    {selectedTopic.title}.
                  </h1>
                  <div className="md:w-1/3 pb-2">
                    <p className="text-sm leading-relaxed opacity-70 italic border-l-2 border-[#FF9900] pl-6 font-serif">
                      Carefully review the compendium text below to master essential AI practitioner patterns.
                    </p>
                  </div>
                </div>

                <div className="space-y-16">
                  {selectedTopic.subtopics.map((subtopic, index) => (
                    <section key={index} className="border-t border-[#1A1A1A]/20 pt-8 mt-8">
                      <span className="text-[10px] font-bold uppercase tracking-widest block mb-4 text-[#FF9900]">0{index + 1}. Subtopic</span>
                      <h3 className="text-3xl font-serif italic font-medium text-[#1A1A1A] mb-6">{subtopic.title}</h3>
                       <div className="prose prose-slate prose-lg max-w-none text-[#1A1A1A]/80 font-sans text-sm md:text-base leading-relaxed">
                         <ReactMarkdown>{subtopic.content}</ReactMarkdown>
                      </div>
                    </section>
                  ))}
                </div>

                <div className="pt-16 mt-8">
                  <Quiz 
                    topic={selectedTopic} 
                    onComplete={() => handleTopicComplete(selectedTopic!.id)} 
                  />
                </div>

                <footer className='mt-24 pt-8 border-t border-[#1A1A1A]/10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold mb-32'>
                  <div className='flex gap-12'>
                    <span>Duration: Self-Paced</span>
                    <span>AIF-C01 Prep</span>
                  </div>
                  <div>
                     <span>Framework &copy; 2024</span>
                  </div>
                </footer>
              </>
            )}
          </div>
        )}
      </main>

      {/* Floating AI Tutor Toggle */}
      <button
        onClick={() => setIsTutorOpen(true)}
        className={`fixed bottom-12 right-12 px-6 py-4 bg-[#1A1A1A] text-white shadow-[8px_8px_0_0_#FF9900] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FF9900] transition-all z-40 flex items-center gap-4 font-semibold uppercase tracking-widest text-[10px] border border-white ${isTutorOpen ? 'translate-y-12 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
      >
        <span className="font-bold">Access AI Tutor</span>
        <span className="text-[#FF9900] text-xl leading-none">→</span>
      </button>

      {/* AI Tutor Component */}
      <AITutor isOpen={isTutorOpen} onClose={() => setIsTutorOpen(false)} />

    </div>
  );
}

