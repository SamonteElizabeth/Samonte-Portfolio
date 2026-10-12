import React, { useState } from 'react';
import { WorkProjectsSection } from './WorkProjectsSection';
import { PersonalProjectsSection } from './PersonalProjectsSection';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'personal'>('work');

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Category Tabs: Work Projects vs Personal Projects */}
      <div className="flex items-center justify-between border-b border-[#e9e9e7] dark:border-[#2e2e2e] pb-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('work')}
            className={`pb-2.5 px-3 text-sm font-semibold transition-colors cursor-pointer border-b-2 -mb-[5px] ${
              activeTab === 'work'
                ? 'border-[#7c3aed] dark:border-[#a78bfa] text-[#7c3aed] dark:text-[#c4b5fd]'
                : 'border-transparent text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
            }`}
          >
            Work Projects (12)
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`pb-2.5 px-3 text-sm font-semibold transition-colors cursor-pointer border-b-2 -mb-[5px] ${
              activeTab === 'personal'
                ? 'border-[#7c3aed] dark:border-[#a78bfa] text-[#7c3aed] dark:text-[#c4b5fd]'
                : 'border-transparent text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
            }`}
          >
            Personal Projects (2)
          </button>
        </div>

        <span className="text-xs text-[#787774] dark:text-[#9b9a97] hidden sm:inline">
          {activeTab === 'work'
            ? 'Enterprise systems & 7 deployed solutions'
            : 'Independent user applications'}
        </span>
      </div>

      {/* Active Tab View */}
      {activeTab === 'work' ? (
        <WorkProjectsSection />
      ) : (
        <PersonalProjectsSection />
      )}
    </div>
  );
};
