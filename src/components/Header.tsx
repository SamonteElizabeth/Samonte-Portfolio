import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Briefcase,
  Layers,
  FolderGit2,
  GitMerge,
  Mail,
  User,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROFILE_DATA } from '../data/portfolioData';

export type NavSection = 'about' | 'skills' | 'experience' | 'projects' | 'sdlc' | 'contact';

interface HeaderProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

interface NavItem {
  id: NavSection;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'sdlc', label: 'AI & SDLC', icon: GitMerge },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-[#fdfcf9]/95 dark:bg-[#191919]/95 backdrop-blur-md border-b ${
        scrolled
          ? 'border-[#e9e9e7] dark:border-[#2e2e2e] shadow-xs'
          : 'border-[#f0efe9] dark:border-[#262626]'
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between gap-4">
        {/* Left: Clean Notion Breadcrumbs (No "Portfolio" text) */}
        <nav
          aria-label="Breadcrumb Navigation"
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] text-[#5f5e5b] dark:text-[#9b9a97] min-w-0"
        >
          {/* Workspace Folder */}
          <button
            onClick={() => handleItemClick('about')}
            className="flex items-center gap-1.5 hover:text-[#37352f] dark:hover:text-[#e6e5e3] transition-colors cursor-pointer shrink-0"
            title="Go to workspace overview"
          >
            <span className="text-sm select-none">📁</span>
            <span className="font-medium text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]">
              Workspace
            </span>
          </button>

          <span className="text-[#a5a4a1] dark:text-[#666664] select-none">/</span>

          {/* User Name Document */}
          <button
            onClick={() => handleItemClick('about')}
            className="flex items-center gap-1.5 hover:text-[#37352f] dark:hover:text-[#e6e5e3] transition-colors cursor-pointer truncate"
            title="Elizabeth Samonte"
          >
            <span className="text-sm select-none">📄</span>
            <span className="font-semibold text-[#37352f] dark:text-[#e6e5e3] truncate">
              {PROFILE_DATA.name}
            </span>
          </button>
        </nav>

        {/* Right: Clean Nav Tabs with Active Purple Underline & Theme Switcher */}
        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          {/* Desktop Navigation Links */}
          <nav aria-label="Sections Navigation" className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3 py-2 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#201f1d] dark:text-[#f5f4f0] font-semibold'
                      : 'text-[#6b6965] dark:text-[#9b9a97] hover:text-[#201f1d] dark:hover:text-[#f5f4f0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Purple Underline Active Indicator matching user reference style */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#7c3aed] dark:bg-[#a78bfa] rounded-full animate-in fade-in duration-150" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block w-[1px] h-4 bg-[#e9e9e7] dark:border-[#2e2e2e] mx-1" />

          {/* Theme Toggle Button: Matching "🌙 Dark" / "☀️ Light" style */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#e5dfd5] dark:border-[#383530] bg-white dark:bg-[#222120] text-[#37352f] dark:text-[#e6e5e3] hover:bg-[#f7f5f0] dark:hover:bg-[#2c2a27] transition-colors cursor-pointer text-xs font-medium shadow-2xs"
          >
            {theme === 'dark' ? (
              <>
                <span className="text-amber-400">☀️</span>
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-[#5f5e5b] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3] hover:bg-[#efefee] dark:hover:bg-[#262626] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e9e9e7] dark:border-[#2e2e2e] bg-[#fdfcf9] dark:bg-[#191919] px-4 py-3 space-y-1 animate-in slide-in-from-top-2 duration-150 shadow-md">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#f4effc] dark:bg-[#2e243d] text-[#6d28d9] dark:text-[#c4b5fd] font-semibold'
                    : 'text-[#5f5e5b] dark:text-[#9b9a97] hover:bg-[#efefee] dark:hover:bg-[#262626]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
