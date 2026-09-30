import React from 'react';
import { TrendingUp, Award, BarChart3, Target } from 'lucide-react';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <TrendingUp className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Analytics</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Fluency & Error Analytics</h2>
        <p className="text-sm text-slate-400">
          Track grammatical error patterns, tense mastery progression, and active vocabulary growth over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <Award className="h-5 w-5" />
            <h3 className="text-base font-bold text-white">Mastery Milestones</h3>
          </div>
          <p className="mt-3 text-2xl font-extrabold text-white">8 of 12 Tenses</p>
          <p className="mt-1 text-xs text-slate-400">
            67% of core grammar syllabus mastered with zero errors in last 3 drills.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center gap-2 text-blue-400">
            <BarChart3 className="h-5 w-5" />
            <h3 className="text-base font-bold text-white">Grammar Accuracy</h3>
          </div>
          <p className="mt-3 text-2xl font-extrabold text-white">88.4%</p>
          <p className="mt-1 text-xs text-slate-400">
            Most frequent error: Present Perfect vs Simple Past timing.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center gap-2 text-purple-400">
            <Target className="h-5 w-5" />
            <h3 className="text-base font-bold text-white">Fluency Target</h3>
          </div>
          <p className="mt-3 text-2xl font-extrabold text-white">C1 Proficiency</p>
          <p className="mt-1 text-xs text-slate-400">
            Projected attainment: 6 weeks with current daily task consistency.
          </p>
        </div>
      </div>
    </div>
  );
}
