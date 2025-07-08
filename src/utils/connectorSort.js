import { allConnectorQuestions } from '../data/topics/connectors/questionLoader';

/**
 * Calculate frequency of each connector rule usage across all questions
 * This function is isolated for the Connectors section only
 */
export const calculateConnectorRuleFrequency = () => {
  const frequency = {};
  
  allConnectorQuestions.forEach(question => {
    if (question.blanks) {
      question.blanks.forEach(blank => {
        if (blank.ruleId) {
          frequency[blank.ruleId] = (frequency[blank.ruleId] || 0) + 1;
        }
      });
    }
  });
  
  return frequency;
};

/**
 * Sort connector rules by frequency of usage in board questions
 * @param {Array} rules - Array of connector rules
 * @param {boolean} sortByFrequency - Whether to sort by frequency or keep original order
 * @returns {Array} Sorted rules array
 */
export const sortConnectorRulesByFrequency = (rules, sortByFrequency = false) => {
  if (!sortByFrequency) {
    return rules;
  }
  
  const frequency = calculateConnectorRuleFrequency();
  
  return [...rules].sort((a, b) => {
    const freqA = frequency[a.id] || 0;
    const freqB = frequency[b.id] || 0;
    return freqB - freqA; // Sort from highest to lowest
  });
};

/**
 * Get connector rule frequency for a specific rule ID
 * @param {number} ruleId - The rule ID to get frequency for
 * @returns {number} Frequency count
 */
export const getConnectorRuleFrequency = (ruleId) => {
  const frequency = calculateConnectorRuleFrequency();
  return frequency[ruleId] || 0;
};