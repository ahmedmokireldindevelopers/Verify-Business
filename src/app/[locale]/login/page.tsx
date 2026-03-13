'use client';

import {useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ShieldCheck, Mail, Lock, ArrowRight} from 'lucide-react';
import {Link, useRouter} from '@/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {supabase} from '@/lib/supabase';

const loginStateText = {
  en: {
    loading: 'Signing you in...',
    error: 'Login failed. Check email/password and confirm your account.',
  },
  ar: {
    loading: 'جارٍ تسجيل الدخول...',
    error: 'فشل تسجيل الدخول. تحقق من البريد وكلمة المرور وتأكيد الحساب.',
  },
  fr: {
    loading: 'Connexion en cours...',
    error: 'Échec de connexion. Vérifiez vos identifiants et confirmez le compte.',
  },
};

export default function LoginPage() {
  const t = useTranslations('Auth');
  const locale = useLocale() as 'en' | 'ar' | 'fr';
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured');
      }

      const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.push('/dashboard/user');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-slate-50">
        <div className="w-full max-w-md px-4">
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h1 className="text-3xl font-black text-slate-900 border-none m-0 p-0">{t('login_title')}</h1>
              <p className="text-slate-500 mt-2">{t('login_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('email')}</label>
                <div className="relative">
                  <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="name@company.com" />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-slate-700">{t('password')}</label>
                  <Link href="/forgot" className="text-xs font-bold text-brand-blue hover:underline">{t('forgot_password')}</Link>
                </div>
                <div className="relative">
                  <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="••••••••" />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <button disabled={status === 'loading'} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70">
                {t('login_button')} <ArrowRight size={18} />
              </button>

              {status !== 'idle' ? (
                <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-brand-blue'}`}>
                  {status === 'loading' ? loginStateText[locale].loading : loginStateText[locale].error}
                </p>
              ) : null}
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-slate-500">{t('no_account')} </span>
              <Link href="/signup" className="font-bold text-brand-blue hover:underline">{t('signup_free')}</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
