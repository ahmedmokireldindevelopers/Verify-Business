import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ShieldCheck, Target, Users, Globe} from 'lucide-react';
import {aboutPageCopy, resolveLocale} from '@/content/siteContent';

export default async function AboutPage(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  const copy = aboutPageCopy[resolveLocale(locale)];
  const icons = [ShieldCheck, Target, Users];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[linear-gradient(180deg,#071626_0%,#0b2140_100%)] px-4 pb-20 pt-24 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-4xl font-black tracking-tight md:text-6xl">{copy.heroTitle}</h1>
            <p className="text-xl leading-relaxed text-slate-200">{copy.heroText}</p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <p className="mb-10 text-center text-xs font-black uppercase tracking-[0.28em] text-brand-royal">{copy.valueLabel}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {copy.values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <div key={value.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_44px_rgba(7,22,38,0.05)]">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Icon size={28} />
                    </div>
                    <h2 className="mb-4 text-2xl font-black text-brand-ink">{value.title}</h2>
                    <p className="leading-relaxed text-slate-600">{value.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#071626_0%,#0b2140_100%)] py-24 text-white">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-brand-gold px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-brand-ink">
                {copy.reachLabel}
              </div>
              <h2 className="text-4xl font-black leading-tight">{copy.reachTitle}</h2>
              <p className="text-lg leading-relaxed text-slate-300">{copy.reachText}</p>
              <div className="grid grid-cols-2 gap-6">
                {copy.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-4xl font-black text-brand-gold">{metric.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-3">
                <Globe className="text-brand-gold" size={24} />
                <span className="font-black">{copy.registryTitle}</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-300">{copy.registryText}</p>
              <div className="space-y-4">
                {copy.registry.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div>
                      <p className="text-sm font-black">{item.name}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">{item.location}</p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
