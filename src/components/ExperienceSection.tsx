import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { WORK_EXPERIENCE, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'bes-2': true,
    'bes-1': true,
    'ba': true,
    'it-intern': false,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allTrue: Record<string, boolean> = {};
    WORK_EXPERIENCE.forEach((item) => (allTrue[item.id] = true));
    setExpandedIds(allTrue);
  };

  const collapseAll = () => {
    const allFalse: Record<string, boolean> = {};
    WORK_EXPERIENCE.forEach((item) => (allFalse[item.id] = false));
    setExpandedIds(allFalse);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97] mb-1">
            <Briefcase className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
            <span>Professional Timeline · Reverse Chronological</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#787774] dark:text-[#9b9a97] mt-1">
            Requirements engineering, enterprise SDLC ownership, and generative AI workflow integration.
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={expandAll}
            className="text-xs px-3 py-1.5 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#37352f] dark:text-[#e6e5e3] hover:bg-[#efefee] dark:hover:bg-[#303030] transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="text-xs px-3 py-1.5 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#787774] dark:text-[#9b9a97] hover:bg-[#efefee] dark:hover:bg-[#303030] transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-3.5">
        {WORK_EXPERIENCE.map((exp: ExperienceItem) => {
          const isExpanded = expandedIds[exp.id] ?? false;

          return (
            <div
              key={exp.id}
              className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] transition-colors shadow-2xs overflow-hidden"
            >
              {/* Card Header (Toggle Row) */}
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-5 sm:p-6 flex items-start gap-3.5 text-left hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-colors group cursor-pointer"
                aria-expanded={isExpanded}
              >
                <div className="mt-1 text-[#787774] dark:text-[#9b9a97] group-hover:text-[#4f46e5] dark:group-hover:text-[#818cf8] transition-colors shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8]" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#37352f] dark:text-[#e6e5e3]">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#787774] dark:text-[#9b9a97] shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#787774] dark:text-[#9b9a97] mt-1">
                    {exp.companyScope}
                  </p>
                </div>
              </button>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-1 sm:px-6 sm:pl-14 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60 space-y-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9b9a97] mb-2.5">
                      Key Responsibilities & Deliverables
                    </div>
                    <ul className="space-y-2 text-sm text-[#37352f]/90 dark:text-[#e6e5e3]/90">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] dark:bg-[#818cf8] mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core competencies */}
                  {exp.keyTools && exp.keyTools.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider mb-2">
                        Core Competencies Applied
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.keyTools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-[#37352f] dark:text-[#e6e5e3] text-[11px]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
