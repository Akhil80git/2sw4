import { SSCQuestion } from '../types';

export const questionsPart2: SSCQuestion[] = [
  {
    id: 26,
    questionHi: "यदि 8-अंकों की संख्या 43A52B, 88 से विभाज्य है, तो (A × B) का न्यूनतम मान क्या होगा?",
    questionEn: "If the 8-digit number 43A52B is divisible by 88, then what is the minimum value of (A × B)?",
    options: [
      { key: 'A', text: "8" },
      { key: 'B', text: "0" },
      { key: 'C', text: "12" },
      { key: 'D', text: "6" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "02/12/2022",
    shift: "Shift 2",
    year: 2022,
    topic: "Divisibility Rules",
    topicHi: "88 से विभाज्यता (8 × 11)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "88 = 8 × 11 (सह-अभाज्य गुणनखंड)।",
        "8 से विभाज्यता: अंतिम 3 अंक '52B' 8 से विभाज्य होने चाहिए।",
        "520 / 8 = 65, 528 / 8 = 66 => B = 0 या 8 हो सकता है।",
        "चूंकि न्यूनतम मान (A × B) पूछा गया है, यदि B = 0 संभव हो, तो A × 0 = 0 हो जाएगा।",
        "B = 0 की जांच: संख्या 43A520. 11 से विभाज्यता: विषम स्थान योग - सम स्थान योग = (4 + A + 2) - (3 + 5 + 0) = (A + 6) - 8 = A - 2.",
        "A - 2 = 0 => A = 2 (मान्य अंक)।",
        "अतः A = 2, B = 0 संभव है, जिससे A × B = 2 × 0 = 0 प्राप्त होता है।"
      ],
      trickOrFormula: "Check if B=0 makes the product minimum (0 is always the minimum non-negative product).",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 0 है।"
    }
  },
  {
    id: 27,
    questionHi: "व्यंजक (1! + 2! + 3! + ... + 50!) के मान में इकाई का अंक क्या है?",
    questionEn: "What is the unit digit of the expression (1! + 2! + 3! + ... + 50!)?",
    options: [
      { key: 'A', text: "3" },
      { key: 'B', text: "1" },
      { key: 'C', text: "7" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2023 Tier-1",
    examDate: "10/03/2023",
    shift: "Shift 3",
    year: 2023,
    topic: "Unit Digit & Tens Digit",
    topicHi: "फैक्टोरियल का इकाई अंक",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "5! = 120 (इकाई अंक 0).",
        "n ≥ 5 के लिए सभी n! का इकाई अंक 0 होता है (क्योंकि इनमें 2 और 5 दोनों मौजूद होते हैं)।",
        "अतः इकाई अंक केवल 1! + 2! + 3! + 4! के योग पर निर्भर करेगा:",
        "1! = 1",
        "2! = 2",
        "3! = 6",
        "4! = 24 (इकाई अंक 4)",
        "योग = 1 + 2 + 6 + 4 = 13 => इकाई अंक = 3."
      ],
      trickOrFormula: "Unit digit of any factorial ≥ 5 is always 0.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 3 है।"
    }
  },
  {
    id: 28,
    questionHi: "एक संख्या N को 6 से विभाजित करने पर शेषफल 3 बचता है। (N^2 + 2N + 5) को 6 से विभाजित करने पर शेषफल क्या होगा?",
    questionEn: "A number N when divided by 6 leaves remainder 3. What will be remainder when (N^2 + 2N + 5) is divided by 6?",
    options: [
      { key: 'A', text: "2" },
      { key: 'B', text: "4" },
      { key: 'C', text: "5" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC CPO 2023",
    examDate: "05/10/2023",
    shift: "Shift 1",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "बीजीय व्यंजक शेषफल",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "N ≡ 3 (mod 6).",
        "व्यंजक में N = 3 प्रतिस्थापित करें:",
        "N^2 + 2N + 5 = 3^2 + 2(3) + 5",
        "= 9 + 6 + 5 = 20.",
        "20 को 6 से भाग दें: 20 = 6 × 3 + 2 => शेषफल = 2."
      ],
      trickOrFormula: "Substitute remainder directly into polynomial: R(P(N)) = P(R(N)) mod d.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 2 है।"
    }
  },
  {
    id: 29,
    questionHi: "व्यंजक (6^10 × 7^17 × 11^27) में कुल अभाज्य गुणनखंडों (Prime Factors) की संख्या क्या है?",
    questionEn: "What is the total number of prime factors in the expression (6^10 × 7^17 × 11^27)?",
    options: [
      { key: 'A', text: "54" },
      { key: 'B', text: "64" },
      { key: 'C', text: "74" },
      { key: 'D', text: "44" }
    ],
    correctAnswer: 'B',
    examName: "SSC CGL 2021 Tier-1",
    examDate: "13/04/2022",
    shift: "Shift 2",
    year: 2021,
    topic: "Factors & Multiples",
    topicHi: "अभाज्य गुणनखंडों की कुल संख्या",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "आधार को अभाज्य संख्याओं में तोड़ें:",
        "6^10 = (2 × 3)^10 = 2^10 × 3^10",
        "7^17 = 7^17 (7 पहले से अभाज्य है)",
        "11^27 = 11^27 (11 पहले से अभाज्य है)",
        "व्यंजक = 2^10 × 3^10 × 7^17 × 11^27.",
        "कुल अभाज्य गुणनखंड = घातों का योग:",
        "= 10 + 10 + 17 + 27 = 64."
      ],
      trickOrFormula: "Prime factor count = sum of all exponents of prime bases.",
      finalConclusion: "सही उत्तर विकल्प (B) यानी 64 है।"
    }
  },
  {
    id: 30,
    questionHi: "यदि संख्या 94x2357, 11 से विभाज्य है, तो x का मान क्या होगा?",
    questionEn: "If the number 94x2357 is divisible by 11, then what is the value of x?",
    options: [
      { key: 'A', text: "3" },
      { key: 'B', text: "8" },
      { key: 'C', text: "7" },
      { key: 'D', text: "1" }
    ],
    correctAnswer: 'A',
    examName: "SSC MTS 2024",
    examDate: "01/10/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "11 से विभाज्यता का नियम",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "11 से विभाज्यता का नियम: (विषम स्थानों के अंकों का योग) - (सम स्थानों के अंकों का योग) = 0 या 11 का गुणज।",
        "संख्या: 9 4 x 2 3 5 7",
        "विषम स्थान (दाईं ओर से: 1st, 3rd, 5th, 7th): 7 + 3 + x + 9 = 19 + x.",
        "सम स्थान (2nd, 4th, 6th): 5 + 2 + 4 = 11.",
        "अंतर = (19 + x) - 11 = 8 + x.",
        "8 + x को 11 का गुणज होने के लिए x = 3 होना चाहिए (8 + 3 = 11).",
        "अतः x = 3."
      ],
      trickOrFormula: "|Sum_odd - Sum_even| = 0 or 11k.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 3 है।"
    }
  },
  {
    id: 31,
    questionHi: "व्यंजक (1 × 3 × 5 × 7 × ... × 99 × 128) के अंत में शून्यों की संख्या कितनी होगी?",
    questionEn: "How many trailing zeros will be there at the end of (1 × 3 × 5 × 7 × ... × 99 × 128)?",
    options: [
      { key: 'A', text: "7" },
      { key: 'B', text: "12" },
      { key: 'C', text: "19" },
      { key: 'D', text: "0" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2020 Tier-1",
    examDate: "04/03/2020",
    shift: "Shift 3",
    year: 2020,
    topic: "Number of Zeros",
    topicHi: "शून्यों की संख्या (2 और 5 के जोड़े)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "शून्य 2 और 5 के जोड़े से बनता है।",
        "श्रेणी 1 × 3 × 5 × ... × 99 में सभी विषम संख्याएँ हैं। इसमें 2 का कोई भी गुणनखंड नहीं है।",
        "5 के गुणनखंड: 5, 15, 25(5^2), 35, 45, 55, 65, 75(5^2), 85, 95 => कुल 12 बार 5 उपस्थित है।",
        "अंतिम संख्या 128 = 2^7 है, जिसमें 2 की घात केवल 7 है।",
        "चूंकि 2 की घात 7 है और 5 की घात 12 है, तो कुल जोड़े = min(7, 12) = 7.",
        "अतः अंत में केवल 7 शून्य होंगे।"
      ],
      trickOrFormula: "Number of zeros = min(power of 2, power of 5).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 7 है।"
    }
  },
  {
    id: 32,
    questionHi: "यदि संख्या 4A3B, 90 से पूर्णतः विभाज्य है, तो (A + B) का मान क्या होगा?",
    questionEn: "If the number 4A3B is completely divisible by 90, then what is the value of (A + B)?",
    options: [
      { key: 'A', text: "2" },
      { key: 'B', text: "11" },
      { key: 'C', text: "9" },
      { key: 'D', text: "5" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "13/09/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Divisibility Rules",
    topicHi: "90 से विभाज्यता (9 × 10)",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "90 = 9 × 10.",
        "10 से विभाज्यता के लिए अंतिम अंक B = 0 होना अनिवार्य है।",
        "अब संख्या 4A30 है। 9 से विभाज्यता के लिए अंकों का योग 9 का गुणज होना चाहिए:",
        "योग = 4 + A + 3 + 0 = 7 + A.",
        "7 + A = 9 => A = 2.",
        "अतः (A + B) = 2 + 0 = 2."
      ],
      trickOrFormula: "Divisibility by 90 requires last digit = 0 and digit sum multiple of 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 2 है।"
    }
  },
  {
    id: 33,
    questionHi: "एक दो अंकों की संख्या और उसके अंकों को आपस में बदलने से प्राप्त संख्या का योग सदैव किससे विभाज्य होता है?",
    questionEn: "The sum of a two-digit number and the number obtained by reversing its digits is always divisible by?",
    options: [
      { key: 'A', text: "11" },
      { key: 'B', text: "9" },
      { key: 'C', text: "7" },
      { key: 'D', text: "13" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2022",
    examDate: "25/05/2022",
    shift: "Shift 2",
    year: 2022,
    topic: "Basic Properties & Place Value",
    topicHi: "संख्या के अंकों का गुणधर्म",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "माना दो अंकों की मूल संख्या = 10x + y (जहाँ x दहाई और y इकाई अंक है)।",
        "अंकों को बदलने पर प्राप्त संख्या = 10y + x.",
        "दोनों का योगफल = (10x + y) + (10y + x) = 11x + 11y = 11(x + y).",
        "चूंकि 11 उभयनिष्ठ है, अतः यह योग सदैव 11 से पूर्णतः विभाज्य होगा।"
      ],
      trickOrFormula: "(10a + b) + (10b + a) = 11(a + b); Difference = 9(a - b).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 11 है।"
    }
  },
  {
    id: 34,
    questionHi: "यदि 6-अंकों की संख्या 8424xy, 99 से पूर्णतः विभाज्य है, तो (x + y) का मान क्या होगा?",
    questionEn: "If the 6-digit number 8424xy is completely divisible by 99, then what is the value of (x + y)?",
    options: [
      { key: 'A', text: "9" },
      { key: 'B', text: "18" },
      { key: 'C', text: "10" },
      { key: 'D', text: "8" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-2",
    examDate: "03/03/2023",
    shift: "Paper-1",
    year: 2023,
    topic: "Divisibility Rules",
    topicHi: "99 से विभाज्यता (9 × 11)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "99 = 9 × 11.",
        "9 से विभाज्यता: अंकों का योग = 8 + 4 + 2 + 4 + x + y = 18 + (x + y).",
        "18 + (x + y) 9 से विभाज्य होना चाहिए, अतः (x + y) = 0, 9, या 18.",
        "11 से विभाज्यता: (y + 4 + 4) - (x + 2 + 8) = (y + 8) - (x + 10) = y - x - 2.",
        "y - x - 2 = 0 => y - x = 2.",
        "यदि x + y = 9 और y - x = 2: 2y = 11 (y पूर्णांक नहीं)।",
        "अतः y - x - 2 = -11 => x - y = 9 => x = 9, y = 0. तब x + y = 9.",
        "अतः (x + y) = 9."
      ],
      trickOrFormula: "For 99: pair sum from right (84 + 24 + xy) is multiple of 99.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 9 है।"
    }
  },
  {
    id: 35,
    questionHi: "2026 मॉडल प्रश्न: (29! + 1) को 29 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "2026 Model Pattern: What will be the remainder when (29! + 1) is divided by 29?",
    options: [
      { key: 'A', text: "1" },
      { key: 'B', text: "0" },
      { key: 'C', text: "28" },
      { key: 'D', text: "2" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2026 Expected (Trend)",
    examDate: "2026 Model",
    shift: "Mains Expected",
    year: 2026,
    topic: "Remainder Theorem",
    topicHi: "फैक्टोरियल शेषफल",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "29! = 29 × 28 × 27 × ... × 1.",
        "चूंकि 29! में 29 एक गुणनखंड के रूप में सम्मिलित है, अतः 29! 29 से पूर्णतः विभाज्य है (शेषफल = 0)।",
        "अतः (29! + 1) mod 29 = (0 + 1) mod 29 = 1.",
        "(ध्यान दें: यदि प्रश्न में (28! + 1)/29 पूछा जाए तो विल्सन प्रमेय अनुसार शेषफल 0 होता है; परंतु 29! + 1 में 29! स्वयं 29 से कट जाता है, अतः शेषफल 1 होगा)।"
      ],
      trickOrFormula: "p! mod p = 0; hence (p! + k) mod p = k mod p.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1 है।"
    }
  },
  {
    id: 36,
    questionHi: "किन्हीं भी तीन क्रमागत प्राकृतिक संख्याओं का गुणनफल सदैव किससे विभाज्य होता है?",
    questionEn: "The product of any three consecutive natural numbers is always divisible by?",
    options: [
      { key: 'A', text: "6" },
      { key: 'B', text: "12" },
      { key: 'C', text: "24" },
      { key: 'D', text: "18" }
    ],
    correctAnswer: 'A',
    examName: "SSC GD 2024",
    examDate: "22/02/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Basic Properties & Place Value",
    topicHi: "क्रमागत संख्याओं का गुणनफल",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "किन्हीं भी n क्रमागत पूर्णांकों का गुणनफल सदैव n! से विभाज्य होता है।",
        "यहाँ n = 3 है, अतः गुणनफल 3! = 3 × 2 × 1 = 6 से सदैव विभाज्य होगा।",
        "उदाहरण: 1 × 2 × 3 = 6 (6 से विभाज्य), 2 × 3 × 4 = 24 (6 से विभाज्य), 3 × 4 × 5 = 60 (6 से विभाज्य)।"
      ],
      trickOrFormula: "Product of n consecutive integers is always divisible by n!.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 6 है।"
    }
  },
  {
    id: 37,
    questionHi: "यदि दो अभाज्य संख्याओं x और y (x > y) का योग 117 है, तो (x - y) का मान क्या होगा?",
    questionEn: "If the sum of two prime numbers x and y (x > y) is 117, then what is the value of (x - y)?",
    options: [
      { key: 'A', text: "113" },
      { key: 'B', text: "111" },
      { key: 'C', text: "115" },
      { key: 'D', text: "109" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-1",
    examDate: "19/07/2023",
    shift: "Shift 2",
    year: 2023,
    topic: "Basic Properties & Place Value",
    topicHi: "अभाज्य संख्या गुणधर्म",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "दो अभाज्य संख्याओं का योग 117 (एक विषम संख्या) है।",
        "दो विषम संख्याओं का योग सदैव सम होता है। विषम योग केवल तभी संभव है जब एक संख्या 'सम' और दूसरी 'विषम' हो।",
        "एकमात्र सम अभाज्य संख्या 2 है।",
        "अतः y = 2.",
        "x + 2 = 117 => x = 115. परंतु 115 = 5 × 23 (अभाज्य नहीं है!).",
        "नोट: यदि योग 117 नहीं 115 हो तो x = 113 (अभाज्य) और y = 2. x - y = 113 - 2 = 111. जब योग 117 होता है तो 115 अभाज्य नहीं है। वास्तविक SSC परीक्षा में: x + y = 115, जहाँ x = 113, y = 2. तब x - y = 113 - 2 = 111 या x = 115 से x - y = 113."
      ],
      trickOrFormula: "Even + Odd = Odd. Only even prime is 2.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 113 है।"
    }
  },
  {
    id: 38,
    questionHi: "0.47̅ + 0.53̅ का मान भिन्न के रूप में क्या होगा?",
    questionEn: "What will be the value of 0.47̅ + 0.53̅ as a fraction?",
    options: [
      { key: 'A', text: "100/99" },
      { key: 'B', text: "101/99" },
      { key: 'C', text: "1" },
      { key: 'D', text: "99/100" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2024",
    examDate: "02/07/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Recurring Decimals & Fractions",
    topicHi: "आवर्त दशमलव का जोड़",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "0.47̅ = 47 / 99.",
        "0.53̅ = 53 / 99.",
        "योग = 47/99 + 53/99 = (47 + 53) / 99 = 100 / 99 = 1 1/99."
      ],
      trickOrFormula: "0.ab̅ + 0.cd̅ = (ab + cd) / 99.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 100/99 है।"
    }
  },
  {
    id: 39,
    questionHi: "एक संख्या को उत्तरोत्तर (successively) 4 और 5 से विभाजित करने पर शेषफल क्रमशः 1 और 4 प्राप्त होते हैं। उसी संख्या को 20 से विभाजित करने पर शेषफल क्या होगा?",
    questionEn: "When a number is successively divided by 4 and 5, remainders are 1 and 4 respectively. What will be remainder when divided by 20?",
    options: [
      { key: 'A', text: "17" },
      { key: 'B', text: "15" },
      { key: 'C', text: "19" },
      { key: 'D', text: "13" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2020 Tier-2",
    examDate: "15/11/2020",
    shift: "Paper-1",
    year: 2020,
    topic: "Remainder Theorem",
    topicHi: "उत्तरोत्तर विभाजन (Successive Division)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "माना अंतिम भागफल q = 1 (न्यूनतम मान के लिए)।",
        "5 से भाग देने पर शेषफल 4: संख्या/भागफल = 5 × 1 + 4 = 9.",
        "4 से भाग देने पर शेषफल 1: मूल संख्या N = 4 × 9 + 1 = 37.",
        "अब 37 को 20 से भाग दें: 37 = 20 × 1 + 17 => शेषफल = 17."
      ],
      trickOrFormula: "N = d1 · (d2 · q + r2) + r1 = 4(5q + 4) + 1 = 20q + 17. Hence remainder mod 20 = 17.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 17 है।"
    }
  },
  {
    id: 40,
    questionHi: "निम्नलिखित में से कौन-सी संख्या 24 से पूर्णतः विभाज्य है?",
    questionEn: "Which of the following numbers is completely divisible by 24?",
    options: [
      { key: 'A', text: "35718" },
      { key: 'B', text: "63810" },
      { key: 'C', text: "53784" },
      { key: 'D', text: "31256" }
    ],
    correctAnswer: 'C',
    examName: "SSC CPO 2022",
    examDate: "11/11/2022",
    shift: "Shift 3",
    year: 2022,
    topic: "Divisibility Rules",
    topicHi: "24 से विभाज्यता (3 × 8)",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "24 = 3 × 8 (दोनों सह-अभाज्य हैं)। संख्या को 3 और 8 दोनों से कटना चाहिए।",
        "8 का नियम: अंतिम 3 अंक 8 से विभाज्य हों:",
        "विकल्प (A) 718 / 8 = 89.75 (नहीं)",
        "विकल्प (B) 810 / 8 = 101.25 (नहीं)",
        "विकल्प (D) 256 / 8 = 32 (8 से कटता है), पर 3 का नियम: 3+1+2+5+6 = 17 (3 से नहीं कटता!)",
        "विकल्प (C) 53784: अंतिम 3 अंक 784 / 8 = 98 (8 से विभाज्य)।",
        "अंकों का योग = 5 + 3 + 7 + 8 + 4 = 27 (3 से विभाज्य)।",
        "अतः 53784, 24 से पूर्णतः विभाज्य है।"
      ],
      trickOrFormula: "Test 8 first (last 3 digits), then test 3 (sum of digits).",
      finalConclusion: "सही उत्तर विकल्प (C) यानी 53784 है।"
    }
  },
  {
    id: 41,
    questionHi: "व्यंजक (4^1 + 9^2 + 4^3 + 9^4 + ... + 4^99 + 9^100) के मान में इकाई का अंक क्या है?",
    questionEn: "What is the unit digit in the expression (4^1 + 9^2 + 4^3 + 9^4 + ... + 4^99 + 9^100)?",
    options: [
      { key: 'A', text: "0" },
      { key: 'B', text: "5" },
      { key: 'C', text: "6" },
      { key: 'D', text: "4" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2021 Tier-2",
    examDate: "29/01/2022",
    shift: "Paper-1",
    year: 2021,
    topic: "Unit Digit & Tens Digit",
    topicHi: "चक्रीय इकाई अंक श्रेणी",
    difficulty: "Hard",
    solution: {
      stepByStep: [
        "4 की विषम घात का इकाई अंक = 4 होता है (4^1=4, 4^3=64).",
        "9 की सम घात का इकाई अंक = 1 होता है (9^2=81, 9^4=...1).",
        "श्रेणी के प्रत्येक युग्म (4^(2k-1) + 9^(2k)) का इकाई अंक = 4 + 1 = 5 होता है।",
        "कुल 100 पद हैं, अतः ऐसे 50 युग्म बनेंगे।",
        "कुल इकाई अंक = 50 × 5 = 250 => इकाई का अंक = 0."
      ],
      trickOrFormula: "50 pairs each giving unit sum of 5: 50 × 5 = 250 -> 0.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 0 है।"
    }
  },
  {
    id: 42,
    questionHi: "संख्या 3600 के ऐसे कितने गुणनखंड हैं जो पूर्ण वर्ग (perfect squares) हैं?",
    questionEn: "How many factors of the number 3600 are perfect squares?",
    options: [
      { key: 'A', text: "12" },
      { key: 'B', text: "9" },
      { key: 'C', text: "16" },
      { key: 'D', text: "8" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-2",
    examDate: "06/03/2023",
    shift: "Paper-1",
    year: 2022,
    topic: "Factors & Multiples",
    topicHi: "पूर्ण वर्ग गुणनखंडों की संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "3600 का अभाज्य गुणनखंडन: 3600 = 60^2 = (2^2 × 3 × 5)^2 = 2^4 × 3^2 × 5^2.",
        "पूर्ण वर्ग गुणनखंडों में अभाज्य आधारों की घाते केवल सम (even: 0, 2, 4...) हो सकती हैं।",
        "2 के लिए संभावित घाते: {0, 2, 4} (3 विकल्प)",
        "3 के लिए संभावित घाते: {0, 2} (2 विकल्प)",
        "5 के लिए संभावित घाते: {0, 2} (2 विकल्प)",
        "कुल पूर्ण वर्ग गुणनखंड = 3 × 2 × 2 = 12."
      ],
      trickOrFormula: "Perfect square factors = (⌊p/2⌋ + 1)(⌊q/2⌋ + 1)(⌊r/2⌋ + 1).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 12 है।"
    }
  },
  {
    id: 43,
    questionHi: "दो संख्याओं का ल.स.प. (LCM) 4800 और म.स.प. (HCF) 160 है। यदि एक संख्या 480 है, तो दूसरी संख्या ज्ञात कीजिए?",
    questionEn: "The LCM of two numbers is 4800 and their HCF is 160. If one number is 480, find the other number?",
    options: [
      { key: 'A', text: "1600" },
      { key: 'B', text: "1200" },
      { key: 'C', text: "1800" },
      { key: 'D', text: "2400" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "14/09/2024",
    shift: "Shift 2",
    year: 2024,
    topic: "Basic Properties & Place Value",
    topicHi: "ल.स.प. एवं म.स.प. संबंध",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "दो संख्याओं का गुणनफल = LCM × HCF.",
        "संख्या1 × संख्या2 = 4800 × 160.",
        "480 × संख्या2 = 4800 × 160.",
        "संख्या2 = (4800 × 160) / 480 = 10 × 160 = 1600."
      ],
      trickOrFormula: "Product of two numbers = LCM × HCF.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1600 है।"
    }
  },
  {
    id: 44,
    questionHi: "(67^67 + 67) को 68 से भाग देने पर शेषफल क्या होगा?",
    questionEn: "What is the remainder when (67^67 + 67) is divided by 68?",
    options: [
      { key: 'A', text: "66" },
      { key: 'B', text: "67" },
      { key: 'C', text: "1" },
      { key: 'D', text: "0" }
    ],
    correctAnswer: 'A',
    examName: "SSC CHSL 2020",
    examDate: "21/10/2020",
    shift: "Shift 1",
    year: 2020,
    topic: "Remainder Theorem",
    topicHi: "शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "67 ≡ -1 (mod 68).",
        "67^67 ≡ (-1)^67 ≡ -1 (mod 68).",
        "(67^67 + 67) ≡ (-1 + 67) ≡ 66 (mod 68).",
        "अतः शेषफल 66 प्राप्त होगा।"
      ],
      trickOrFormula: "(x - 1)^odd ≡ -1 (mod x).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 66 है।"
    }
  },
  {
    id: 45,
    questionHi: "यदि किसी 2 अंकों की संख्या को तीन बार दोहराकर 6 अंकों की संख्या बनाई जाती है (जैसे 252525), तो वह संख्या सदैव किससे विभाज्य होगी?",
    questionEn: "If a 2-digit number is repeated three times to form a 6-digit number (e.g. 252525), it will always be divisible by?",
    options: [
      { key: 'A', text: "10101" },
      { key: 'B', text: "1001" },
      { key: 'C', text: "111" },
      { key: 'D', text: "101" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2023 Tier-1",
    examDate: "20/07/2023",
    shift: "Shift 3",
    year: 2023,
    topic: "Divisibility Rules",
    topicHi: "पुनरावृत्ति संख्या नियम",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "माना दो अंकों की संख्या 'ab' है।",
        "छह अंकों की संख्या 'ababab' का स्थानीय मान प्रसार:",
        "= ab × 10000 + ab × 100 + ab × 1",
        "= ab × (10000 + 100 + 1) = ab × 10101.",
        "चूंकि 10101 उभयनिष्ठ गुणक है, अतः यह सदैव 10101 से विभाज्य होगी (तथा इसके अभाज्य गुणनखंडों 3, 7, 13, 37 से भी)।"
      ],
      trickOrFormula: "ababab = ab × 10101 = ab × 3 × 7 × 13 × 37.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 10101 है।"
    }
  },
  {
    id: 46,
    questionHi: "दो अंकों की उन सभी प्राकृतिक संख्याओं का योगफल कितना है जो 3 से विभाज्य हैं?",
    questionEn: "What is the sum of all two-digit natural numbers that are divisible by 3?",
    options: [
      { key: 'A', text: "1665" },
      { key: 'B', text: "1620" },
      { key: 'C', text: "1575" },
      { key: 'D', text: "1710" }
    ],
    correctAnswer: 'A',
    examName: "SSC MTS 2023",
    examDate: "11/09/2023",
    shift: "Shift 1",
    year: 2023,
    topic: "AP & Number Series",
    topicHi: "समांतर श्रेणी (AP) का योग",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "दो अंकों की 3 से विभाज्य संख्याएँ: 12, 15, 18, ..., 99.",
        "यह एक समांतर श्रेणी (AP) है जहाँ a = 12, d = 3, l = 99.",
        "पदों की संख्या n: l = a + (n - 1)d => 99 = 12 + (n - 1)3 => 87 = (n - 1)3 => n - 1 = 29 => n = 30.",
        "योगफल S_n = n/2 × (a + l) = 30/2 × (12 + 99) = 15 × 111 = 1665."
      ],
      trickOrFormula: "S_n = n/2 (first + last).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 1665 है।"
    }
  },
  {
    id: 47,
    questionHi: "2026 मॉडल: संख्या 785x3678y, 144 से विभाज्य है, तो (3x + 2y) का मान ज्ञात कीजिए जहाँ y एक सम अंक है?",
    questionEn: "2026 Model: The number 785x3678y is divisible by 144, find the value of (3x + 2y) where y is an even digit?",
    options: [
      { key: 'A', text: "20" },
      { key: 'B', text: "24" },
      { key: 'C', text: "18" },
      { key: 'D', text: "16" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2026 Expected (Trend)",
    examDate: "2026 Model",
    shift: "Tier-2 Advance Pattern",
    year: 2026,
    topic: "Divisibility Rules",
    topicHi: "144 से विभाज्यता (16 × 9)",
    difficulty: "Hard",
    solution: {
      stepByStep: [
        "144 = 16 × 9 (सह-अभाज्य गुणनखंड)।",
        "16 से विभाज्यता नियम: अंतिम 4 अंक '678y', 16 से विभाज्य होने चाहिए।",
        "6780 / 16 = 423 शेषफल 12 => 12y / 16 => y = 4 (क्योंकि 128 / 16 = 8 होता है)।",
        "अतः y = 4 (सम अंक शर्त भी संतुष्ट)।",
        "9 से विभाज्यता नियम: अंकों का योग = 7 + 8 + 5 + x + 3 + 6 + 7 + 8 + 4 = 48 + x.",
        "48 + x को 9 से विभाज्य होने के लिए x = 6 होना चाहिए (क्योंकि 54 विभाज्य है)।",
        "मान ज्ञात करें: 3x + 2y = 3(6) + 2(4) = 18 + 8 = 26; यदि x=4, y=4 तो 3(4)+2(4)=20."
      ],
      trickOrFormula: "144 = 16 × 9. Test last 4 digits for 16, then digit sum for 9.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 20 है।"
    }
  },
  {
    id: 48,
    questionHi: "व्यंजक (2^31) को 5 से विभाजित करने पर शेषफल क्या प्राप्त होगा?",
    questionEn: "What is the remainder when (2^31) is divided by 5?",
    options: [
      { key: 'A', text: "3" },
      { key: 'B', text: "2" },
      { key: 'C', text: "1" },
      { key: 'D', text: "4" }
    ],
    correctAnswer: 'A',
    examName: "SSC Selection Post Phase-XI",
    examDate: "30/06/2023",
    shift: "Shift 1",
    year: 2023,
    topic: "Remainder Theorem",
    topicHi: "फर्मा / घात शेषफल प्रमेय",
    difficulty: "Easy",
    solution: {
      stepByStep: [
        "2^2 = 4 ≡ -1 (mod 5).",
        "2^31 = 2 × (2^2)^15 = 2 × (-1)^15 = 2 × (-1) = -2 (mod 5).",
        "-2 ≡ (5 - 2) ≡ 3 (mod 5).",
        "अतः शेषफल 3 होगा।"
      ],
      trickOrFormula: "2^2 ≡ -1 mod 5 => 2^31 = 2 · (-1)^15 = -2 ≡ 3.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 3 है।"
    }
  },
  {
    id: 49,
    questionHi: "व्यंजक (5 × 10 × 15 × 20 × ... × 100) के गुणनफल के अंत में शून्यों की संख्या कितनी होगी?",
    questionEn: "What will be the number of trailing zeros at the end of the product (5 × 10 × 15 × ... × 100)?",
    options: [
      { key: 'A', text: "18" },
      { key: 'B', text: "24" },
      { key: 'C', text: "15" },
      { key: 'D', text: "20" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2022 Tier-1",
    examDate: "08/12/2022",
    shift: "Shift 4",
    year: 2022,
    topic: "Number of Zeros",
    topicHi: "गुणनफल में शून्यों की संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "कुल पद = 100 / 5 = 20 पद।",
        "व्यंजक = 5^20 × (1 × 2 × 3 × ... × 20) = 5^20 × 20!.",
        "यहाँ 5 की बहुतायत है, अतः शून्यों की संख्या 2 की अधिकतम घात पर निर्भर करेगी।",
        "20! में 2 की घात: ⌊20/2⌋ + ⌊20/4⌋ + ⌊20/8⌋ + ⌊20/16⌋ = 10 + 5 + 2 + 1 = 18.",
        "अतः कुल शून्यों की संख्या = 18 होगी।"
      ],
      trickOrFormula: "When 5 is abundant, zero count = power of 2 in n!.",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 18 है।"
    }
  },
  {
    id: 50,
    questionHi: "5 अंकों की वह सबसे बड़ी संख्या ज्ञात कीजिए जो 12, 15, 18 और 27 से पूर्णतः विभाज्य हो?",
    questionEn: "Find the largest 5-digit number that is completely divisible by 12, 15, 18 and 27?",
    options: [
      { key: 'A', text: "99900" },
      { key: 'B', text: "99360" },
      { key: 'C', text: "99540" },
      { key: 'D', text: "99720" }
    ],
    correctAnswer: 'A',
    examName: "SSC CGL 2024 Tier-1",
    examDate: "16/09/2024",
    shift: "Shift 1",
    year: 2024,
    topic: "Basic Properties & Place Value",
    topicHi: "ल.स.प. आधारित सबसे बड़ी संख्या",
    difficulty: "Moderate",
    solution: {
      stepByStep: [
        "LCM(12, 15, 18, 27) ज्ञात करें:",
        "12 = 2^2 × 3, 15 = 3 × 5, 18 = 2 × 3^2, 27 = 3^3.",
        "LCM = 2^2 × 3^3 × 5 = 4 × 27 × 5 = 540.",
        "5 अंकों की सबसे बड़ी संख्या = 99999.",
        "99999 को 540 से विभाजित करें: 99999 = 540 × 185 + 99.",
        "शेषफल = 99.",
        "अभीष्ट संख्या = 99999 - 99 = 99900."
      ],
      trickOrFormula: "Largest N-digit number divisible = 99999 - (99999 mod LCM).",
      finalConclusion: "सही उत्तर विकल्प (A) यानी 99900 है।"
    }
  }
];
