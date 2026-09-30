import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import StatCard from '../components/StatCard';
import ModuleCard from '../components/ModuleCard';
import { DASHBOARD_STATS, CORE_MODULES, RECENT_DRILLS } from '../data/mockDashboardData';

export default function DashboardPage({ onNavigate }) {
  return (
    <div className="space-y-8">
      {/* Welcome & Motivational Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 p-6 md:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Strict AI Feedback Protocol</span>
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Welcome to English AI Coach
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
            Your personal AI tutor designed for rigorous fluency training. Master all 12 English tenses, eliminate grammar slip-ups, enrich professional vocabulary, and prepare for high-stakes interview communication.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('tense-training')}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <span>Resume Tense Training</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('interview-mode')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              <span>Interview Mode</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-32 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />
      </section>

      {/* KPI Stats Grid */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-white tracking-tight">
            Today's Metrics & Consistency
          </h3>
          <span className="text-xs text-slate-400">Updated just now</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DASHBOARD_STATS.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </div>
      </section>

      {/* Core Training Modules */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Curriculum & Practice Areas
            </h3>
            <p className="text-xs text-slate-400">
              Select an area to start drills and strict AI evaluations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CORE_MODULES.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onAction={(id) => onNavigate(id)}
            />
          ))}
        </div>
      </section>

      {/* Recent Activity & Strict Feedback Rules */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Drills */}
        <section className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-base font-bold text-white">Recent Training Sessions</h3>
          <p className="mt-1 text-xs text-slate-400">History of your latest exercises and drills.</p>

          <div className="mt-4 divide-y divide-slate-800">
            {RECENT_DRILLS.map((drill, index) => (
              <div key={index} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{drill.title}</h4>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                      <span>{drill.category}</span>
                      <span>•</span>
                      <span>{drill.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-slate-700">
                    {drill.score}
                  </span>
                  <div className="mt-1 text-[11px] text-slate-400">{drill.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coach Guidelines Box */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-400">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-base font-bold text-white">Coach Principles</h3>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              To ensure real-world fluency, this platform applies high standards:
            </p>

            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Zero tolerance for tense mismatches (e.g. Mixing past & present).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Immediate sentence re-writing drills when mistakes occur.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Emphasis on natural enterprise phrasing over literal translation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Structured STAR interview answer drills with time limits.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl bg-slate-800/60 p-3 text-center border border-slate-700/60">
            <span className="text-xs font-medium text-slate-300">
              Ready for your next drill?
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
