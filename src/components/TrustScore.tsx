'use client';

import {useLocale} from 'next-intl';
import {resolveLocale, trustScoreLabel} from '@/content/siteContent';

export default function TrustScore({score}: {score: number}) {
  const locale = resolveLocale(useLocale());

  const getScoreColor = (value: number) => {
    if (value >= 80) return 'text-emerald-500 stroke-emerald-500';
    if (value >= 50) return 'text-amber-500 stroke-amber-500';
    return 'text-red-500 stroke-red-500';
  };

  const colorClass = getScoreColor(score);
  const strokeDasharray = `${score}, 100`;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90 transform">
          <path
            className="fill-none stroke-slate-100"
            strokeWidth="3.8"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`fill-none transition-all duration-700 ${colorClass}`}
            strokeWidth="3.8"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-black text-slate-900">{score}</span>
        </div>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
        {trustScoreLabel[locale]}
      </span>
    </div>
  );
}
