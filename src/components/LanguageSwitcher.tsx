'use client';

import {startTransition} from 'react';
import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/navigation';
import {Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, {locale: newLocale});
    });
  };

  const languages = [
    {code: 'en', name: 'English'},
    {code: 'ar', name: 'العربية'},
    {code: 'fr', name: 'Français'},
  ];

  return (
    <div className="group relative">
      <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-white">
        <Globe size={18} />
        <span className="uppercase">{locale}</span>
      </button>
      <div className="invisible absolute right-0 z-50 mt-2 w-36 rounded-2xl border border-white/10 bg-brand-ink/95 p-1 opacity-0 shadow-[0_18px_42px_rgba(0,0,0,0.3)] transition-all group-hover:visible group-hover:opacity-100">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLocaleChange(lang.code)}
            className={`w-full rounded-xl px-4 py-2 text-sm transition-colors hover:bg-white/8 ${
              locale === lang.code ? 'bg-white/8 font-bold text-white' : 'text-slate-300'
            }`}
            style={{direction: lang.code === 'ar' ? 'rtl' : 'ltr'}}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
