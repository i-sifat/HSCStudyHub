import React from 'react';

const RuleNumberDisplay = ({ ruleNo, className = "" }) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700 ${className}`}>
      {ruleNo}
    </span>
  );
};

export default RuleNumberDisplay;