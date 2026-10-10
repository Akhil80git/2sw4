import React, { useState } from 'react';
import { X, Printer, CheckSquare, FileText, Key } from 'lucide-react';
import { SSCQuestion } from '../types';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: SSCQuestion[];
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  questions,
}) => {
  const [printMode, setPrintMode] = useState<'questions-only' | 'answer-key-only' | 'full-booklet'>('answer-key-only');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 animate-fadeIn">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900">
              प्रिंट / PDF एक्सपोर्ट विकल्प (Print Options)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3">
          <p className="text-xs text-slate-600">
            आप अपनी आवश्यकतानुसार प्रिंट प्रारूप का चयन कर सकते हैं। ब्राउज़र के प्रिंट डायलॉग में 'Save as PDF' चुनकर आप इसे PDF में भी सहेज सकते हैं:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Answer Key Only */}
            <button
              onClick={() => setPrintMode('answer-key-only')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                printMode === 'answer-key-only'
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Key className="w-5 h-5 text-emerald-600 mb-2" />
              <div className="font-bold text-xs text-slate-900">अलग से उत्तर कुंजी</div>
              <div className="text-[11px] text-slate-500 mt-1">
                केवल 1 से 100 तक के सही उत्तर व परीक्षा तिथि की संक्षिप्त तालिका।
              </div>
            </button>

            {/* Questions Only */}
            <button
              onClick={() => setPrintMode('questions-only')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                printMode === 'questions-only'
                  ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-5 h-5 text-indigo-600 mb-2" />
              <div className="font-bold text-xs text-slate-900">प्रश्नावली मात्र (Paper)</div>
              <div className="text-[11px] text-slate-500 mt-1">
                अभ्यास हेतु 100 प्रश्न व 4 विकल्प (बिना उत्तर दिखे)।
              </div>
            </button>

            {/* Full Booklet */}
            <button
              onClick={() => setPrintMode('full-booklet')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                printMode === 'full-booklet'
                  ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-200'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <CheckSquare className="w-5 h-5 text-amber-600 mb-2" />
              <div className="font-bold text-xs text-slate-900">संपूर्ण बुकलेट</div>
              <div className="text-[11px] text-slate-500 mt-1">
                सभी 100 प्रश्न, विकल्प, उत्तर कुंजी एवं विस्तृत हल।
              </div>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
          >
            रद्द करें
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>प्रिंट करें / PDF सहेजें</span>
          </button>
        </div>
      </div>
    </div>
  );
};
