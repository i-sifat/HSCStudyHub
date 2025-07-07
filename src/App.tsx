import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Homepage from './pages/Homepage';
import HSCDashboard from './pages/HSCDashboard';
import English2ndPaperDashboard from './pages/English2ndPaperDashboard';
import CompletingSentence from './pages/CompletingSentence';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dashboard/hsc" element={<HSCDashboard />} />
              <Route path="/dashboard/hsc/english-2nd" element={<English2ndPaperDashboard />} />
              <Route path="/dashboard/hsc/english-2nd/completing-sentence" element={<CompletingSentence />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;