'use client';

import {FormEvent, useState} from 'react';
import {useTranslations} from 'next-intl';
import {ArrowRight, CheckCircle2, Search, ShieldCheck, Building2, Globe2} from 'lucide-react';
import {useRouter} from '@/navigation';

export default function Hero() {
  const t = useTranslations('Hero');
  const ct = useTranslations('Common');
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : '/search');
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071626_0%,#0b2140_55%,#102e59_100%)] pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <div className="absolute left-[8%] top-12 h-72 w-72 rounded-full bg-brand-gold/18 blur-[110px]" />
        <div className="absolute right-[12%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-brand-royal/22 blur-[130px]" />
        <div className="absolute bottom-[-6rem] left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-mint/14 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-brand-gold shadow-[0_12px_34px_rgba(7,22,38,0.28)]">
            <CheckCircle2 size={16} />
            <span>{t('trusted')}</span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            {t.rich('title', {
              span: (chunks) => (
                <span className="bg-gradient-to-r from-brand-gold via-[#ffd978] to-white bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            }) || t('title')}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
            {t('subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={ct('search')}
                className="w-full rounded-[1.6rem] border border-white/12 bg-white px-14 py-4 text-slate-900 shadow-[0_24px_60px_rgba(4,12,24,0.32)] outline-none transition-all focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-[1.6rem] bg-gradient-to-r from-brand-gold to-[#ffd269] px-8 py-4 font-black text-brand-ink shadow-[0_18px_42px_rgba(243,178,27,0.3)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto">
              {t('cta_search')}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {label: t('stat_verification'), icon: <ShieldCheck size={20} />},
              {label: t('stat_brand'), icon: <CheckCircle2 size={20} />},
              {label: t('stat_company'), icon: <Building2 size={20} />},
              {label: t('stat_global'), icon: <Globe2 size={20} />},
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.7rem] border border-white/10 bg-white/8 px-5 py-5 text-left shadow-[0_16px_36px_rgba(4,12,24,0.2)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-brand-gold">
                  {item.icon}
                </div>
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-200">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
