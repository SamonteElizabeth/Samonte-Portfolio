import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PROFILE_DATA;

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9b9a97] px-1">
        Education & Academic Distinction
      </div>

      <div className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] p-6 sm:p-7 shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl font-bold text-[#37352f] dark:text-[#e6e5e3]">
                  {education.institution}
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200 border border-amber-300/60 dark:border-amber-700/60">
                  <Award className="w-3.5 h-3.5" />
                  {education.distinction}
                </span>
              </div>
              <p className="text-sm font-medium text-[#4f46e5] dark:text-[#818cf8] mt-1">
                {education.degree}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#787774] dark:text-[#9b9a97] self-start sm:self-auto bg-[#f7f7f5] dark:bg-[#262626] px-3 py-1 rounded-md border border-[#e9e9e7] dark:border-[#2e2e2e]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{education.years}</span>
          </div>
        </div>

        {/* Education Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#e9e9e7] dark:border-[#2e2e2e] text-xs">
          <div className="flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-[#787774] dark:text-[#9b9a97]" />
            <span className="text-[#787774] dark:text-[#9b9a97]">Campus:</span>
            <span className="font-medium text-[#37352f] dark:text-[#e6e5e3]">
              STI College Lipa, Philippines
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[#787774] dark:text-[#9b9a97]">Honor:</span>
            <span className="font-medium text-[#37352f] dark:text-[#e6e5e3]">
              Magna Cum Laude (High Academic Standing)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#787774] dark:text-[#9b9a97]" />
            <span className="text-[#787774] dark:text-[#9b9a97]">Major:</span>
            <span className="font-medium text-[#37352f] dark:text-[#e6e5e3]">
              Information Technology
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[#787774] dark:text-[#9b9a97]">Status:</span>
            <span className="font-medium text-[#37352f] dark:text-[#e6e5e3]">
              Graduated (Class of 2024)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
