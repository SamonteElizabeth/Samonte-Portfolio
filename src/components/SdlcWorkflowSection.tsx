import React, { useState } from 'react';
import {
  GitMerge,
  Target,
  FileSpreadsheet,
  Layout,
  Code2,
  CheckCheck,
  Rocket,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Bot,
  FileText,
  UserCheck,
} from 'lucide-react';
import { SDLC_PHASES, SdlcPhase } from '../data/portfolioData';

export const SdlcWorkflowSection: React.FC = () => {
  const [expandedPhases, setExpandedPhases] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: true,
    6: false,
    7: false,
  });

  const togglePhase = (phaseNumber: number) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseNumber]: !prev[phaseNumber],
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    SDLC_PHASES.forEach((p) => (all[p.phaseNumber] = true));
    setExpandedPhases(all);
  };

  const collapseAll = () => {
    const all: Record<number, boolean> = {};
    SDLC_PHASES.forEach((p) => (all[p.phaseNumber] = false));
    setExpandedPhases(all);
  };

  const getPhaseIcon = (phaseNumber: number) => {
    switch (phaseNumber) {
      case 1:
        return <Target className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8]" />;
      case 2:
        return <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 3:
        return <Layout className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 4:
        return <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 5:
        return <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 6:
        return <Rocket className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 7:
        return <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      default:
        return <GitMerge className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97] mb-1">
            <GitMerge className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
            <span>SDLC Blueprint · 7 End-to-End Stages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
            AI-Powered SDLC Workflow
          </h2>
          <p className="text-xs sm:text-sm text-[#787774] dark:text-[#9b9a97] mt-1">
            Integrating Business Analyst precision with generative prompt optimization across the project lifecycle.
          </p>
        </div>

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

      {/* Notion Workflow Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-5 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#e9e9e7] dark:before:bg-[#2e2e2e]">
        {SDLC_PHASES.map((phase: SdlcPhase) => {
          const isExpanded = expandedPhases[phase.phaseNumber] ?? false;

          return (
            <div key={phase.phaseNumber} className="relative group">
              {/* Phase Node Dot */}
              <div className="absolute -left-6 sm:-left-8 top-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#202020] border-2 border-[#e9e9e7] dark:border-[#2e2e2e] group-hover:border-[#4f46e5] dark:group-hover:border-[#818cf8] flex items-center justify-center text-[11px] font-mono font-bold text-[#37352f] dark:text-[#e6e5e3] transition-colors z-10">
                {phase.phaseNumber}
              </div>

              {/* Phase Card */}
              <div className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] shadow-2xs overflow-hidden transition-colors">
                {/* Header Toggle */}
                <button
                  onClick={() => togglePhase(phase.phaseNumber)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] shrink-0">
                      {getPhaseIcon(phase.phaseNumber)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#4f46e5] dark:text-[#818cf8]">
                          Phase 0{phase.phaseNumber}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#37352f] dark:text-[#e6e5e3]">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#787774] dark:text-[#9b9a97] mt-0.5 truncate max-w-xs sm:max-w-md">
                        {phase.summary}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#787774] dark:text-[#9b9a97] shrink-0">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8]" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expandable Phase Details */}
                {isExpanded && (
                  <div className="p-5 pt-2 border-t border-[#e9e9e7] dark:border-[#2e2e2e] space-y-3.5 text-xs">
                    {/* Business Analyst Focus */}
                    <div className="p-3.5 rounded-lg bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#37352f] dark:text-[#e6e5e3] uppercase tracking-wider text-[11px]">
                        <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Business Analyst Role & Focus</span>
                      </div>
                      <p className="text-[#37352f]/90 dark:text-[#e6e5e3]/90 leading-relaxed text-xs">
                        {phase.baFocus}
                      </p>
                    </div>

                    {/* AI Prompt Optimization Integration */}
                    <div className="p-3.5 rounded-lg bg-[#4f46e5]/5 dark:bg-[#818cf8]/10 border border-[#4f46e5]/20 dark:border-[#818cf8]/20 space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#4f46e5] dark:text-[#818cf8] uppercase tracking-wider text-[11px]">
                        <Bot className="w-3.5 h-3.5" />
                        <span>AI & Prompt Optimization Layer</span>
                      </div>
                      <p className="text-[#37352f]/90 dark:text-[#e6e5e3]/90 leading-relaxed text-xs">
                        {phase.aiIntegration}
                      </p>
                    </div>

                    {/* Deliverables tags */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[11px] text-[#787774] dark:text-[#9b9a97]">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Core Deliverables</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.deliverables.map((del, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-[#37352f] dark:text-[#e6e5e3] text-[11px] font-medium"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
