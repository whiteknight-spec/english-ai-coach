import React, { useState } from 'react';
import {
  Clock,
  BookOpen,
  Sparkles,
  Lock,
  Unlock,
  Layers,
  ArrowRight,
} from 'lucide-react';
import BeginnerLesson from '../components/tense/BeginnerLesson';
import GuidedPractice from '../components/tense/GuidedPractice';
import PresentSimpleTest from '../components/tense/PresentSimpleTest';
import TestResults from '../components/tense/TestResults';
import LanguageSelector from '../components/tense/LanguageSelector';
import {
  TEN_QUESTION_MASTERY_TEST,
} from '../data/presentSimpleBeginnerData';

const ALL_TENSES_LIST = [
  { id: 'present-simple', name: 'Present Simple', formula: 'S + V1 (s/es)', status: 'Active & Interactive', active: true },
  { id: 'present-continuous', name: 'Present Continuous', formula: 'S + is/am/are + V-ing', status: 'Coming Soon', active: false },
  { id: 'present-perfect', name: 'Present Perfect', formula: 'S + have/has + V3', status: 'Coming Soon', active: false },
  { id: 'present-perfect-continuous', name: 'Present Perfect Continuous', formula: 'S + have/has been + V-ing', status: 'Coming Soon', active: false },
  { id: 'past-simple', name: 'Simple Past', formula: 'S + V2', status: 'Coming Soon', active: false },
  { id: 'past-continuous', name: 'Past Continuous', formula: 'S + was/were + V-ing', status: 'Coming Soon', active: false },
  { id: 'past-perfect', name: 'Past Perfect', formula: 'S + had + V3', status: 'Coming Soon', active: false },
  { id: 'past-perfect-continuous', name: 'Past Perfect Continuous', formula: 'S + had been + V-ing', status: 'Coming Soon', active: false },
  { id: 'future-simple', name: 'Simple Future', formula: 'S + will + V1', status: 'Coming Soon', active: false },
  { id: 'future-continuous', name: 'Future Continuous', formula: 'S + will be + V-ing', status: 'Coming Soon', active: false },
  { id: 'future-perfect', name: 'Future Perfect', formula: 'S + will have + V3', status: 'Coming Soon', active: false },
  { id: 'future-perfect-continuous', name: 'Future Perfect Continuous', formula: 'S + will have been + V-ing', status: 'Coming Soon', active: false },
];

