import React from 'react';
import { Mic } from 'lucide-react';

export default function AISpeakingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <Mic className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Spoken English</span>
        </div>
        <h2 className="text-2xl font-bold text-white">AI Speaking Practice Lab</h2>
        <p className="text-sm text-slate-400">
          Real-time speech feedback focusing on pronunciation, syllable stress, filler words reduction, and sentence fluidity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center py-12">
          <div className="relative mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 shadow-xl shadow-indigo-500/25">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-white">Ready for Speaking Session</h3>
          <p className="mt-2 text-xs text-slate-400 max-w-sm">
            Voice recognition and live AI conversation will be integrated in upcoming phases.
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
          >
            Start Free Speaking Test
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Speaking Evaluation Criteria</h3>
            <p className="mt-1 text-xs text-slate-400">What the AI coach will evaluate in your voice:</p>

            <div className="mt-4 space-y-3">
              {[
                { title: 'Grammar in Motion', desc: 'No mid-sentence tense switching' },
                { title: 'Filler Word Detection', desc: 'Counting "um", "uh", "actually", "like"' },
                { title: 'Pronunciation & Enunciation', desc: 'Clarity of consonant clusters and vowel lengths' },
                { title: 'Pacing & Cadence', desc: 'Speaking at optimal conversational tempo (120-150 wpm)' },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                  <div className="text-xs font-semibold text-slate-200">{item.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
