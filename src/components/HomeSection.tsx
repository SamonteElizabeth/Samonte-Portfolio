import React from 'react';
import {
  Briefcase,
  Layers,
  FolderGit2,
  Sparkles,
  MapPin,
  Award,
  Calendar,
  CheckCircle2,
  Linkedin,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { NavSection } from './Header';

interface HomeSectionProps {
  onNavigate: (section: NavSection) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Title & Page Header (Sitting under full-width cover banner and overlapping icon) */}
      <div className="space-y-3">
        {/* Overlapping Page Icon Box (Overlaps the full-width cover banner edge) */}
        <div className="-mt-10 sm:-mt-12 relative inline-block z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#fffdfa] dark:bg-[#202020] border border-[#e8dfd3] dark:border-[#38332b] shadow-xs flex items-center justify-center text-3xl sm:text-4xl select-none">
            💼
          </div>
        </div>

        {/* Page Title & Subtitle matching the uploaded image */}
        <div className="space-y-1.5 pt-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-sm sm:text-base text-[#5f5e5b] dark:text-[#9b9a97] font-normal">
            Business Excellence Specialist II & Business Analyst
          </p>

          {/* Metadata Properties */}
          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-[#787774] dark:text-[#9b9a97] pt-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#787774] dark:text-[#9b9a97]" />
              {PROFILE_DATA.location}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              STI College Lipa ({PROFILE_DATA.education.distinction})
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#787774] dark:text-[#9b9a97]" />
              2024 – Present
            </span>
            <span>·</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0077b5] hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary Callout */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#f7f7f5] dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] text-sm leading-relaxed text-[#37352f] dark:text-[#e6e5e3]">
        <div className="text-[11px] font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider mb-2">
          Executive Summary
        </div>
        <p className="text-sm sm:text-[15px] leading-relaxed text-[#37352f]/90 dark:text-[#e6e5e3]/90">
          "{PROFILE_DATA.summary}"
        </p>
      </div>

      {/* 4 Summary Cards */}
      <div className="space-y-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9b9a97] px-1">
          Executive Overview
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: 7 Deployed Systems */}
          <button
            onClick={() => onNavigate('projects')}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] hover:border-[#4f46e5] dark:hover:border-[#818cf8] hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-all text-left group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums font-mono text-[#37352f] dark:text-[#e6e5e3]">
                {PROFILE_DATA.stats.deployedSystems}
              </span>
              <CheckCircle2 className="w-4 h-4 opacity-75 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
              Deployed Systems
            </div>
            <div className="text-[11px] text-[#787774] dark:text-[#9b9a97] mt-0.5">
              Live in production
            </div>
          </button>

          {/* Card 2: 12 Work Projects */}
          <button
            onClick={() => onNavigate('projects')}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] hover:border-[#4f46e5] dark:hover:border-[#818cf8] hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-all text-left group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center justify-between text-[#4f46e5] dark:text-[#818cf8] mb-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums font-mono text-[#37352f] dark:text-[#e6e5e3]">
                {PROFILE_DATA.stats.workProjects}
              </span>
              <FolderGit2 className="w-4 h-4 opacity-75 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
              Work Projects
            </div>
            <div className="text-[11px] text-[#787774] dark:text-[#9b9a97] mt-0.5">
              Enterprise initiatives
            </div>
          </button>

          {/* Card 3: 2 Personal Projects */}
          <button
            onClick={() => onNavigate('projects')}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] hover:border-[#4f46e5] dark:hover:border-[#818cf8] hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-all text-left group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center justify-between text-[#9065b0] dark:text-[#a77ec8] mb-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums font-mono text-[#37352f] dark:text-[#e6e5e3]">
                {PROFILE_DATA.stats.personalProjects}
              </span>
              <Sparkles className="w-4 h-4 opacity-75 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
              Personal Projects
            </div>
            <div className="text-[11px] text-[#787774] dark:text-[#9b9a97] mt-0.5">
              SaveWise & PeriodCare
            </div>
          </button>

          {/* Card 4: 3 Core Expertise Areas */}
          <button
            onClick={() => onNavigate('skills')}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] hover:border-[#4f46e5] dark:hover:border-[#818cf8] hover:bg-[#fafaf9] dark:hover:bg-[#252525] transition-all text-left group cursor-pointer shadow-2xs"
          >
            <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 mb-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums font-mono text-[#37352f] dark:text-[#e6e5e3]">
                {PROFILE_DATA.stats.coreExpertiseAreas}
              </span>
              <Layers className="w-4 h-4 opacity-75 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
              Core Expertise
            </div>
            <div className="text-[11px] text-[#787774] dark:text-[#9b9a97] mt-0.5">
              Analysis, Planning, AI
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
