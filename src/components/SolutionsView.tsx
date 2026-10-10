import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  List, 
  X,
  Calendar,
  Layers
} from 'lucide-react';
import { SSCQuestion } from '../types';

interface SolutionsViewProps {
  questions: SSCQuestion[];
  language: 'bilingual' | 'hindi' | 'english';
  bookmarks: number[];
  onToggleBookmark: (id: number) => void;
  initialQuestionId?: number;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  questions,
  language,
  bookmarks,
  onToggleBookmark,
  initialQuestionId,
}) => {
  const [selectedId, setSelectedId] = useState<number>(initialQuestionId || 1);
  const [search, setSearch] = useState('');
  const [showMobileList, setShowMobileList] = useState(false);

  const currentQ = questions.find(q => q.id === selectedId) || questions[0];

  const filteredList = questions.filter(q =>
    q.id.toString().includes(search) ||
    q.examName.toLowerCase().includes(search.toLowerCase()) ||
    q.topicHi.toLowerCase().includes(search.toLowerCase())
  );

  const handlePrev = () => {
    if (selectedId > 1) setSelectedId(selectedId - 1);
  };

  const handleNext = () => {
    if (selectedId < questions.length) setSelectedId(selectedId + 1);
  };

  const isMarked = bookmarks.includes(currentQ.id);

  return (
    <div className="space-y-4">
      {/* Mobile-Friendly Question Navigation Header Bar (Prev, Selector, Next) */}
      <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 shadow-2xs flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            disabled={selectedId <= 1}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="पिछला प्रश्न"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Direct Question Selector Dropdown */}
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.target.value))}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[190px] sm:max-w-xs truncate"
          >
            {questions.map(q => (
              <option key={q.id} value={q.id}>
                Q.{q.id}: {q.examName} ({q.year}) - {q.topicHi}
              </option>
            ))}
          </select>

          <button
            onClick={handleNext}
            disabled={selectedId >= questions.length}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="अगला प्रश्न"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Toggle Full List button on mobile */}
          <button
            onClick={() => setShowMobileList(!showMobileList)}
            className="lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <List className="w-3.5 h-3.5" />
            <span>सूची</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isMarked
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
            title="बुकमार्क करें"
          >
            <Bookmark className={`w-4 h-4 ${isMarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar (desktop only or mobile modal) + Solution Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Desktop Sidebar / Mobile Collapsible Drawer */}
        <div
          className={`${
            showMobileList
              ? 'fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4'
              : 'hidden lg:block lg:col-span-4'
          }`}
        >
          <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm h-[500px] lg:h-[700px] flex flex-col w-full max-w-md lg:max-w-none">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                प्रश्न सूची (1 से 100)
              </h3>
              {showMobileList && (
                <button
                  onClick={() => setShowMobileList(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="relative mb-2">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="खोजें (प्रश्न संख्या, टॉपिक)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {filteredList.map(q => {
                const isSelected = q.id === selectedId;
                const marked = bookmarks.includes(q.id);
                return (
                  <button
                    key={q.id}
                    id={`sol-list-q-${q.id}`}
                    onClick={() => {
                      setSelectedId(q.id);
                      setShowMobileList(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg border text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-50/90 border-indigo-300 text-indigo-950 font-bold'
                        : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {q.id}
                      </span>
                      <div className="truncate">
                        <div className="truncate text-slate-900 font-semibold">{q.examName} ({q.year})</div>
                        <div className="text-[10px] text-slate-500 truncate">{q.topicHi}</div>
                      </div>
                    </div>
                    {marked && <Bookmark className="w-3 h-3 text-amber-500 fill-current shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Solution View Container (lg:col-span-8 or full width on mobile) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Question Summary Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-indigo-600 text-white text-xs font-black px-2 py-0.5 rounded">
                  प्रश्न {currentQ.id}
                </span>
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {currentQ.examName} ({currentQ.year})
                </span>
              </div>
              <span className="text-[11px] text-slate-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-600" />
                <span>{currentQ.examDate} ({currentQ.shift})</span>
              </span>
            </div>

            {/* Question Text */}
            <div className="space-y-1.5">
              {language !== 'english' && (
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  {currentQ.questionHi}
                </p>
              )}
              {language !== 'hindi' && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  {currentQ.questionEn}
                </p>
              )}
            </div>

            {/* 4 Objective Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {currentQ.options.map(opt => {
                const isCorrect = opt.key === currentQ.correctAnswer;
                return (
                  <div
                    key={opt.key}
                    className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </div>
                    {isCorrect && (
                      <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">
                        सही उत्तर
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Detailed Solution Box */}
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>विस्तृत चरणबद्ध हल (Step-by-Step Solution)</span>
              </div>
              <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                सही विकल्प: ({currentQ.correctAnswer})
              </span>
            </div>

            {/* Key Concept / Trick */}
            {currentQ.solution.trickOrFormula && (
              <div className="bg-white border border-indigo-200/80 rounded-lg p-3 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-indigo-700 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>शॉर्टकट ट्रिक / मूल संकल्पना (Quick Method):</span>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  {currentQ.solution.trickOrFormula}
                </p>
              </div>
            )}

            {/* Step by step steps */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800">
                समाधान के चरण (Step-by-Step Calculation):
              </h4>
              <div className="space-y-1.5">
                {currentQ.solution.stepByStep.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200 text-xs">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-800 leading-relaxed font-mono text-[11px] sm:text-xs">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Answer Conclusion */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-950 font-medium flex items-center justify-between">
              <span>{currentQ.solution.finalConclusion || `अतः अभीष्ट उत्तर विकल्प (${currentQ.correctAnswer}) है।`}</span>
              <span className="text-[11px] text-emerald-700 font-bold">100% प्रामाणिक हल</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
