import React from 'react';
import { Search, Filter, RotateCcw, LayoutGrid, List } from 'lucide-react';
import { FilterState } from '../types';
import { allYears, allExams, allTopics } from '../data/allQuestions';

interface FilterBarProps {
  filter: FilterState;
  onChangeFilter: (newFilter: FilterState) => void;
  onResetFilter: () => void;
  viewMode: 'card' | 'compact';
  onToggleViewMode: (mode: 'card' | 'compact') => void;
  filteredCount: number;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onChangeFilter,
  onResetFilter,
  viewMode,
  onToggleViewMode,
  filteredCount,
  totalCount,
}) => {
  const isFiltered =
    filter.search !== '' ||
    filter.year !== 'All' ||
    filter.exam !== 'All' ||
    filter.topic !== 'All' ||
    filter.difficulty !== 'All';

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
        {/* Search input */}
        <div className="relative lg:col-span-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="filter-search-input"
            type="text"
            placeholder="प्रश्न संख्या, कीवर्ड (उदा: 72, शेषफल, इकाई अंक)..."
            value={filter.search}
            onChange={(e) => onChangeFilter({ ...filter, search: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          {filter.search && (
            <button
              onClick={() => onChangeFilter({ ...filter, search: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Year Filter */}
        <div>
          <select
            id="filter-year-select"
            value={filter.year}
            onChange={(e) => onChangeFilter({ ...filter, year: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          >
            <option value="All">वर्ष: सभी (2020–2026)</option>
            {allYears.filter(y => y !== 'All').map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Exam Filter */}
        <div>
          <select
            id="filter-exam-select"
            value={filter.exam}
            onChange={(e) => onChangeFilter({ ...filter, exam: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          >
            <option value="All">परीक्षा: सभी SSC परीक्षाएं</option>
            {allExams.filter(e => e !== 'All').map(e => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        {/* Topic Filter */}
        <div>
          <select
            id="filter-topic-select"
            value={filter.topic}
            onChange={(e) => onChangeFilter({ ...filter, topic: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          >
            <option value="All">विषय: सभी (All Topics)</option>
            {allTopics.filter(t => t !== 'All').map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Footer bar with count, view toggle, and reset */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            प्रदर्शित प्रश्न: <strong className="text-indigo-600 font-bold">{filteredCount}</strong> / {totalCount}
          </span>
          {isFiltered && (
            <button
              id="filter-reset-btn"
              onClick={onResetFilter}
              className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>फ़िल्टर रीसेट</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400">दृश्य मोड:</span>
          <button
            id="view-mode-card"
            onClick={() => onToggleViewMode('card')}
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'card'
                ? 'bg-indigo-50 text-indigo-600 font-bold border border-indigo-200'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Card View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            id="view-mode-compact"
            onClick={() => onToggleViewMode('compact')}
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'compact'
                ? 'bg-indigo-50 text-indigo-600 font-bold border border-indigo-200'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Compact List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
