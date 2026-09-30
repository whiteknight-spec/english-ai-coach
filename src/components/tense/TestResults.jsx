import React from 'react';
import {
  Trophy,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

export default function TestResults({
  results,
  isRetryRun,
  language = 'tanglish',
  onRetryMistakes,
  onRestartFullTest,
  onBackToLesson,
}) {
  const { total, correctCount, wrongCount, mistakes } = results;
  const percentage = Math.round((correctCount / total) * 100) || 0;

  // Extract unique topics that need revision
  const revisionTopics = Array.from(new Set(mistakes.map((m) => m.topic)));
  const isPerfect = wrongCount === 0;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Score Summary Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
              <Trophy className="h-3.5 w-3.5 text-indigo-400" />
              <span>{isRetryRun ? 'Mistakes Drill Results' : '10-Question Test Evaluation'}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {isPerfect ? 'Super! Flawless Mastery' : 'Evaluation Completed'}
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              {isPerfect
                ? 'Excellent understanding! You correctly answered every question across all Present Simple patterns.'
                : 'Review your mistakes below with simple Tanglish explanations, reinforce the exact rule, and retry the missed questions.'}
            </p>
          </div>

          {/* Score Dial / Card */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shrink-0">
            <div className="text-center">
              <div className="text-xs uppercase font-semibold text-slate-400">Final Score</div>
              <div className="mt-1 text-3xl font-extrabold tracking-tight text-white">
                {correctCount} <span className="text-slate-500 text-xl font-normal">/ {total}</span>
              </div>
              <div
                className={`mt-1 text-xs font-bold ${
                  percentage >= 80
                    ? 'text-emerald-400'
                    : percentage >= 60
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {percentage}% Accuracy
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800">
          {!isPerfect && (
            <button
              type="button"
              onClick={onRetryMistakes}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/30 hover:bg-amber-500 transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retry Mistakes ({wrongCount} {wrongCount === 1 ? 'question' : 'questions'})</span>
            </button>
          )}

          <button
            type="button"
            onClick={onRestartFullTest}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Restart 10-Question Test</span>
          </button>

          <button
            type="button"
            onClick={onBackToLesson}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
          >
            <BookOpen className="h-4 w-4" />
            <span>Review Beginner Lesson</span>
          </button>
        </div>
      </section>

      {/* KPI Cards: Total, Correct, Wrong */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="text-xs font-medium text-slate-400">Total Questions</div>
          <div className="mt-2 text-2xl font-bold text-white">{total}</div>
          <div className="mt-1 text-xs text-slate-400">Questions in this test run</div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-400">Correct Answers</span>
            <CheckCircle className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-emerald-400">{correctCount}</div>
          <div className="mt-1 text-xs text-slate-400">Mastered rules</div>
        </div>

        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-400">Wrong Answers</span>
            <XCircle className="h-4 w-4 text-rose-400" />
          </div>
          <div className="mt-2 text-2xl font-bold text-rose-400">{wrongCount}</div>
          <div className="mt-1 text-xs text-slate-400">Needs quick revision</div>
        </div>
      </section>

      {/* Topics that Need Revision */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2">
          {isPerfect ? (
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-amber-400" />
          )}
          <h3 className="text-base font-bold text-white">Topics That Need Revision</h3>
        </div>

        {isPerfect ? (
          <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs font-medium text-emerald-300">
            Great mastery! You answered all questions accurately across every tested topic (3rd person singular, negations, questions, and spelling rules).
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <p className="text-xs text-slate-400">
              Based on the questions you missed, focus your review on these specific rules:
            </p>
            <div className="flex flex-wrap gap-2">
              {revisionTopics.map((topic, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300"
                >
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                  <span>{topic}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Detailed Mistakes Breakdown */}
      {mistakes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Mistakes Made ({mistakes.length})</h3>
              <p className="text-xs text-slate-400">
                Detailed breakdown with the correct form and exact grammar rule.
              </p>
            </div>
            <button
              type="button"
              onClick={onRetryMistakes}
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Retry Missed Questions</span>
            </button>
          </div>

          <div className="space-y-4">
            {mistakes.map((m, idx) => {
              const userSelectedText = m.options[m.selectedOptionIndex];
              const correctOptionText = m.options[m.correctIndex];
              const ruleText = typeof m.rule === 'object' ? m.rule[language] || m.rule.tanglish : m.rule;
              const expText = typeof m.explanation === 'object' ? m.explanation[language] || m.explanation.tanglish : m.explanation;

              return (
                <div
                  key={m.id || idx}
                  className="rounded-2xl border border-rose-500/20 bg-slate-900/80 p-5 space-y-4"
                >
                  {/* Topic and Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="rounded-full bg-rose-500/10 border border-rose-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-rose-300">
                      Mistake #{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Topic: <span className="text-slate-200">{m.topic}</span>
                    </span>
                  </div>

                  {/* Question Prompt */}
                  <div className="text-sm font-semibold text-white whitespace-pre-line">
                    {m.prompt}
                  </div>

                  {/* Comparison: Your Answer vs Correct Answer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-rose-400">
                        <XCircle className="h-3.5 w-3.5" />
                        <span>Your Answer</span>
                      </div>
                      <div className="mt-1 text-xs font-medium text-rose-200">
                        {userSelectedText || '(No answer provided)'}
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Correct Answer</span>
                      </div>
                      <div className="mt-1 text-xs font-medium text-emerald-200">
                        {correctOptionText}
                      </div>
                    </div>
                  </div>

                  {/* Correct Sentence Highlight */}
                  <div className="rounded-xl border border-indigo-500/20 bg-slate-950/70 p-3">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Correct Sentence:
                    </div>
                    <div className="mt-1 text-xs font-semibold text-indigo-300 italic">
                      “{m.correctSentence}”
                    </div>
                  </div>

                  {/* Rule & Detailed Explanation */}
                  <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3.5 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-amber-300">
                      <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
                      <div>
                        <span className="font-bold">Rule: </span>
                        <span>{ruleText}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">
                      {expText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={onBackToLesson}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          <span>Back to Lesson</span>
        </button>

        {!isPerfect && (
          <button
            type="button"
            onClick={onRetryMistakes}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            <span>Retry Mistakes ({wrongCount})</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
