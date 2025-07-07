import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, BookOpen, CheckCircle, Circle, Filter, TrendingUp } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { rules } from '../data/rules.js';
import { allQuestions, getUniqueBoards, getQuestionsByFilters } from '../data/questionLoader.js';
import RuleDisplay from '../components/RuleDisplay.jsx';

const CompletingSentence = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRule, setSelectedRule] = useState(null);
  const [showCategorized, setShowCategorized] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [sortRulesByFrequency, setSortRulesByFrequency] = useState(false);

  const filteredQuestions = useMemo(() => {
    return getQuestionsByFilters(selectedYear, selectedBoard).filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           q.board.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm, selectedYear, selectedBoard]);

  const categorizedQuestions = useMemo(() => {
    const categorized = {};
    const extra = [];

    const questionsToProcess = getQuestionsByFilters(selectedYear, selectedBoard);

    questionsToProcess.forEach(q => {
      if (q.ruleId) {
        if (!categorized[q.ruleId]) {
          categorized[q.ruleId] = [];
        }
        categorized[q.ruleId].push(q);
      } else {
        extra.push(q);
      }
    });

    return { categorized, extra };
  }, [selectedYear, selectedBoard]);

  const ruleFrequency = useMemo(() => {
    const frequency = {};
    allQuestions.forEach(q => {
      if (q.ruleId) {
        frequency[q.ruleId] = (frequency[q.ruleId] || 0) + 1;
      }
    });
    return frequency;
  }, []);

  const sortedRules = useMemo(() => {
    if (sortRulesByFrequency) {
      return [...rules].sort((a, b) => (ruleFrequency[b.id] || 0) - (ruleFrequency[a.id] || 0));
    }
    return rules;
  }, [sortRulesByFrequency, ruleFrequency]);

  const getRuleColor = (ruleId) => {
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200',
      'bg-green-100 text-green-800 border-green-200',
      'bg-purple-100 text-purple-800 border-purple-200',
      'bg-orange-100 text-orange-800 border-orange-200',
      'bg-pink-100 text-pink-800 border-pink-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200',
      'bg-yellow-100 text-yellow-800 border-yellow-200',
      'bg-teal-100 text-teal-800 border-teal-200',
      'bg-red-100 text-red-800 border-red-200',
      'bg-emerald-100 text-emerald-800 border-emerald-200',
      'bg-cyan-100 text-cyan-800 border-cyan-200',
      'bg-rose-100 text-rose-800 border-rose-200'
    ];
    return colors[ruleId % colors.length];
  };

  const totalQuestions = getQuestionsByFilters(selectedYear, selectedBoard).length;
  const categorizedCount = Object.values(categorizedQuestions.categorized).reduce((sum, questions) => sum + questions.length, 0);
  const extraCount = categorizedQuestions.extra.length;

  const selectedRuleData = selectedRule ? rules.find(r => r.id === selectedRule) : null;
  const selectedRuleQuestions = selectedRule ? (categorizedQuestions.categorized[selectedRule] || []) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard/hsc/english-2nd')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Completing Sentence Analyzer</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Categorize board questions by grammar rules (2022-2024)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Years</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
              <select
                value={selectedBoard || ''}
                onChange={(e) => setSelectedBoard(e.target.value || null)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Boards</option>
                {getUniqueBoards().map(board => (
                  <option key={board} value={board}>{board}</option>
                ))}
              </select>
              <button
                onClick={() => setShowCategorized(!showCategorized)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  showCategorized 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="h-4 w-4 inline mr-2" />
                {showCategorized ? 'Show All' : 'Show Categorized'}
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalQuestions}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{categorizedCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categorized</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{extraCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Extra</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{Math.round((categorizedCount / totalQuestions) * 100)}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Coverage</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions or boards..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Rules Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Grammar Rules</h2>
                <button
                  onClick={() => setSortRulesByFrequency(!sortRulesByFrequency)}
                  className={`p-2 rounded-lg transition-colors ${
                    sortRulesByFrequency 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  title="Sort by frequency"
                >
                  <TrendingUp className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {sortedRules.map((rule) => {
                  const questionsForRule = categorizedQuestions.categorized[rule.id] || [];
                  const totalFrequency = ruleFrequency[rule.id] || 0;
                  return (
                    <div
                      key={rule.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedRule === rule.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedRule(selectedRule === rule.id ? null : rule.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Rule {rule.id === 141 ? '14 (If)' : rule.id}
                        </span>
                        <div className="flex items-center space-x-1">
                          {questionsForRule.length > 0 && (
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                              {questionsForRule.length}
                            </span>
                          )}
                          {sortRulesByFrequency && totalFrequency > 0 && (
                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                              {totalFrequency}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">{rule.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{rule.bengali}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedRule ? (
              <div className="space-y-6">
                <RuleDisplay rule={selectedRuleData} />
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Questions for Rule {selectedRule === 141 ? '14 (If)' : selectedRule}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                      {selectedRuleQuestions.length} question{selectedRuleQuestions.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  {selectedRuleQuestions.length > 0 ? (
                    <div className="space-y-3">
                      {selectedRuleQuestions.map((question) => (
                        <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{question.question}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400">{question.board}</p>
                                <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                  {question.year}
                                </span>
                              </div>
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">No questions found for this rule with current filters.</p>
                  )}
                </div>
              </div>
            ) : showCategorized ? (
              <div className="space-y-8">
                {/* Categorized Questions */}
                {Object.entries(categorizedQuestions.categorized)
                  .sort(([a], [b]) => parseInt(a) - parseInt(b))
                  .map(([ruleId, questions]) => {
                    const rule = rules.find(r => r.id === parseInt(ruleId));
                    if (!rule) return null;
                    
                    return (
                      <div key={ruleId} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Rule {rule.id === 141 ? '14 (If)' : rule.id}: {rule.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{rule.bengali} - {rule.description}</p>
                          </div>
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                            {questions.length} question{questions.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {questions.map((question) => (
                            <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{question.question}</p>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{question.board}</p>
                                    <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                      {question.year}
                                    </span>
                                  </div>
                                </div>
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                {/* Extra Questions */}
                {categorizedQuestions.extra.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Extra Questions</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Questions that don't follow specific rules</p>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                        {categorizedQuestions.extra.length} question{categorizedQuestions.extra.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {categorizedQuestions.extra.map((question) => (
                        <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{question.question}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <p className="text-xs text-gray-600 dark:text-gray-400">{question.board}</p>
                                <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                  {question.year}
                                </span>
                              </div>
                            </div>
                            <Circle className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    All Board Questions 
                    {selectedYear && ` (${selectedYear})`}
                    {selectedBoard && ` - ${selectedBoard}`}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{filteredQuestions.length} questions</p>
                </div>
                
                {filteredQuestions.map((question) => (
                  <div key={question.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{question.question}</p>
                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-gray-600 dark:text-gray-400">{question.board}</span>
                          <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                            {question.year}
                          </span>
                          {question.ruleId && (
                            <span className={`text-xs px-2 py-1 rounded-full border ${getRuleColor(question.ruleId)}`}>
                              Rule {question.ruleId === 141 ? '14 (If)' : question.ruleId}: {rules.find(r => r.id === question.ruleId)?.title}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {question.ruleId ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletingSentence;