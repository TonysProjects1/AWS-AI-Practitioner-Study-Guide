import { Download, Printer, FileDown, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { cheatSheetData } from '../data/cheatSheetData';

export function CheatSheet() {
  const [showPrintModal, setShowPrintModal] = useState(false);

  const handleExportPDF = () => {
    // Check if running in an iframe (AI Studio preview environment)
    if (window.self !== window.top) {
      setShowPrintModal(true);
    } else {
      window.print();
    }
  };

  const handleDownloadMarkdown = () => {
    let mdContent = `# AWS Certified AI Practitioner (AIF-C01) - Cheat Sheet\n\n`;
    cheatSheetData.forEach(domain => {
      mdContent += `## ${domain.title}\n${domain.content}\n\n`;
    });

    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AIF-C01-CheatSheet.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-16 sheet-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FF9900] uppercase mb-2 block">Comprehensive Reference</span>
          <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85]">
            Cheat Sheet.
          </h1>
          <p className="mt-6 text-sm text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
            This module contains highly detailed, deeply technical reference material spanning all 5 exam domains. 
            Reviewing this guide constitutes reviewing a 50+ page technical preparation manual. 
            Use the export to PDF function to print or save a copy for offline study.
          </p>
        </div>
        <div className="flex flex-col items-end gap-3 shrink-0">
          <button
            onClick={handleExportPDF}
            className="px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-3 shrink-0"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {showPrintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white p-8 max-w-md w-full border-2 border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A]">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <Printer className="w-5 h-5 text-[#FF9900]" />
              PDF Export Details
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 mb-6 leading-relaxed">
              Exporting to PDF is blocked while inside the AI Studio preview window. 
              To save this cheat sheet as a PDF, please click the <strong>"Open in New Tab"</strong> icon at the top right of your screen, and then use your browser's Print feature (Cmd+P or Ctrl+P) targeting "Save to PDF".
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleDownloadMarkdown}
                className="w-full py-3 px-4 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Download as Markdown instead
              </button>
              <button 
                onClick={() => setShowPrintModal(false)}
                className="w-full py-3 px-4 bg-[#FF9900] text-white hover:bg-[#1A1A1A] transition-colors text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-4">
        <div className="space-y-24">
          {cheatSheetData.map((domain, index) => (
            <section key={domain.id} className="break-inside-avoid-page">
              <div className="mb-8 border-b-2 border-[#1A1A1A] pb-4">
                <h2 className="text-[18px] md:text-[22px] font-bold uppercase tracking-widest text-[#FF9900]">
                  {domain.title} <span className="opacity-50 ml-2">({domain.weight})</span>
                </h2>
              </div>
              
              <div className="prose prose-slate max-w-none prose-h3:text-2xl prose-h3:font-serif prose-h3:italic prose-h3:text-[#1A1A1A] prose-h3:mt-12 prose-h3:mb-6 prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-[#1A1A1A]/90 prose-li:text-[15px] prose-li:leading-relaxed prose-li:text-[#1A1A1A]/90 prose-strong:font-bold prose-strong:text-[#1A1A1A] prose-table:w-full prose-table:border-collapse prose-th:bg-[#1A1A1A] prose-th:text-white prose-th:p-4 prose-th:text-left prose-td:border prose-td:border-[#1A1A1A]/20 prose-td:p-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{domain.content}</ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

