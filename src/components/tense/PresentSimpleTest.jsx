import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import CoachHumorCard from './animations/CoachHumorCard';

export default function PresentSimpleTest({
  questions,
  isRetryRun = false,
  language = 'tanglish',
  onFinish,
  onExit,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recordedAnswers, setRecordedAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Handle single-option selection
  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  // Submit answer
  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    const isCorrect = selectedOption === currentQuestion.correctIndex;
    const answerRecord = {
      ...currentQuestion,
      selectedOptionIndex: selectedOption,
      isCorrect,
    };

    setRecordedAnswers((prev) => [...prev, answerRecord]);
    setIsSubmitted(true);
  };

  // Advance to next question after reading explanation
  const handleNextQuestion = () => {
    if (!isSubmitted) return;

    if (isLastQuestion) {
      const allAnswers = [...recordedAnswers];
      const correctCount = allAnswers.filter((a) => a.isCorrect).length;
      const wrongCount = allAnswers.length - correctCount;
      const mistakes = allAnswers.filter((a) => !a.isCorrect);

      onFinish({
        total: allAnswers.length,
        correctCount,
        wrongCount,
        mistakes,
        allAnswers,
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  if (!currentQuestion) {
    return null;
  }

  const isSelectedCorrect = selectedOption === currentQuestion.correctIndex;
  const progressPercent = Math.round(((currentIndex + (isSubmitted ? 1 : 0)) / questions.length) * 100);

  // Extract multilingual rule and explanation
  const ruleText =
    typeof currentQuestion.rule === 'object'
      ? currentQuestion.rule[language] || currentQuestion.rule.tanglish
      : currentQuestion.rule;

  const explanationText =
    typeof currentQuestion.explanation === 'object'
      ? currentQuestion.explanation[language] || currentQuestion.explanation.tanglish
      : currentQuestion.explanation;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Test Top Navigation & Progress */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300">
              {isRetryRun ? 'Mistakes Drill' : '10-Question Mastery Test'}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-mono text-slate-300 border border-slate-700">
              Topic: {currentQuestion.topic}
            </span>
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              <BookOpen className="h-3 w-3" />
              <span>Exit</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
            Prompt
          </span>
          <h3 className="mt-2 text-lg md:text-xl font-bold text-white leading-relaxed whitespace-pre-line">
            {currentQuestion.prompt}
          </h3>
        </div>

        {/* 4 Options Grid */}
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Select one option:
          </span>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === currentQuestion.correctIndex;

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
                    <span className="leading-snug">{option}</span>
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
        </div>

        {/* Check Answer Button (unsubmitted) */}
        {!isSubmitted && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={handleSubmitAnswer}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                selectedOption !== null
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
              }`}
            >
              <span>Submit Answer</span>
              <Sparkles className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Post-Submission Feedback & Tanglish/Tamil/English Explanation */}
        {isSubmitted && (
          <div
            className={`rounded-2xl border p-5 md:p-6 space-y-4 ${
              isSelectedCorrect
                ? 'border-emerald-500/30 bg-emerald-950/20 animate-subtle-pop'
                : 'border-rose-500/30 bg-rose-950/20 animate-subtle-shake'
            }`}
          >
            {/* Status Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isSelectedCorrect ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-bold text-emerald-300">
                      Correct Answer!
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5 text-rose-400" />
                    <span className="text-sm font-bold text-rose-300">
                      Incorrect Answer
                    </span>
                  </>
                )}
              </div>

              <span className="text-xs font-mono text-slate-400">
                {currentQuestion.topic}
              </span>
            </div>

            {/* Controlled Friendly Tanglish Coach Humor on Target Trap Questions */}
            {!isSelectedCorrect && currentQuestion.id === 2 && (
              <CoachHumorCard quipKey="doubleS" language={language} isSuccess={false} />
            )}
            {!isSelectedCorrect && currentQuestion.id === 7 && (
              <CoachHumorCard quipKey="dontWithSingular" language={language} isSuccess={false} />
            )}
            {!isSelectedCorrect && currentQuestion.id === 10 && (
              <CoachHumorCard quipKey="isPlusVerb" language={language} isSuccess={false} />
            )}
            {isSelectedCorrect && (currentQuestion.id === 2 || currentQuestion.id === 10) && (
              <CoachHumorCard quipKey="cleanRule" language={language} isSuccess={true} />
            )}

            {/* Correct Sentence Highlight */}
            <div className="rounded-xl border border-indigo-500/20 bg-slate-950/70 p-3.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Correct Sentence:
              </div>
              <div className="mt-1 text-sm font-bold text-indigo-300 italic">
                “{currentQuestion.correctSentence}”
              </div>
            </div>

            {/* Short Grammar Rule */}
            <div className="flex items-start gap-2.5 rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-xs text-amber-300">
              <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
              <div>
                <span className="font-bold">Rule: </span>
                <span>{ruleText}</span>
              </div>
            </div>

            {/* In-depth Grammar Explanation in selected language */}
            <div className="rounded-xl bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-300 border border-slate-800">
              <span className="font-bold text-indigo-300">Explanation: </span>
              {explanationText}
            </div>

            {/* Next Question / View Results Button */}
            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
              >
                <span>{isLastQuestion ? 'View Test Results' : 'Next Question'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
