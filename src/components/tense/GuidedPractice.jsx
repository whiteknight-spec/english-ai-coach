import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  RotateCcw,
  BookOpen,
  Unlock,
} from 'lucide-react';
import { GUIDED_PRACTICE_QUESTIONS } from '../../data/presentSimpleBeginnerData';
import CoachHumorCard from './animations/CoachHumorCard';

export default function GuidedPractice({
  language = 'tanglish',
  onCompletePractice,
  onBackToLesson,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Similar drill reinforcement state if user makes a mistake
  const [inFollowupDrill, setInFollowupDrill] = useState(false);
  const [drillSelectedOption, setDrillSelectedOption] = useState(null);
  const [drillSubmitted, setDrillSubmitted] = useState(false);

  // Overall practice completion
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = GUIDED_PRACTICE_QUESTIONS[currentStepIndex];
  const isLastStep = currentStepIndex === GUIDED_PRACTICE_QUESTIONS.length - 1;

  // Handle main question selection
  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  // Submit main question
  const handleSubmitMain = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
  };

  // If wrong, activate the immediate similar question
  const handleStartDrill = () => {
    setInFollowupDrill(true);
    setDrillSelectedOption(null);
    setDrillSubmitted(false);
  };

  // Submit drill question
  const handleSubmitDrill = () => {
    if (drillSelectedOption === null || drillSubmitted) return;
    setDrillSubmitted(true);
  };

  // Advance to next guided practice step
  const handleNextStep = () => {
    if (isLastStep) {
      setIsFinished(true);
    } else {
      setCurrentStepIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowHint(true);
      setInFollowupDrill(false);
      setDrillSelectedOption(null);
      setDrillSubmitted(false);
    }
  };

  // Restart practice
  const handleRestartPractice = () => {
    setCurrentStepIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(true);
    setInFollowupDrill(false);
    setDrillSelectedOption(null);
    setDrillSubmitted(false);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 md:p-8 space-y-6 max-w-2xl mx-auto text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          <Unlock className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300">
            Guided Practice Passed!
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            10-Question Test is Now Unlocked!
          </h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            You successfully navigated the 2 easy, 3 medium, and challenge questions. You are now prepared to take the final evaluation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={onCompletePractice}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
          >
            <Sparkles className="h-4 w-4" />
            <span>Start 10-Question Test</span>
          </button>

          <button
            type="button"
            onClick={handleRestartPractice}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-3 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Repeat Practice</span>
          </button>
        </div>
      </div>
    );
  }

  const isSelectedCorrect = selectedOption === currentQ.correctIndex;
  const hintText = currentQ.hint[language] || currentQ.hint.tanglish;
  const ruleText = currentQ.rule[language] || currentQ.rule.tanglish;
  const expText = currentQ.explanation[language] || currentQ.explanation.tanglish;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Top Practice Status & Step Indicator */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border ${
                currentQ.level === 'easy'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                  : currentQ.level === 'medium'
                  ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                  : 'border-amber-500/30 bg-amber-500/10 text-amber-300'
              }`}
            >
              {currentQ.levelLabel}
            </span>
            <span className="text-xs text-slate-400">
              Practice {currentStepIndex + 1} of {GUIDED_PRACTICE_QUESTIONS.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onBackToLesson}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Back to Lesson</span>
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-cyan-400 transition-all duration-300"
            style={{
              width: `${Math.round(((currentStepIndex + 1) / GUIDED_PRACTICE_QUESTIONS.length) * 100)}%`,
            }}
          />
        </div>
      </div>

      {/* Main Practice Question Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
              Practice Question
            </span>
            <button
              type="button"
              onClick={() => setShowHint((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            </button>
          </div>

          <h3 className="mt-2 text-lg md:text-xl font-bold text-white leading-relaxed whitespace-pre-line">
            {currentQ.prompt}
          </h3>
        </div>

        {/* Helpful Hint Callout */}
        {showHint && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-300 flex items-start gap-2">
            <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
            <span className="leading-relaxed">{hintText}</span>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQ.correctIndex;

            let optionStyle =
              'border-slate-800 bg-slate-950/50 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60';

            if (isSubmitted) {
              if (isCorrectOption) {
                optionStyle = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-200 shadow-sm';
              } else if (isSelected && !isCorrectOption) {
                optionStyle = 'border-rose-500/60 bg-rose-500/10 text-rose-200 shadow-sm';
              } else {
                optionStyle = 'border-slate-800 bg-slate-950/20 text-slate-500 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'border-indigo-500 bg-indigo-600/15 text-white ring-1 ring-indigo-500';
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm font-medium transition-all ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold ${
                      isSubmitted && isCorrectOption
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : isSubmitted && isSelected && !isCorrectOption
                        ? 'border-rose-500 bg-rose-500 text-white'
                        : isSelected
                        ? 'border-indigo-500 bg-indigo-600 text-white'
                        : 'border-slate-700 bg-slate-800 text-slate-400'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isSubmitted && isCorrectOption && (
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Submit Button */}
        {!isSubmitted && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={handleSubmitMain}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                selectedOption !== null
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
              }`}
            >
              <span>Check My Answer</span>
              <Sparkles className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Post-Submission Teaching & Feedback */}
        {isSubmitted && (
          <div
            className={`rounded-2xl border p-5 md:p-6 space-y-4 ${
              isSelectedCorrect
                ? 'border-emerald-500/30 bg-emerald-950/20 animate-subtle-pop'
                : 'border-rose-500/30 bg-rose-950/20 animate-subtle-shake'
            }`}
          >
            {/* Status Header */}
            <div className="flex items-center gap-2">
              {isSelectedCorrect ? (
                <>
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-300">
                    Correct! Super comprehension.
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 text-rose-400" />
                  <span className="text-sm font-bold text-rose-300">
                    Oops! That is a mistake. Let's understand why:
                  </span>
                </>
              )}
            </div>

            {/* Controlled Friendly Tanglish Coach Humor (skippable) */}
            {(!isSelectedCorrect && (currentStepIndex === 1 || currentStepIndex === 2 || currentStepIndex === 5)) && (
              <CoachHumorCard
                quipKey={currentStepIndex === 1 ? 'missingS' : 'doubleS'}
                language={language}
                isSuccess={false}
              />
            )}
            {isSelectedCorrect && currentStepIndex === 5 && (
              <CoachHumorCard
                quipKey="trapAvoided"
                language={language}
                isSuccess={true}
              />
            )}

            {/* Correct Sentence Display */}
            <div className="rounded-xl border border-indigo-500/20 bg-slate-950/70 p-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Correct Sentence:
              </span>
              <div className="mt-1 text-sm font-bold text-indigo-300 italic">
                “{currentQ.correctSentence}”
              </div>
            </div>

            {/* Exact Rule */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-xs text-amber-300 flex items-start gap-2">
              <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
              <div>
                <span className="font-bold">Grammar Rule: </span>
                <span>{ruleText}</span>
              </div>
            </div>

            {/* Explanation in chosen language (Tanglish default) */}
            <div className="rounded-xl bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-200 border border-slate-800/80">
              <span className="font-bold text-indigo-300">Explanation: </span>
              {expText}
            </div>

            {/* Immediate Similar Follow-up Question if they made a mistake */}
            {!isSelectedCorrect && !inFollowupDrill && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleStartDrill}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-amber-600/30 hover:bg-amber-500 transition-all"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Try A Similar Question Now (Reinforce Rule)</span>
                </button>
              </div>
            )}

            {/* Reinforcement Drill Section */}
            {inFollowupDrill && (
              <div className="mt-4 rounded-xl border border-amber-500/30 bg-slate-950/80 p-5 space-y-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>Immediate Reinforcement Drill</span>
                </div>

                <div className="text-sm font-semibold text-white whitespace-pre-line">
                  {currentQ.similarFollowup.prompt}
                </div>

                <div className="space-y-2">
                  {currentQ.similarFollowup.options.map((opt, optIdx) => {
                    const isDrillSelected = drillSelectedOption === optIdx;
                    const isDrillCorrect = optIdx === currentQ.similarFollowup.correctIndex;

                    let drillStyle = 'border-slate-800 bg-slate-900/60 text-slate-300';
                    if (drillSubmitted) {
                      if (isDrillCorrect) drillStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-200';
                      else if (isDrillSelected) drillStyle = 'border-rose-500 bg-rose-500/10 text-rose-200';
                    } else if (isDrillSelected) {
                      drillStyle = 'border-amber-500 bg-amber-500/10 text-white';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={drillSubmitted}
                        onClick={() => setDrillSelectedOption(optIdx)}
                        className={`flex w-full items-center justify-between rounded-lg border p-3 text-left text-xs font-medium transition-all ${drillStyle}`}
                      >
                        <span>{opt}</span>
                        {drillSubmitted && isDrillCorrect && (
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {!drillSubmitted ? (
                  <button
                    type="button"
                    disabled={drillSelectedOption === null}
                    onClick={handleSubmitDrill}
                    className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-500 disabled:opacity-50"
                  >
                    Check Reinforcement Answer
                  </button>
                ) : (
                  <div className="rounded-lg bg-slate-900 p-3 text-xs text-slate-300 border border-slate-800">
                    <span className="font-bold text-amber-300">Reinforcement Note: </span>
                    {currentQ.similarFollowup.ruleExplanation}
                  </div>
                )}
              </div>
            )}

            {/* Advance Button (Available once answered correctly or drill completed) */}
            {(isSelectedCorrect || drillSubmitted || inFollowupDrill) && (
              <div className="pt-3 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
                >
                  <span>{isLastStep ? 'Complete Guided Practice' : 'Next Question'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
