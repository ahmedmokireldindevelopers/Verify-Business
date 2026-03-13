'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Check} from 'lucide-react';
import {useTranslations} from 'next-intl';

export default function PricingPage() {
  const t = useTranslations('Pricing');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 pb-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t('title')}</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Package - $350 */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('starter_name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-extrabold text-brand-green">{t('starter_price')}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{t('one_time')}</p>
              <p className="text-sm text-slate-600 mb-8">{t('starter_desc')}</p>
              <button className="w-full py-4 rounded-2xl font-bold transition-all mb-8 bg-slate-100 text-slate-900 hover:bg-slate-200">
                {t('get_started')}
              </button>
              <div className="space-y-4">
                {[t('starter_f1'), t('starter_f2'), t('starter_f3'), t('starter_f4'), t('starter_f5')].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-brand-green/10 text-brand-green p-0.5 rounded-full"><Check size={14} /></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Package - $750 */}
            <div className="relative p-8 rounded-3xl bg-white border border-brand-green ring-4 ring-brand-green/10 shadow-2xl scale-[1.02] z-10 transition-all">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {t('popular')}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('pro_name')}</h3>
              <div className="mb-4">
                <span className="text-5xl font-extrabold text-brand-green">{t('pro_price')}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{t('one_time')}</p>
              <p className="text-sm text-slate-600 mb-8">{t('pro_desc')}</p>
              <button className="w-full py-4 rounded-2xl font-bold transition-all mb-8 bg-brand-green text-white hover:bg-emerald-600 shadow-lg">
                {t('get_started')}
              </button>
              <div className="space-y-4">
                {[t('pro_f1'), t('pro_f2'), t('pro_f3'), t('pro_f4'), t('pro_f5'), t('pro_f6')].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-brand-green/10 text-brand-green p-0.5 rounded-full"><Check size={14} /></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
