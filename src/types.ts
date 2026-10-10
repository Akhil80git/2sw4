export type ExamCategory = 
  | 'Divisibility Rules'
  | 'Remainder Theorem'
  | 'Unit Digit & Tens Digit'
  | 'Factors & Multiples'
  | 'Number of Zeros'
  | 'Recurring Decimals & Fractions'
  | 'AP & Number Series'
  | 'Surds, Indices & Powers'
  | 'Basic Properties & Place Value';

export interface SSCQuestion {
  id: number;
  questionHi: string;
  questionEn: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  examName: string;
  examDate: string;
  shift: string;
  year: number;
  topic: ExamCategory;
  topicHi: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  solution: {
    stepByStep: string[];
    trickOrFormula?: string;
    finalConclusion: string;
  };
}

export type ViewTab = 'all-questions' | 'answer-key' | 'solutions' | 'mock-test' | 'bookmarks';

export interface FilterState {
  search: string;
  year: string;
  exam: string;
  topic: string;
  difficulty: string;
}

export interface UserTestState {
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  markedForReview: Record<number, boolean>;
  isSubmitted: boolean;
  timeSpentSeconds: number;
  score: {
    total: number;
    attempted: number;
    correct: number;
    incorrect: number;
    marks: number;
  } | null;
}
