'use client';

import {useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {User, Mail, Lock, CheckCircle2} from 'lucide-react';
import {Link, useRouter} from '@/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {supabase} from '@/lib/supabase';

const signupStateText = {
  en: {
    loading: 'Creating your account...',
    success: 'Account created. Check your email if confirmation is enabled, then sign in.',
    error: 'Signup failed. Try another email or review Supabase auth settings.',
  },
  ar: {
    loading: 'جارٍ إنشاء الحساب...',
    success: 'تم إنشاء الحساب. تحقق من بريدك إذا كان التفعيل بالبريد مفعلًا ثم سجّل الدخول.',
    error: 'فشل إنشاء الحساب. جرّب بريداً آخر أو راجع إعدادات Supabase.',
  },
  fr: {
    loading: 'Création du compte...',
    success: 'Compte créé. Vérifiez votre email si la confirmation est active puis connectez-vous.',
    error: 'Échec de création du compte. Essayez un autre email ou vérifiez la configuration Supabase.',
  },
};

export default function SignUpPage() {
  const t = useTranslations('Auth');
  const locale = useLocale() as 'en' | 'ar' | 'fr';
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured');
      }

      const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (data.session?.user) {
        router.push('/dashboard/user');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-slate-50">
        <div className="w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block space-y-8 pr-12">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">{t('join_title')}</h2>
            <p className="text-slate-600 text-lg">{t('join_subtitle')}</p>
            <ul className="space-y-4">
              {[t('benefit_1'), t('benefit_2'), t('benefit_3'), t('benefit_4')].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full"><CheckCircle2 size={16} /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-black text-slate-900 border-none m-0 p-0">{t('signup_title')}</h1>
              <p className="text-slate-500 mt-2">{t('signup_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('full_name')}</label>
                <div className="relative">
                  <input value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('email')}</label>
                <div className="relative">
                  <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('password')}</label>
                <div className="relative">
                  <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="••••••••" />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1 py-4">
                <input type="checkbox" className="rounded-md" required />
                <span className="text-xs text-slate-500">{t('agree_terms')} <Link href="/terms" className="text-brand-blue font-bold">{t('terms_link')}</Link> {t('and')} <Link href="/privacy" className="text-brand-blue font-bold">{t('privacy_link')}</Link></span>
              </div>

              <button disabled={status === 'loading'} className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 disabled:opacity-70">
                {t('signup_button')}
              </button>

              {status !== 'idle' ? (
                <p className={`text-sm ${status === 'error' ? 'text-red-500' : status === 'success' ? 'text-emerald-600' : 'text-brand-blue'}`}>
                  {signupStateText[locale][status]}
                </p>
              ) : null}
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-slate-500">{t('has_account')} </span>
              <Link href="/login" className="font-bold text-brand-blue hover:underline">{t('login_link')}</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
