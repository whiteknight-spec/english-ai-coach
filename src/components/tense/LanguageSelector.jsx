import React from 'react';
import { Languages } from 'lucide-react';
import { LESSON_LANGUAGES } from '../../data/presentSimpleBeginnerData';

export default function LanguageSelector({ currentLanguage, onSelectLanguage }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-indigo-500/20 bg-slate-900/90 p-3.5 px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Languages className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">Explanation Language / கற்பிக்கும் மொழி:</div>
          <div className="text-[11px] text-slate-400">Choose how grammar concepts and hints are explained</div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 rounded-xl bg-slate-950/80 p-1 border border-slate-800">
        {LESSON_LANGUAGES.map((lang) => {
          const isActive = currentLanguage === lang.id;
          return (
            <button
              key={lang.id}
              type="button"
              onClick={() => onSelectLanguage(lang.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
