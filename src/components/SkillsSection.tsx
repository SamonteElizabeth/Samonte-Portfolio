import React, { useState } from 'react';
import {
  Layers,
  Search,
  CheckCircle2,
  FileText,
  Sparkles,
} from 'lucide-react';
import { SKILL_MODULES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModuleFilter, setActiveModuleFilter] = useState<string>('all');

  const filteredModules = SKILL_MODULES.map((mod) => {
    const matchingSkills = mod.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...mod,
      matchingSkills,
    };
  }).filter((mod) => {
    if (activeModuleFilter !== 'all' && mod.id !== activeModuleFilter) {
      return false;
    }
    if (searchQuery.trim() === '') return true;
    return mod.matchingSkills.length > 0;
  });

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'mod-1':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'mod-2':
        return <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'mod-3':
        return <Sparkles className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8]" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const totalSkillsCount = SKILL_MODULES.reduce((acc, m) => acc + m.skills.length, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97] mb-1">
            <Layers className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
            <span>Competency Framework · 3 Modules · {totalSkillsCount} Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
            Skills & Competencies
          </h2>
          <p className="text-xs sm:text-sm text-[#787774] dark:text-[#9b9a97] mt-1">
            Core requirements discovery, process engineering, and AI prompt optimization.
          </p>
        </div>
      </div>

      {/* Notion Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-xl bg-[#f7f7f5] dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e]">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#787774] dark:text-[#9b9a97]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Requirements, Prompt, UAT)..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-[#37352f] dark:text-[#e6e5e3] placeholder-[#787774] dark:placeholder-[#9b9a97] focus:outline-hidden focus:border-[#4f46e5] dark:focus:border-[#818cf8] transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0.5 sm:pb-0 text-xs">
          <button
            onClick={() => setActiveModuleFilter('all')}
            className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeModuleFilter === 'all'
                ? 'bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#e6e5e3] font-medium shadow-2xs border border-[#e9e9e7] dark:border-[#2e2e2e]'
                : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
            }`}
          >
            All Modules
          </button>
          {SKILL_MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModuleFilter(m.id)}
              className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeModuleFilter === m.id
                  ? 'bg-white dark:bg-[#191919] text-[#4f46e5] dark:text-[#818cf8] font-medium shadow-2xs border border-[#e9e9e7] dark:border-[#2e2e2e]'
                  : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
              }`}
            >
              {m.code}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {filteredModules.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] text-xs text-[#787774] dark:text-[#9b9a97]">
            No skills found matching "{searchQuery}".
          </div>
        ) : (
          filteredModules.map((module) => {
            const skillsToRender = searchQuery.trim() ? module.matchingSkills : module.skills;

            return (
              <div
                key={module.id}
                className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] p-5 sm:p-6 transition-colors shadow-2xs space-y-4"
              >
                {/* Module Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#e9e9e7] dark:border-[#2e2e2e] pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] shrink-0 mt-0.5">
                      {getModuleIcon(module.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-[#4f46e5] dark:text-[#818cf8]">
                          {module.code}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#37352f] dark:text-[#e6e5e3]">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#787774] dark:text-[#9b9a97] mt-0.5">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#787774] dark:text-[#9b9a97] px-2.5 py-0.5 rounded-md bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] shrink-0 tabular-nums">
                    {skillsToRender.length} skills
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
                  {skillsToRender.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-xs font-medium text-[#37352f] dark:text-[#e6e5e3] hover:border-[#4f46e5] dark:hover:border-[#818cf8] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]/60 dark:bg-[#818cf8]/60 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
