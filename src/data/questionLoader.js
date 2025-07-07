// Import all question files
import { dhakaQuestions2022 } from './questions/2022/dhaka.js';
import { rajshahiQuestions2022 } from './questions/2022/rajshahi.js';
import { cumillaQuestions2022 } from './questions/2022/cumilla.js';
import { jashoreQuestions2022 } from './questions/2022/jashore.js';
import { sylhetQuestions2022 } from './questions/2022/sylhet.js';
import { barisalQuestions2022 } from './questions/2022/barisal.js';
import { chattogramQuestions2022 } from './questions/2022/chattogram.js';
import { dinajpurQuestions2022 } from './questions/2022/dinajpur.js';
import { mymensinghQuestions2022 } from './questions/2022/mymensingh.js';

import { dhakaQuestions2023 } from './questions/2023/dhaka.js';
import { rajshahiQuestions2023 } from './questions/2023/rajshahi.js';
import { cumillaQuestions2023 } from './questions/2023/cumilla.js';
import { jashoreQuestions2023 } from './questions/2023/jashore.js';
import { chattogramQuestions2023 } from './questions/2023/chattogram.js';
import { sylhetQuestions2023 } from './questions/2023/sylhet.js';
import { barisalQuestions2023 } from './questions/2023/barisal.js';
import { dinajpurQuestions2023 } from './questions/2023/dinajpur.js';
import { mymensinghQuestions2023 } from './questions/2023/mymensingh.js';

import { dhakaQuestions2024 } from './questions/2024/dhaka.js';
import { rajshahiQuestions2024 } from './questions/2024/rajshahi.js';
import { cumillaQuestions2024 } from './questions/2024/cumilla.js';
import { jashoreQuestions2024 } from './questions/2024/jashore.js';
import { barisalQuestions2024 } from './questions/2024/barisal.js';
import { chattogramQuestions2024 } from './questions/2024/chattogram.js';
import { dinajpurQuestions2024 } from './questions/2024/dinajpur.js';
import { mymensinghQuestions2024 } from './questions/2024/mymensingh.js';

// Board names mapping
export const boardNames = {
  dhaka: 'Dhaka Board',
  rajshahi: 'Rajshahi Board',
  cumilla: 'Cumilla Board',
  jashore: 'Jashore Board',
  sylhet: 'Sylhet Board',
  barisal: 'Barishal Board',
  chattogram: 'Chattogram Board',
  dinajpur: 'Dinajpur Board',
  mymensingh: 'Mymensingh Board'
};

// Combine all questions with board and year information
const addMetadata = (questions, board, year) => {
  return questions.map(q => ({
    ...q,
    board: boardNames[board],
    year: year
  }));
};

export const allQuestions = [
  // 2022 Questions
  ...addMetadata(dhakaQuestions2022, 'dhaka', 2022),
  ...addMetadata(rajshahiQuestions2022, 'rajshahi', 2022),
  ...addMetadata(cumillaQuestions2022, 'cumilla', 2022),
  ...addMetadata(jashoreQuestions2022, 'jashore', 2022),
  ...addMetadata(sylhetQuestions2022, 'sylhet', 2022),
  ...addMetadata(barisalQuestions2022, 'barisal', 2022),
  ...addMetadata(chattogramQuestions2022, 'chattogram', 2022),
  ...addMetadata(dinajpurQuestions2022, 'dinajpur', 2022),
  ...addMetadata(mymensinghQuestions2022, 'mymensingh', 2022),

  // 2023 Questions
  ...addMetadata(dhakaQuestions2023, 'dhaka', 2023),
  ...addMetadata(rajshahiQuestions2023, 'rajshahi', 2023),
  ...addMetadata(cumillaQuestions2023, 'cumilla', 2023),
  ...addMetadata(jashoreQuestions2023, 'jashore', 2023),
  ...addMetadata(chattogramQuestions2023, 'chattogram', 2023),
  ...addMetadata(sylhetQuestions2023, 'sylhet', 2023),
  ...addMetadata(barisalQuestions2023, 'barisal', 2023),
  ...addMetadata(dinajpurQuestions2023, 'dinajpur', 2023),
  ...addMetadata(mymensinghQuestions2023, 'mymensingh', 2023),

  // 2024 Questions
  ...addMetadata(dhakaQuestions2024, 'dhaka', 2024),
  ...addMetadata(rajshahiQuestions2024, 'rajshahi', 2024),
  ...addMetadata(cumillaQuestions2024, 'cumilla', 2024),
  ...addMetadata(jashoreQuestions2024, 'jashore', 2024),
  ...addMetadata(barisalQuestions2024, 'barisal', 2024),
  ...addMetadata(chattogramQuestions2024, 'chattogram', 2024),
  ...addMetadata(dinajpurQuestions2024, 'dinajpur', 2024),
  ...addMetadata(mymensinghQuestions2024, 'mymensingh', 2024)
];

// Get unique board names for filtering
export const getUniqueBoards = () => {
  return Object.values(boardNames);
};

// Get questions by filters
export const getQuestionsByFilters = (year = null, board = null) => {
  return allQuestions.filter(q => {
    const matchesYear = year === null || q.year === year;
    const matchesBoard = board === null || q.board === board;
    return matchesYear && matchesBoard;
  });
};