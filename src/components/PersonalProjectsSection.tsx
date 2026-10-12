import React from 'react';
import {
  Sparkles,
  PiggyBank,
  CalendarHeart,
} from 'lucide-react';
import { PERSONAL_PROJECTS } from '../data/portfolioData';

export const PersonalProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    if (id === 'savewise') {
      return <PiggyBank className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
    return <CalendarHeart className="w-6 h-6 text-rose-500 dark:text-rose-400" />;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97]">
          <Sparkles className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
          <span>Independent Applications · User-Centric Solutions</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
          Personal Projects
        </h1>
        <p className="text-xs sm:text-sm text-[#787774] dark:text-[#9b9a97]">
          Self-initiated software solutions addressing personal finance and personal health management.
        </p>
      </div>

      {/* Two Polished Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PERSONAL_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] p-6 shadow-2xs transition-colors flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Card Top */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] flex items-center justify-center shrink-0">
                  {getProjectIcon(project.id)}
                </div>
                <span className="text-[11px] font-mono text-[#787774] dark:text-[#9b9a97] px-2.5 py-0.5 rounded-md bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333]">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-[#37352f] dark:text-[#e6e5e3]">
                {project.name}
              </h2>

              {/* Exact Description from prompt */}
              <p className="text-sm text-[#37352f]/90 dark:text-[#e6e5e3]/90 leading-relaxed mt-2 p-3 rounded-lg bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e]">
                "{project.description}"
              </p>

              {/* Core Highlights */}
              <div className="mt-4 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9b9a97]">
                  Key Functional Scope
                </div>
                <ul className="space-y-1.5 text-xs text-[#37352f] dark:text-[#e6e5e3]">
                  {project.coreHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] dark:bg-[#818cf8] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Audience Note */}
            <div className="pt-3 border-t border-[#e9e9e7] dark:border-[#2e2e2e] text-xs text-[#787774] dark:text-[#9b9a97]">
              <span className="font-medium text-[#37352f] dark:text-[#e6e5e3]">Audience: </span>
              <span>{project.targetUsers}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
