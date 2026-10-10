import React, { useState } from 'react';
import { Key, Copy, Check, ExternalLink, Calendar, Search } from 'lucide-react';
import { SSCQuestion } from '../types';

interface AnswerKeyViewProps {
  questions: SSCQuestion[];
  onJumpToQuestion: (id: number) => void;
}

export const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({
  questions,
  onJumpToQuestion,
}) => {
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const handleCopyAll = () => {
    const text = questions
      .map(q => `Q${q.id}: (${q.correctAnswer}) [${q.examName} - ${q.examDate}]`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filtered = questions.filter(q => {
    const matchesSearch =
      q.id.toString().includes(searchTerm) ||
      q.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.topicHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.correctAnswer.toLowerCase() === searchTerm.toLowerCase();
    const matchesYear = selectedYear === 'All' || q.year.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="space-y-4">
      {/* Sleek, Compact Action Bar (No bulky banner) */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
            <Key className="w-4 h-4" />
          </span>
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
              संख्या पद्धति उत्तर कुंजी (Q1 to Q100)
            </h2>
            <p className="text-[11px] text-slate-500">
              100% आधिकारिक एवं प्रामाणिक उत्तर कुंजी • परीक्षा तिथि व पाली सहित
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            id="copy-answer-key-btn"
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'उत्तर कॉपी हो गए!' : '100 उत्तर कॉपी करें'}</span>
          </button>
        </div>
      </div>

      {/* Quick 10x10 Matrix Palette */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-2xs">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-bold text-slate-900">
            त्वरित उत्तर ग्रिड (Quick Reference Grid: Q1 to Q100)
          </h3>
          <span className="text-[11px] text-slate-400">क्लिक करके हल पर जाएं</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
          {questions.map(q => (
            <button
              key={q.id}
              id={`quick-ans-${q.id}`}
              onClick={() => onJumpToQuestion(q.id)}
              className="flex flex-col items-center justify-center p-1.5 rounded-lg border border-slate-200 hover:border-indigo-400 bg-slate-50 hover:bg-indigo-50 transition-all text-center group"
            >
              <span className="text-[10px] font-semibold text-slate-500">Q.{q.id}</span>
              <span className="text-xs font-black text-emerald-700 group-hover:text-indigo-700">
                ({q.correctAnswer})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Answer Key Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        {/* Table Top Controls */}
        <div className="p-3 sm:p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">
              विस्तृत उत्तर कुंजी तालिका
            </h3>
            <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.2 rounded-full font-semibold">
              {filtered.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="खोजें (Q#, 2024, CGL)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-7 pr-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 font-medium"
            >
              <option value="All">सभी वर्ष</option>
              <option value="2026">2026</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200 text-[11px]">
              <tr>
                <th className="px-3 py-2.5 text-center">प्र. सं.</th>
                <th className="px-3 py-2.5 text-center">सही उत्तर</th>
                <th className="px-3 py-2.5">परीक्षा</th>
                <th className="px-3 py-2.5">तिथि व शिफ्ट</th>
                <th className="px-3 py-2.5">टॉपिक</th>
                <th className="px-3 py-2.5 text-right">हल</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {filtered.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-3 py-2.5 text-center font-bold text-slate-900">
                    #{q.id}
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                      {q.correctAnswer}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 font-semibold text-slate-900 whitespace-nowrap">
                    {q.examName}
                  </td>
                  <td className="px-3 py-2.5 text-slate-600 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      <span>{q.examDate} ({q.shift})</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-indigo-700 truncate max-w-[140px]">
                    {q.topicHi}
                  </td>
                  <td className="px-3 py-2.5 text-right whitespace-nowrap">
                    <button
                      id={`jump-sol-btn-${q.id}`}
                      onClick={() => onJumpToQuestion(q.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded transition-colors"
                    >
                      <span>हल देखें</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
