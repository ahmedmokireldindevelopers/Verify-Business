'use client';

import {useLocale} from 'next-intl';
import {PlatformIcon, type PlatformId} from './PlatformIcon';

const platformTitle = {
  en: 'Platforms we support and verify',
  ar: 'المنصات التي ندعمها ونعمل على توثيقها',
  fr: 'Plateformes prises en charge et vérifiées',
};

const verifiedLabel = {
  en: 'verified',
  ar: 'موثقة',
  fr: 'vérifiée',
};

const platforms: Array<{id: PlatformId; name: string; accent: string}> = [
  {id: 'facebook', name: 'Facebook', accent: 'from-[#1877F2] to-[#2D8CFF]'},
  {id: 'instagram', name: 'Instagram', accent: 'from-[#F58529] via-[#DD2A7B] to-[#515BD4]'},
  {id: 'tiktok', name: 'TikTok', accent: 'from-[#111111] to-[#323232]'},
  {id: 'snapchat', name: 'Snapchat', accent: 'from-[#FFFC00] to-[#F4D000]'},
  {id: 'whatsapp', name: 'WhatsApp', accent: 'from-[#25D366] to-[#128C7E]'},
  {id: 'x', name: 'X', accent: 'from-[#111111] to-[#2B2B2B]'},
  {id: 'google', name: 'Google', accent: 'from-[#ffffff] to-[#F3F4F6]'},
  {id: 'youtube', name: 'YouTube', accent: 'from-[#FF0000] to-[#C00000]'},
  {id: 'linkedin', name: 'LinkedIn', accent: 'from-[#0A66C2] to-[#004182]'},
  {id: 'telegram', name: 'Telegram', accent: 'from-[#24A1DE] to-[#1577A8]'},
  {id: 'pinterest', name: 'Pinterest', accent: 'from-[#E60023] to-[#A7001A]'},
  {id: 'threads', name: 'Threads', accent: 'from-[#111111] to-[#3B3B3B]'},
];

export default function PlatformMarquee() {
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const items = [...platforms, ...platforms];

  return (
    <section className="border-y border-white/8 bg-[linear-gradient(135deg,#071626_0%,#0d2442_48%,#0a1d35_100%)] py-10 overflow-hidden">
      <div className="container mx-auto mb-6 px-4">
        <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-brand-gold/80">
          {platformTitle[locale as 'en' | 'ar' | 'fr'] ?? platformTitle.en}
        </p>
      </div>
      <div className="relative">
        <div
          className={`flex gap-5 whitespace-nowrap ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}
          style={{width: 'max-content'}}
        >
          {items.map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="group flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/6 px-5 py-3 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.accent} shadow-[0_14px_32px_rgba(0,0,0,0.25)]`}>
                <PlatformIcon platform={platform.id} className="h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">{platform.name}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  {verifiedLabel[locale as 'en' | 'ar' | 'fr'] ?? verifiedLabel.en}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
