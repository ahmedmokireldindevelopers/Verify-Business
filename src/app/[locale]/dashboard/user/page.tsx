import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {User, Bell, Bookmark, FileText, Settings, LogOut} from 'lucide-react';
import VerificationBadge from '@/components/VerificationBadge';
import {resolveLocale, userDashboardCopy} from '@/content/siteContent';

export default async function UserDashboard(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  const copy = userDashboardCopy[resolveLocale(locale)];
  const sidebarIcons = [User, Bookmark, Bell, FileText, Settings, LogOut];
  const savedBusinesses = [
    {id: 1, name: 'Global Tech Solutions', status: 'verified' as const, location: locale === 'ar' ? 'الولايات المتحدة' : locale === 'fr' ? 'États-Unis' : 'USA'},
    {id: 2, name: 'Secure Systems Inc', status: 'pending' as const, location: locale === 'ar' ? 'المملكة المتحدة' : locale === 'fr' ? 'Royaume-Uni' : 'UK'},
    {id: 3, name: 'Fast Logistics', status: 'verified' as const, location: locale === 'ar' ? 'الإمارات' : locale === 'fr' ? 'EAU' : 'UAE'},
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="container mx-auto flex-grow px-4 py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <aside className="w-full space-y-2 md:w-64">
            {copy.sidebar.map((label, index) => {
              const Icon = sidebarIcons[index];
              const active = index === 0;

              return (
                <button
                  key={label}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    active ? 'bg-brand-blue text-white shadow-lg' : `${index === copy.sidebar.length - 1 ? 'text-red-500' : 'text-slate-600'} hover:bg-white hover:shadow-sm`
                  }`}
                >
                  <Icon size={18} /> {label}
                </button>
              );
            })}
          </aside>

          <main className="flex-grow space-y-8">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <h1 className="mb-2 text-3xl font-black text-brand-ink">{copy.title}</h1>
              <p className="text-slate-500">{copy.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-black text-brand-ink">{copy.saved}</h2>
                  <button className="text-xs font-bold uppercase text-brand-blue">{copy.viewAll}</button>
                </div>
                <div className="space-y-4">
                  {savedBusinesses.map((biz) => (
                    <div key={biz.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div>
                        <p className="text-sm font-bold text-brand-ink">{biz.name}</p>
                        <p className="text-[10px] font-bold uppercase text-slate-400">{biz.location}</p>
                      </div>
                      <VerificationBadge status={biz.status} showIcon={false} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-lg font-black text-brand-ink">{copy.notifications}</h2>
                <div className="space-y-4">
                  {copy.notificationItems.map((item, index) => (
                    <div key={item.title} className={`flex gap-4 rounded-2xl border p-4 ${index === 0 ? 'border-brand-blue/10 bg-brand-blue/5' : 'border-slate-100 bg-slate-50 opacity-70'}`}>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${index === 0 ? 'bg-brand-blue text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {index === 0 ? '!' : '✓'}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">{item.title}</p>
                        <p className="text-xs text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
