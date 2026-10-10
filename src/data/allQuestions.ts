import { SSCQuestion } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { questionsPart4 } from './questionsPart4';

export const allQuestions: SSCQuestion[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4
];

// Helper to get pure answer key (1 to 100)
export interface AnswerKeyEntry {
  id: number;
  answer: 'A' | 'B' | 'C' | 'D';
  examName: string;
  examDate: string;
  shift: string;
  year: number;
  topicHi: string;
}

export const getAnswerKey = (): AnswerKeyEntry[] => {
  return allQuestions.map(q => ({
    id: q.id,
    answer: q.correctAnswer,
    examName: q.examName,
    examDate: q.examDate,
    shift: q.shift,
    year: q.year,
    topicHi: q.topicHi
  }));
};

export const allYears = ['All', '2026 (Expected)', '2024', '2023', '2022', '2021', '2020'];

export const allExams = [
  'All',
  'SSC CGL',
  'SSC CHSL',
  'SSC CPO',
  'SSC MTS',
  'SSC GD',
  'SSC Selection Post',
  'SSC CGL 2026 Expected'
];

export const allTopics = [
  'All',
  'Divisibility Rules',
  'Remainder Theorem',
  'Unit Digit & Tens Digit',
  'Factors & Multiples',
  'Number of Zeros',
  'Recurring Decimals & Fractions',
  'AP & Number Series',
  'Basic Properties & Place Value'
];
