'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';
import {ShieldCheck, Mail, Globe} from 'lucide-react';
import {PlatformIcon} from './PlatformIcon';

export default function Footer() {
  const t = useTranslations('Footer');
  const ct = useTranslations('Common');

  const socialLinks = [
    {href: '/', label: 'Facebook', icon: 'facebook' as const},
    {href: '/', label: 'Instagram', icon: 'instagram' as const},
    {href: '/', label: 'LinkedIn', icon: 'linkedin' as const},
    {href: '/', label: 'X', icon: 'x' as const},
  ];

  return (
    <footer className="bg-[linear-gradient(180deg,#071626_0%,#04111e_100%)] py-16 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold to-brand-royal">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <span className="text-xl font-black text-white">
                Verify<span className="text-brand-gold">Business</span>
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">{t('about')}</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:info@VerifyBusiness.online" className="transition-colors hover:text-white">
                  {t('email')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-brand-gold" />
                <a href="https://VerifyBusiness.online" className="transition-colors hover:text-white">
                  VerifyBusiness.online
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-white">{t('legal')}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="transition-colors hover:text-brand-gold">{t('privacy')}</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-brand-gold">{t('terms')}</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-brand-gold">{t('cookies')}</Link></li>
              <li><Link href="/disclaimer" className="transition-colors hover:text-brand-gold">{t('disclaimer')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-white">{ct('about')}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/how-it-works" className="transition-colors hover:text-brand-gold">{ct('howItWorks')}</Link></li>
              <li><Link href="/features" className="transition-colors hover:text-brand-gold">{ct('features')}</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-brand-gold">{ct('pricing')}</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-brand-gold">{ct('about')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-white">{t('contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/contact" className="transition-colors hover:text-brand-gold">{ct('contact')}</Link></li>
              <li><Link href="/login" className="transition-colors hover:text-brand-gold">{ct('login')}</Link></li>
              <li><Link href="/signup" className="transition-colors hover:text-brand-gold">{ct('signup')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} VerifyBusiness. {t('rights')}</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-brand-gold/30 hover:bg-white/10 hover:text-white"
              >
                <PlatformIcon platform={item.icon} className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
