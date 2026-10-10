import React, { useState } from 'react';
import { Bookmark, CheckCircle, XCircle, ChevronDown, ChevronUp, Sparkles, Calendar, Clock } from 'lucide-react';
import { SSCQuestion } from '../types';

interface QuestionCardProps {
  question: SSCQuestion;
  language: 'bilingual' | 'hindi' | 'english';
  isBookmarked: boolean;
  onToggleBookmark: (id: number) => void;
  userSelectedOption?: 'A' | 'B' | 'C' | 'D';
  onSelectOption?: (id: number, opt: 'A' | 'B' | 'C' | 'D') => void;
  defaultExpandedSolution?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  language,
  isBookmarked,
  onToggleBookmark,
  userSelectedOption,
  onSelectOption,
  defaultExpandedSolution = false,
}) => {
  const [showSolution, setShowSolution] = useState(defaultExpandedSolution);
  const [selectedOpt, setSelectedOpt] = useState<'A' | 'B' | 'C' | 'D' | undefined>(userSelectedOption);

  const handleOptionClick = (opt: 'A' | 'B' | 'C' | 'D') => {
    setSelectedOpt(opt);
    if (onSelectOption) {
      onSelectOption(question.id, opt);
    }
  };

  const isAnswered = selectedOpt !== undefined;
  const isCorrect = selectedOpt === question.correctAnswer;

  return (
    <div
      id={`question-card-${question.id}`}
      className={`bg-white border rounded-xl p-4 sm:p-5 transition-all shadow-xs ${
        isBookmarked ? 'border-amber-300 ring-1 ring-amber-100' : 'border-slate-200'
      }`}
    >
      {/* Top Header with Exam Date, Shift, and Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          {/* Question Number */}
          <span className="inline-flex items-center justify-center bg-indigo-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-md shadow-xs">
            प्र. {question.id}
          </span>

          {/* Exam Tag */}
          <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
            {question.examName}
          </span>

          {/* Exam Date & Shift */}
          <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
            <Calendar className="w-3 h-3 text-amber-600" />
            <span>तिथि: {question.examDate}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{question.shift}</span>
          </span>

          {/* Topic Badge */}
          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
            {question.topicHi}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          id={`bookmark-btn-${question.id}`}
          onClick={() => onToggleBookmark(question.id)}
          className={`p-1.5 rounded-lg border transition-colors ${
            isBookmarked
              ? 'bg-amber-50 border-amber-300 text-amber-600'
              : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
          }`}
          title={isBookmarked ? 'बुकमार्क हटाया गया' : 'बुकमार्क में जोड़ें'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      {/* Question Content */}
      <div className="space-y-2 mb-4">
        {language !== 'english' && (
          <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
            {question.questionHi}
          </p>
        )}
        {language !== 'hindi' && (
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
            {question.questionEn}
          </p>
        )}
      </div>

      {/* 4 Objective Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {question.options.map((opt) => {
          let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
          let circleStyle = 'bg-slate-200 text-slate-700';

          if (isAnswered) {
            if (opt.key === question.correctAnswer) {
              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-200';
              circleStyle = 'bg-emerald-600 text-white';
            } else if (opt.key === selectedOpt) {
              btnStyle = 'bg-rose-50 border-rose-300 text-rose-900 ring-1 ring-rose-200';
              circleStyle = 'bg-rose-600 text-white';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              circleStyle = 'bg-slate-200 text-slate-400';
            }
          }

          return (
            <button
              key={opt.key}
              id={`q-${question.id}-opt-${opt.key}`}
              onClick={() => handleOptionClick(opt.key)}
              className={`flex items-center gap-3 p-2.5 rounded-lg border text-left text-xs sm:text-sm transition-all ${btnStyle}`}
            >
              <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${circleStyle}`}>
                {opt.key}
              </span>
              <span className="flex-1 font-medium">{opt.text}</span>
              {isAnswered && opt.key === question.correctAnswer && (
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
              {isAnswered && opt.key === selectedOpt && opt.key !== question.correctAnswer && (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Quick Answer Banner if answered */}
      {isAnswered && (
        <div className={`p-2.5 rounded-lg text-xs font-medium mb-3 flex items-center justify-between ${
          isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          <span>
            {isCorrect
              ? `✓ सही उत्तर! विकल्प (${question.correctAnswer})`
              : `✕ गलत! सही उत्तर विकल्प (${question.correctAnswer}) है।`}
          </span>
          <button
            onClick={() => setShowSolution(true)}
            className="text-xs underline font-bold cursor-pointer"
          >
            हल देखें
          </button>
        </div>
      )}

      {/* Solution Toggle Button & Accordion */}
      <div className="pt-2 border-t border-slate-100">
        <button
          id={`toggle-solution-btn-${question.id}`}
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center justify-between w-full text-xs font-semibold text-indigo-600 hover:text-indigo-700 py-1"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{showSolution ? 'विस्तृत हल छिपाएं' : 'विस्तृत हल एवं ट्रिक देखें (View Solution & Trick)'}</span>
          </span>
          {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showSolution && (
          <div className="mt-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2.5 animate-fadeIn">
            <div className="font-bold text-emerald-700 flex items-center gap-1.5">
              <span>सही विकल्प: ({question.correctAnswer})</span>
            </div>

            {question.solution.trickOrFormula && (
              <div className="bg-amber-50 border-l-3 border-amber-500 p-2 text-xs text-amber-900 rounded-r">
                <span className="font-bold">SSC शॉर्ट ट्रिक / सूत्र: </span>
                {question.solution.trickOrFormula}
              </div>
            )}

            <div className="space-y-1 text-slate-700">
              <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider text-slate-500 mb-1">
                चरण-दर-चरण समाधान (Step-by-Step):
              </span>
              <ul className="list-disc list-inside space-y-1 pl-1">
                {question.solution.stepByStep.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">{step}</li>
                ))}
              </ul>
            </div>

            <div className="pt-1.5 border-t border-slate-200/60 font-semibold text-slate-900 text-xs">
              {question.solution.finalConclusion}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
