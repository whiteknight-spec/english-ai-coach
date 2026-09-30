import React from 'react';
import { CheckSquare, ListTodo, Award } from 'lucide-react';

const TASKS = [
  {
    title: 'Sentence Correction Sprint',
    description: 'Fix 10 common sentence structure and auxiliary verb mistakes.',
    reward: '+30 XP',
    time: '5 mins',
    status: 'Pending',
  },
  {
    title: 'Past Perfect Conversion Drill',
    description: 'Convert 5 paragraphs from simple narrative to past perfect tense.',
    reward: '+25 XP',
    time: '10 mins',
    status: 'Pending',
  },
  {
    title: 'Daily Vocab: 5 Tech & Business Terms',
    description: 'Learn nuance, collocations, and use each in two original sentences.',
    reward: '+20 XP',
    time: '8 mins',
    status: 'Pending',
  },
];

export default function DailyTasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <CheckSquare className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Daily Discipline</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Daily Grammar & Vocabulary Tasks</h2>
        <p className="text-sm text-slate-400">
          Consistent 15-20 minute daily drills to rewire sentence formation reflexes and expand vocabulary.
        </p>
      </div>

      <div className="space-y-4">
        {TASKS.map((task, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <ListTodo className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{task.title}</h3>
                <p className="mt-1 text-xs text-slate-400 max-w-xl">{task.description}</p>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400 font-medium">
                    <Award className="h-3.5 w-3.5" />
                    {task.reward}
                  </span>
                  <span>•</span>
                  <span>Estimated: {task.time}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors self-start sm:self-center"
            >
              Start Drill
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