export default function TenseTrainingPage() {
  const [language, setLanguage] = useState('tanglish'); // 'tanglish' (default) | 'tamil' | 'english'
  const [viewMode, setViewMode] = useState('lesson'); // 'lesson' | 'practice' | 'test' | 'results'
  const [isTestUnlocked, setIsTestUnlocked] = useState(false);
  const [testQuestions, setTestQuestions] = useState(TEN_QUESTION_MASTERY_TEST);
  const [isRetryRun, setIsRetryRun] = useState(false);
  const [results, setResults] = useState(null);
  const [lockWarning, setLockWarning] = useState(false);

  // Transitions
  const handleStartPractice = () => {
    setViewMode('practice');
    setLockWarning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompletePractice = () => {
    setIsTestUnlocked(true);
    setTestQuestions(TEN_QUESTION_MASTERY_TEST);
    setIsRetryRun(false);
    setViewMode('test');
    setLockWarning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTest = () => {
    if (!isTestUnlocked) {
      setLockWarning(true);
      return;
    }
    setTestQuestions(TEN_QUESTION_MASTERY_TEST);
    setIsRetryRun(false);
    setViewMode('test');
    setLockWarning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishTest = (resultsData) => {
    setResults(resultsData);
    setViewMode('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetryMistakes = () => {
    if (results && results.mistakes && results.mistakes.length > 0) {
      setTestQuestions(results.mistakes);
      setIsRetryRun(true);
      setViewMode('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToLesson = () => {
    setViewMode('lesson');
    setLockWarning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* Top Language Selector */}
      <LanguageSelector
        currentLanguage={language}
        onSelectLanguage={setLanguage}
      />

      {/* Breadcrumb & Step Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            <Clock className="h-4 w-4" />
            <span>Beginner Tense Engine • Unit 1</span>
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Present Simple (எளிய நிகழ்காலம்)
          </h1>
        </div>

        {/* Learning Flow Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 p-1">
          {/* Step 1: Lesson */}
          <button
            type="button"
            onClick={handleBackToLesson}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              viewMode === 'lesson'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>1. Teach</span>
          </button>

          {/* Step 2: Guided Practice */}
          <button
            type="button"
            onClick={handleStartPractice}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              viewMode === 'practice'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>2. Guided Practice</span>
          </button>

          {/* Step 3: Test (locked/unlocked) */}
          <button
            type="button"
            onClick={handleOpenTest}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              viewMode === 'test'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isTestUnlocked
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-500 hover:text-slate-400'
            }`}
          >
            {isTestUnlocked ? (
              <Unlock className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Lock className="h-3.5 w-3.5 text-amber-500/80" />
            )}
            <span>3. Test {isTestUnlocked ? '' : '(Locked)'}</span>
          </button>

          {/* Step 4: Results (if completed) */}
          {results && (
            <button
              type="button"
              onClick={() => setViewMode('results')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === 'results'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>4. Results</span>
            </button>
          )}
        </div>
      </div>

      {/* Locked Warning Alert (if user tries to jump to test without practice) */}
      {lockWarning && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5 text-xs text-amber-300">
            <Lock className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              <strong>Beginner rule:</strong> Complete the 6-step Guided Practice first to understand the concepts before taking the 10-Question Test!
            </span>
          </div>

          <button
            type="button"
            onClick={handleStartPractice}
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-amber-500 transition-colors shrink-0"
          >
            <span>Start Practice Now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Flow: Lesson -> Practice -> Test -> Results */}
      {viewMode === 'lesson' && (
        <BeginnerLesson
          language={language}
          onStartPractice={handleStartPractice}
        />
      )}

      {viewMode === 'practice' && (
        <GuidedPractice
          language={language}
          onCompletePractice={handleCompletePractice}
          onBackToLesson={handleBackToLesson}
        />
      )}

      {viewMode === 'test' && (
        <PresentSimpleTest
          key={isRetryRun ? 'retry-run' : 'full-run'}
          questions={testQuestions}
          isRetryRun={isRetryRun}
          language={language}
          onFinish={handleFinishTest}
          onExit={handleBackToLesson}
        />
      )}

      {viewMode === 'results' && results && (
        <TestResults
          results={results}
          isRetryRun={isRetryRun}
          language={language}
          onRetryMistakes={handleRetryMistakes}
          onRestartFullTest={handleOpenTest}
          onBackToLesson={handleBackToLesson}
        />
      )}

      {/* Syllabus Roadmap Preview (All 12 Tenses) */}
      <section className="pt-8 border-t border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              12 Tenses Mastery Syllabus
            </h3>
            <p className="text-xs text-slate-400">
              Unit 1 (Present Simple) is active. Subsequent tenses unlock as you master each unit.
            </p>
          </div>
          <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
            1 of 12 Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ALL_TENSES_LIST.map((tense, idx) => (
            <div
              key={tense.id}
              className={`rounded-xl border p-3.5 transition-all ${
                tense.active
                  ? 'border-indigo-500/50 bg-indigo-950/20 text-white shadow-sm'
                  : 'border-slate-800/80 bg-slate-900/40 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-400">#{idx + 1}</span>
                {tense.active ? (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Unit
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Lock className="h-3 w-3" />
                    Locked
                  </span>
                )}
              </div>

              <div className="mt-2 text-xs font-bold truncate">
                {tense.name}
              </div>
              <div className="mt-1 font-mono text-[11px] text-slate-400 truncate">
                {tense.formula}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
