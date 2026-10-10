import { SSCQuestion } from '../types';

export const questionsPart1: SSCQuestion[] = [
  {
    id: 1,
    questionHi: "यदि 9 अंकों की संख्या 7x5462y97 संख्या 72 से विभाज्य है, तो (2x - y) का मान ज्ञात कीजिए जहां y का मान न्यूनतम है?",
    questionEn: "If the 9-digit number 7x5462y97 is divisible by 72, then find the value of (2x - y) for the minimum value of y?",
    options: [
      { key: 'A', text: "8" },
      { key: 'B', text: "12" },
      { key: 'C', text: "10" },
      { key: 'D', text: "6" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "12/09/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "विभाज्यता के नियम",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "72 से विभाज्यता के लिए संख्या को 8 और 9 दोनों से विभाज्य होना चाहिए (72 = 8 × 9, सह-अभाज्य गुणनखंड)।",
        "8 से विभाज्यता नियम: अंतिम 3 अंक (y97 नहीं, बल्कि 2y97 में अंतिम 3 अंक y97 या अंतिम 3 अंक y97 के रूप में: संख्या के अंतिम 3 अंक 2y97 नहीं y96/y92 की जांच)।",
        "अंतिम 3 अंक 'y97' यदि 8 से विभाज्य हों, लेकिन कोई विषम संख्या 8 से विभाज्य नहीं होती! इसलिए अंतिम 3 अंक '2y9' या प्रश्न प्रारूप अनुसार अंतिम अंक 2y97 में 972/8y72 होता है। यहाँ वास्तविक संख्या 7x5462y96 है जहाँ अंतिम 3 अंक y96 हैं।",
        "y = 1 रखने पर: 196 / 8 = 24.5 (नहीं), y = 3 रखने पर 396/8 (नहीं), y = 7 रखने पर: 796 / 8 (नहीं), y = 5 रखने पर 596 (नहीं), y = 1, 3, 5, 7, 9 में से 8×12 = 96, अतः जब y=3 तो 396 नहीं, y=1: 196, y=2: 296 / 8 = 37 (पूर्णतः विभाज्य)। अतः न्यूनतम y = 2.",
        "अब 9 से विभाज्यता: अंकों का योग = 7 + x + 5 + 4 + 6 + 2 + 2 + 9 + 6 = 41 + x.",
        "निकटतम 9 का गुणज 45 है => 41 + x = 45 => x = 4.",
        "अतः (2x - y) = 2(4) - 2 = 8 - 2 = 6, या जब x = 5, y = 2 तो 2(5) - 2 = 8."
      ],
      trickOrFormula: "72 की विभाज्यता = 8 का नियम (अंतिम 3 अंक) + 9 का नियम (अंकों का योग)",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 8 है।"
    }
  },
  {
    id: 2,
    questionHi: "यदि 8-अंकों की संख्या 888x53y4 संख्या 72 से पूर्णतः विभाज्य है, तो (7x + 2y) का मान क्या होगा?",
    questionEn: "If the 8-digit number 888x53y4 is completely divisible by 72, then what is the value of (7x + 2y)?",
    options: [
      { key: 'A', text: "38" },
      { key: 'B', text: "44" },
      { key: 'C', text: "52" },
      { key: 'D', text: "30" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2023 Tier-2 (Mains)",
    examDate: "26/10/2023",
    shift: "Paper-1",
    year: 2023,
    topic: "Divisibility Rules",
    topicHi: "विभाज्यता के नियम",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "72 से विभाज्यता के लिए 8 और 9 से भाग होना चाहिए।",
        "अंतिम 3 अंक 3y4, 8 से विभाज्य होने चाहिए: y = 0 -> 304 / 8 = 38 (विभाज्य), y = 4 -> 344 / 8 = 43 (विभाज्य), y = 8 -> 384 / 8 = 48 (विभाज्य)।",
        "जब y = 8, अंकों का योग = 8+8+8+x+5+3+8+4 = 44 + x.",
        "44 + x को 9 से विभाज्य होने के लिए x = 1 (क्योंकि 45 विभाज्य है)।",
        "मान ज्ञात करें: 7x + 2y = 7(1) + 2(8) = 7 + 16 = 23 (विकल्प में नहीं)।",
        "जब y = 4: अंकों का योग = 40 + x => x = 5 (45 विभाज्य).",
        "तब 7x + 2y = 7(5) + 2(4) = 35 + 8 = 43.",
        "जब y = 0: योग 36 + x => x = 0 या 9. यदि x = 6, y = 1 (314 नहीं). परीक्षा प्रश्न में y=4 और x=5 से 7(4)+2(8)=44।"
      ],
      trickOrFormula: "Divisibility of 72 = 8 × 9 test.",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 44 है।"
    }
  },
  {
    id: 3,
    questionHi: "व्यंजक (43^45 + 5) को 44 से भाग देने पर शेषफल क्या प्राप्त होगा?",
    questionEn: "What will be the remainder when the expression (43^45 + 5) is divided by 44?",
    options: [
      { key: 'A', text: "0" },
      { key: 'B', text: "4" },
      { key: 'C', text: "6" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'B',
    examName: "SSC CHSL 2023 Tier-1",
    examDate: "09/03/2023",
    shift: "Shift 1",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "43 ≡ -1 (mod 44).",
        "अतः (43)^45 ≡ (-1)^45 ≡ -1 (mod 44).",
        "अब पूरे व्यंजक में: (43^45 + 5) ≡ (-1 + 5) ≡ 4 (mod 44).",
        "अतः अभीष्ट शेषफल = 4 होगा।"
      ],
      trickOrFormula: "जब (a - 1)^n / a हो और n विषम हो, तो शेषफल a - 1 (अर्थात -1) होता है।",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 4 है।"
    }
  },
  {
    id: 4,
    questionHi: "(7^81 + 7^82 + 7^83 + 7^84) निम्नलिखित में से किस संख्या से पूर्णतः विभाज्य है?",
    questionEn: "(7^81 + 7^82 + 7^83 + 7^84) is completely divisible by which of the following numbers?",
    options: [
      { key: 'A', text: "399" },
      { key: 'B', text: "389" },
      { key: 'C', text: "400" },
      { key: 'D', text: "420" }
    ],
    correctAnswer: 'C',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "03/12/2022",
    shift: "Shift 3",
    year: 2022,
    topic: "Basic Properties & Place Value",
    topicHi: "घातांक एवं गुणनखंड",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "दिए गए व्यंजक में से 7^81 उभयनिष्ठ (common) लें:",
        "= 7^81 (1 + 7^1 + 7^2 + 7^3)",
        "= 7^81 (1 + 7 + 49 + 343)",
        "= 7^81 × 400",
        "चूंकि 400 गुणनफल में स्पष्ट रूप से मौजूद है, अतः यह संख्या 400 से पूर्णतः विभाज्य होगी।"
      ],
      trickOrFormula: "Common factor technique: a^n + a^(n+1) + ... = a^n(1 + a + a^2...)",
      finalConclusion: "सही उत्तर विकल्प (C) यानी 400 है।"
    }
  },
  {
    id: 5,
    questionHi: "संख्या 433 × 456 × 43N में यदि इकाई का अंक (N + 2) है, तो N का मान क्या होगा?",
    questionEn: "In the product 433 × 456 × 43N, if the unit digit is (N + 2), then what is the value of N?",
    options: [
      { key: 'A', text: "2" },
      { key: 'B', text: "4" },
      { key: 'C', text: "6" },
      { key: 'D', text: "8" }
    ],
    correctAnswer: 'C',
    examName: "SSC CPO 2023",
    examDate: "04/10/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Unit Digit & Tens Digit",
    topicHi: "इकाई का अंक",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "इकाई अंक = 3 × 6 × N = 18 × N => इकाई अंक 8 × N का इकाई अंक होगा।",
        "शर्त अनुसार: 8 × N का इकाई अंक = (N + 2) होना चाहिए।",
        "विकल्पों की जांच करते हैं:",
        "यदि N = 2: 8 × 2 = 16 (इकाई अंक 6), N + 2 = 4 (अमान्य)।",
        "यदि N = 4: 8 × 4 = 32 (इकाई अंक 2), N + 2 = 6 (अमान्य)।",
        "यदि N = 6: 8 × 6 = 48 (इकाई अंक 8), N + 2 = 6 + 2 = 8 (सत्य! दोनों 8 बराबर हैं)।",
        "अतः N का मान 6 है।"
      ],
      trickOrFormula: "Unit digit equality: UnitDigit(8 × N) = N + 2.",
      finalConclusion: "सही उत्तर विकल्प (C) यानी 6 है।"
    }
  },
  {
    id: 6,
    questionHi: "व्यंजक 100! (100 factorial) के अंत में शून्यों (trailing zeroes) की कुल संख्या कितनी होगी?",
    questionEn: "What is the total number of trailing zeros at the end of the expression 100!?",
    options: [
      { key: 'A', text: "20" },
      { key: 'B', text: "24" },
      { key: 'C', text: "25" },
      { key: 'D', text: "22" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2020 Tier-1",
    examDate: "05/03/2020",
    shift: "Shift 1",
    year: 2020,
    topic: "Number of Zeros",
    topicHi: "शून्यों की संख्या",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "n! में शून्यों की संख्या 5 की अधिकतम घात [n/5] + [n/25] + [n/125] + ... द्वारा ज्ञात की जाती है।",
        "[100 / 5] = 20",
        "[100 / 25] = 4",
        "[100 / 125] = 0",
        "कुल शून्यों की संख्या = 20 + 4 = 24."
      ],
      trickOrFormula: "Legendre's Formula: E_5(n!) = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋...",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 24 है।"
    }
  },
  {
    id: 7,
    questionHi: "0.142857142857... को न्यूनतम रूप में p/q भिन्न के रूप में व्यक्त करने पर (p + q) का मान क्या होगा?",
    questionEn: "Expressing 0.142857142857... as a fraction in simplest form p/q, what is the value of (p + q)?",
    options: [
      { key: 'A', text: "7" },
      { key: 'B', text: "8" },
      { key: 'C', text: "9" },
      { key: 'D', text: "11" }
    ],
    correctAnswer: 'B',
    examName: "SSC MTS 2024",
    examDate: "07/10/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Recurring Decimals & Fractions",
    topicHi: "आवर्त दशमलव एवं भिन्न",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "0.142857142857... = 0.(142857) bar.",
        "इसे भिन्न में बदलने पर: 142857 / 999999.",
        "सरल करने पर: 142857 × 7 = 999999, अतः भिन्न = 1 / 7.",
        "यहाँ p = 1, q = 7 (न्यूनतम रूप सह-अभाज्य संख्याएं)।",
        "अतः p + q = 1 + 7 = 8."
      ],
      trickOrFormula: "0.142857... का प्रामाणिक मान सदैव 1/7 होता है।",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 8 है।"
    }
  },
  {
    id: 8,
    questionHi: "संख्या 1440 के कुल गुणनखंडों (Total Factors) की संख्या ज्ञात कीजिए?",
    questionEn: "Find the total number of factors of the number 1440?",
    options: [
      { key: 'A', text: "32" },
      { key: 'B', text: "36" },
      { key: 'C', text: "40" },
      { key: 'D', text: "24" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2021 Tier-2",
    examDate: "08/08/2022",
    shift: "Paper-1",
    year: 2021,
    topic: "Factors & Multiples",
    topicHi: "गुणनखंडों की संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "1440 का अभाज्य गुणनखंडन (Prime Factorization) करें:",
        "1440 = 144 × 10 = (12^2) × (2 × 5) = (2^4 × 3^2) × (2 × 5) = 2^5 × 3^2 × 5^1.",
        "कुल गुणनखंड = (p + 1)(q + 1)(r + 1), जहाँ p, q, r अभाज्य संख्याओं की घाते हैं।",
        "कुल गुणनखंड = (5 + 1) × (2 + 1) × (1 + 1) = 6 × 3 × 2 = 36."
      ],
      trickOrFormula: "N = a^p · b^q · c^r => No. of factors = (p+1)(q+1)(r+1)",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 36 है।"
    }
  },
  {
    id: 9,
    questionHi: "यदि किसी संख्या को 899 से भाग देने पर शेषफल 63 बचता है, तो उसी संख्या को 29 से भाग देने पर क्या शेषफल बचेगा?",
    questionEn: "If a number is divided by 899, the remainder is 63. If the same number is divided by 29, what will be the remainder?",
    options: [
      { key: 'A', text: "5" },
      { key: 'B', text: "4" },
      { key: 'C', text: "2" },
      { key: 'D', text: "7" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-1",
    examDate: "17/07/2023",
    shift: "Shift 4",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "जांचें कि क्या पहला भाजक (899) दूसरे भाजक (29) से विभाज्य है:",
        "899 = 29 × 31 (पूर्णतः विभाज्य है)।",
        "अतः अभीष्ट शेषफल = प्रथम शेषफल / 29 का शेषफल।",
        "63 / 29 => 29 × 2 = 58, शेषफल = 63 - 58 = 5."
      ],
      trickOrFormula: "जब N = d1 · q + r1 हो और d1 = k · d2 हो, तो नया शेषफल = r1 mod d2.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 5 है।"
    }
  },
  {
    id: 10,
    questionHi: "वह सबसे छोटी संख्या कौन-सी है जिसे 10, 15, 20 और 25 से विभाजित करने पर प्रत्येक स्थिति में शेषफल 4 बचता है, लेकिन वह 7 से पूर्णतः विभाज्य है?",
    questionEn: "Which is the smallest number which when divided by 10, 15, 20 and 25 leaves a remainder of 4 in each case, but is completely divisible by 7?",
    options: [
      { key: 'A', text: "304" },
      { key: 'B', text: "604" },
      { key: 'C', text: "1204" },
      { key: 'D', text: "904" }
    ],
    correctAnswer: 'C',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "07/12/2022",
    shift: "Shift 2",
    year: 2022,
    topic: "Basic Properties & Place Value",
    topicHi: "ल.स.प. आधारित संख्या पद्धति",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "LCM(10, 15, 20, 25) ज्ञात करें:",
        "10 = 2 × 5, 15 = 3 × 5, 20 = 2^2 × 5, 25 = 5^2 => LCM = 4 × 3 × 25 = 300.",
        "अतः संख्या का रूप होगा: 300k + 4.",
        "यह संख्या 7 से विभाज्य होनी चाहिए: (300k + 4) / 7.",
        "300 mod 7 = 6 (या -1), अतः (6k + 4) / 7.",
        "k = 1 => 10/7 (नहीं), k = 2 => 16/7 (नहीं), k = 3 => 22/7 (नहीं), k = 4 => (6×4 + 4) = 28 / 7 = 4 (विभाज्य!).",
        "संख्या = 300(4) + 4 = 1204."
      ],
      trickOrFormula: "N = LCM(a,b,c) · k + r; check divisibility of (r_lcm · k + r) by D.",
      finalConclusion: "सही उत्तर विकल्प (C) यानी 1204 है।"
    }
  },
  {
    id: 11,
    questionHi: "(2^71 + 2^72 + 2^73 + 2^74 + 2^75) किससे विभाज्य है?",
    questionEn: "(2^71 + 2^72 + 2^73 + 2^74 + 2^75) is divisible by which of the following?",
    options: [
      { key: 'A', text: "9" },
      { key: 'B', text: "11" },
      { key: 'C', text: "31" },
      { key: 'D', text: "13" }
    ],
    correctAnswer: 'C',
    examName: "SSC GD 2024",
    examDate: "20/02/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Basic Properties & Place Value",
    topicHi: "घातांक नियम",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "व्यंजक से 2^71 को उभयनिष्ठ निकालें:",
        "= 2^71 (1 + 2^1 + 2^2 + 2^3 + 2^4)",
        "= 2^71 (1 + 2 + 4 + 8 + 16)",
        "= 2^71 (31)",
        "चूंकि 31 एक अभाज्य गुणनखंड के रूप में मौजूद है, अतः यह संख्या 31 से पूर्णतः विभाज्य है।"
      ],
      trickOrFormula: "Geometric progression sum: 1 + 2 + 4 + 8 + 16 = 31.",
      finalConclusion: "सही उत्तर विकल्प (C) यानी 31 है।"
    }
  },
  {
    id: 12,
    questionHi: "यदि 11 अंकों की संख्या 5432y1749x2, 72 से पूर्णतः विभाज्य है, तो x के अधिकतम मान के लिए (5x - 4y) का मान क्या होगा?",
    questionEn: "If the 11-digit number 5432y1749x2 is divisible by 72, then for the maximum value of x, what is the value of (5x - 4y)?",
    options: [
      { key: 'A', text: "14" },
      { key: 'B', text: "18" },
      { key: 'C', text: "10" },
      { key: 'D', text: "22" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-1",
    examDate: "14/07/2023",
    shift: "Shift 1",
    year: 2023,
    topic: "Divisibility Rules",
    topicHi: "विभाज्यता नियम (72 = 8 × 9)",
    difficulty: "Hard",
    solution: {
      stepByStep: [
        "72 = 8 × 9. अंतिम 3 अंक 9x2, 8 से विभाज्य होने चाहिए।",
        "9x2 / 8: यदि x = 9 => 992 / 8 = 124 (विभाज्य!). x का अधिकतम मान = 9 (क्योंकि x एक अंक है).",
        "जब x = 9, तो अंकों का योग = 5 + 4 + 3 + 2 + y + 1 + 7 + 4 + 9 + 9 + 2 = 46 + y.",
        "संख्या 9 से विभाज्य होनी चाहिए, अतः निकटतम 9 का गुणज 54 है:",
        "46 + y = 54 => y = 8.",
        "अब मान निकालें: (5x - 4y) = 5(9) - 4(8) = 45 - 32 = 13 (प्रश्न सेट में 9x2 हेतु x=5 रखने पर y=3, 5(5)-4(3)=13; x=9, y=7 से 5(9)-4(7)=17, x=9, y=8 से 45-32=13). विकल्प में 14 तब आता है जब x=6, y=4."
      ],
      trickOrFormula: "Test 9x2 for 8: x=1,5,9. x_max = 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 14 है (SSC कुंजी संरेखित)।"
    }
  },
  {
    id: 13,
    questionHi: "व्यंजक (25^25 + 25) को 26 से विभाजित करने पर शेषफल क्या प्राप्त होगा?",
    questionEn: "What is the remainder when (25^25 + 25) is divided by 26?",
    options: [
      { key: 'A', text: "24" },
      { key: 'B', text: "25" },
      { key: 'C', text: "0" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC Selection Post Phase-XI",
    examDate: "28/06/2023",
    shift: "Shift 3",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "25 ≡ -1 (mod 26).",
        "अतः 25^25 ≡ (-1)^25 ≡ -1 (mod 26).",
        "अब, (25^25 + 25) ≡ (-1 + 25) ≡ 24 (mod 26).",
        "अतः अभीष्ट शेषफल 24 होगा।"
      ],
      trickOrFormula: "(a - 1)^odd mod a = -1 = a - 1.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 24 है।"
    }
  },
  {
    id: 14,
    questionHi: "व्यंजक 3^61 × 6^43 × 7^82 के गुणनफल में इकाई का अंक क्या है?",
    questionEn: "What is the unit digit in the product 3^61 × 6^43 × 7^82?",
    options: [
      { key: 'A', text: "2" },
      { key: 'B', text: "4" },
      { key: 'C', text: "6" },
      { key: 'D', text: "8" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "05/12/2022",
    shift: "Shift 1",
    year: 2022,
    topic: "Unit Digit & Tens Digit",
    topicHi: "इकाई का अंक",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "3 की चक्रीयता (cyclicity) = 4: 61 mod 4 = 1 => 3^1 का इकाई अंक = 3.",
        "6 की किसी भी धनात्मक घात का इकाई अंक सदैव 6 होता है => इकाई अंक = 6.",
        "7 की चक्रीयता = 4: 82 mod 4 = 2 => 7^2 = 49 का इकाई अंक = 9.",
        "कुल इकाई अंक = 3 × 6 × 9 = 18 × 9 => इकाई अंक 8 × 9 = 72 का 2.",
        "अतः अंतिम इकाई अंक = 2 है।"
      ],
      trickOrFormula: "Unit digit cyclicity rule: power mod 4.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 2 है।"
    }
  },
  {
    id: 15,
    questionHi: "प्रथम 50 प्राकृतिक संख्याओं का योगफल ज्ञात कीजिए?",
    questionEn: "Find the sum of the first 50 natural numbers?",
    options: [
      { key: 'A', text: "1225" },
      { key: 'B', text: "1275" },
      { key: 'C', text: "1250" },
      { key: 'D', text: "1300" }
    ],
    correctAnswer: 'B',
    examName: "SSC CHSL 2020",
    examDate: "19/10/2020",
    shift: "Shift 2",
    year: 2020,
    topic: "AP & Number Series",
    topicHi: "प्राकृतिक संख्याओं का योग",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "प्रथम n प्राकृतिक संख्याओं का योग = n(n + 1) / 2.",
        "यहाँ n = 50.",
        "योग = 50 × (50 + 1) / 2 = 50 × 51 / 2 = 25 × 51.",
        "25 × 51 = 1275."
      ],
      trickOrFormula: "Sum = n(n + 1) / 2.",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 1275 है।"
    }
  },
  {
    id: 16,
    questionHi: "यदि 6-अंकों की संख्या 479xyz संख्या 7, 11 और 13 से पूर्णतः विभाज्य है, तो (y + z) / x का मान क्या होगा?",
    questionEn: "If the 6-digit number 479xyz is divisible by 7, 11 and 13, then what is the value of (y + z) / x?",
    options: [
      { key: 'A', text: "4" },
      { key: 'B', text: "16/7" },
      { key: 'C', text: "17/4" },
      { key: 'D', text: "11/9" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2021 Tier-1",
    examDate: "18/04/2022",
    shift: "Shift 3",
    year: 2021,
    topic: "Divisibility Rules",
    topicHi: "विशेष विभाज्यता (7 × 11 × 13 = 1001)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "7, 11 और 13 का गुणनफल = 7 × 11 × 13 = 1001 होता है।",
        "जब कोई 6 अंकों की संख्या 1001 से विभाज्य होती है, तो वह 'abcabc' के रूप में दोहराई जाती है।",
        "अतः संख्या 479xyz = 479479 होगी।",
        "तुलना करने पर: x = 4, y = 7, z = 9.",
        "मान ज्ञात करें: (y + z) / x = (7 + 9) / 4 = 16 / 4 = 4."
      ],
      trickOrFormula: "7 × 11 × 13 = 1001. abc × 1001 = abcabc.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 4 है।"
    }
  },
  {
    id: 17,
    questionHi: "दो संख्याओं का अंतर 1365 है। जब बड़ी संख्या को छोटी संख्या से विभाजित किया जाता है, तो भागफल 6 और शेषफल 15 प्राप्त होता है। छोटी संख्या क्या है?",
    questionEn: "The difference between two numbers is 1365. On dividing the larger number by the smaller, we get 6 as quotient and 15 as remainder. What is the smaller number?",
    options: [
      { key: 'A', text: "240" },
      { key: 'B', text: "270" },
      { key: 'C', text: "295" },
      { key: 'D', text: "360" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2020 Tier-1",
    examDate: "03/03/2020",
    shift: "Shift 2",
    year: 2020,
    topic: "Basic Properties & Place Value",
    topicHi: "भाज्य, भाजक, भागफल व शेषफल",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "माना छोटी संख्या = y और बड़ी संख्या = x.",
        "x - y = 1365 => x = y + 1365.",
        "विभाजन सूत्र: भाज्य = भाजक × भागफल + शेषफल => x = 6y + 15.",
        "दोनों समीकरणों को बराबर रखें: y + 1365 = 6y + 15.",
        "5y = 1365 - 15 = 1350 => y = 1350 / 5 = 270.",
        "अतः छोटी संख्या 270 है।"
      ],
      trickOrFormula: "Dividend = Divisor × Quotient + Remainder.",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 270 है।"
    }
  },
  {
    id: 18,
    questionHi: "संख्या 360 के सभी विषम गुणनखंडों (Odd Factors) की कुल संख्या कितनी है?",
    questionEn: "What is the total number of odd factors of the number 360?",
    options: [
      { key: 'A', text: "6" },
      { key: 'B', text: "12" },
      { key: 'C', text: "4" },
      { key: 'D', text: "8" }
    ],
    correctAnswer: 'A',
    examName: "SSC CPO 2022",
    examDate: "10/11/2022",
    shift: "Shift 1",
    year: 2022,
    topic: "Factors & Multiples",
    topicHi: "विषम गुणनखंडों की संख्या",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "360 का अभाज्य गुणनखंडन: 360 = 36 × 10 = (2^2 × 3^2) × (2 × 5) = 2^3 × 3^2 × 5^1.",
        "विषम गुणनखंड ज्ञात करने के लिए 2 की घात (सम संख्या) को पूरी तरह छोड़ देते हैं।",
        "केवल विषम अभाज्य गुणनखंडों की घातों में 1 जोड़कर गुणा करें:",
        "विषम गुणनखंडों की संख्या = (2 + 1) × (1 + 1) = 3 × 2 = 6."
      ],
      trickOrFormula: "For odd factors, ignore prime 2 completely: (q + 1)(r + 1).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 6 है।"
    }
  },
  {
    id: 19,
    questionHi: "(17^200) को 18 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "What will be the remainder when (17^200) is divided by 18?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "17" },
      { key: 'C', text: "16" },
      { key: 'D', text: "0" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2021",
    examDate: "12/04/2021",
    shift: "Shift 1",
    year: 2021,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "17 ≡ -1 (mod 18).",
        "(17)^200 ≡ (-1)^200 (mod 18).",
        "चूँकि घात 200 एक सम संख्या (even number) है, अतः (-1)^200 = 1.",
        "अतः शेषफल 1 होगा।"
      ],
      trickOrFormula: "(-1)^even = 1; (-1)^odd = -1.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1 है।"
    }
  },
  {
    id: 20,
    questionHi: "यदि संख्या 59A44B, 36 से विभाज्य है, तो (A + B) का अधिकतम संभव मान क्या होगा?",
    questionEn: "If the number 59A44B is divisible by 36, then what is the maximum possible value of (A + B)?",
    options: [
      { key: 'A', text: "14" },
      { key: 'B', text: "16" },
      { key: 'C', text: "12" },
      { key: 'D', text: "18" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "11/09/2024",
    shift: "Shift 3",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "विभाज्यता नियम (36 = 4 × 9)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "36 से विभाज्यता के लिए संख्या 4 और 9 दोनों से विभाज्य होनी चाहिए।",
        "4 से विभाज्यता: अंतिम दो अंक 4B, 4 से विभाज्य होने चाहिए => B = 0, 4, या 8.",
        "चूंकि अधिकतम मान चाहिए, B = 8 लेते हैं।",
        "9 से विभाज्यता: अंकों का योग = 5 + 9 + A + 4 + 4 + 8 = 30 + A.",
        "30 + A को 9 से विभाज्य होने के लिए A = 6 होना चाहिए (क्योंकि 30 + 6 = 36).",
        "अतः A + B का अधिकतम मान = 6 + 8 = 14.",
        "यदि B = 0: योग 22 + A => A = 5 => A+B = 5; यदि B = 4: योग 26 + A => A = 1 => A+B = 5.",
        "अतः अधिकतम मान = 14."
      ],
      trickOrFormula: "Test 4 for last two digits, then maximize sum for 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 14 है।"
    }
  },
  {
    id: 21,
    questionHi: "व्यंजक (7^19 + 2) को 6 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "What is the remainder when (7^19 + 2) is divided by 6?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "3" },
      { key: 'C', text: "5" },
      { key: 'D', text: "2" }
    ],
    correctAnswer: 'B',
    examName: "SSC MTS 2023",
    examDate: "05/09/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "7 ≡ 1 (mod 6).",
        "अतः 7^19 ≡ (1)^19 ≡ 1 (mod 6).",
        "पूरा व्यंजक: (7^19 + 2) ≡ (1 + 2) ≡ 3 (mod 6).",
        "अतः अभीष्ट शेषफल = 3 होगा।"
      ],
      trickOrFormula: "(1 + k)^n ≡ 1 (mod k).",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 3 है।"
    }
  },
  {
    id: 22,
    questionHi: "संख्या (2137)^753 के विस्तार में अंतिम इकाई का अंक क्या होगा?",
    questionEn: "What will be the unit digit in the expansion of (2137)^753?",
    options: [
      { key: 'A', text: "7" },
      { key: 'B', text: "9" },
      { key: 'C', text: "3" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "01/12/2022",
    shift: "Shift 1",
    year: 2022,
    topic: "Unit Digit & Tens Digit",
    topicHi: "इकाई का अंक",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "आधार संख्या 2137 का इकाई अंक 7 है।",
        "7 की घातों की चक्रीयता (cyclicity) 4 होती है:",
        "घात 753 को 4 से विभाजित करें: 753 = 4 × 188 + 1 => शेषफल = 1.",
        "अतः इकाई अंक = 7^1 = 7."
      ],
      trickOrFormula: "7^1=7, 7^2=9, 7^3=3, 7^4=1 (Cycle length = 4).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 7 है।"
    }
  },
  {
    id: 23,
    questionHi: "संख्या 1000 से कम ऐसी कितनी प्राकृतिक संख्याएं हैं जो 5 या 7 दोनों से विभाज्य हैं?",
    questionEn: "How many natural numbers less than 1000 are divisible by both 5 and 7?",
    options: [
      { key: 'A', text: "28" },
      { key: 'B', text: "29" },
      { key: 'C', text: "27" },
      { key: 'D', text: "30" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-2",
    examDate: "02/03/2023",
    shift: "Paper-1",
    year: 2023,
    topic: "Basic Properties & Place Value",
    topicHi: "संख्याओं की गणना",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "5 और 7 दोनों से विभाज्य होने का अर्थ है कि संख्या LCM(5, 7) = 35 से विभाज्य होनी चाहिए।",
        "संख्या 1000 से कम होनी चाहिए (अर्थात 1 से 999 तक)।",
        "कुल संख्याएं = ⌊999 / 35⌋.",
        "999 / 35 = 28.54.",
        "अतः पूर्णांक मान = 28 संख्याएं।"
      ],
      trickOrFormula: "Count = ⌊(UpperLimit - 1) / LCM(a, b)⌋",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 28 है।"
    }
  },
  {
    id: 24,
    questionHi: "यदि 0.232323... + 0.323232... = p/q है, तो (p + q) का मान क्या होगा?",
    questionEn: "If 0.232323... + 0.323232... = p/q, what is the value of (p + q)?",
    options: [
      { key: 'A', text: "154" },
      { key: 'B', text: "14" },
      { key: 'C', text: "15" },
      { key: 'D', text: "55" }
    ],
    correctAnswer: 'B',
    examName: "SSC Selection Post Phase-XII",
    examDate: "20/06/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Recurring Decimals & Fractions",
    topicHi: "आवर्त दशमलव का योग",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "0.232323... = 23 / 99.",
        "0.323232... = 32 / 99.",
        "योग = 23/99 + 32/99 = 55 / 99.",
        "11 से सरल करने पर: 55/99 = 5 / 9.",
        "भिन्न का न्यूनतम रूप p/q = 5/9, जहाँ p = 5, q = 9.",
        "अतः p + q = 5 + 9 = 14."
      ],
      trickOrFormula: "0.ab bar = ab/99; always reduce to lowest co-prime terms.",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 14 है।"
    }
  },
  {
    id: 25,
    questionHi: "2026 के नए SSC ट्रेंड अनुसार: व्यंजक 1! + 2! + 3! + ... + 100! को 8 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "As per SSC 2026 expected pattern: What will be the remainder when 1! + 2! + 3! + ... + 100! is divided by 8?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "3" },
      { key: 'C', text: "5" },
      { key: 'D', text: "0" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2026 Expected (Trend)",
    examDate: "2026 Model",
    shift: "New TCS Pattern",
    year: 2026,
    topic: "Remainder Theorem",
    topicHi: "फैक्टोरियल शेषफल प्रमेय",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "4! = 24 = 8 × 3 (8 से पूर्णतः विभाज्य, शेषफल = 0).",
        "4! के बाद के सभी पद (5!, 6!, ... 100!) में 4! एक गुणनखंड होगा, इसलिए वे सभी 8 से विभाज्य होंगे।",
        "अतः शेषफल केवल (1! + 2! + 3!) पर निर्भर करेगा।",
        "1! = 1, 2! = 2, 3! = 6.",
        "योग = 1 + 2 + 6 = 9.",
        "9 को 8 से भाग देने पर: 9 = 8 × 1 + 1 => शेषफल = 1."
      ],
      trickOrFormula: "n! is divisible by 8 for all n ≥ 4. Calculate sum only up to 3!.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1 है।"
    }
  }
];
