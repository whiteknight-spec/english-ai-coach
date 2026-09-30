import React from 'react';
import { Clock, BookOpen, Mic, Briefcase, ChevronRight } from 'lucide-react';

const iconMap = {
  Clock,
  BookOpen,
  Mic,
  Briefcase,
};

export default function ModuleCard({ module, onAction }) {
  const Icon = iconMap[module.icon] || Clock;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-200 hover:border-indigo-500/50 hover:bg-slate-900">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
            {module.tag}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
          {module.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
          {module.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="text-slate-400">Curriculum Mastery</span>
          <span className="font-semibold text-slate-200">{module.progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${module.progress}%` }}
          />
        </div>

        <button
          type="button"
          onClick={() => onAction(module.id)}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/50 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
        >
          <span>Open Module</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
