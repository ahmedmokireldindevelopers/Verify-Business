'use client';

import {useLocale} from 'next-intl';
import {CountryFlag, FlagBadge, type CountryFlagId} from './PlatformIcon';

const countries = [
  {flagId: 'sa' as CountryFlagId, name: 'Saudi Arabia', nameAr: 'السعودية', nameFr: 'Arabie saoudite'},
  {flagId: 'ae' as CountryFlagId, name: 'UAE', nameAr: 'الإمارات', nameFr: 'EAU'},
  {flagId: 'eg' as CountryFlagId, name: 'Egypt', nameAr: 'مصر', nameFr: 'Égypte'},
  {flagId: 'qa' as CountryFlagId, name: 'Qatar', nameAr: 'قطر', nameFr: 'Qatar'},
  {flagId: 'kw' as CountryFlagId, name: 'Kuwait', nameAr: 'الكويت', nameFr: 'Koweït'},
  {flagId: 'bh' as CountryFlagId, name: 'Bahrain', nameAr: 'البحرين', nameFr: 'Bahreïn'},
  {flagId: 'om' as CountryFlagId, name: 'Oman', nameAr: 'عُمان', nameFr: 'Oman'},
  {flagId: 'jo' as CountryFlagId, name: 'Jordan', nameAr: 'الأردن', nameFr: 'Jordanie'},
  {flagId: 'lb' as CountryFlagId, name: 'Lebanon', nameAr: 'لبنان', nameFr: 'Liban'},
  {flagId: 'iq' as CountryFlagId, name: 'Iraq', nameAr: 'العراق', nameFr: 'Irak'},
  {flagId: 'ma' as CountryFlagId, name: 'Morocco', nameAr: 'المغرب', nameFr: 'Maroc'},
  {flagId: 'tn' as CountryFlagId, name: 'Tunisia', nameAr: 'تونس', nameFr: 'Tunisie'},
  {flagId: 'dz' as CountryFlagId, name: 'Algeria', nameAr: 'الجزائر', nameFr: 'Algérie'},
  {flagId: 'ng' as CountryFlagId, name: 'Nigeria', nameAr: 'نيجيريا', nameFr: 'Nigeria'},
  {flagId: 'za' as CountryFlagId, name: 'South Africa', nameAr: 'جنوب أفريقيا', nameFr: 'Afrique du Sud'},
  {flagId: 'ke' as CountryFlagId, name: 'Kenya', nameAr: 'كينيا', nameFr: 'Kenya'},
  {flagId: 'gb' as CountryFlagId, name: 'United Kingdom', nameAr: 'المملكة المتحدة', nameFr: 'Royaume-Uni'},
  {flagId: 'us' as CountryFlagId, name: 'United States', nameAr: 'الولايات المتحدة', nameFr: 'États-Unis'},
  {flagId: 'ca' as CountryFlagId, name: 'Canada', nameAr: 'كندا', nameFr: 'Canada'},
];

const titles = {
  en: 'Countries and markets we support',
  ar: 'الدول والأسواق التي ندعمها',
  fr: 'Pays et marchés pris en charge',
};

export default function CountryMarquee() {
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const items = [...countries, ...countries];

  const getName = (country: (typeof countries)[number]) => {
    if (locale === 'ar') return country.nameAr;
    if (locale === 'fr') return country.nameFr;
    return country.name;
  };

  return (
    <section className="border-y border-brand-gold/10 bg-[linear-gradient(180deg,rgba(7,22,38,0.04),rgba(255,255,255,1))] py-10 overflow-hidden">
      <div className="container mx-auto mb-6 px-4">
        <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-brand-royal">
          {titles[locale as 'en' | 'ar' | 'fr'] ?? titles.en}
        </p>
      </div>
      <div className="relative">
        <div
          className={`flex gap-5 whitespace-nowrap ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}
          style={{width: 'max-content'}}
        >
          {items.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="flex items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_44px_rgba(7,22,38,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FlagBadge className="border-slate-200 bg-slate-50 p-1 shadow-none backdrop-blur-0">
                <CountryFlag country={country.flagId} className="h-full w-full rounded-xl" />
              </FlagBadge>
              <span className="text-xs font-bold tracking-[0.08em] text-slate-700">{getName(country)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
