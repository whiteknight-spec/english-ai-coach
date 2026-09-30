import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, RotateCcw, ArrowRight, ShieldAlert } from 'lucide-react';

export default function DoesntTrapVisualizer({ _language = 'tanglish' }) {
  const [animStep, setAnimStep] = useState(1); // 1: Error (Double s) | 2: Removing s | 3: Clean correct sentence
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto-play timer loop if active
  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setTimeout(() => {
        setAnimStep((prev) => (prev < 3 ? prev + 1 : 1));
      }, 1600);
    }
    return () => clearTimeout(timer);
  }, [animStep, isAutoPlaying]);

  const handleRestart = () => {
    setAnimStep(1);
    setIsAutoPlaying(true);
  };

  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-900/80 p-5 md:p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">
              Educational Motion 3: The "doesn't + V1" Trap Visualizer
            </h4>
            <p className="text-[11px] text-slate-400">
              Watch how "doesn't" absorbs the grammar marker, forcing the main verb to drop its "-s"!
            </p>
          </div>
        </div>

        {/* Step Buttons & Play */}
        <div className="flex items-center gap-1.5 rounded-xl bg-slate-950/80 p-1 border border-slate-800 text-xs">
          {[
            { step: 1, label: '1. The Trap' },
            { step: 2, label: '2. Drop "-s"' },
            { step: 3, label: '3. Correct' },
          ].map((item) => (
            <button
              key={item.step}
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setAnimStep(item.step);
              }}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                animStep === item.step
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={handleRestart}
            className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800"
            title="Auto-play animation"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Animation Stage */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8 flex flex-col items-center justify-center space-y-6 text-center">
        {/* Sentence Container */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-2xl md:text-4xl font-extrabold font-mono tracking-wide">
          {/* Subject */}
          <span className="rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-white">
            He
          </span>

          {/* Doesn't (Helper) */}
          <div
            className={`rounded-xl border px-3.5 py-1.5 transition-all duration-300 ${
              animStep >= 2
                ? 'border-indigo-500 bg-indigo-600/20 text-indigo-300 shadow-md shadow-indigo-500/20 animate-absorb'
                : 'border-slate-700 bg-slate-800 text-slate-300'
            }`}
          >
            <span>do</span>
            <span className="font-bold text-amber-400 underline decoration-amber-400 underline-offset-4">
              es
            </span>
            <span>n't</span>
          </div>

          {/* Main Verb Transition */}
          <div
            className={`relative rounded-xl border px-3.5 py-1.5 transition-all duration-300 ${
              animStep === 1
                ? 'border-rose-500/60 bg-rose-500/10 text-rose-300 animate-subtle-shake'
                : animStep === 2
                ? 'border-amber-500/60 bg-amber-500/10 text-amber-300'
                : 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 shadow-md shadow-emerald-500/20 animate-subtle-pop'
            }`}
          >
            <span>go</span>

            {/* Suffix being dissolved/dropped */}
            {animStep === 1 && (
              <span className="text-rose-400 font-extrabold">es</span>
            )}

            {animStep === 2 && (
              <span className="relative ml-0.5 line-through text-slate-500 decoration-rose-500 decoration-4 opacity-50">
                es
              </span>
            )}

            {animStep === 3 && (
              <span className="text-[11px] font-sans font-medium text-emerald-400 ml-1.5">
                (Pure V1)
              </span>
            )}
          </div>
        </div>

        {/* Status Callout Banner */}
        <div className="w-full max-w-lg">
          {animStep === 1 && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 text-xs text-rose-300 flex items-center justify-center gap-2 animate-subtle-shake">
              <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>
                <strong>❌ Trap Detected:</strong> "do<strong>es</strong>n't" la ஏற்கெனவே "-es" irukku! "go<strong>es</strong>" la marubadiyum "-es" pottu double tax poda koodadhu!
              </span>
            </div>
          )}

          {animStep === 2 && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs text-amber-300 flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4 shrink-0 text-amber-400" />
              <span>
                <strong>Removing "-es":</strong> Because "doesn't" took the grammar marker, the main verb drops the "-es"!
              </span>
            </div>
          )}

          {animStep === 3 && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 text-xs text-emerald-300 flex items-center justify-center gap-2 animate-subtle-pop">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                <strong>✅ Perfect Sentence:</strong> "He doesn't go" — Single '-es' on the helper, clean base verb 'go'!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
