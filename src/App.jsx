import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import TenseTrainingPage from './pages/TenseTrainingPage';
import DailyTasksPage from './pages/DailyTasksPage';
import AISpeakingPage from './pages/AISpeakingPage';
import InterviewModePage from './pages/InterviewModePage';
import ProgressPage from './pages/ProgressPage';
import { useNavigation } from './hooks/useNavigation';

export default function App() {
  const {
    activeTab,
    navigateTo,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavigation('dashboard');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage onNavigate={navigateTo} />;
      case 'tense-training':
        return <TenseTrainingPage />;
      case 'daily-tasks':
        return <DailyTasksPage />;
      case 'ai-speaking':
        return <AISpeakingPage />;
      case 'interview-mode':
        return <InterviewModePage />;
      case 'progress':
        return <ProgressPage />;
      default:
        return <DashboardPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Sidebar Navigation (Desktop fixed/static + Mobile slide-out drawer) */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={navigateTo}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Main View Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <Navbar
          activeTab={activeTab}
          onToggleMobileMenu={toggleMobileMenu}
        />

        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>

        <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-400">
          English AI Coach — Strict Mastery Platform
        </footer>
      </div>
    </div>
  );
}
