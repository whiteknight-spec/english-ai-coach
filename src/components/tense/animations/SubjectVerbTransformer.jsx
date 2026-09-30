import React, { useState } from 'react';
import { Sparkles, ArrowRight, User, Users } from 'lucide-react';

const VERB_EXAMPLES = [
  { root: 'go', suffix: 'es', fullSingular: 'goes', meaning: 'போகிறான் / போகிறாள்' },
  { root: 'work', suffix: 's', fullSingular: 'works', meaning: 'வேலை செய்கிறான்' },
  { root: 'watch', suffix: 'es', fullSingular: 'watches', meaning: 'பார்க்கிறான்' },
  { root: 'study', suffix: 'ies', rootReplaced: 'stud', fullSingular: 'studies', meaning: 'படிக்கிறான்' },
];

export default function SubjectVerbTransformer({ _language = 'tanglish' }) {
  const [subjectGroup, setSubjectGroup] = useState('singular'); // 'plural' (I/You/We/They) | 'singular' (He/She/It)
  const [activeVerbIndex, setActiveVerbIndex] = useState(0);

  const currentVerb = VERB_EXAMPLES[activeVerbIndex];
  const isSingular = subjectGroup === 'singular';

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-5 md:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight">
            Educational Motion 2: Subject + Verb Transformation (s/es சேரும் முறை)
          </h4>
          <p className="text-[11px] text-slate-400">
            Click to switch subjects and watch how the "-s / -es" badge attaches to the verb!
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
        {/* Subject Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">Choose Subject:</span>
          <div className="flex items-center gap-1 rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              type="button"
              onClick={() => setSubjectGroup('plural')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
                !isSingular
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="h-3 w-3" />
              <span>I / You / We / They</span>
            </button>
            <button
              type="button"
              onClick={() => setSubjectGroup('singular')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
                isSingular
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="h-3 w-3" />
              <span>He / She / It</span>
            </button>
          </div>
        </div>

        {/* Verb selector pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Verb:</span>
          {VERB_EXAMPLES.map((v, idx) => (
            <button
              key={v.root}
              type="button"
              onClick={() => setActiveVerbIndex(idx)}
              className={`rounded-lg px-2.5 py-1 text-xs font-mono font-semibold transition-all ${
                activeVerbIndex === idx
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {v.root}
            </button>
          ))}
        </div>
      </div>

      {/* Animation Display Stage */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-center flex flex-col items-center justify-center space-y-4">
        {/* Large Animated Sentence Block */}
        <div className="inline-flex items-center gap-3 text-2xl md:text-4xl font-extrabold tracking-wide">
          {/* Subject Badge */}
          <span
            className={`rounded-xl px-4 py-2 border transition-all duration-300 ${
              isSingular
                ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300 shadow-lg shadow-indigo-500/10'
                : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-lg shadow-emerald-500/10'
            }`}
          >
            {isSingular ? 'He' : 'I'}
          </span>

          <ArrowRight className="h-5 w-5 text-slate-600" />

          {/* Verb with animated attachment */}
          <div className="relative inline-flex items-center rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 font-mono">
            {/* Base root */}
            <span className="text-white">
              {isSingular && currentVerb.rootReplaced ? currentVerb.rootReplaced : currentVerb.root}
            </span>

            {/* Suffix attachment animation when singular */}
            {isSingular ? (
              <span
                key={`${subjectGroup}-${activeVerbIndex}`}
                className="ml-0.5 rounded-md bg-indigo-600 text-white px-1.5 py-0.5 text-xl md:text-3xl font-extrabold shadow-md shadow-indigo-500/30 animate-slide-attach"
              >
                +{currentVerb.suffix}
              </span>
            ) : (
              <span className="ml-1 text-xs text-slate-500 font-sans font-normal">
                (V1 pure)
              </span>
            )}
          </div>
        </div>

        {/* Live Meaning Callout */}
        <div className="text-xs text-slate-300 font-medium pt-2">
          {isSingular ? (
            <span>
              Sentence: <strong className="text-indigo-300">He {currentVerb.fullSingular}</strong> — {currentVerb.meaning}
            </span>
          ) : (
            <span>
              Sentence: <strong className="text-emerald-300">I {currentVerb.root}</strong> — நான் {currentVerb.root} செய்கிறேன்
            </span>
          )}
        </div>

        {/* Educational Rule Explanation */}
        <div className="w-full max-w-lg rounded-xl border border-slate-800/80 bg-slate-900/60 p-3 text-xs text-slate-300 text-left">
          {isSingular ? (
            <p className="leading-relaxed">
              <span className="font-bold text-indigo-300">Notice the motion: </span>
              Subject "He" vandhadhaala verb kooda <strong>"-{currentVerb.suffix}"</strong> attach aagiruchu! English-la He/She/It vandhaa indha "-s/-es" badge kandippa thevai.
            </p>
          ) : (
            <p className="leading-relaxed">
              <span className="font-bold text-emerald-300">Notice the motion: </span>
              Subject "I" vandhadhaala verb kooda edhuvume attach aagala — pure base form <strong>"{currentVerb.root}"</strong> mattum dhaan!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
