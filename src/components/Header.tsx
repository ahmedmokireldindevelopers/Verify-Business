'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import {ShieldCheck} from 'lucide-react';

export default function Header() {
  const t = useTranslations('Common');

  const navLinks = [
    {href: '/', label: t('home')},
    {href: '/features', label: t('features')},
    {href: '/how-it-works', label: t('howItWorks')},
    {href: '/pricing', label: t('pricing')},
    {href: '/about', label: t('about')},
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand-ink/92 shadow-[0_16px_42px_rgba(7,22,38,0.2)] backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold to-brand-royal shadow-[0_14px_32px_rgba(18,80,214,0.35)] transition-transform duration-200 group-hover:scale-105">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Verify<span className="text-brand-gold">Business</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
            >
              {t('login')}
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-brand-gold to-[#ffcd57] px-5 py-2.5 text-sm font-black text-brand-ink shadow-[0_14px_34px_rgba(243,178,27,0.32)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t('signup')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
