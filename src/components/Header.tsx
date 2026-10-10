import React, { useState } from 'react';
import { 
  BookOpen, 
  Key, 
  CheckCircle2, 
  Bookmark, 
  Timer, 
  Printer, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  X, 
  RotateCcw,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { ViewTab, FilterState } from '../types';
import { allYears, allExams, allTopics } from '../data/allQuestions';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  bookmarkCount: number;
  totalQuestions: number;
  language: 'bilingual' | 'hindi' | 'english';
  onLanguageChange: (lang: 'bilingual' | 'hindi' | 'english') => void;
  onOpenPrint: () => void;
  // Integrated Filter & View Controls
  filter: FilterState;
  onChangeFilter: (newFilter: FilterState) => void;
  onResetFilter: () => void;
  viewMode: 'card' | 'compact';
  onToggleViewMode: (mode: 'card' | 'compact') => void;
  filteredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  bookmarkCount,
  totalQuestions,
  language,
  onLanguageChange,
  onOpenPrint,
  filter,
  onChangeFilter,
  onResetFilter,
  viewMode,
  onToggleViewMode,
  filteredCount,
}) => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const isFiltered =
    filter.search !== '' ||
    filter.year !== 'All' ||
    filter.exam !== 'All' ||
    filter.topic !== 'All' ||
    filter.difficulty !== 'All';

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Primary Top Bar (Compact & Sleek: ~50px height) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-13 gap-2">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="bg-indigo-600 text-white font-black text-xs px-2 py-1 rounded-md shadow-xs shrink-0">
              SSC
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight truncate">
                संख्या पद्धति <span className="hidden sm:inline text-indigo-600 font-semibold">(Number System)</span>
              </h1>
              <span className="text-[10px] text-slate-500 font-medium hidden xs:block truncate">
                100 PYQs 2020–2026 • तिथि व शिफ्ट सहित
              </span>
            </div>
          </div>

          {/* Action Tools in Topnav */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Search & Filter Toggle Button */}
            <button
              id="topnav-filter-toggle-btn"
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className={`relative inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                isFilterDrawerOpen || isFiltered
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title="खोजें एवं फ़िल्टर करें"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">फ़िल्टर</span>
              {isFiltered && (
                <span className="w-2 h-2 rounded-full bg-indigo-600 ring-2 ring-white"></span>
              )}
            </button>

            {/* View Mode Toggle (Cards vs Compact List) - active on question/bookmarks views */}
            {(currentTab === 'all-questions' || currentTab === 'bookmarks') && (
              <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                <button
                  id="topnav-view-card"
                  onClick={() => onToggleViewMode('card')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'card'
                      ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  id="topnav-view-compact"
                  onClick={() => onToggleViewMode('compact')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'compact'
                      ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Compact List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Language Selector (Ultra-compact) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-semibold">
              <button
                id="lang-bilingual-btn"
                onClick={() => onLanguageChange('bilingual')}
                className={`px-1.5 sm:px-2 py-1 rounded transition-colors ${
                  language === 'bilingual'
                    ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="द्विभाषी (Bilingual)"
              >
                द्वि
              </button>
              <button
                id="lang-hindi-btn"
                onClick={() => onLanguageChange('hindi')}
                className={`px-1.5 sm:px-2 py-1 rounded transition-colors ${
                  language === 'hindi'
                    ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="हिंदी केवल"
              >
                हिं
              </button>
              <button
                id="lang-en-btn"
                onClick={() => onLanguageChange('english')}
                className={`px-1.5 sm:px-2 py-1 rounded transition-colors ${
                  language === 'english'
                    ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English Only"
              >
                EN
              </button>
            </div>

            {/* Print / PDF Button */}
            <button
              id="header-print-btn"
              onClick={onOpenPrint}
              className="inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors shadow-xs"
              title="प्रिंट / PDF सहेजें"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Bar: Compact Navigation Tabs (Smooth Horizontal Scroll on Mobile) */}
      <div className="bg-slate-50/90 border-t border-slate-200/80 px-2 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 py-1.5 overflow-x-auto scrollbar-none">
          {/* Tab 1: All Questions */}
          <button
            id="tab-all-questions"
            onClick={() => onSelectTab('all-questions')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'all-questions'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>प्रश्न ({filteredCount})</span>
          </button>

          {/* Tab 2: Separate Answer Key */}
          <button
            id="tab-answer-key"
            onClick={() => onSelectTab('answer-key')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'answer-key'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 hover:bg-emerald-100/60'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>उत्तर कुंजी (Key)</span>
          </button>

          {/* Tab 3: Step-by-Step Solutions */}
          <button
            id="tab-solutions"
            onClick={() => onSelectTab('solutions')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'solutions'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>विस्तृत हल</span>
          </button>

          {/* Tab 4: Mock Test Mode */}
          <button
            id="tab-mock-test"
            onClick={() => onSelectTab('mock-test')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'mock-test'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-800 bg-amber-50/80 border border-amber-200/60 hover:bg-amber-100/60'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>मॉक टेस्ट (CBT)</span>
          </button>

          {/* Tab 5: Bookmarks */}
          <button
            id="tab-bookmarks"
            onClick={() => onSelectTab('bookmarks')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'bookmarks'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>बुकमार्क</span>
            {bookmarkCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500 text-white font-black">
                {bookmarkCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Integrated Filter Drawer (Opens right under Topnav) */}
      {isFilterDrawerOpen && (
        <div className="bg-white border-t border-b border-indigo-100 shadow-md p-3 sm:p-4 animate-fadeIn">
          <div className="max-w-7xl mx-auto space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
                <span>खोज व फ़िल्टर (Search & Filters)</span>
              </span>
              <div className="flex items-center gap-2">
                {isFiltered && (
                  <button
                    onClick={onResetFilter}
                    className="inline-flex items-center gap-1 text-[11px] text-rose-600 hover:text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>रीसेट</span>
                  </button>
                )}
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {/* Search input */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="प्रश्न संख्या या कीवर्ड (72, शेषफल)..."
                  value={filter.search}
                  onChange={(e) => onChangeFilter({ ...filter, search: e.target.value })}
                  className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Year Filter */}
              <select
                value={filter.year}
                onChange={(e) => onChangeFilter({ ...filter, year: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium"
              >
                <option value="All">वर्ष: सभी (2020–2026)</option>
                {allYears.filter(y => y !== 'All').map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>

              {/* Exam Filter */}
              <select
                value={filter.exam}
                onChange={(e) => onChangeFilter({ ...filter, exam: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium"
              >
                <option value="All">परीक्षा: सभी SSC</option>
                {allExams.filter(e => e !== 'All').map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>

              {/* Topic Filter */}
              <select
                value={filter.topic}
                onChange={(e) => onChangeFilter({ ...filter, topic: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium"
              >
                <option value="All">टॉपिक: सभी</option>
                {allTopics.filter(t => t !== 'All').map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Status info */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>
                प्रदर्शित प्रश्न: <strong className="text-indigo-600 font-bold">{filteredCount}</strong> / {totalQuestions}
              </span>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="text-indigo-600 font-semibold text-[11px] hover:underline"
              >
                लागू करें एवं बंद करें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Filter Chips bar (Very compact: ~26px, only shown when filters are active and drawer closed) */}
      {!isFilterDrawerOpen && isFiltered && (
        <div className="bg-indigo-50/70 border-b border-indigo-100 px-3 py-1 text-[11px] text-indigo-900 flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="font-bold text-indigo-800">फ़िल्टर सक्रिय:</span>
            {filter.search && <span className="bg-white px-1.5 py-0.2 rounded border border-indigo-200">"{filter.search}"</span>}
            {filter.year !== 'All' && <span className="bg-white px-1.5 py-0.2 rounded border border-indigo-200">{filter.year}</span>}
            {filter.exam !== 'All' && <span className="bg-white px-1.5 py-0.2 rounded border border-indigo-200">{filter.exam}</span>}
            {filter.topic !== 'All' && <span className="bg-white px-1.5 py-0.2 rounded border border-indigo-200">{filter.topic}</span>}
            <span className="font-semibold text-indigo-700">({filteredCount} प्रश्न)</span>
          </div>
          <button
            onClick={onResetFilter}
            className="text-rose-600 hover:text-rose-800 font-bold text-[10px] ml-2 shrink-0 underline"
          >
            हटाएं
          </button>
        </div>
      )}
    </header>
  );
};
