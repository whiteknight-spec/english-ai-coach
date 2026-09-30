import React, { useState } from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function TenseTimeline({ language = 'tanglish' }) {
  const [activeView, setActiveView] = useState('present'); // 'past' | 'present' | 'future'

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-5 md:p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">
              Educational Motion 1: The Tense Timeline (காலக்கோடு)
            </h4>
            <p className="text-[11px] text-slate-400">
              {language === 'tamil'
                ? 'Present Simple என்பது ஒரு நொடி மட்டும் அல்ல; அது தொடர்ச்சியான தினசரி பழக்கம்!'
                : 'See why Present Simple is called "habits & routines" across time'}
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-950/80 p-1 border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveView('past')}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              activeView === 'past'
                ? 'bg-slate-700 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Past (கடந்த காலம்)
          </button>
          <button
            type="button"
            onClick={() => setActiveView('present')}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              activeView === 'present'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Present Simple (தற்காலம்)
          </button>
          <button
            type="button"
            onClick={() => setActiveView('future')}
            className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
              activeView === 'future'
                ? 'bg-slate-700 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Future (எதிர்காலம்)
          </button>
        </div>
      </div>

      {/* The Visual Timeline Graphic */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 md:p-8 space-y-6">
        <div className="relative">
          {/* Main Axis Line */}
          <div className="h-1.5 w-full rounded-full bg-slate-800 relative">
            {/* Progress indicator according to view */}
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                activeView === 'past'
                  ? 'w-1/4 bg-slate-500'
                  : activeView === 'present'
                  ? 'w-1/2 bg-gradient-to-r from-slate-600 via-indigo-500 to-cyan-400'
                  : 'w-full bg-gradient-to-r from-slate-600 via-indigo-500 to-cyan-400'
              }`}
            />
          </div>

          {/* Three Key Markers: Past | NOW / Present | Future */}
          <div className="mt-4 grid grid-cols-3 text-center">
            {/* 1. PAST */}
            <div className="flex flex-col items-center">
              <div
                className={`h-4 w-4 rounded-full border-2 transition-all ${
                  activeView === 'past'
                    ? 'border-slate-300 bg-slate-200 scale-125 shadow-md shadow-white/20'
                    : 'border-slate-700 bg-slate-900'
                }`}
              />
              <span className={`mt-2 text-xs font-bold ${activeView === 'past' ? 'text-white' : 'text-slate-500'}`}>
                PAST
              </span>
              <span className="text-[10px] text-slate-500">Yesterday / முடிந்தது</span>
            </div>

            {/* 2. PRESENT (Highlighted) */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className={`h-5 w-5 rounded-full border-2 transition-all ${
                    activeView === 'present'
                      ? 'border-indigo-400 bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/50'
                      : 'border-slate-700 bg-slate-900'
                  }`}
                />
                {activeView === 'present' && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
                  </span>
                )}
              </div>
              <span className={`mt-2 text-xs font-bold ${activeView === 'present' ? 'text-indigo-300 font-extrabold' : 'text-slate-500'}`}>
                NOW • PRESENT
              </span>
              <span className="text-[10px] text-indigo-400 font-semibold">Today / எப்போதும்</span>
            </div>

            {/* 3. FUTURE */}
            <div className="flex flex-col items-center">
              <div
                className={`h-4 w-4 rounded-full border-2 transition-all ${
                  activeView === 'future'
                    ? 'border-cyan-400 bg-cyan-300 scale-125 shadow-md shadow-cyan-400/30'
                    : 'border-slate-700 bg-slate-900'
                }`}
              />
              <span className={`mt-2 text-xs font-bold ${activeView === 'future' ? 'text-white' : 'text-slate-500'}`}>
                FUTURE
              </span>
              <span className="text-[10px] text-slate-500">Tomorrow / இனிமேல்</span>
            </div>
          </div>
        </div>

        {/* Present Simple Repeating Rhythm Animation (Only for Present view) */}
        {activeView === 'present' ? (
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-4 space-y-3 animate-subtle-pop">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                Present Simple Rhythm: Recurring Daily Habit
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Repeats regularly</span>
            </div>

            {/* Animated repeating habit pulses across the present */}
            <div className="flex items-center justify-between gap-2 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <div
                    className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse-rhythm"
                    style={{ animationDelay: `${idx * 0.25}s` }}
                  />
                  <span className="text-[10px] font-mono text-slate-400">{day}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'tamil'
                ? 'Present Simple என்பது இந்த ஒரு நொடியில் நடப்பது மட்டுமல்ல — திங்கள் முதல் ஞாயிறு வரை மீண்டும் மீண்டும் நடக்கும் பழக்கம் (Habit)!'
                : 'Present Simple is NOT frozen to this exact second. It describes an active cycle that happens again and again (e.g. "I wake up at 7 AM every day").'}
            </p>
          </div>
        ) : activeView === 'past' ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
            <span className="font-bold text-slate-200">Past Tense: </span>
            A completed event in the past (e.g., "I visited Madurai yesterday"). It does NOT repeat today.
          </div>
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
            <span className="font-bold text-cyan-300">Future Tense: </span>
            An action that has not started yet (e.g., "I will travel tomorrow").
          </div>
        )}
      </div>
    </div>
  );
}
