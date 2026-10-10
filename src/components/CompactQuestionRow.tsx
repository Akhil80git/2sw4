import React, { useState } from 'react';
import { Bookmark, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { SSCQuestion } from '../types';

interface CompactQuestionRowProps {
  question: SSCQuestion;
  language: 'bilingual' | 'hindi' | 'english';
  isBookmarked: boolean;
  onToggleBookmark: (id: number) => void;
  onJumpToSolution: (id: number) => void;
}

export const CompactQuestionRow: React.FC<CompactQuestionRowProps> = ({
  question,
  language,
  isBookmarked,
  onToggleBookmark,
  onJumpToSolution,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={`compact-row-${question.id}`}
      className="bg-white border border-slate-200 rounded-lg p-3.5 hover:border-slate-300 transition-all shadow-2xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <span className="w-7 h-7 rounded-md bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
            {question.id}
          </span>
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {question.examName}
              </span>
              <span className="text-slate-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-600" />
                <span>{question.examDate}</span>
              </span>
              <span className="text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded">
                {question.shift}
              </span>
              <span className="text-indigo-700 font-medium bg-indigo-50 px-2 py-0.5 rounded">
                {question.topicHi}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
              {language !== 'english' ? question.questionHi : question.questionEn}
            </p>

            {/* Inline 4 Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-xs">
              {question.options.map(opt => (
                <div key={opt.key} className="bg-slate-50 border border-slate-200 px-2 py-1 rounded text-slate-700 flex items-center gap-1.5">
                  <span className="font-bold text-slate-900">({opt.key})</span>
                  <span className="truncate">{opt.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
          <button
            onClick={() => onJumpToSolution(question.id)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded transition-colors"
          >
            हल देखें
          </button>
          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
