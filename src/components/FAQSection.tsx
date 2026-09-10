import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal, StaggerGroup, StaggerItem } from './ScrollReveal';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-differentiation',
    question: 'How does SalesNego differ from traditional lead gen agencies?',
    answer:
      'Traditional lead generation agencies focus purely on top-of-funnel activity—blasting generic email sequences to hit vanity meeting quotas, leaving your team with unqualified calls and wasted time. SalesNego is a senior commercial execution partner. We bridge prospect engagement, rigorous discovery, multi-stakeholder navigation, proposal building, and negotiation through to closed revenue.',
    highlight: 'Full-cycle commercial execution vs. vanity meeting booking',
  },
  {
    id: 'faq-pricing-alignment',
    question: 'How does your commercial pricing model align with closed revenue?',
    answer:
      'We believe in authentic skin in the game. Rather than charging rigid, inflated consulting fees or per-lead markups that incentivize low-quality meetings, our partnerships combine a predictable monthly execution retainer with a performance component linked to closed revenue. We share the commercial upside when your pipeline successfully converts into cash.',
    highlight: 'Monthly execution retainer + performance on closed cash',
  },
  {
    id: 'faq-senior-execution',
    question: 'Who actually handles our commercial calls and deal execution?',
    answer:
      'You are never outsourced to junior script-readers or offshore call centers. Every outbound touch, discovery call, and commercial meeting is led by seasoned B2B enterprise sales practitioners who understand complex software architectures, executive buying committees, and procurement realities. Your brand is represented with executive-level domain credibility from day one.',
    highlight: 'Senior B2B commercial operators, not junior call farms',
  },
  {
    id: 'faq-unified-system',
    question: 'Why connect GTM Strategy, RevOps, and Sales Execution in one loop?',
    answer:
      'Most growing companies suffer from fragmented silos: an abstract strategy deck that sits unread in Google Drive, a chaotic CRM full of dirty data, and ad-hoc outbound prospecting. By unifying Strategy, AI-accelerated RevOps, and Deal Execution into a single commercial loop, live learnings from customer calls continuously refine market positioning, pipeline qualification, and automated workflows.',
    highlight: 'Unified 3-in-1 engine eliminating agency and tool silos',
  },
  {
    id: 'faq-ideal-fit',
    question: 'What types of companies achieve the highest ROI with SalesNego?',
    answer:
      'We deliver the strongest impact for B2B technology providers, high-ACV software companies, and founder-led businesses ($500K to $10M+ ARR) ready to graduate from ad-hoc founder selling to an institutional commercial engine. We bypass the 6–9 month lag, recruitment risk, and heavy overhead of building an entire internal commercial department from scratch.',
    highlight: 'High-ACV B2B tech and scaling founder-led sales teams',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openCalendly } = useNavigation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions"
      className="w-full py-12 md:py-16 border-b border-gray-200 dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={20} className="max-w-4xl mb-8 text-left">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[#FF6004] bg-[#FF6004]/10 border border-[#FF6004]/20 dark:text-[#FE9E30] dark:bg-white/5 dark:border-white/10">
              COMMERCIAL DIFFERENTIATION &amp; FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-2">
            How SalesNego Differs in the Market
          </h2>
          <p className="text-sm sm:text-base text-[#103CE7] dark:text-[#60A5FA] font-medium leading-relaxed">
            Clear answers on our commercial partnership model, aligned incentives, and end-to-end deal execution.
          </p>
        </ScrollReveal>

        {/* Compact, Left-Aligned FAQ Accordion List with Smooth Hover-Expansion, Ease-In-Out Motion & Animated Dividers */}
        <div
          id="faq-accordion-container"
          onMouseLeave={() => setOpenIndex(null)}
          className="max-w-4xl"
        >
          <StaggerGroup staggerDelay={0.06} className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <StaggerItem key={faq.id} distance={16}>
                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenIndex(index)}
                  >
                    <div
                      id={`faq-card-${index}`}
                      className={`rounded-xl border transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? 'bg-[#F7F9FE] dark:bg-[#27272A] border-[#FF6004]/40 dark:border-[#FE9E30]/40 shadow-xs'
                          : 'bg-white dark:bg-[#202023] border-gray-200 dark:border-zinc-700/60 hover:border-gray-300 dark:hover:border-zinc-600 shadow-2xs dark:shadow-none'
                      }`}
                    >
                      <button
                        type="button"
                        id={`faq-btn-${index}`}
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] rounded-xl cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#FF6004]/10 dark:bg-white/5 text-[#FF6004] dark:text-[#FE9E30] shrink-0">
                            0{index + 1}
                          </span>
                          <span
                            title={faq.question}
                            className="text-sm sm:text-base font-bold text-[#191919] dark:text-white truncate"
                          >
                            {faq.question}
                          </span>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-in-out ${
                            isOpen
                              ? 'bg-[#FF6004] text-white rotate-180'
                              : 'bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200'
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${index}`}
                            role="region"
                            aria-labelledby={`faq-btn-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                              transition: {
                                height: {
                                  duration: 0.3,
                                  ease: [0.4, 0, 0.2, 1], // Smooth standard ease-in-out
                                },
                                opacity: {
                                  duration: 0.22,
                                  delay: 0.05,
                                  ease: [0.4, 0, 0.2, 1],
                                },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: {
                                  duration: 0.24,
                                  ease: [0.4, 0, 0.2, 1],
                                },
                                opacity: {
                                  duration: 0.16,
                                  ease: [0.4, 0, 0.2, 1],
                                },
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-[#606060] dark:text-zinc-300 leading-relaxed border-t border-gray-100 dark:border-zinc-700/40">
                              <p className="mb-3">{faq.answer}</p>
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800/90 border border-gray-200 dark:border-zinc-700/60 text-xs font-semibold text-[#FF6004] dark:text-[#FE9E30]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] dark:bg-[#FE9E30]" />
                                <span>{faq.highlight}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Subtle, animated horizontal line divider between each FAQ item */}
                    {index < faqs.length - 1 && (
                      <div className="pt-2 px-3">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6004]/30 dark:via-[#FE9E30]/35 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none" />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Compact bottom prompt with Scroll Reveal */}
        <ScrollReveal delay={0.15} distance={16} className="max-w-4xl mt-6 p-4 rounded-xl bg-[#0A192F] dark:bg-[#27272A] border border-[#1E3A5F] dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div>
            <p className="text-sm font-bold text-white">
              Have a specific commercial question for your category?
            </p>
            <p className="text-xs text-slate-300 dark:text-zinc-400">
              Let’s evaluate your sales cycle, ICP velocity, and execution priorities directly.
            </p>
          </div>
          <button
            type="button"
            id="faq-cta-calendly"
            onClick={openCalendly}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF6004] hover:bg-[#e05403] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>Discuss Growth Priorities</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
