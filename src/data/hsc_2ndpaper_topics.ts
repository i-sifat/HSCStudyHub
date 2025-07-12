export interface HSC2ndPaperTopic {
  id: string;
  name: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

export const hsc2ndPaperTopics: HSC2ndPaperTopic[] = [
  {
    id: 'completing-sentence',
    name: 'Completing Sentence',
    description: 'Master sentence completion with conditional clauses, time expressions, and logical connections',
    icon: '✍️',
    route: '/dashboard/hsc/english-2nd/completing-sentence',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'
  },
  {
    id: 'modifier',
    name: 'Modifier',
    description: 'Learn pre-modifiers, post-modifiers, and their correct usage in sentences',
    icon: '🔧',
    route: '/dashboard/hsc/english-2nd/modifier',
    color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700'
  },
  {
    id: 'connectors',
    name: 'Connectors',
    description: 'Master linking words, conjunctions, and transitional phrases for better writing',
    icon: '🔗',
    route: '/dashboard/hsc/english-2nd/connectors',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700'
  },
  {
    id: 'preposition',
    name: 'Preposition',
    description: 'Understand prepositions of time, place, direction, and their proper usage',
    icon: '📍',
    route: '/coming-soon',
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700'
  },
  {
    id: 'articles',
    name: 'Articles',
    description: 'Master the usage of definite and indefinite articles (a, an, the)',
    icon: '📝',
    route: '/coming-soon',
    color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700'
  },
  {
    id: 'transformation',
    name: 'Transformation',
    description: 'Learn sentence transformation techniques and structural changes',
    icon: '🔄',
    route: '/coming-soon',
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700'
  },
  {
    id: 'right-form-verb',
    name: 'Right Form of Verb',
    description: 'Master verb forms, tenses, and their correct usage in different contexts',
    icon: '⚡',
    route: '/coming-soon',
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-700'
  },
  {
    id: 'punctuation',
    name: 'Punctuation',
    description: 'Learn proper punctuation marks and their usage in English writing',
    icon: '❗',
    route: '/coming-soon',
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700'
  },
  {
    id: 'synonyms-antonyms',
    name: 'Synonyms & Antonyms',
    description: 'Expand vocabulary with word meanings, synonyms, and antonyms',
    icon: '📚',
    route: '/coming-soon',
    color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700'
  }
];