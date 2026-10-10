import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle, AlertCircle, Award, RotateCcw, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { SSCQuestion, UserTestState } from '../types';

interface MockTestViewProps {
  questions: SSCQuestion[];
  language: 'bilingual' | 'hindi' | 'english';
  testState: UserTestState;
  onUpdateTestState: (newState: UserTestState) => void;
  onResetTest: () => void;
  onJumpToSolution: (id: number) => void;
}

export const MockTestView: React.FC<MockTestViewProps> = ({
  questions,
  language,
  testState,
  onUpdateTestState,
  onResetTest,
  onJumpToSolution,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes for 100 questions

  const currentQ = questions[currentIdx] || questions[0];

  useEffect(() => {
    if (testState.isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [testState.isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (testState.isSubmitted) return;
    const updatedAnswers = { ...testState.answers, [currentQ.id]: opt };
    onUpdateTestState({
      ...testState,
      answers: updatedAnswers,
    });
  };

  const handleClearResponse = () => {
    if (testState.isSubmitted) return;
    const updatedAnswers = { ...testState.answers };
    delete updatedAnswers[currentQ.id];
    onUpdateTestState({
      ...testState,
      answers: updatedAnswers,
    });
  };

  const handleToggleReview = () => {
    if (testState.isSubmitted) return;
    const updatedMarked = {
      ...testState.markedForReview,
      [currentQ.id]: !testState.markedForReview[currentQ.id],
    };
    onUpdateTestState({
      ...testState,
      markedForReview: updatedMarked,
    });
  };

  const handleSubmitTest = () => {
    let correct = 0;
    let incorrect = 0;
    let attempted = 0;

    questions.forEach(q => {
      const userAns = testState.answers[q.id];
      if (userAns) {
        attempted++;
        if (userAns === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    // SSC CGL Tier-1 marking scheme: +2 for correct, -0.5 for incorrect
    const marks = correct * 2 - incorrect * 0.5;

    onUpdateTestState({
      ...testState,
      isSubmitted: true,
      score: {
        total: questions.length,
        attempted,
        correct,
        incorrect,
        marks: parseFloat(marks.toFixed(2)),
      },
    });
  };

  // If submitted, show result card
  if (testState.isSubmitted && testState.score) {
    const { total, attempted, correct, incorrect, marks } = testState.score;
    const accuracy = attempted > 0 ? ((correct / attempted) * 100).toFixed(1) : '0';

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Score Card Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            मॉक टेस्ट परिणाम पत्र (Result Scorecard)
          </h2>
          <p className="text-slate-600 text-sm">
            SSC संख्या पद्धति 100 प्रश्नों का अभ्यास टेस्ट सफलतापूर्वक संपन्न हुआ।
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
            <div className="bg-indigo-50 border border-indigo-200 p-3.5 rounded-xl">
              <span className="text-xs text-indigo-700 font-semibold block">प्राप्तांक (Marks)</span>
              <span className="text-2xl font-black text-indigo-900">{marks} / 200</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
              <span className="text-xs text-slate-600 font-semibold block">हल किए (Attempted)</span>
              <span className="text-2xl font-black text-slate-900">{attempted} / {total}</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl">
              <span className="text-xs text-emerald-700 font-semibold block">सही उत्तर (Correct)</span>
              <span className="text-2xl font-black text-emerald-800">{correct}</span>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-xl">
              <span className="text-xs text-rose-700 font-semibold block">गलत उत्तर (Wrong)</span>
              <span className="text-2xl font-black text-rose-800">{incorrect}</span>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl col-span-2 sm:col-span-1">
              <span className="text-xs text-amber-700 font-semibold block">सटीकता (Accuracy)</span>
              <span className="text-2xl font-black text-amber-800">{accuracy}%</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              id="retake-test-btn"
              onClick={onResetTest}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>पुनः टेस्ट दें (Retake Test)</span>
            </button>
            <button
              onClick={() => onJumpToSolution(1)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <CheckCircle className="w-4 h-4" />
              <span>सभी प्रश्नों के विस्तृत हल देखें</span>
            </button>
          </div>
        </div>

        {/* Question Review Grid */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            प्रश्नानुसार समीक्षा (Question by Question Review)
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {questions.map(q => {
              const userAns = testState.answers[q.id];
              let statusClass = 'bg-slate-100 text-slate-600 border-slate-200';
              if (userAns) {
                if (userAns === q.correctAnswer) {
                  statusClass = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
                } else {
                  statusClass = 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
                }
              }
              return (
                <button
                  key={q.id}
                  onClick={() => onJumpToSolution(q.id)}
                  className={`p-2 rounded-lg border text-center transition-all ${statusClass}`}
                  title={`Q.${q.id}: आपकी पसंद: ${userAns || 'कोई नहीं'} | सही: ${q.correctAnswer}`}
                >
                  <span className="text-[10px] block">Q.{q.id}</span>
                  <span className="text-xs">
                    {userAns ? (userAns === q.correctAnswer ? '✓' : '✕') : '—'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Test UI
  const answeredCount = Object.keys(testState.answers).length;
  const currentAnswer = testState.answers[currentQ.id];
  const isMarked = !!testState.markedForReview[currentQ.id];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
      {/* Question Pane */}
      <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs flex flex-col justify-between min-h-[420px] sm:min-h-[550px]">
        <div>
          {/* Top Test Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="bg-indigo-600 text-white text-xs font-black px-2 py-0.5 rounded">
                प्र. {currentIdx + 1}/{questions.length}
              </span>
              <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {currentQ.examName}
              </span>
              <span className="text-xs text-slate-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                {currentQ.examDate}
              </span>
            </div>

            {/* Timer & Mobile Palette Toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-lg font-mono font-bold text-xs sm:text-sm">
                <Timer className="w-3.5 h-3.5 animate-pulse" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Question text */}
          <div className="space-y-3 mb-6">
            {language !== 'english' && (
              <p className="text-base font-semibold text-slate-900 leading-relaxed">
                {currentQ.questionHi}
              </p>
            )}
            {language !== 'hindi' && (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                {currentQ.questionEn}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-2.5 mb-6">
            {currentQ.options.map(opt => {
              const isSelected = currentAnswer === opt.key;
              return (
                <button
                  key={opt.key}
                  id={`mock-q-${currentQ.id}-opt-${opt.key}`}
                  onClick={() => handleSelectAnswer(opt.key)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left text-sm transition-all ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-950 font-semibold ring-1 ring-indigo-300'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {opt.key}
                  </span>
                  <span className="flex-1">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Buttons: Save & Next, Mark Review, Clear, Submit */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleReview}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                isMarked
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              }`}
            >
              {isMarked ? 'चिह्नित हटाया (Unmark)' : 'समीक्षा हेतु चिह्नित करें (Mark for Review)'}
            </button>
            <button
              onClick={handleClearResponse}
              className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-all"
            >
              उत्तर हटाएं (Clear)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4 inline mr-1" />
              पिछला
            </button>
            <button
              disabled={currentIdx === questions.length - 1}
              onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))}
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 shadow-xs"
            >
              अगला (Save & Next)
              <ChevronRight className="w-4 h-4 inline ml-1" />
            </button>
            <button
              id="submit-test-btn"
              onClick={handleSubmitTest}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
            >
              टेस्ट सबमिट करें
            </button>
          </div>
        </div>
      </div>

      {/* Right Question Palette */}
      <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-xs h-auto lg:h-[600px] flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            प्रश्न पैलेट (Question Palette: 1 से 100)
          </h3>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
              <span>हल किया: {answeredCount}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span>समीक्षा: {Object.values(testState.markedForReview).filter(Boolean).length}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-200"></span>
              <span>शेष: {questions.length - answeredCount}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
              <span>वर्तमान प्रश्न</span>
            </div>
          </div>

          {/* 100 Palette Buttons */}
          <div className="max-h-56 sm:max-h-80 lg:h-[400px] overflow-y-auto grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-1.5 pr-1">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIdx;
              const hasAnswered = !!testState.answers[q.id];
              const isMarkedReview = !!testState.markedForReview[q.id];

              let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
              if (isCurrent) {
                btnStyle = 'bg-indigo-600 text-white font-black ring-2 ring-indigo-300';
              } else if (isMarkedReview) {
                btnStyle = 'bg-amber-400 text-amber-950 font-bold';
              } else if (hasAnswered) {
                btnStyle = 'bg-emerald-600 text-white font-bold';
              }

              return (
                <button
                  key={q.id}
                  id={`palette-q-${q.id}`}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-8 rounded text-xs transition-all flex items-center justify-center ${btnStyle}`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <button
            onClick={handleSubmitTest}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
          >
            परीक्षा पूर्ण करें और स्कोर देखें
          </button>
        </div>
      </div>
    </div>
  );
};
