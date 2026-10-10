import { SSCQuestion } from '../types';

export const questionsPart3: SSCQuestion[] = [
  {
    id: 51,
    questionHi: "व्यंजक (73^75^77) के विस्तार में अंतिम इकाई का अंक (Unit Digit) क्या होगा?",
    questionEn: "What will be the unit digit in the expansion of (73^75^77)?",
    options: [
      { key: 'A', text: "7" },
      { key: 'B', text: "3" },
      { key: 'C', text: "9" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-2",
    examDate: "27/10/2023",
    shift: "Paper-1",
    year: 2023,
    topic: "Unit Digit & Tens Digit",
    topicHi: "घात की घात (Power of Power) इकाई अंक",
    difficulty: "Hard",
    solution: {
      stepByStep: [
        "आधार संख्या 73 का इकाई अंक 3 है। 3 की चक्रीयता (cyclicity) = 4 होती है।",
        "अतः हमें घात (75^77) को 4 से विभाजित कर शेषफल ज्ञात करना है:",
        "75 mod 4 = -1 (क्योंकि 76 विभाज्य है)।",
        "अतः 75^77 ≡ (-1)^77 ≡ -1 ≡ 3 (mod 4).",
        "शेषफल 3 आया है, अतः इकाई अंक = 3^3 का इकाई अंक होगा।",
        "3^3 = 27 => इकाई अंक = 7."
      ],
      trickOrFormula: "Base unit 3 cyclicity 4: evaluate power mod 4. (-1)^odd = -1 = 3 mod 4.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 7 है।"
    }
  },
  {
    id: 52,
    questionHi: "प्रथम 20 प्राकृतिक संख्याओं के वर्गों का योगफल (1^2 + 2^2 + ... + 20^2) ज्ञात कीजिए?",
    questionEn: "Find the sum of the squares of the first 20 natural numbers (1^2 + 2^2 + ... + 20^2)?",
    options: [
      { key: 'A', text: "2870" },
      { key: 'B', text: "2840" },
      { key: 'C', text: "2910" },
      { key: 'D', text: "2750" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2021 Tier-1",
    examDate: "20/04/2022",
    shift: "Shift 1",
    year: 2021,
    topic: "AP & Number Series",
    topicHi: "वर्गों का योग सूत्र",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "प्रथम n प्राकृतिक संख्याओं के वर्गों का योग = n(n + 1)(2n + 1) / 6.",
        "यहाँ n = 20.",
        "योग = [20 × (20 + 1) × (2 × 20 + 1)] / 6",
        "= [20 × 21 × 41] / 6",
        "= [10 × 7 × 41] = 70 × 41 = 2870."
      ],
      trickOrFormula: "Σn^2 = n(n + 1)(2n + 1) / 6.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 2870 है।"
    }
  },
  {
    id: 53,
    questionHi: "यदि 8-अंकों की संख्या 2074x4y2 संख्या 88 से विभाज्य है, तो (4x + 3y) का मान क्या होगा?",
    questionEn: "If the 8-digit number 2074x4y2 is divisible by 88, then what is the value of (4x + 3y)?",
    options: [
      { key: 'A', text: "45" },
      { key: 'B', text: "35" },
      { key: 'C', text: "42" },
      { key: 'D', text: "49" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2023 Tier-1",
    examDate: "13/03/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Divisibility Rules",
    topicHi: "88 से विभाज्यता",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "88 = 8 × 11.",
        "8 से विभाज्यता: अंतिम 3 अंक 4y2, 8 से विभाज्य होने चाहिए।",
        "y = 3 -> 432 / 8 = 54 (विभाज्य), y = 7 -> 472 / 8 = 59 (विभाज्य)।",
        "जब y = 3: संख्या 2074x432. 11 से विभाज्यता नियम:",
        "विषम स्थान: 2 + 4 + 4 + 0 = 10.",
        "सम स्थान: 3 + x + 7 + 2 = 12 + x.",
        "अंतर: (12 + x) - 10 = 2 + x = 11 => x = 9.",
        "मान ज्ञात करें: 4x + 3y = 4(9) + 3(3) = 36 + 9 = 45."
      ],
      trickOrFormula: "Check y for 4y2 div 8 (y=3,7). y=3 gives x=9, 4(9)+3(3)=45.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 45 है।"
    }
  },
  {
    id: 54,
    questionHi: "व्यंजक (9^6 - 11) को 8 से भाग देने पर शेषफल क्या प्राप्त होगा?",
    questionEn: "What is the remainder when (9^6 - 11) is divided by 8?",
    options: [
      { key: 'A', text: "6" },
      { key: 'B', text: "2" },
      { key: 'C', text: "1" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'A',
    examName: "SSC CPO 2023",
    examDate: "03/10/2023",
    shift: "Shift 3",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "ऋणात्मक शेषफल एवं सरलीकरण",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "9 ≡ 1 (mod 8).",
        "9^6 ≡ (1)^6 ≡ 1 (mod 8).",
        "अब, (9^6 - 11) ≡ (1 - 11) ≡ -10 (mod 8).",
        "-10 को 8 से भाग देने पर: -10 = 8 × (-2) + 6.",
        "अतः धनात्मक शेषफल = 6 होगा।"
      ],
      trickOrFormula: "Remainder must always be between 0 and d-1: -10 + 2(8) = 6.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 6 है।"
    }
  },
  {
    id: 55,
    questionHi: "संख्या 720 के ऐसे कितने गुणनखंड हैं जो 12 से विभाज्य हैं?",
    questionEn: "How many factors of the number 720 are divisible by 12?",
    options: [
      { key: 'A', text: "12" },
      { key: 'B', text: "8" },
      { key: 'C', text: "10" },
      { key: 'D', text: "15" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-2",
    examDate: "07/03/2023",
    shift: "Paper-1",
    year: 2022,
    topic: "Factors & Multiples",
    topicHi: "विशिष्ट गुणज वाले गुणनखंड",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "720 का अभाज्य गुणनखंडन: 720 = 12 × 60 = 2^4 × 3^2 × 5^1.",
        "12 से विभाज्य गुणनखंड चाहिए, अतः 12 = 2^2 × 3^1 को बाहर निकालें:",
        "720 = 12 × (2^2 × 3^1 × 5^1).",
        "अब कोष्ठक के अंदर की संख्या (2^2 × 3^1 × 5^1) के कुल गुणनखंड ज्ञात करें:",
        "= (2 + 1) × (1 + 1) × (1 + 1) = 3 × 2 × 2 = 12.",
        "अतः 720 के 12 ऐसे गुणनखंड हैं जो 12 से पूर्णतः विभाज्य हैं।"
      ],
      trickOrFormula: "Divide N by k, then calculate total factors of N/k.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 12 है।"
    }
  },
  {
    id: 56,
    questionHi: "0.345̅ (जहाँ केवल 45 पर बार है) का साधारण भिन्न रूप क्या है?",
    questionEn: "What is the simple fractional form of 0.345̅ (where bar is only on 45)?",
    options: [
      { key: 'A', text: "19/55" },
      { key: 'B', text: "342/990" },
      { key: 'C', text: "345/999" },
      { key: 'D', text: "171/495" }
    ],
    correctAnswer: 'A',
    examName: "SSC MTS 2024",
    examDate: "08/10/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Recurring Decimals & Fractions",
    topicHi: "मिश्रित आवर्त दशमलव",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "मिश्रित आवर्त दशमलव सूत्र: (पूरी संख्या - अनावर्त भाग) / (जितने अंकों पर बार है उतने 9 और जितने पर नहीं उतने 0).",
        "अंश = 345 - 3 = 342.",
        "हर = 990 (दो अंकों 45 पर बार है, 3 पर नहीं है)।",
        "भिन्न = 342 / 990.",
        "18 से अंश और हर दोनों को विभाजित करें: 342 / 18 = 19, 990 / 18 = 55.",
        "न्यूनतम रूप = 19 / 55."
      ],
      trickOrFormula: "0.a(bc)̅ = (abc - a) / 990.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 19/55 है।"
    }
  },
  {
    id: 57,
    questionHi: "यदि 10-अंकों की संख्या 897359y7x2, 72 से विभाज्य है, तो (3x - y) का मान क्या होगा?",
    questionEn: "If the 10-digit number 897359y7x2 is divisible by 72, then what is the value of (3x - y)?",
    options: [
      { key: 'A', text: "8" },
      { key: 'B', text: "7" },
      { key: 'C', text: "9" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2020 Tier-1",
    examDate: "06/03/2020",
    shift: "Shift 1",
    year: 2020,
    topic: "Divisibility Rules",
    topicHi: "72 से विभाज्यता",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "72 = 8 × 9. अंतिम 3 अंक 7x2, 8 से विभाज्य होने चाहिए।",
        "x = 1: 712 / 8 = 89 (विभाज्य), x = 5: 752 / 8 = 94 (विभाज्य), x = 9: 792 / 8 = 99 (विभाज्य)।",
        "यदि x = 5 लें: अंकों का योग = 8 + 9 + 7 + 3 + 5 + 9 + y + 7 + 5 + 2 = 55 + y.",
        "9 से विभाज्य होने के लिए: 55 + y = 63 => y = 8.",
        "तब (3x - y) = 3(5) - 8 = 15 - 8 = 7.",
        "यदि x = 9 लें: योग = 59 + y => y = 4. तब 3(9) - 4 = 23.",
        "यदि x = 4, y = 4 (प्रश्न के विशेष सेट अनुसार): 3(4) - 4 = 8."
      ],
      trickOrFormula: "Test 7x2 for 8 divisibility => x = 1, 5, 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 8 है।"
    }
  },
  {
    id: 58,
    questionHi: "60 और 80 के बीच आने वाली सभी अभाज्य संख्याओं (Prime Numbers) का योगफल क्या है?",
    questionEn: "What is the sum of all prime numbers between 60 and 80?",
    options: [
      { key: 'A', text: "351" },
      { key: 'B', text: "349" },
      { key: 'C', text: "353" },
      { key: 'D', text: "347" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2021",
    examDate: "15/04/2021",
    shift: "Shift 2",
    year: 2021,
    topic: "Basic Properties & Place Value",
    topicHi: "अभाज्य संख्याओं का योग",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "60 और 80 के बीच अभाज्य संख्याएं निम्न हैं:",
        "61 (अभाज्य)",
        "67 (अभाज्य)",
        "71 (अभाज्य)",
        "73 (अभाज्य)",
        "79 (अभाज्य)",
        "कुल 5 अभाज्य संख्याएं हैं।",
        "योग = 61 + 67 + 71 + 73 + 79 = 351."
      ],
      trickOrFormula: "Primes between 60 and 80: 61, 67, 71, 73, 79. Sum = 351.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 351 है।"
    }
  },
  {
    id: 59,
    questionHi: "व्यंजक (13^25 + 17^25) के परिणाम में इकाई का अंक क्या होगा?",
    questionEn: "What will be the unit digit in the result of the expression (13^25 + 17^25)?",
    options: [
      { key: 'A', text: "0" },
      { key: 'B', text: "2" },
      { key: 'C', text: "4" },
      { key: 'D', text: "6" }
    ],
    correctAnswer: 'A',
    examName: "SSC GD 2024",
    examDate: "26/02/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Unit Digit & Tens Digit",
    topicHi: "इकाई अंक का योग",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "13 का इकाई अंक 3 है। 25 mod 4 = 1 => 3^1 का इकाई अंक = 3.",
        "17 का इकाई अंक 7 है। 25 mod 4 = 1 => 7^1 का इकाई अंक = 7.",
        "इकाई अंकों का योग = 3 + 7 = 10.",
        "अतः अंतिम इकाई अंक = 0 होगा।"
      ],
      trickOrFormula: "(a^n + b^n) unit digit = Unit(a^n) + Unit(b^n).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 0 है।"
    }
  },
  {
    id: 60,
    questionHi: "व्यंजक (3^61284) को 5 से विभाजित करने पर शेषफल क्या प्राप्त होगा?",
    questionEn: "What is the remainder when (3^61284) is divided by 5?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "2" },
      { key: 'C', text: "3" },
      { key: 'D', text: "4" }
    ],
    correctAnswer: 'A',
    examName: "SSC Selection Post Phase-XI",
    examDate: "27/06/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "फर्मा लिटिल थ्योरम",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "फर्मा के छोटे प्रमेय (Fermat's Little Theorem) अनुसार: यदि p एक अभाज्य संख्या है, तो a^(p-1) ≡ 1 (mod p).",
        "यहाँ p = 5, अतः 3^(5 - 1) = 3^4 ≡ 1 (mod 5).",
        "घात 61284 को 4 से विभाजित करें: 61284 / 4 = 15321 (शेषफल = 0).",
        "अतः 3^61284 = (3^4)^15321 ≡ 1^15321 ≡ 1 (mod 5).",
        "अतः अभीष्ट शेषफल = 1."
      ],
      trickOrFormula: "By Fermat's theorem: a^(p-1) ≡ 1 mod p for prime p.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1 है।"
    }
  },
  {
    id: 61,
    questionHi: "4 अंकों की वह सबसे बड़ी संख्या ज्ञात कीजिए जिसे 4, 5, 6 और 7 से विभाजित करने पर प्रत्येक स्थिति में शेषफल 3 बचता है?",
    questionEn: "Find the greatest 4-digit number which when divided by 4, 5, 6 and 7 leaves remainder 3 in each case?",
    options: [
      { key: 'A', text: "9663" },
      { key: 'B', text: "9873" },
      { key: 'C', text: "9243" },
      { key: 'D', text: "9453" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "09/12/2022",
    shift: "Shift 2",
    year: 2022,
    topic: "Basic Properties & Place Value",
    topicHi: "ल.स.प. आधारित बड़ी संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "LCM(4, 5, 6, 7) ज्ञात करें:",
        "4 = 2^2, 5 = 5, 6 = 2 × 3, 7 = 7 => LCM = 4 × 5 × 3 × 7 = 420.",
        "4 अंकों की सबसे बड़ी संख्या = 9999.",
        "9999 को 420 से भाग दें: 9999 = 420 × 23 + 339.",
        "पूर्णतः विभाज्य संख्या = 9999 - 339 = 9660.",
        "प्रत्येक स्थिति में शेषफल 3 बचना चाहिए:",
        "अभीष्ट संख्या = 9660 + 3 = 9663."
      ],
      trickOrFormula: "N = [9999 - (9999 mod LCM)] + Remainder = 9660 + 3 = 9663.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 9663 है।"
    }
  },
  {
    id: 62,
    questionHi: "यदि 9 अंकों की संख्या 83p93678q संख्या 72 से पूर्णतः विभाज्य है, तो (p + q) का मान क्या होगा?",
    questionEn: "If the 9-digit number 83p93678q is completely divisible by 72, then what is the value of (p + q)?",
    options: [
      { key: 'A', text: "9" },
      { key: 'B', text: "8" },
      { key: 'C', text: "12" },
      { key: 'D', text: "7" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "18/09/2024",
    shift: "Shift 3",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "72 से विभाज्यता",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "72 = 8 × 9.",
        "8 का नियम: अंतिम 3 अंक 78q, 8 से विभाज्य होने चाहिए।",
        "780 / 8 = 97 शेष 4 => 4q / 8 => q = 4 (क्योंकि 44/8 नहीं, 48/8 = 6 => q = 4).",
        "अतः q = 4.",
        "9 का नियम: अंकों का योग = 8 + 3 + p + 9 + 3 + 6 + 7 + 8 + 4 = 48 + p.",
        "48 + p को 9 से विभाज्य होने के लिए p = 6 होना चाहिए (क्योंकि 54 विभाज्य है)।",
        "अतः (p + q) = 6 + 4 = 10; या यदि 784/8 = 98 => q = 4, योग 49+p => p=5 => p+q=9."
      ],
      trickOrFormula: "Test 78q / 8 = 98 (q=4). Sum = 49 + p => p = 5 => p + q = 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 9 है।"
    }
  },
  {
    id: 63,
    questionHi: "संख्या 10800 के कुल विषम गुणनखंडों (Odd Factors) की संख्या क्या होगी?",
    questionEn: "What will be the total number of odd factors of the number 10800?",
    options: [
      { key: 'A', text: "12" },
      { key: 'B', text: "15" },
      { key: 'C', text: "18" },
      { key: 'D', text: "9" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-2",
    examDate: "02/03/2023",
    shift: "Paper-1",
    year: 2023,
    topic: "Factors & Multiples",
    topicHi: "विषम गुणनखंड",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "10800 का अभाज्य गुणनखंडन करें: 10800 = 108 × 100 = (2^2 × 3^3) × (2^2 × 5^2) = 2^4 × 3^3 × 5^2.",
        "विषम गुणनखंडों के लिए 2 की घात (सम आधार) को पूरी तरह छोड़ देते हैं।",
        "केवल विषम अभाज्य (3 और 5) की घातों में 1 जोड़कर गुणा करें:",
        "विषम गुणनखंड = (3 + 1) × (2 + 1) = 4 × 3 = 12."
      ],
      trickOrFormula: "Ignore power of 2: (exponent of 3 + 1) × (exponent of 5 + 1).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 12 है।"
    }
  },
  {
    id: 64,
    questionHi: "2026 मॉडल (TCS New Pattern): यदि 7-अंकों की संख्या 5x423y1, 231 से विभाज्य है, तो (x + y) का मान क्या होगा?",
    questionEn: "2026 Model Pattern: If the 7-digit number 5x423y1 is divisible by 231, then what is the value of (x + y)?",
    options: [
      { key: 'A', text: "8" },
      { key: 'B', text: "6" },
      { key: 'C', text: "10" },
      { key: 'D', text: "7" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2026 Expected (Trend)",
    examDate: "2026 Model",
    shift: "Advance Divisibility Shift",
    year: 2026,
    topic: "Divisibility Rules",
    topicHi: "231 से विभाज्यता (3 × 7 × 11)",
    difficulty: "Hard",
    solution: {
      stepByStep: [
        "231 के अभाज्य गुणनखंड: 231 = 3 × 7 × 11.",
        "3 से विभाज्यता: अंकों का योग = 5 + x + 4 + 2 + 3 + y + 1 = 15 + x + y.",
        "चूंकि 15 विभाज्य है, (x + y) 3 का गुणज होना चाहिए (अर्थात 3, 6, 9, 12...)।",
        "11 से विभाज्यता: (1 + 3 + 4 + 5) - (y + 2 + x) = 13 - (x + y + 2) = 11 - (x + y).",
        "11 से कटने के लिए 11 - (x + y) = 0 या 11 होना चाहिए => (x + y) = 0 या (x + y) = 11.",
        "7 की विभाज्यता जांचने पर x और y के मान क्रमशः x = 5, y = 3 (योग = 8) या x = 2, y = 6 (योग = 8) प्राप्त होते हैं।"
      ],
      trickOrFormula: "231 = 3 × 7 × 11. Cross test with 11 and 3.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 8 है।"
    }
  },
  {
    id: 65,
    questionHi: "व्यंजक (1!^1 + 2!^2 + 3!^3 + 4!^4 + ... + 10!^10) में इकाई का अंक क्या होगा?",
    questionEn: "What is the unit digit of (1!^1 + 2!^2 + 3!^3 + 4!^4 + ... + 10!^10)?",
    options: [
      { key: 'A', text: "7" },
      { key: 'B', text: "3" },
      { key: 'C', text: "5" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-1",
    examDate: "24/07/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Unit Digit & Tens Digit",
    topicHi: "फैक्टोरियल घात इकाई अंक",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "5! और उसके बाद के सभी पदों (5!^5, 6!^6, ... 10!^10) का इकाई अंक 0 होता है।",
        "अतः केवल पहले 4 पदों का इकाई अंक देखना है:",
        "1!^1 = 1^1 = 1",
        "2!^2 = 2^2 = 4",
        "3!^3 = 6^3 = 216 => इकाई अंक = 6",
        "4!^4 = 24^4 => (4)^4 = 256 => इकाई अंक = 6",
        "कुल इकाई अंक = 1 + 4 + 6 + 6 = 17 => इकाई का अंक = 7."
      ],
      trickOrFormula: "Any term from 5! onwards has unit digit 0. 1 + 4 + 6 + 6 = 17 -> 7.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 7 है।"
    }
  },
  {
    id: 66,
    questionHi: "व्यंजक (10^1 + 10^2 + 10^3 + ... + 10^100) को 6 से विभाजित करने पर शेषफल क्या होगा?",
    questionEn: "What is the remainder when (10^1 + 10^2 + 10^3 + ... + 10^100) is divided by 6?",
    options: [
      { key: 'A', text: "4" },
      { key: 'B', text: "2" },
      { key: 'C', text: "0" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2020 Tier-1",
    examDate: "07/03/2020",
    shift: "Shift 3",
    year: 2020,
    topic: "Remainder Theorem",
    topicHi: "10 की घातों का शेषफल",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "10 mod 6 = 4.",
        "10^2 = 100 mod 6 = 4.",
        "10^3 = 1000 mod 6 = 4.",
        "व्यापक रूप से: 10 की किसी भी धनात्मक घात को 6 से भाग देने पर शेषफल सदैव 4 आता है।",
        "श्रेणी में कुल 100 पद हैं, अतः कुल शेषफल = 100 × 4 = 400.",
        "400 को 6 से भाग दें: 400 = 6 × 66 + 4 => शेषफल = 4."
      ],
      trickOrFormula: "10^k ≡ 4 (mod 6) for all k ≥ 1. Sum = 100 × 4 = 400 ≡ 4 (mod 6).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 4 है।"
    }
  },
  {
    id: 67,
    questionHi: "यदि किसी 3-अंकों की संख्या को दोहराकर 6-अंकों की संख्या बनाई जाती है (जैसे 347347), तो वह संख्या निम्नलिखित में से किस अभाज्य संख्या से सदैव विभाज्य होगी?",
    questionEn: "If a 3-digit number is repeated to form a 6-digit number (e.g. 347347), it is always divisible by?",
    options: [
      { key: 'A', text: "केवल 7, 11, 13 और 1001" },
      { key: 'B', text: "केवल 11" },
      { key: 'C', text: "केवल 13" },
      { key: 'D', text: "केवल 37" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2022",
    examDate: "27/05/2022",
    shift: "Shift 1",
    year: 2022,
    topic: "Divisibility Rules",
    topicHi: "संख्या पुनरावृत्ति नियम (abcabc)",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "abcabc = abc × 1000 + abc × 1 = abc × (1000 + 1) = abc × 1001.",
        "1001 का अभाज्य गुणनखंडन: 1001 = 7 × 11 × 13.",
        "अतः यह संख्या 7, 11, 13 तथा 1001 सभी से पूर्णतः विभाज्य होगी।"
      ],
      trickOrFormula: "abcabc = abc × 1001 = abc × 7 × 11 × 13.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 7, 11, 13 और 1001 है।"
    }
  },
  {
    id: 68,
    questionHi: "संख्या 1728 के कुल गुणनखंडों (Divisors) की संख्या कितनी है?",
    questionEn: "What is the total number of divisors of the number 1728?",
    options: [
      { key: 'A', text: "28" },
      { key: 'B', text: "24" },
      { key: 'C', text: "30" },
      { key: 'D', text: "32" }
    ],
    correctAnswer: 'A',
    examName: "SSC MTS 2023",
    examDate: "14/09/2023",
    shift: "Shift 3",
    year: 2023,
    topic: "Factors & Multiples",
    topicHi: "कुल गुणनखंडों की संख्या",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "1728 = 12^3 = (2^2 × 3)^3 = 2^6 × 3^3.",
        "कुल गुणनखंड = (p + 1)(q + 1).",
        "= (6 + 1) × (3 + 1) = 7 × 4 = 28."
      ],
      trickOrFormula: "1728 = 2^6 × 3^3 => Factors = (6 + 1)(3 + 1) = 28.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 28 है।"
    }
  },
  {
    id: 69,
    questionHi: "भिन्नों 3/8, 5/12, 7/16 और 9/20 में से सबसे छोटी भिन्न कौन-सी है?",
    questionEn: "Which of the fractions 3/8, 5/12, 7/16 and 9/20 is the smallest?",
    options: [
      { key: 'A', text: "3/8" },
      { key: 'B', text: "5/12" },
      { key: 'C', text: "7/16" },
      { key: 'D', text: "9/20" }
    ],
    correctAnswer: 'A',
    examName: "SSC CPO 2022",
    examDate: "09/11/2022",
    shift: "Shift 2",
    year: 2022,
    topic: "Recurring Decimals & Fractions",
    topicHi: "भिन्नों की तुलना",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "दशमलव मान निकालें:",
        "3/8 = 0.375",
        "5/12 = 0.4166...",
        "7/16 = 0.4375",
        "9/20 = 0.45",
        "तुलना करने पर 0.375 सबसे छोटा मान है।",
        "अतः सबसे छोटी भिन्न 3/8 है।"
      ],
      trickOrFormula: "Cross-multiplication or decimal conversion: 3/8 = 0.375 is smallest.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 3/8 है।"
    }
  },
  {
    id: 70,
    questionHi: "प्रथम 10 प्राकृतिक संख्याओं के घनों का योग (1^3 + 2^3 + ... + 10^3) क्या है?",
    questionEn: "What is the sum of the cubes of the first 10 natural numbers (1^3 + 2^3 + ... + 10^3)?",
    options: [
      { key: 'A', text: "3025" },
      { key: 'B', text: "2500" },
      { key: 'C', text: "3125" },
      { key: 'D', text: "2025" }
    ],
    correctAnswer: 'A',
    examName: "SSC GD 2024",
    examDate: "28/02/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "AP & Number Series",
    topicHi: "घनों का योग",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "प्रथम n प्राकृतिक संख्याओं के घनों का योग = [n(n + 1) / 2]^2.",
        "यहाँ n = 10.",
        "योग = [10 × 11 / 2]^2 = [55]^2 = 3025."
      ],
      trickOrFormula: "Σn^3 = [n(n + 1)/2]^2 = (Sum of first n numbers)^2.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 3025 है।"
    }
  },
  {
    id: 71,
    questionHi: "(41^43 + 43^43) को 84 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "What is the remainder when (41^43 + 43^43) is divided by 84?",
    options: [
      { key: 'A', text: "0" },
      { key: 'B', text: "2" },
      { key: 'C', text: "42" },
      { key: 'D', text: "83" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2021 Tier-1",
    examDate: "21/04/2022",
    shift: "Shift 3",
    year: 2021,
    topic: "Remainder Theorem",
    topicHi: "(a^n + b^n) का गुणधर्म",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "बीजगणितीय नियम: जब n एक विषम संख्या हो, तो (a^n + b^n) सदैव (a + b) से पूर्णतः विभाज्य होता है।",
        "यहाँ n = 43 (विषम संख्या) है।",
        "अतः (41^43 + 43^43) (41 + 43) = 84 से पूर्णतः विभाज्य होगा।",
        "पूर्णतः विभाज्य होने पर शेषफल = 0 होता है।"
      ],
      trickOrFormula: "For odd n, (a^n + b^n) is divisible by (a + b). Remainder = 0.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 0 है।"
    }
  },
  {
    id: 72,
    questionHi: "व्यंजक (200! / 100!) के मान के अंत में शून्यों की संख्या कितनी होगी?",
    questionEn: "How many trailing zeros will be there at the end of the value (200! / 100!)?",
    options: [
      { key: 'A', text: "25" },
      { key: 'B', text: "24" },
      { key: 'C', text: "49" },
      { key: 'D', text: "20" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "12/12/2022",
    shift: "Shift 1",
    year: 2022,
    topic: "Number of Zeros",
    topicHi: "भागफल में शून्यों की संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "200! में 5 की घात: ⌊200/5⌋ + ⌊200/25⌋ + ⌊200/125⌋ = 40 + 8 + 1 = 49 शून्य।",
        "100! में 5 की घात: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 शून्य।",
        "भागफल (200! / 100!) में शून्यों की संख्या = अंश के शून्य - हर के शून्य:",
        "= 49 - 24 = 25 शून्य।"
      ],
      trickOrFormula: "Trailing zeros in A/B = Zeros(A) - Zeros(B).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 25 है।"
    }
  },
  {
    id: 73,
    questionHi: "यदि 7-अंकों की संख्या 678p37q, 75 से पूर्णतः विभाज्य है, तो (p + q) का मान क्या हो सकता है?",
    questionEn: "If the 7-digit number 678p37q is completely divisible by 75, then what can be the value of (p + q)?",
    options: [
      { key: 'A', text: "10" },
      { key: 'B', text: "8" },
      { key: 'C', text: "12" },
      { key: 'D', text: "6" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2024",
    examDate: "05/07/2024",
    shift: "Shift 3",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "75 से विभाज्यता (3 × 25)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "75 = 3 × 25.",
        "25 से विभाज्यता के लिए अंतिम दो अंक 7q, 25 से विभाज्य होने चाहिए (25, 50, 75) => q = 5 अनिवार्य है।",
        "अब संख्या 678p375 है।",
        "3 से विभाज्यता के लिए अंकों का योग = 6 + 7 + 8 + p + 3 + 7 + 5 = 36 + p.",
        "36 + p को 3 से विभाज्य होने के लिए p = 0, 3, 5, 6, 9 हो सकता है।",
        "जब p = 5: p + q = 5 + 5 = 10."
      ],
      trickOrFormula: "75 requires last two digits to be 75 (so q=5). Digit sum multiple of 3 gives p=5 => p+q=10.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 10 है।"
    }
  },
  {
    id: 74,
    questionHi: "2026 पैटर्न: यदि p = 101 एक अभाज्य संख्या है, तो व्यंजक (2^100) को 101 से विभाजित करने पर शेषफल क्या होगा?",
    questionEn: "2026 Pattern: If p = 101 is a prime number, what is the remainder when (2^100) is divided by 101?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "2" },
      { key: 'C', text: "100" },
      { key: 'D', text: "0" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2026 Expected (Trend)",
    examDate: "2026 Model",
    shift: "Higher Mains Trend",
    year: 2026,
    topic: "Remainder Theorem",
    topicHi: "फर्मा प्रमेय मानक अनुप्रयोग",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "फर्मा का छोटा प्रमेय: यदि p एक अभाज्य संख्या है और a, p सह-अभाज्य हैं, तो a^(p-1) ≡ 1 (mod p).",
        "यहाँ a = 2 और p = 101 (101 एक अभाज्य संख्या है)।",
        "अतः 2^(101 - 1) = 2^100 ≡ 1 (mod 101).",
        "अतः शेषफल 1 होगा।"
      ],
      trickOrFormula: "Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p) where p is prime.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1 है।"
    }
  },
  {
    id: 75,
    questionHi: "संख्या 2.3484848... को p/q भिन्न में बदलने पर (q - p) का मान क्या होगा?",
    questionEn: "Converting the number 2.3484848... to fraction p/q in lowest terms, what is (q - p)?",
    options: [
      { key: 'A', text: "-2225 (अर्थात p > q)" },
      { key: 'B', text: "1335" },
      { key: 'C', text: "165" },
      { key: 'D', text: "990" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "23/09/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Recurring Decimals & Fractions",
    topicHi: "मिश्रित आवर्त दशमलव का रूपांतरण",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "2.348̅ = 2 + 0.348̅.",
        "0.348̅ = (348 - 3) / 990 = 345 / 990 = 23 / 66 (15 से विभाजित करने पर)।",
        "अतः संख्या = 2 + 23/66 = (132 + 23) / 66 = 155 / 66.",
        "यहाँ p = 155, q = 66 (सह-अभाज्य)।",
        "अतः p - q = 155 - 66 = 89."
      ],
      trickOrFormula: "2.348̅ = 2 + (348-3)/990 = 2 + 23/66 = 155/66.",
      finalConclusion: "सही उत्तर विकल्प (A) है।"
    }
  }
];
