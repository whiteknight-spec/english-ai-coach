import React from 'react';
import { Flame, Clock, BookOpen, Mic } from 'lucide-react';

const iconMap = {
  Flame,
  Clock,
  BookOpen,
  Mic,
};

const colorMap = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
  },
};

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon] || Flame;
  const theme = colorMap[stat.color] || colorMap.blue;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xs transition-all hover:border-slate-700">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-medium text-slate-400">{stat.title}</span>
          <div className="mt-1 text-2xl font-bold tracking-tight text-white">{stat.value}</div>
        </div>

        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${theme.bg} ${theme.border} ${theme.text}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-slate-400 truncate max-w-[160px]">{stat.subtitle}</span>
        <span className="font-semibold text-emerald-400">{stat.change}</span>
      </div>
    </div>
  );
}
