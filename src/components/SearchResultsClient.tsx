'use client';

import {useEffect, useMemo, useState} from 'react';
import VerificationBadge from '@/components/VerificationBadge';
import {Link} from '@/navigation';
import {Building2, ChevronRight, MapPin} from 'lucide-react';
import {supabase} from '@/lib/supabase';
import type {CompanyRecord} from '@/data/companyDirectory';

type Copy = {
  trustScore: string;
  coverage: string;
  guestLimit: string;
  unlimited: string;
  loginForUnlimited: string;
};

export default function SearchResultsClient({
  results,
  lang,
  copy,
}: {
  results: CompanyRecord[];
  lang: 'en' | 'ar' | 'fr';
  copy: Copy;
}) {
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    let active = true;

    async function readSession() {
      const session = await supabase?.auth.getSession();
      if (active) {
        setIsMember(Boolean(session?.data.session?.user));
      }
    }

    readSession();

    const subscription = supabase?.auth.onAuthStateChange((_event, session) => {
      setIsMember(Boolean(session?.user));
    });

    return () => {
      active = false;
      subscription?.data.subscription.unsubscribe();
    };
  }, []);

  const visibleResults = useMemo(
    () => (isMember ? results : results.slice(0, 50)),
    [isMember, results],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.4rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_44px_rgba(7,22,38,0.05)]">
        <div className="text-sm font-semibold text-slate-600">
          {isMember ? copy.unlimited : copy.guestLimit}
        </div>
        {!isMember ? (
          <Link href="/login" className="rounded-full bg-brand-ink px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
            {copy.loginForUnlimited}
          </Link>
        ) : null}
      </div>

      <div className="grid max-w-5xl grid-cols-1 gap-4">
        {visibleResults.map((biz) => (
          <Link key={biz.id} href={`/business/${biz.id}`} className="group flex flex-col items-center justify-between rounded-[2rem] border border-slate-100 bg-white p-6 transition-all hover:border-brand-blue/30 hover:shadow-[0_20px_48px_rgba(18,80,214,0.12)] md:flex-row">
            <div className="flex w-full items-center gap-6 md:w-auto">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-300 transition-colors group-hover:bg-brand-blue/5 group-hover:text-brand-blue">
                <Building2 size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-brand-ink transition-colors group-hover:text-brand-blue">{biz.name}</h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {biz.location[lang]}</span>
                  <span>•</span>
                  <span>{biz.industry[lang]}</span>
                </div>
                <p className="text-xs text-slate-500">
                  {copy.coverage}: {biz.sources.join(' • ')}
                </p>
              </div>
            </div>

            <div className="mt-6 flex w-full items-center justify-between gap-8 border-t border-slate-100 pt-6 md:mt-0 md:w-auto md:border-t-0 md:pt-0">
              <div className="flex flex-col items-center gap-1">
                <span className={`text-lg font-black ${biz.score >= 80 ? 'text-emerald-500' : biz.score >= 50 ? 'text-amber-500' : 'text-red-500'}`}>{biz.score}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">{copy.trustScore}</span>
              </div>
              <VerificationBadge status={biz.status} />
              <ChevronRight className="hidden text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-blue md:block" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
