'use client';

import {useLocale} from 'next-intl';
import {CheckCircle2, AlertTriangle, XCircle, Clock} from 'lucide-react';
import {resolveLocale, statusText} from '@/content/siteContent';

interface BadgeProps {
  status: 'verified' | 'pending' | 'suspicious' | 'rejected';
  showIcon?: boolean;
}

export default function VerificationBadge({status, showIcon = true}: BadgeProps) {
  const locale = resolveLocale(useLocale());
  const configs = {
    verified: {
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      icon: <CheckCircle2 size={16} />,
    },
    pending: {
      bg: 'bg-amber-50 text-amber-700 border-amber-100',
      icon: <Clock size={16} />,
    },
    suspicious: {
      bg: 'bg-orange-50 text-orange-700 border-orange-100',
      icon: <AlertTriangle size={16} />,
    },
    rejected: {
      bg: 'bg-red-50 text-red-700 border-red-100',
      icon: <XCircle size={16} />,
    },
  };

  const config = configs[status];

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${config.bg}`}>
      {showIcon && config.icon}
      <span>{statusText[status][locale]}</span>
    </div>
  );
}
