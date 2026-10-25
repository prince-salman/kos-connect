import React, { useState } from 'react';
import { getFeaturedKos } from '../data/kosData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const kos = getFeaturedKos();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF4E0] text-[#7A5210] text-xs font-bold mb-3 border border-[#F6DEB0]">
            <HelpCircle className="w-3.5 h-3.5 text-[#F6B84A]" />
            <span>Tanya Jawab Seputar Move Out Dormy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#5E4339] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#7E6359]">
            Semua hal penting yang perlu diketahui mahasiswa President University seputar Kos ABS & Kos Connect.
          </p>
        </div>

        <div className="space-y-3.5">
          {kos.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#EBDAC8] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF4EB]/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#5E4339]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl bg-[#FAF4EB] text-[#5E4339] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#FCECEE] text-[#E0707D]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#7E6359] leading-relaxed border-t border-[#F1E4D6] pt-3 bg-[#FFFDF9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
