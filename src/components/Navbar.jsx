import React from 'react';
import { Menu, Flame, Bell, User } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';

export default function Navbar({ activeTab, onToggleMobileMenu }) {
  const currentNav = NAV_ITEMS.find((item) => item.id === activeTab) || {
    label: 'Dashboard',
    description: 'Overview',
  };

  return (
    <header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 md:px-8 backdrop-blur-md">
      {/* Left side: Hamburger button + Page Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Open sidebar navigation"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div>
          <h2 className="text-lg font-bold text-white tracking-tight md:text-xl">
            {currentNav.label}
          </h2>
          <p className="hidden text-xs text-slate-400 sm:block">
            {currentNav.description}
          </p>
        </div>
      </div>

      {/* Right side: Streak Badge & Profile Icon */}
      <div className="flex items-center gap-3">
        {/* Streak indicator */}
        <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-400 shadow-xs">
          <Flame className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span>5 Day Streak</span>
        </div>

        {/* Notifications mock icon */}
        <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/60 text-slate-300">
          <Bell className="h-4 w-4" />
        </div>

        {/* User Profile avatar */}
        <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-800/80 p-1.5 pr-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden text-xs font-medium text-slate-200 lg:inline">
            Learner
          </span>
        </div>
      </div>
    </header>
  );
}
