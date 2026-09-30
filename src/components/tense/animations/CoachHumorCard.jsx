import React, { useState } from 'react';
import { Smile, X, Sparkles } from 'lucide-react';
import { COACH_HUMOR_QUIPS } from '../../../data/coachHumorData';

export default function CoachHumorCard({
  quipKey,
  language = 'tanglish',
  isSuccess = false,
}) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !quipKey || !COACH_HUMOR_QUIPS[quipKey]) {
    return null;
  }

  const quip = COACH_HUMOR_QUIPS[quipKey];
  const message = language === 'english' ? quip.english : quip.tanglish;

  return (
    <div
      className={`relative flex items-start justify-between gap-3 rounded-xl border p-3 text-xs transition-all animate-subtle-pop ${
        isSuccess
          ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
          : 'border-amber-500/30 bg-amber-950/20 text-amber-200'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
            isSuccess
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-amber-500/20 text-amber-400'
          }`}
        >
          {isSuccess ? <Sparkles className="h-3.5 w-3.5" /> : <Smile className="h-3.5 w-3.5" />}
        </div>
        <div>
          <span className="font-bold tracking-wide">
            {isSuccess ? 'Coach Cheer: ' : 'Coach Tip: '}
          </span>
          <span className="leading-relaxed">{message}</span>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="rounded-md p-1 text-slate-400 hover:text-white hover:bg-slate-800/60 shrink-0"
        title="Dismiss coach quip"
        aria-label="Dismiss note"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
