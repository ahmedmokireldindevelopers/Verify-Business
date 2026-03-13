import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VerificationBadge from '@/components/VerificationBadge';
import TrustScore from '@/components/TrustScore';
import {Globe, Mail, Phone, MapPin, Calendar, FileText, Share2, Flag, CheckCircle2} from 'lucide-react';
import {notFound} from 'next/navigation';
import {getCompanyById} from '@/data/companyDirectory';
import {resolveLocale} from '@/content/siteContent';

const pageCopy = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbSearch: 'Search',
    founded: 'Founded',
    about: 'About the company',
    contact: 'Contact details',
    sector: 'Business sector',
    documents: 'Verified documents',
    view: 'View',
    share: 'Share profile',
    report: 'Report business',
    claim: 'Claim this profile',
    premiumTitle: 'Premium verification',
    premiumText: 'This business has passed our highest verification tier, including ownership review and document authenticity checks.',
  },
  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbSearch: 'البحث',
    founded: 'تأسست',
    about: 'عن الشركة',
    contact: 'بيانات التواصل',
    sector: 'قطاع الشركة',
    documents: 'المستندات الموثقة',
    view: 'عرض',
    share: 'مشاركة الملف',
    report: 'الإبلاغ عن شركة',
    claim: 'امتلاك هذا الملف',
    premiumTitle: 'توثيق مميز',
    premiumText: 'اجتازت هذه الشركة أعلى مستوى من التحقق لدينا، بما في ذلك مراجعة الملكية وفحص أصالة المستندات.',
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbSearch: 'Recherche',
    founded: 'Fondée en',
    about: 'À propos de l’entreprise',
    contact: 'Coordonnées',
    sector: 'Secteur d’activité',
    documents: 'Documents vérifiés',
    view: 'Voir',
    share: 'Partager le profil',
    report: 'Signaler l’entreprise',
    claim: 'Revendiquer ce profil',
    premiumTitle: 'Vérification premium',
    premiumText: 'Cette entreprise a passé notre niveau de vérification le plus élevé, y compris la revue de propriété et l’authenticité documentaire.',
  },
};

export default async function BusinessProfile(props: {
  params: Promise<{id: string; locale: string}>;
}) {
  const {id, locale} = await props.params;
  const lang = resolveLocale(locale);
  const copy = pageCopy[lang];
  const business = await getCompanyById(id);

  if (!business) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-slate-50 pb-24 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            <span>{copy.breadcrumbHome}</span>
            <span>/</span>
            <span>{copy.breadcrumbSearch}</span>
            <span>/</span>
            <span className="text-slate-600">{business.name}</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_22px_50px_rgba(7,22,38,0.06)] md:p-12">
                <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <VerificationBadge status={business.status} />
                      <span className="text-sm font-medium text-slate-400">ID: {business.id}</span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-brand-ink md:text-5xl">{business.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5"><MapPin size={16} /> {business.location[lang]}</div>
                      <div className="flex items-center gap-1.5"><Calendar size={16} /> {copy.founded} {business.founded}</div>
                    </div>
                  </div>
                  <TrustScore score={business.score} />
                </div>

                <div className="mb-12">
                  <h2 className="mb-4 text-xl font-black text-brand-ink">{copy.about}</h2>
                  <p className="text-lg leading-relaxed text-slate-600">{business.description[lang]}</p>
                </div>

                <div className="grid grid-cols-1 gap-12 border-t border-slate-100 pt-12 md:grid-cols-2">
                  <div>
                    <h2 className="mb-6 text-lg font-black text-brand-ink">{copy.contact}</h2>
                    <div className="space-y-4">
                      <a href={business.website} className="group flex items-center gap-4 text-slate-600 transition-colors hover:text-brand-blue">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-brand-blue/10 group-hover:text-brand-blue"><Globe size={18} /></div>
                        <span className="font-medium">{business.website.replace('https://', '')}</span>
                      </a>
                      <a href={`mailto:${business.email}`} className="group flex items-center gap-4 text-slate-600 transition-colors hover:text-brand-blue">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-brand-blue/10 group-hover:text-brand-blue"><Mail size={18} /></div>
                        <span className="font-medium">{business.email}</span>
                      </a>
                      <div className="flex items-center gap-4 text-slate-600">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400"><Phone size={18} /></div>
                        <span className="font-medium">{business.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="mb-6 text-lg font-black text-brand-ink">{copy.sector}</h2>
                    <div className="inline-block rounded-full bg-slate-100 px-6 py-2 text-sm font-bold text-slate-700">
                      {business.sector[lang]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_22px_50px_rgba(7,22,38,0.06)] md:p-12">
                <h2 className="mb-8 flex items-center gap-3 text-xl font-black text-brand-ink">
                  <FileText className="text-brand-blue" />
                  {copy.documents}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {business.documents.map((doc) => (
                    <div key={doc.name.en} className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-brand-blue/30">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm transition-transform group-hover:scale-110"><FileText size={20} /></div>
                        <div>
                          <p className="text-sm font-bold text-brand-ink">{doc.name[lang]}</p>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{doc.type} • {doc.date[lang]}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-brand-blue">{copy.view}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_22px_50px_rgba(7,22,38,0.06)]">
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#1250d6_0%,#071626_100%)] py-4 font-black text-white">
                  <Share2 size={18} /> {copy.share}
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 py-4 font-black text-slate-700">
                  <Flag size={18} className="text-red-500" /> {copy.report}
                </button>
                <button className="w-full rounded-2xl bg-brand-ink py-4 font-black text-white">
                  {copy.claim}
                </button>
              </div>

              <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-black text-emerald-900">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  {copy.premiumTitle}
                </h3>
                <p className="text-xs leading-relaxed text-emerald-700">{copy.premiumText}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
