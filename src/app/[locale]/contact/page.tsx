'use client';

import {useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Mail, Globe, MapPin, Send} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';
import {contactInfoCopy, resolveLocale} from '@/content/siteContent';
import {supabase} from '@/lib/supabase';

const submissionText = {
  en: {
    idle: '',
    sending: 'Sending your request...',
    success: 'Your message was sent successfully.',
    error: 'The request could not be completed. Verify the Supabase table and policies.',
  },
  ar: {
    idle: '',
    sending: 'جارٍ إرسال طلبك...',
    success: 'تم إرسال رسالتك بنجاح.',
    error: 'تعذر إكمال الإرسال. تأكد من إنشاء جدول Supabase وسياسات الإدخال.',
  },
  fr: {
    idle: '',
    sending: 'Envoi de votre demande...',
    success: 'Votre message a été envoyé avec succès.',
    error: 'Impossible d’envoyer la demande. Vérifiez la table Supabase et les policies.',
  },
};

export default function ContactPage() {
  const t = useTranslations('Contact');
  const locale = resolveLocale(useLocale());
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    business_name: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = event.target;
    setForm((current) => ({...current, [name]: value}));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      if (!supabase) {
        throw new Error('Supabase client is not configured');
      }

      const {error} = await supabase.from('contact_messages').insert([
        {
          ...form,
          locale,
        },
      ]);

      if (error) {
        throw error;
      }

      setForm({
        name: '',
        email: '',
        subject: '',
        business_name: '',
        message: '',
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 pb-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t('title')}</h1>
              <p className="text-lg text-slate-600">{t('subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{t('info_title')}</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{t('email')}</p>
                        <a href="mailto:info@VerifyBusiness.online" className="text-slate-600 hover:text-brand-blue transition-colors text-sm">
                          info@VerifyBusiness.online
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                        <Globe size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{contactInfoCopy.website[locale]}</p>
                        <a href="https://VerifyBusiness.online" className="text-slate-600 hover:text-brand-blue transition-colors text-sm">
                          VerifyBusiness.online
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{contactInfoCopy.headquarters[locale]}</p>
                        <p className="text-slate-600 text-sm">{contactInfoCopy.headquartersValue[locale]}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-brand-blue rounded-3xl text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">{t('support_hours')}</h3>
                  <p className="text-sm text-slate-200 mb-4">{t('hours_detail')}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('name')}</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('email')}</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('subject')}</label>
                    <input name="subject" value={form.subject} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('business_name')}</label>
                    <input name="business_name" value={form.business_name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('message')}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all"></textarea>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <button disabled={status === 'sending'} type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2">
                      <Send size={18} />
                      {t('send')}
                    </button>
                    {status !== 'idle' ? (
                      <p className={`text-sm font-medium ${status === 'success' ? 'text-emerald-600' : status === 'error' ? 'text-red-500' : 'text-brand-blue'}`}>
                        {submissionText[locale][status]}
                      </p>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
