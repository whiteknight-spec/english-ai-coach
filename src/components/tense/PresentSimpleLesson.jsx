import React from 'react';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { PRESENT_SIMPLE_LESSON } from '../../data/presentSimpleData';

export default function PresentSimpleLesson({ onStartTest }) {
  return (
    <div className="space-y-8">
      {/* Lesson Header Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Grammar Engine • Core Unit</span>
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            {PRESENT_SIMPLE_LESSON.title}
          </h2>
          <p className="mt-2 text-sm text-indigo-200/90 font-medium">
            {PRESENT_SIMPLE_LESSON.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {PRESENT_SIMPLE_LESSON.whatItIs}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onStartTest}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <span>Take 10-Question Test</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </section>

      {/* When To Use It Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-indigo-400" />
          <h3 className="text-lg font-bold text-white tracking-tight">When to Use Present Simple</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRESENT_SIMPLE_LESSON.whenToUse.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors"
            >
              <div>
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
                  Case {idx + 1}
                </span>
                <h4 className="mt-2 text-base font-bold text-white">{item.scenario}</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Example</div>
                <div className="mt-1 text-xs font-medium text-emerald-300 italic">“{item.example}”</div>
                <div className="mt-2 text-[11px] text-slate-400">{item.marker}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sentence Structures (Positive, Negative, Questions) */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-white tracking-tight">Sentence Structures & Formulas</h3>

        <div className="space-y-4">
          {PRESENT_SIMPLE_LESSON.sentenceStructures.map((structure, idx) => {
            const isNegative = structure.type.includes('Negative');
            const isQuestion = structure.type.includes('Question');

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  {isNegative ? (
                    <XCircle className="h-4 w-4 text-rose-400" />
                  ) : isQuestion ? (
                    <HelpCircle className="h-4 w-4 text-cyan-400" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  )}
                  <span>{structure.type}</span>
                </div>

                {/* Formula pill */}
                <div className="mt-3 rounded-xl border border-indigo-500/20 bg-slate-950/70 p-3 font-mono text-xs text-indigo-300">
                  <span className="font-semibold text-slate-400">Formula: </span>
                  {structure.formula}
                </div>

                {/* Examples */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {structure.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 p-3.5"
                    >
                      <span className="text-[11px] font-semibold text-slate-400">
                        {ex.subject}:
                      </span>
                      <p className="mt-1 text-xs font-medium text-slate-100">{ex.sentence}</p>
                    </div>
                  ))}
                </div>

                {/* Important rule note */}
                <div className="mt-3 flex items-start gap-2 text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
                  <span>{structure.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* He / She / It + -s / -es Rule (Comprehensive) */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            The 3rd Person Singular Rule (He / She / It)
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            In English, only third-person singular subjects modify the verb in positive Present Simple sentences. Master these 5 spelling and conjugation patterns:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRESENT_SIMPLE_LESSON.thirdPersonRules.map((rule, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300 border border-slate-700">
                  Pattern {idx + 1}
                </span>
                <h4 className="mt-2 text-sm font-bold text-white">{rule.rule}</h4>
                <p className="mt-1 text-xs text-slate-400">{rule.detail}</p>
              </div>

              <div className="mt-4 rounded-xl bg-slate-950/60 p-3 border border-slate-800/80">
                <span className="text-[10px] uppercase font-semibold text-slate-400">Examples</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {rule.examples.map((eg, egIdx) => (
                    <span
                      key={egIdx}
                      className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 font-mono text-[11px] font-semibold text-indigo-300"
                    >
                      {eg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Golden Rules / Strict Coach Warnings */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 text-amber-400">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-base font-bold text-white">Strict Coach Rules to Remember</h3>
        </div>

        <div className="mt-4 space-y-3">
          {PRESENT_SIMPLE_LESSON.goldenRules.map((rule, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3.5 text-xs text-slate-200"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-[11px]">
                {idx + 1}
              </div>
              <span className="leading-relaxed">{rule}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onStartTest}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
          >
            <span>Ready? Start the 10-Question Test</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
