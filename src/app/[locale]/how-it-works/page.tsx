import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Search, ShieldCheck, TrendingUp, CheckCircle} from 'lucide-react';
import {howItWorksCopy, resolveLocale} from '@/content/siteContent';

export default async function HowItWorks(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  const copy = howItWorksCopy[resolveLocale(locale)];
  const icons = [Search, ShieldCheck, TrendingUp, CheckCircle];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-white pb-24 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-brand-royal">{copy.stepsLabel}</p>
            <h1 className="mb-6 text-4xl font-black text-brand-ink md:text-5xl">{copy.title}</h1>
            <p className="text-lg text-slate-600">{copy.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-[0_20px_44px_rgba(7,22,38,0.05)]">
                  <div className="mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.5rem] bg-brand-blue text-white">
                    <Icon size={30} />
                  </div>
                  <div className="mb-4 inline-block rounded-full bg-brand-gold/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold">
                    {copy.stepLabel} 0{index + 1}
                  </div>
                  <h2 className="mb-4 text-xl font-black text-brand-ink">{step.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative mt-20 overflow-hidden rounded-[2.8rem] bg-[linear-gradient(135deg,#071626_0%,#1250d6_100%)] px-8 py-14 text-center text-white md:px-16">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-6 text-3xl font-black">{copy.ctaTitle}</h2>
              <p className="mb-8 text-slate-200">{copy.ctaText}</p>
              <button className="rounded-full bg-brand-gold px-8 py-4 font-black text-brand-ink transition-transform duration-200 hover:-translate-y-0.5">
                {copy.ctaButton}
              </button>
            </div>
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-brand-gold/20 blur-[100px]" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
