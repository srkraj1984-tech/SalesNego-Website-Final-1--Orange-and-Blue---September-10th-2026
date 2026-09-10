import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, X, ChevronRight } from 'lucide-react';
import { AnonymizedDeal } from '../types';

export const CaseStudiesPage: React.FC = () => {
  const { openCalendly } = useNavigation();
  const [selectedDeal, setSelectedDeal] = useState<AnonymizedDeal | null>(null);

  // Anonymized Track Record by Sector/Domain - client company names removed per explicit user requirement
  const founderTrackRecord = [
    {
      domain: 'Laboratory Digitisation & Life Sciences SaaS',
      category: 'SaaS / Life Sciences',
      description:
        'SaaS and laboratory digitisation experience spanning discovery, workflow mapping, solution positioning, implementation coordination, user adoption and multi-year account growth.',
    },
    {
      domain: 'Enterprise Technology & IT Services Platform',
      category: 'Enterprise Technology & Services',
      description:
        'Enterprise technology and IT-services selling involving complex technical-commercial alignment, RFP qualification, statement-of-work scoping, proposal negotiation and regional expansion.',
    },
    {
      domain: 'AI Scoping & Custom Software Development',
      category: 'AI & Custom Software',
      description:
        'International business development across artificial intelligence, enterprise SaaS, digital products and custom software, including technical scoping, proposals, negotiation and closure.',
    },
    {
      domain: 'B2B MarTech & Pipeline CRM SaaS',
      category: 'MarTech & CRM SaaS',
      description:
        'B2B MarTech and CRM SaaS experience including zero-to-one go-to-market motions, targeted outbound campaigns, value proposition positioning, product demos and structured subscription sales.',
    },
    {
      domain: 'Strategic Commercial Advisory & Expansion',
      category: 'Enterprise Advisory',
      description:
        'Commercial development and advisory engagements focused on authoritative commercial execution, cross-border market entry and disciplined pipeline qualification.',
    },
  ];

  const anonymizedDeals: AnonymizedDeal[] = [
    {
      id: 'deal-1',
      category: 'Artificial Intelligence',
      title: 'AI Security / Computer Vision',
      scope: 'Commercial execution across computer vision security applications.',
      commercialFocus:
        'Solution positioning, technical qualification, pilot alignment and enterprise stakeholder consensus.',
    },
    {
      id: 'deal-2',
      category: 'Cybersecurity',
      title: 'SaaS Security Platform',
      scope: 'Go-to-market engagement for cloud-native security software.',
      commercialFocus:
        'Translating complex technical architecture into executive business cases and structured buying evaluation.',
    },
    {
      id: 'deal-3',
      category: 'Enterprise Software',
      title: 'Enterprise Integration',
      scope: 'Mid-market and enterprise system integration selling.',
      commercialFocus:
        'Cross-departmental discovery, RFP qualification, commercial scoping and contract negotiation.',
    },
    {
      id: 'deal-4',
      category: 'Climate & ESG Tech',
      title: 'Climate-Risk Platform',
      scope: 'B2B analytics and risk-modeling software commercialisation.',
      commercialFocus:
        'ICP prioritization, stakeholder committee mapping and value-hypothesis validation with sustainability executives.',
    },
    {
      id: 'deal-5',
      category: 'EdTech & HR Tech',
      title: 'Learning Management SaaS',
      scope: 'Workplace learning and compliance platform expansion.',
      commercialFocus:
        'Discovery process, requirements mapping, commercial proposal presentation and customer success transition.',
    },
    {
      id: 'deal-6',
      category: 'Business Systems',
      title: 'ERP Implementation',
      scope: 'Complex multi-stakeholder operational platform engagements.',
      commercialFocus:
        'Workflow diagnostic, commercial proposal structuring and negotiation through procurement.',
    },
    {
      id: 'deal-7',
      category: 'Commerce Infrastructure',
      title: 'B2B Marketplace',
      scope: 'Two-sided commercial platform business development.',
      commercialFocus:
        'High-priority supplier acquisition, qualification, buyer onboarding and account retention.',
    },
    {
      id: 'deal-8',
      category: 'Physical Analytics',
      title: 'Visitor Intelligence Platform',
      scope: 'Spatial analytics and IoT intelligence commercial motion.',
      commercialFocus:
        'Initial market outreach, technical demo coordination, objection management and deal closure.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="case-studies-hero"
        aria-label="Case Studies Hero"
        className="relative overflow-hidden w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B]"
      >
        {/* Dynamic Faded Grid Matrix Overlay - Enhanced Light Mode Visibility */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(255,96,4,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,4,0.22)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />

        {/* Light-colored Grid Matrix Overlay - Dark Mode Only */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-3">
              COMMERCIAL EXPERIENCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-6 leading-tight">
              Selected Commercial &amp; Technology Experience.
            </h1>
            <p className="text-base sm:text-lg text-[#606060] dark:text-zinc-300 leading-relaxed">
              SalesNego combines founder commercial track record with deep cross-border experience across SaaS, AI,
              enterprise technology and technical services.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Commercial Track Record (Anonymized: Client Names Removed) */}
      <section
        id="founder-track-record"
        aria-label="Founder Commercial Track Record"
        className="w-full py-16 md:py-20 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-2">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
              Founder Commercial Track Record
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400 mt-1">
              Verified commercial engagements across key technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderTrackRecord.map((item) => (
              <div
                key={item.domain}
                className="p-6 sm:p-7 rounded-xl bg-[#F7F9FE] dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 hover:border-[#FF6004]/50 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                      {item.domain}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FF6004]/10 dark:bg-[#FF6004]/15 text-[#FF6004] dark:text-[#FE9E30] shrink-0 self-start sm:self-auto">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-[#606060] dark:text-zinc-300 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Technology Deal Experience */}
      <section
        id="deal-experience"
        aria-label="Selected Technology Deal Experience"
        className="w-full py-16 md:py-24 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-2">
              ANONYMISED ENGAGEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
              Selected Technology Deal Experience
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400 mt-1">
              Client identities and sensitive commercial figures remain confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {anonymizedDeals.map((deal) => (
              <div
                key={deal.id}
                className="p-5 rounded-xl bg-white dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 hover:border-[#FF6004]/50 transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-1.5">
                    {deal.category}
                  </span>
                  <h3 className="text-base font-bold text-[#191919] dark:text-[#FFFFFF] mb-2 group-hover:text-[#FF6004] dark:group-hover:text-[#FE9E30] transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-xs text-[#606060] dark:text-zinc-300 leading-relaxed line-clamp-3">
                    {deal.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E1E1E1] dark:border-zinc-700/60">
                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6004] dark:text-[#FE9E30] hover:underline"
                  >
                    <span>View Deal Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-white dark:bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
            Discuss Your Commercial Priorities
          </h2>
          <p className="text-base text-[#606060] dark:text-zinc-300">
            Schedule a founder-led conversation to review relevance to your target market and sales cycle.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#FF6004] hover:bg-[#e05403] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
          >
            <span>Discuss Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Anonymized Deal Modal */}
      {selectedDeal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="deal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDeal(null);
          }}
        >
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-xl bg-white dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedDeal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#606060] dark:text-zinc-400 hover:text-[#191919] dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-1">
              {selectedDeal.category}
            </span>
            <h3
              id="deal-modal-title"
              className="text-xl font-extrabold text-[#191919] dark:text-[#FFFFFF] mb-4"
            >
              {selectedDeal.title}
            </h3>

            <div className="space-y-4 text-sm text-[#606060] dark:text-zinc-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#191919] dark:text-[#FFFFFF] block mb-1">
                  Scope of Engagement
                </span>
                <p className="leading-relaxed">{selectedDeal.scope}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#191919] dark:text-[#FFFFFF] block mb-1">
                  Commercial Focus
                </span>
                <p className="leading-relaxed">{selectedDeal.commercialFocus}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E1E1E1] dark:border-zinc-700/60 flex items-center justify-end">
              <button
                onClick={() => setSelectedDeal(null)}
                className="px-4 py-2 text-xs font-bold text-[#191919] dark:text-[#FFFFFF] bg-[#F7F9FE] dark:bg-[#18181B] border border-[#E1E1E1] dark:border-zinc-700/60 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
