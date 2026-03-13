import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PlatformMarquee from '@/components/PlatformMarquee';
import CountryMarquee from '@/components/CountryMarquee';
import MiddleEastCompanyStrip from '@/components/MiddleEastCompanyStrip';
import {CountryFlag, FlagBadge, type CountryFlagId} from '@/components/PlatformIcon';
import {getTranslations} from 'next-intl/server';
import {ShieldCheck, Fingerprint, Building2, MessageCircle, SearchCheck, Star} from 'lucide-react';

export default async function Home() {
  const ft = await getTranslations('Features');
  const st = await getTranslations('Services');

  const featureCards = [
    {
      title: ft('verification_title'),
      text: ft('verification_desc'),
      icon: <ShieldCheck size={28} />,
      tone: 'bg-brand-gold/15 text-brand-gold',
    },
    {
      title: ft('brand_title'),
      text: ft('brand_desc'),
      icon: <Fingerprint size={28} />,
      tone: 'bg-brand-blue/12 text-brand-blue',
    },
    {
      title: ft('company_title'),
      text: ft('company_desc'),
      icon: <Building2 size={28} />,
      tone: 'bg-brand-green/12 text-brand-green',
    },
    {
      title: ft('whatsapp_title'),
      text: ft('whatsapp_desc'),
      icon: <MessageCircle size={28} />,
      tone: 'bg-emerald-500/12 text-emerald-600',
    },
    {
      title: ft('fraud_title'),
      text: ft('fraud_desc'),
      icon: <SearchCheck size={28} />,
      tone: 'bg-red-500/10 text-red-500',
    },
    {
      title: ft('trust_title'),
      text: ft('trust_desc'),
      icon: <Star size={28} />,
      tone: 'bg-brand-gold/15 text-brand-gold',
    },
  ];

  const regions = [
    {key: 'middle_east', flag: 'ae' as CountryFlagId, chips: ['sa', 'qa', 'bh'] as CountryFlagId[], stat: '12 markets'},
    {key: 'usa', flag: 'us' as CountryFlagId, chips: ['us', 'ca'] as CountryFlagId[], stat: '50 states'},
    {key: 'canada', flag: 'ca' as CountryFlagId, chips: ['ca', 'gb'] as CountryFlagId[], stat: 'Federal + provincial'},
    {key: 'uk', flag: 'gb' as CountryFlagId, chips: ['gb', 'eu'] as CountryFlagId[], stat: 'Fast-track setup'},
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PlatformMarquee />

        <section className="bg-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-black text-brand-ink md:text-4xl">{ft('title')}</h2>
            <p className="mx-auto mb-16 max-w-3xl text-slate-500">{ft('verification_desc')}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-8 text-left shadow-[0_22px_50px_rgba(7,22,38,0.06)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${card.tone}`}>
                    {card.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-black text-brand-ink">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CountryMarquee />

        <section className="bg-[linear-gradient(180deg,#071626_0%,#0b2140_100%)] py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-black md:text-4xl">{st('title')}</h2>
              <p className="mx-auto max-w-2xl text-slate-300">{st('subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {regions.map((region) => (
                <div
                  key={region.key}
                  className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm ${
                    region.key === 'middle_east' ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <FlagBadge className="bg-white/14 p-1">
                        <CountryFlag country={region.flag} className="h-full w-full rounded-xl" />
                      </FlagBadge>
                      <div>
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-brand-gold/80">
                          {region.stat}
                        </p>
                        <h3 className={`${region.key === 'middle_east' ? 'text-[2rem]' : 'text-[1.8rem]'} font-black leading-none`}>
                          {st(region.key)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {region.chips.map((chip) => (
                        <span key={chip} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 p-1 shadow-[0_10px_18px_rgba(0,0,0,0.14)]">
                          <CountryFlag country={chip} className="h-full w-full rounded-full" />
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className={`text-sm leading-7 text-slate-300 ${region.key === 'middle_east' ? 'max-w-xl' : ''}`}>
                    {st(`${region.key}_desc`)}
                  </p>

                  {region.key === 'middle_east' ? (
                    <MiddleEastCompanyStrip />
                  ) : (
                    <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-white/6 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">
                          Coverage
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                          Active
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {region.chips.map((chip) => (
                          <div key={`${region.key}-${chip}`} className="rounded-[1rem] border border-white/8 bg-white/8 p-3">
                            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 p-1">
                              <CountryFlag country={chip} className="h-full w-full rounded-full" />
                            </div>
                            <div className="h-1.5 rounded-full bg-white/8">
                              <div className="h-1.5 w-[72%] rounded-full bg-gradient-to-r from-brand-gold to-brand-blue" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
