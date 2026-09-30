import React from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { BEGINNER_LESSON_CONTENT } from '../../data/presentSimpleBeginnerData';
import TenseTimeline from './animations/TenseTimeline';
import SubjectVerbTransformer from './animations/SubjectVerbTransformer';
import DoesntTrapVisualizer from './animations/DoesntTrapVisualizer';

export default function BeginnerLesson({ language = 'tanglish', onStartPractice }) {
  const content = BEGINNER_LESSON_CONTENT;

  const tenseData = content.whatIsTense[language] || content.whatIsTense.tanglish;
  const presentSimpleData = content.whatIsPresentSimple[language] || content.whatIsPresentSimple.tanglish;
  const v1Data = content.whatIsV1[language] || content.whatIsV1.tanglish;
  const positiveData = content.positiveRules[language] || content.positiveRules.tanglish;
  const spellingData = content.spellingRules[language] || content.spellingRules.tanglish;
  const negativeData = content.negativeRules[language] || content.negativeRules.tanglish;
  const questionData = content.questionRules[language] || content.questionRules.tanglish;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900 p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Beginner-First Teaching • Step 1: Learn</span>
          </div>

          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Present Simple Tense (எளிய நிகழ்காலம்)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-indigo-200/90 font-medium">
            Learn English grammar from the ground up without complex jargon.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={onStartPractice}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
            >
              <span>Jump to Guided Practice</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 1. What is Tense? */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <BookOpen className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            1. {tenseData.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-200">
          {tenseData.simpleExplanation}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tenseData.points.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-xs text-slate-300 flex items-start gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-xs font-semibold text-indigo-300">
          💡 {tenseData.takeaway}
        </div>
      </section>

      {/* Educational Motion 1: Tense Timeline */}
      <TenseTimeline language={language} />

      {/* 2. What is Present Simple & Everyday Scenarios */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <Sparkles className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            2. {presentSimpleData.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-200">
          {presentSimpleData.simpleExplanation}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {presentSimpleData.everydayScenarios.map((sc, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-indigo-300">
                  Example {idx + 1}
                </span>
                <h4 className="mt-1.5 text-xs font-bold text-white">{sc.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{sc.desc}</p>
              </div>

              <div className="rounded-lg bg-slate-900 p-2.5 border border-slate-800">
                <div className="text-xs font-bold text-emerald-300">“{sc.egEn}”</div>
                <div className="text-[11px] text-slate-300 mt-1 italic">{sc.egLocal}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. What is Verb & V1? */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            3. {v1Data.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-200">
          {v1Data.simpleExplanation}
        </p>
        <p className="text-xs leading-relaxed text-indigo-200/90 bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-xl">
          {v1Data.v1Meaning}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {v1Data.examples.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-center"
            >
              <div className="text-base font-bold text-white font-mono">{item.v1}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{item.tamil}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Positive Sentences & The Big Golden Rule: I/You/We/They vs He/She/It */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <CheckCircle className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            4. {positiveData.title}
          </h3>
        </div>

        <p className="text-sm text-slate-300">{positiveData.simpleExplanation}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Group 1 */}
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-5 space-y-3">
            <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-bold text-slate-200">
              {positiveData.groupA.title}
            </span>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 text-xs font-semibold text-emerald-300">
              Rule: {positiveData.groupA.rule}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {positiveData.groupA.examples.map((eg, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{eg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2 */}
          <div className="rounded-xl border border-indigo-500/30 bg-slate-950/70 p-5 space-y-3">
            <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-2.5 py-0.5 text-xs font-bold text-indigo-300">
              {positiveData.groupB.title}
            </span>
            <div className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-2.5 text-xs font-semibold text-indigo-300">
              Rule: {positiveData.groupB.rule}
            </div>
            <div className="text-[11px] text-amber-300/90 leading-relaxed">
              💡 {positiveData.groupB.whyExplanation}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {positiveData.groupB.examples.map((eg, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>{eg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Educational Motion 2: Subject + Verb Transformation */}
      <SubjectVerbTransformer language={language} />

      {/* 5. When to use -s vs -es? */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <h3 className="text-lg font-bold text-white tracking-tight">
          5. {spellingData.title}
        </h3>
        <p className="text-sm text-slate-400">{spellingData.simpleExplanation}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {spellingData.rules.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col justify-between space-y-2"
            >
              <div>
                <span className="text-[11px] font-mono text-indigo-300 font-semibold">
                  Rule {idx + 1}
                </span>
                <div className="mt-1 text-xs font-bold text-white">{item.condition}</div>
                <div className="mt-1 text-xs text-emerald-400 font-medium">{item.action}</div>
              </div>
              <div className="rounded-lg bg-slate-900 p-2 text-[11px] font-mono text-slate-300 border border-slate-800">
                {item.eg}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Negative Sentences & CRITICAL TRAP EXPLANATION */}
      <section className="rounded-2xl border border-rose-500/30 bg-slate-900/80 p-6 space-y-5">
        <div className="flex items-center gap-2 text-rose-400">
          <XCircle className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            6. {negativeData.title}
          </h3>
        </div>

        <p className="text-sm text-slate-300">{negativeData.simpleExplanation}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {negativeData.breakdown.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
              <span className="text-xs font-bold text-slate-300">{item.subject}</span>
              <div className="font-mono text-xs font-bold text-indigo-300">{item.helper}</div>
              <div className="text-xs text-slate-400 italic">{item.eg}</div>
            </div>
          ))}
        </div>

        {/* THE CRITICAL TRAP BOX */}
        <div className="rounded-2xl border-2 border-rose-500/50 bg-rose-950/30 p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-extrabold text-rose-300">
            <AlertTriangle className="h-5 w-5 text-rose-400" />
            <span>{negativeData.criticalWarning.title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3">
              <div className="text-xs font-mono font-bold text-emerald-300">
                {negativeData.criticalWarning.correct}
              </div>
            </div>

            <div className="rounded-xl border border-rose-500/40 bg-rose-950/30 p-3">
              <div className="text-xs font-mono font-bold text-rose-300 line-through">
                {negativeData.criticalWarning.wrong}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800 text-xs text-slate-200 leading-relaxed">
            <span className="font-bold text-amber-300">Why? </span>
            {negativeData.criticalWarning.reason}
          </div>
        </div>

        {/* Educational Motion 3: The "doesn't + V1" Trap */}
        <DoesntTrapVisualizer language={language} />
      </section>

      {/* 7. Questions */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <HelpCircle className="h-5 w-5" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            7. {questionData.title}
          </h3>
        </div>

        <p className="text-sm text-slate-300">{questionData.simpleExplanation}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {questionData.breakdown.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
              <div className="font-mono text-xs font-bold text-cyan-300">{item.helper}</div>
              <div className="text-xs font-bold text-white">“{item.egEn}”</div>
              <div className="text-[11px] text-slate-400 italic">{item.egMeaning}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready for Guided Practice CTA */}
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 to-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Concept clear? Let’s practice together!</h4>
          <p className="text-xs text-slate-300 mt-1">
            Start with 2 very easy guided questions, then 3 medium, then 1 short challenge.
          </p>
        </div>

        <button
          type="button"
          onClick={onStartPractice}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all shrink-0"
        >
          <span>Start Guided Practice</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
