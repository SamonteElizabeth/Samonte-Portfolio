import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  Search,
  LayoutGrid,
  Table as TableIcon,
  CheckCircle2,
  Clock,
  Info,
  Maximize2,
  X,
  Eye,
} from 'lucide-react';
import { WORK_PROJECTS } from '../data/portfolioData';

export const WorkProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'deployed' | 'development'>('all');
  const [selectedPreview, setSelectedPreview] = useState<{
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPreview(null);
    };
    if (selectedPreview) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPreview]);

  const filteredProjects = WORK_PROJECTS.filter((proj) => {
    // Status filter
    if (statusFilter === 'deployed' && !proj.isDeployed) return false;
    if (statusFilter === 'development' && proj.isDeployed) return false;

    // Search query
    if (searchQuery.trim() === '') return true;
    const query = searchQuery.toLowerCase();
    return (
      proj.name.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.category.toLowerCase().includes(query)
    );
  });

  const deployedCount = WORK_PROJECTS.filter((p) => p.isDeployed).length;
  const devCount = WORK_PROJECTS.length - deployedCount;

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9b9a97]">
          <FolderGit2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Enterprise Project Database · 12 Initiatives</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#37352f] dark:text-[#e6e5e3]">
          Work Projects
        </h1>

        {/* Required note banner */}
        <div className="p-3.5 rounded-lg bg-[#f7f7f5] dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e] flex items-center gap-3 text-xs text-[#37352f] dark:text-[#e6e5e3]">
          <Info className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8] shrink-0" />
          <p className="font-medium">
            Seven deployed systems across multiple business and technology initiatives.
          </p>
        </div>
      </div>

      {/* Notion Database Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2.5 rounded-lg bg-[#f7f7f5] dark:bg-[#202020] border border-[#e9e9e7] dark:border-[#2e2e2e]">
        {/* Left: View Switcher (Cards / Table tabs) */}
        <div className="flex items-center gap-1 bg-white/70 dark:bg-[#191919]/70 p-1 rounded-md border border-[#e9e9e7] dark:border-[#2e2e2e] self-start sm:self-auto text-xs">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-white dark:bg-[#2c2c2c] text-[#37352f] dark:text-[#ffffff] font-medium shadow-2xs'
                : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Card View</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
              viewMode === 'table'
                ? 'bg-white dark:bg-[#2c2c2c] text-[#37352f] dark:text-[#ffffff] font-medium shadow-2xs'
                : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Table View</span>
          </button>
        </div>

        {/* Middle/Right: Search input and Status filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 max-w-xl">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#787774] dark:text-[#9b9a97]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects (e.g. Chronos, Logistra, VMS)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-white dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-[#37352f] dark:text-[#e6e5e3] placeholder-[#787774] dark:placeholder-[#9b9a97] focus:outline-hidden focus:border-[#4f46e5] dark:focus:border-[#818cf8] transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 text-xs shrink-0 overflow-x-auto pb-0.5 sm:pb-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#e6e5e3] font-medium border border-[#e9e9e7] dark:border-[#2e2e2e]'
                  : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
              }`}
            >
              All ({WORK_PROJECTS.length})
            </button>
            <button
              onClick={() => setStatusFilter('deployed')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'deployed'
                  ? 'bg-white dark:bg-[#191919] text-emerald-700 dark:text-emerald-400 font-medium border border-[#e9e9e7] dark:border-[#2e2e2e]'
                  : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
              }`}
            >
              Deployed ({deployedCount})
            </button>
            <button
              onClick={() => setStatusFilter('development')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'development'
                  ? 'bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#e6e5e3] font-medium border border-[#e9e9e7] dark:border-[#2e2e2e]'
                  : 'text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e6e5e3]'
              }`}
            >
              In Dev ({devCount})
            </button>
          </div>
        </div>
      </div>

      {/* Database Content */}
      {filteredProjects.length === 0 ? (
        <div className="p-10 text-center rounded-lg border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] text-xs text-[#787774] dark:text-[#9b9a97]">
          No projects found matching your search and filter criteria.
        </div>
      ) : viewMode === 'cards' ? (
        /* Notion Gallery / Card View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] transition-colors text-left flex flex-col justify-between shadow-2xs overflow-hidden group hover:border-[#4f46e5]/40 dark:hover:border-[#818cf8]/40"
            >
              {/* Card Cover Preview */}
              {project.imageUrl && (
                <div
                  onClick={() =>
                    setSelectedPreview({
                      imageUrl: project.imageUrl!,
                      title: project.name,
                      subtitle: project.category,
                      description: project.description,
                    })
                  }
                  className="relative w-full h-44 sm:h-40 md:h-36 bg-[#0c1527] overflow-hidden border-b border-[#e9e9e7] dark:border-[#2e2e2e] cursor-pointer group/preview select-none"
                  title="Click to view full image preview"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = project.name.toLowerCase().includes('logistra')
                          ? '/assets/images/logistra_preview.jpg'
                          : '/assets/images/chronos_preview.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover/preview:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* System tag badge */}
                  <div className="absolute bottom-2 left-3 text-[10px] font-medium text-white/95 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 flex items-center gap-1.5 shadow-xs">
                    <span>
                      {project.name.startsWith('Chronos')
                        ? 'Chronos System Preview'
                        : project.name.startsWith('Logistra')
                        ? 'Logistra System Preview'
                        : `${project.name} Preview`}
                    </span>
                  </div>

                  {/* Expand badge visible on hover / always visible subtle on touch */}
                  <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/65 backdrop-blur-xs text-white/95 border border-white/20 opacity-90 sm:opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-medium shadow-xs">
                    <Maximize2 className="w-3 h-3" />
                    <span className="hidden sm:inline">Expand</span>
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Card Top: Page Icon & Status Tag */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-md bg-[#f7f7f5] dark:bg-[#2c2c2c] border border-[#e9e9e7] dark:border-[#333333] flex items-center justify-center text-sm">
                      {project.isDeployed ? '🚀' : '📋'}
                    </div>

                    {project.isDeployed ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                        <CheckCircle2 className="w-3 h-3" />
                        Deployed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#efefee] text-[#787774] dark:bg-[#2c2c2c] dark:text-[#9b9a97] border border-[#e9e9e7] dark:border-[#333333]">
                        <Clock className="w-3 h-3" />
                        In Development
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h2 className="text-base font-semibold text-[#37352f] dark:text-[#e6e5e3]">
                    {project.name}
                  </h2>

                  {/* Category */}
                  <div className="text-[11px] font-mono text-[#787774] dark:text-[#9b9a97] mt-0.5">
                    {project.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#37352f]/90 dark:text-[#e6e5e3]/90 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Deliverables direct badges */}
                {project.keyDeliverables && project.keyDeliverables.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#e9e9e7]/60 dark:border-[#2e2e2e]/60 flex flex-wrap gap-1.5">
                    {project.keyDeliverables.map((d, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#f7f7f5] dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2e2e2e] text-[#787774] dark:text-[#9b9a97]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Notion Table View */
        <div className="rounded-lg border border-[#e9e9e7] dark:border-[#2e2e2e] bg-white dark:bg-[#202020] overflow-x-auto shadow-2xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#e9e9e7] dark:border-[#2e2e2e] bg-[#f7f7f5] dark:bg-[#252525] text-[#787774] dark:text-[#9b9a97]">
                <th className="py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] w-1/4">
                  Project Name
                </th>
                <th className="py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] w-2/5">
                  Description / Purpose
                </th>
                <th className="py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] w-1/5">
                  Category
                </th>
                <th className="py-2.5 px-4 font-medium uppercase tracking-wider text-[11px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e9e9e7] dark:divide-[#2e2e2e]">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-[#fafaf9] dark:hover:bg-[#282828] transition-colors"
                >
                  <td className="py-3 px-4 font-semibold text-[#37352f] dark:text-[#e6e5e3] flex items-center gap-2.5">
                    {project.imageUrl ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedPreview({
                            imageUrl: project.imageUrl!,
                            title: project.name,
                            subtitle: project.category,
                            description: project.description,
                          })
                        }
                        className="relative group/thumb cursor-pointer shrink-0 focus:outline-hidden"
                        title="Click to view preview"
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.name}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.dataset.triedFallback) {
                              target.dataset.triedFallback = 'true';
                              target.src = project.name.toLowerCase().includes('logistra')
                                ? '/assets/images/logistra_preview.jpg'
                                : '/assets/images/chronos_preview.jpg';
                            }
                          }}
                          className="w-9 h-7 rounded object-cover border border-[#e9e9e7] dark:border-[#333333] group-hover/thumb:opacity-90 transition-opacity"
                        />
                        <span className="absolute inset-0 bg-black/30 rounded opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity text-white">
                          <Eye className="w-3 h-3" />
                        </span>
                      </button>
                    ) : (
                      <span className="text-xs">{project.isDeployed ? '🚀' : '📋'}</span>
                    )}
                    <span>{project.name}</span>
                  </td>
                  <td className="py-3 px-4 text-[#37352f]/90 dark:text-[#e6e5e3]/90 leading-relaxed">
                    {project.description}
                  </td>
                  <td className="py-3 px-4 text-[#787774] dark:text-[#9b9a97] font-mono text-[11px]">
                    {project.category}
                  </td>
                  <td className="py-3 px-4">
                    {project.isDeployed ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                        Deployed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#efefee] text-[#787774] dark:bg-[#2c2c2c] dark:text-[#9b9a97] border border-[#e9e9e7] dark:border-[#333333]">
                        In Development
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Full-Screen Preview Lightbox Modal for All Devices */}
      {selectedPreview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1c1c1c] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#2e2e2e] bg-[#222222] text-white">
              <div className="min-w-0 pr-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-semibold truncate text-[#e6e5e3]">
                    {selectedPreview.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-[#9b9a97] px-2 py-0.5 rounded bg-[#2b2b2b] border border-[#383838]">
                    {selectedPreview.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#9b9a97] truncate mt-0.5 hidden sm:block">
                  {selectedPreview.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPreview(null)}
                className="p-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] text-[#e6e5e3] transition-colors cursor-pointer shrink-0"
                aria-label="Close preview modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body - Scrollable / Zoomable / Responsive */}
            <div className="p-2 sm:p-5 bg-[#121212] overflow-auto flex items-center justify-center min-h-[260px] max-h-[calc(94vh-110px)]">
              <img
                src={selectedPreview.imageUrl}
                alt={`${selectedPreview.title} full interface preview`}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-xl border border-[#2e2e2e]"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-2.5 bg-[#222222] border-t border-[#2e2e2e] flex items-center justify-between text-xs text-[#9b9a97]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>System UI Architecture Preview</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedPreview(null)}
                className="px-3 py-1 rounded-md bg-[#2e2e2e] hover:bg-[#3a3a3a] text-[#e6e5e3] font-medium transition-colors cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
