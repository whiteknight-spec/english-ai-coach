import React from 'react';
import { Briefcase } from 'lucide-react';

const TRACKS = [
  {
    title: 'Software Engineering & Tech',
    questions: '120+ Behavioral & Technical Discussion Questions',
    level: 'Advanced',
  },
  {
    title: 'Leadership & Project Management',
    questions: '85+ STAR Scenarios on Conflict & Delivery',
    level: 'Executive',
  },
  {
    title: 'General Behavioral & HR Screening',
    questions: '60+ Core Competency Prompts',
    level: 'All Levels',
  },
];

export default function InterviewModePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <Briefcase className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Career Acceleration</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Interview Communication Simulation</h2>
        <p className="text-sm text-slate-400">
          Strict mock interviews with immediate breakdown on conciseness, executive presence, and STAR method structuring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TRACKS.map((track, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-indigo-500/40 transition-colors"
          >
            <div>
              <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-300">
                {track.level}
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{track.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{track.questions}</p>
            </div>

            <button
              type="button"
              className="mt-6 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 text-xs font-semibold text-slate-200 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all"
            >
              Select Track
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
