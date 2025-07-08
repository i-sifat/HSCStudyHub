// Import all question files
import { questions2016 } from './questions/2016/questions.js';
import { questions2017 } from './questions/2017/questions.js';
import { questions2018 } from './questions/2018/questions.js';
import { questions2019 } from './questions/2019/questions.js';
import { questions2022 } from './questions/2022/questions.js';
import { questions2023 } from './questions/2023/questions.js';
import { questions2024 } from './questions/2024/questions.js';

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

// Combine all questions with metadata
export const allConnectorQuestions = [
  ...questions2016,
  ...questions2017,
  ...questions2018,
  ...questions2019,
  ...questions2022,
  ...questions2023,
  ...questions2024
];

// Get unique years for filtering
export const getUniqueYears = () => {
  return [...new Set(allConnectorQuestions.map(q => q.year))].sort((a, b) => b - a);
};

// Get unique boards for filtering
export const getUniqueBoards = () => {
  return [...new Set(allConnectorQuestions.map(q => q.board))].sort();
};

// Get questions by filters
export const getConnectorQuestionsByFilters = (year = null, board = null) => {
  return allConnectorQuestions.filter(q => {
    const matchesYear = year === null || q.year === year;
    const matchesBoard = board === null || q.board === board;
    return matchesYear && matchesBoard;
  });
};

// Get questions by rule ID
export const getQuestionsByRuleId = (ruleId) => {
  return allConnectorQuestions.filter(q => 
    q.blanks && q.blanks.some(blank => blank.ruleId === ruleId)
  );
};