import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, BookOpen, CheckCircle, Circle, Filter, TrendingUp, Eye, EyeOff } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import RuleNumberDisplay from '../components/shared/RuleNumberDisplay';
import ConnectorRuleTooltip from '../components/shared/ConnectorRuleTooltip';
import { connectorRules } from '../data/topics/connectors/connectorRules';
import { 
  allConnectorQuestions, 
  getUniqueYears, 
  getUniqueBoards, 
  getConnectorQuestionsByFilters
} from '../data/topics/connectors/questionLoader';
import { 
  sortConnectorRulesByFrequency, 
  getConnectorRuleFrequency 
} from '../utils/connectorSort';

const ConnectorsTopic = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRule, setSelectedRule] = useState(null);
  const [showCategorized, setShowCategorized] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [sortRulesByFrequency, setSortRulesByFrequency] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});

  const filteredQuestions = useMemo(() => {
    return getConnectorQuestionsByFilters(selectedYear, selectedBoard).filter(q => {
      const matchesSearch = q.passage.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           q.board.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm, selectedYear, selectedBoard]);

  const categorizedQuestions = useMemo(() => {
    const categorized = {};
    const extra = [];

    const questionsToProcess = getConnectorQuestionsByFilters(selectedYear, selectedBoard);

    questionsToProcess.forEach(q => {
      if (q.blanks && q.blanks.length > 0) {
        q.blanks.forEach(blank => {
          if (blank.ruleId) {
            if (!categorized[blank.ruleId]) {
              categorized[blank.ruleId] = [];
            }
            // Check if this question is already in this rule category
            if (!categorized[blank.ruleId].find(existingQ => existingQ.id === q.id)) {
              categorized[blank.ruleId].push(q);
            }
          }
        });
      } else {
        extra.push(q);
      }
    });

    return { categorized, extra };
  }, [selectedYear, selectedBoard]);

  const sortedRules = useMemo(() => {
    return sortConnectorRulesByFrequency(connectorRules, sortRulesByFrequency);
  }, [sortRulesByFrequency]);

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

  const totalQuestions = getConnectorQuestionsByFilters(selectedYear, selectedBoard).length;
  const categorizedCount = Object.values(categorizedQuestions.categorized).reduce((sum, questions) => sum + questions.length, 0);
  const extraCount = categorizedQuestions.extra.length;

  const selectedRuleData = selectedRule ? connectorRules.find(r => r.id === selectedRule) : null;
  const selectedRuleQuestions = selectedRule ? (categorizedQuestions.categorized[selectedRule] || []) : [];

  const toggleAnswer = (questionId, blankId) => {
    const key = `${questionId}-${blankId}`;
    setShowAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderPassageWithBlanks = (question) => {
    const parts = question.passage.split(/\([a-z]\)\s*___/g);
    const result = [];
    
    parts.forEach((part, index) => {
      result.push(
        <span key={`text-${index}`} className="text-gray-900 dark:text-white">
          {part}
        </span>
      );
      
      if (index < parts.length - 1 && question.blanks && question.blanks[index]) {
        const blank = question.blanks[index];
        const answerKey = `${question.id}-${blank.id}`;
        const isAnswerVisible = showAnswers[answerKey];
        
        result.push(
          <span key={`blank-${index}`} className="inline-flex items-center mx-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
              ({blank.id})
            </span>
            <ConnectorRuleTooltip ruleId={blank.ruleId}>
              <button
                onClick={() => toggleAnswer(question.id, blank.id)}
                className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium border transition-all duration-200 ${
                  isAnswerVisible 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {isAnswerVisible ? (
                  <>
                    <span className="mr-2 font-semibold">{blank.answer}</span>
                    <EyeOff className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span className="mr-2">___</span>
                    <Eye className="w-3 h-3" />
                  </>
                )}
              </button>
            </ConnectorRuleTooltip>
          </span>
        );
      }
    });
    
    return result;
  };

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
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Connectors Practice</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Master sentence connectors with board questions (2016-2024)</p>
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
                {getUniqueYears().map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
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
                {showCategorized ? 'Show All' : 'Show by Rules'}
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
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Connector Rules</h2>
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
                  const totalFrequency = getConnectorRuleFrequency(rule.id);
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
                        <RuleNumberDisplay ruleNo={rule.ruleNo} />
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
                      <p className="text-xs text-gray-600 dark:text-gray-400">{rule.description}</p>
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
                {/* Rule Display */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <RuleNumberDisplay ruleNo={selectedRuleData.ruleNo} />
                    <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                      {selectedRuleData.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{selectedRuleData.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Structure:</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-mono text-sm bg-white dark:bg-gray-800 px-3 py-2 rounded border">
                        {selectedRuleData.structure}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Examples:</h3>
                      <div className="space-y-2">
                        {selectedRuleData.examples.map((example, index) => (
                          <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400">
                            <p className="text-gray-800 dark:text-gray-200">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Questions for Selected Rule */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Questions for {selectedRuleData.ruleNo}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                      {selectedRuleQuestions.length} question{selectedRuleQuestions.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  {selectedRuleQuestions.length > 0 ? (
                    <div className="space-y-6">
                      {selectedRuleQuestions.map((question) => (
                        <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{question.board}</span>
                              <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                {question.year}
                              </span>
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="text-sm leading-relaxed">
                            {renderPassageWithBlanks(question)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">No questions found for this rule with current filters.</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    All Connector Questions 
                    {selectedYear && ` (${selectedYear})`}
                    {selectedBoard && ` - ${selectedBoard}`}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{filteredQuestions.length} questions</p>
                </div>
                
                {filteredQuestions.map((question) => (
                  <div key={question.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{question.board}</span>
                        <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                          {question.year}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {question.blanks && question.blanks.length > 0 ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed">
                      {renderPassageWithBlanks(question)}
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

export default ConnectorsTopic;