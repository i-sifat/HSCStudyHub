import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedContent from './components/ProtectedContent';
import Homepage from './pages/Homepage';
import HSCDashboard from './pages/HSCDashboard';
import English2ndPaperDashboard from './pages/English2ndPaperDashboard';
import CompletingSentence from './pages/CompletingSentence';
import ModifierTopic from './pages/ModifierTopic';
import ConnectorsTopic from './pages/ConnectorsTopic';
import ComingSoon from './pages/ComingSoon';
import AboutUs from './pages/AboutUs';
import Contribute from './pages/Contribute';
import NotFound from './pages/NotFound';
import { initializeFullProtection } from './utils/antiPiracy';

// Initialize anti-piracy protection
if (typeof window !== 'undefined') {
  initializeFullProtection();
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProtectedContent enableScreenshotProtection={true}>
          <Router>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard/hsc" element={<HSCDashboard />} />
                <Route path="/dashboard/hsc/english-2nd" element={<English2ndPaperDashboard />} />
                <Route path="/dashboard/hsc/english-2nd/completing-sentence" element={<CompletingSentence />} />
                <Route path="/dashboard/hsc/english-2nd/modifier" element={<ModifierTopic />} />
                <Route path="/dashboard/hsc/english-2nd/connectors" element={<ConnectorsTopic />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </div>
          </Router>
        </ProtectedContent>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;