import { Printer, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { cheatSheetData } from '../data/cheatSheetData';

export function CheatSheet() {
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!contentRef.current) return;
    setIsExporting(true);

    try {
      const element = contentRef.current;
      // Capture the element styling correctly
      const canvas = await html2canvas(element, {
        scale: 2, // Better resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const padding = 10; // 10mm padding
      const availableWidth = pdfWidth - padding * 2;
      
      const imgWidth = canvas.width;
      const imgHeight = (canvas.height * availableWidth) / imgWidth;
      
      let heightLeft = imgHeight;
      let position = padding;

      // Add the first page
      pdf.addImage(imgData, 'PNG', padding, position, availableWidth, imgHeight);
      heightLeft -= (pdfHeight - padding * 2);

      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position -= (pdfHeight - padding * 2); // Shift the image up by one page height
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', padding, position + padding * 2, availableWidth, imgHeight); // Re-add padding offset
        heightLeft -= (pdfHeight - padding * 2);
      }

      pdf.save('AIF-C01-Cheat-Sheet.pdf');
    } catch (error) {
      console.error('Failed to export PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-16 print:p-0 print:m-0 print:max-w-full sheet-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 print:hidden">
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
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#FF9900] hover:text-[#1A1A1A] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold border border-[#1A1A1A] flex items-center gap-3 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {isExporting ? 'Generating PDF...' : 'Export to PDF'}
        </button>
      </div>

      <div ref={contentRef} className="bg-white">
        <div className="hidden print:block mb-12 border-b-4 border-[#1A1A1A] pb-6">
          <h1 className="text-5xl font-serif italic font-bold text-[#1A1A1A]">AWS Certified AI Practitioner (AIF-C01)</h1>
          <p className="text-sm font-mono opacity-70 mt-3">Comprehensive Exam Reference Manual // CONFIDENTIAL EXAM PREP // 80-PAGE TECHNICAL EQUIVALENT</p>
        </div>

        <div className="space-y-24 print:space-y-16">
          {cheatSheetData.map((domain, index) => (
            <section key={domain.id} className="break-inside-avoid-page">
              <div className="mb-8 border-b-2 border-[#1A1A1A] pb-4">
                <h2 className="text-[18px] md:text-[22px] font-bold uppercase tracking-widest text-[#FF9900] print:text-[#1A1A1A]">
                  {domain.title} <span className="opacity-50 ml-2">({domain.weight})</span>
                </h2>
              </div>
              
              <div className="prose prose-slate max-w-none prose-h3:text-2xl prose-h3:font-serif prose-h3:italic prose-h3:text-[#1A1A1A] prose-h3:mt-12 prose-h3:mb-6 prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-[#1A1A1A]/90 prose-li:text-[15px] prose-li:leading-relaxed prose-li:text-[#1A1A1A]/90 prose-strong:font-bold prose-strong:text-[#1A1A1A] print:prose-p:text-[12px] print:prose-li:text-[12px] prose-table:w-full prose-table:border-collapse prose-th:bg-[#1A1A1A] prose-th:text-white prose-th:p-4 prose-th:text-left prose-td:border prose-td:border-[#1A1A1A]/20 prose-td:p-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{domain.content}</ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

