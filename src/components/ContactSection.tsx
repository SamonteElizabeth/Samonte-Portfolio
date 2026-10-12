import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Linkedin,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97]">
          <Mail className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />
          <span>Professional Inquiries · Communication Channels</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
          Contact & Collaboration
        </h1>
        <p className="text-xs sm:text-sm text-[#787774] dark:text-[#9b9a97]">
          Get in touch for Business Analyst opportunities, system requirement consulting, or prompt engineering collaborations.
        </p>
      </div>

      {/* Notion Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="p-5 rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] shadow-2xs space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#4f46e5] dark:text-[#818cf8]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3] break-all">
                  {PROFILE_DATA.email}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex-1 py-1.5 px-3 rounded-lg text-center text-xs font-medium bg-[#37352f] dark:bg-[#e6e5e3] text-white dark:text-[#191919] hover:opacity-90 transition-opacity"
            >
              Compose Email
            </a>
            <button
              onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
              className="py-1.5 px-3 rounded-lg text-xs font-medium bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#37352f] dark:text-[#e6e5e3] hover:bg-[#efefee] dark:hover:bg-[#303030] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-5 rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] shadow-2xs space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-emerald-600 dark:text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider">
                  Mobile / Phone
                </div>
                <div className="text-sm font-semibold font-mono text-[#37352f] dark:text-[#e6e5e3]">
                  {PROFILE_DATA.phone}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60">
            <a
              href={`tel:${PROFILE_DATA.phone.replace(/[^0-9]/g, '')}`}
              className="flex-1 py-1.5 px-3 rounded-lg text-center text-xs font-medium bg-[#37352f] dark:bg-[#e6e5e3] text-white dark:text-[#191919] hover:opacity-90 transition-opacity"
            >
              Click to Call
            </a>
            <button
              onClick={() => copyToClipboard(PROFILE_DATA.phone, 'phone')}
              className="py-1.5 px-3 rounded-lg text-xs font-medium bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#37352f] dark:text-[#e6e5e3] hover:bg-[#efefee] dark:hover:bg-[#303030] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy phone number to clipboard"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Location Card */}
        <div className="p-5 rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] shadow-2xs space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-blue-600 dark:text-blue-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider">
                Location
              </div>
              <div className="text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
                {PROFILE_DATA.location}
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#787774] dark:text-[#9b9a97] pt-2 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60">
            Available for remote, hybrid, and onsite enterprise business analyst engagements.
          </p>
        </div>

        {/* LinkedIn Profile Card */}
        <div className="p-5 rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] shadow-2xs space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#787774] dark:text-[#9b9a97] uppercase tracking-wider">
                  LinkedIn Network
                </div>
                <div className="text-sm font-semibold text-[#37352f] dark:text-[#e6e5e3]">
                  Elizabeth Samonte
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-[#f7f7f5] dark:bg-[#262626] border border-[#e9e9e7] dark:border-[#333333] text-[#37352f] dark:text-[#e6e5e3] hover:bg-[#efefee] dark:hover:bg-[#303030] transition-colors w-full justify-center"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
