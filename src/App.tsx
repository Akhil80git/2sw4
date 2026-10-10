/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { CompactQuestionRow } from './components/CompactQuestionRow';
import { AnswerKeyView } from './components/AnswerKeyView';
import { SolutionsView } from './components/SolutionsView';
import { MockTestView } from './components/MockTestView';
import { PrintModal } from './components/PrintModal';
import { allQuestions } from './data/allQuestions';
import { ViewTab, FilterState, UserTestState } from './types';
import { FileText, RotateCcw, LayoutGrid, List } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('all-questions');
  const [language, setLanguage] = useState<'bilingual' | 'hindi' | 'english'>('bilingual');
  const [viewMode, setViewMode] = useState<'card' | 'compact'>('card');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [selectedSolutionId, setSelectedSolutionId] = useState<number>(1);

  // Filters
  const [filter, setFilter] = useState<FilterState>({
    search: '',
    year: 'All',
    exam: 'All',
    topic: 'All',
    difficulty: 'All',
  });

  // Bookmarks state with localStorage persistence
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ssc_ns_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ssc_ns_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  // Mock Test State
  const [testState, setTestState] = useState<UserTestState>({
    answers: {},
    markedForReview: {},
    isSubmitted: false,
    timeSpentSeconds: 0,
    score: null,
  });

  const handleToggleBookmark = (id: number) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const handleResetTest = () => {
    setTestState({
      answers: {},
      markedForReview: {},
      isSubmitted: false,
      timeSpentSeconds: 0,
      score: null,
    });
  };

  const handleJumpToSolution = (id: number) => {
    setSelectedSolutionId(id);
    setCurrentTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilter = () => {
    setFilter({
      search: '',
      year: 'All',
      exam: 'All',
      topic: 'All',
      difficulty: 'All',
    });
  };

  // Filtered questions computation
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      // Tab based filter
      if (currentTab === 'bookmarks' && !bookmarks.includes(q.id)) {
        return false;
      }

      // Search
      if (filter.search) {
        const query = filter.search.toLowerCase().trim();
        const idMatches = q.id.toString() === query;
        const textMatches =
          q.questionHi.toLowerCase().includes(query) ||
          q.questionEn.toLowerCase().includes(query) ||
          q.examName.toLowerCase().includes(query) ||
          q.examDate.includes(query) ||
          q.topicHi.toLowerCase().includes(query) ||
          q.topic.toLowerCase().includes(query);
        if (!idMatches && !textMatches) return false;
      }

      // Year
      if (filter.year !== 'All') {
        if (filter.year.includes('2026') && q.year !== 2026) return false;
        if (!filter.year.includes('2026') && q.year.toString() !== filter.year) return false;
      }

      // Exam
      if (filter.exam !== 'All') {
        if (!q.examName.toLowerCase().includes(filter.exam.toLowerCase())) return false;
      }

      // Topic
      if (filter.topic !== 'All' && q.topic !== filter.topic) {
        return false;
      }

      // Difficulty
      if (filter.difficulty !== 'All' && q.difficulty !== filter.difficulty) {
        return false;
      }

      return true;
    });
  }, [currentTab, bookmarks, filter]);

  const isFiltered =
    filter.search !== '' ||
    filter.year !== 'All' ||
    filter.exam !== 'All' ||
    filter.topic !== 'All' ||
    filter.difficulty !== 'All';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sleek, All-in-One Topnav Header (Ultra-Compact on Mobile) */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        bookmarkCount={bookmarks.length}
        totalQuestions={allQuestions.length}
        language={language}
        onLanguageChange={setLanguage}
        onOpenPrint={() => setIsPrintModalOpen(true)}
        filter={filter}
        onChangeFilter={setFilter}
        onResetFilter={handleResetFilter}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        filteredCount={filteredQuestions.length}
      />

      {/* Main Content Area - Clean, Focused directly on the Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-6 lg:px-8 py-3 sm:py-5">
        {/* Tab 1: All Questions */}
        {currentTab === 'all-questions' && (
          <div className="space-y-3">
            {/* Minimal Sub-header: Quick status & mobile view-toggle */}
            <div className="flex items-center justify-between px-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800">
                  {filteredQuestions.length} प्रश्न उपलब्ध
                </span>
                {isFiltered && (
                  <button
                    onClick={handleResetFilter}
                    className="inline-flex items-center gap-1 text-[11px] text-indigo-600 hover:underline font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>सभी 100 देखें</span>
                  </button>
                )}
              </div>

              {/* Mobile View Mode switch (Card vs Compact) */}
              <div className="flex sm:hidden items-center bg-slate-200/70 p-0.5 rounded-lg text-xs">
                <button
                  onClick={() => setViewMode('card')}
                  className={`p-1 rounded ${
                    viewMode === 'card'
                      ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                      : 'text-slate-600'
                  }`}
                  title="Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`p-1 rounded ${
                    viewMode === 'compact'
                      ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                      : 'text-slate-600'
                  }`}
                  title="Compact View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Empty filter result */}
            {filteredQuestions.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-3 my-4">
                <FileText className="w-8 h-8 text-slate-300 mx-auto" />
                <h3 className="text-sm font-bold text-slate-900">कोई प्रश्न नहीं मिला</h3>
                <p className="text-xs text-slate-500">
                  कृपया अपनी खोज शब्द या फ़िल्टर बदलकर पुनः प्रयास करें।
                </p>
                <button
                  onClick={handleResetFilter}
                  className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg"
                >
                  फ़िल्टर रीसेट करें
                </button>
              </div>
            ) : viewMode === 'card' ? (
              <div className="space-y-3.5">
                {filteredQuestions.map(question => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    language={language}
                    isBookmarked={bookmarks.includes(question.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredQuestions.map(question => (
                  <CompactQuestionRow
                    key={question.id}
                    question={question}
                    language={language}
                    isBookmarked={bookmarks.includes(question.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onJumpToSolution={handleJumpToSolution}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Separate Answer Key */}
        {currentTab === 'answer-key' && (
          <AnswerKeyView
            questions={allQuestions}
            onJumpToQuestion={handleJumpToSolution}
          />
        )}

        {/* Tab 3: Detailed Step-by-Step Solutions */}
        {currentTab === 'solutions' && (
          <SolutionsView
            questions={allQuestions}
            language={language}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            initialQuestionId={selectedSolutionId}
          />
        )}

        {/* Tab 4: Interactive CBT Mock Test */}
        {currentTab === 'mock-test' && (
          <MockTestView
            questions={allQuestions}
            language={language}
            testState={testState}
            onUpdateTestState={setTestState}
            onResetTest={handleResetTest}
            onJumpToSolution={handleJumpToSolution}
          />
        )}

        {/* Tab 5: Bookmarked Questions */}
        {currentTab === 'bookmarks' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white border border-slate-200 p-3 sm:p-4 rounded-xl">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  बुकमार्क किए गए प्रश्न
                </h3>
                <p className="text-[11px] text-slate-500">
                  कठिन या महत्वपूर्ण प्रश्नों का आपका व्यक्तिगत संग्रह
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                {bookmarks.length} प्रश्न
              </span>
            </div>

            {bookmarks.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2.5">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 font-bold">
                  ★
                </div>
                <h3 className="text-sm font-bold text-slate-800">अभी कोई बुकमार्क प्रश्न नहीं है</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  प्रश्नों के शीर्ष पर स्थित बुकमार्क आइकन पर क्लिक करके प्रश्नों को सहेजें।
                </p>
                <button
                  onClick={() => setCurrentTab('all-questions')}
                  className="px-3.5 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-xs"
                >
                  सभी प्रश्न देखें
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {allQuestions
                  .filter(q => bookmarks.includes(q.id))
                  .map(question => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      language={language}
                      isBookmarked={true}
                      onToggleBookmark={handleToggleBookmark}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Compact Footer */}
      <footer className="bg-white border-t border-slate-200 mt-8 py-4 text-center text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-semibold text-slate-700">
            SSC संख्या पद्धति (2020–2026): 100 वस्तुनिष्ठ प्रश्न • अलग उत्तर कुंजी • विस्तृत समाधान
          </p>
        </div>
      </footer>

      {/* Print / PDF Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        questions={allQuestions}
      />
    </div>
  );
}
