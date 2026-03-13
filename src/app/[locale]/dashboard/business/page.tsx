import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {LayoutDashboard, Building2, FileUp, LineChart, MessageSquare, Shield} from 'lucide-react';
import TrustScore from '@/components/TrustScore';
import VerificationBadge from '@/components/VerificationBadge';
import {businessDashboardCopy, resolveLocale} from '@/content/siteContent';

export default async function BusinessDashboard(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  const copy = businessDashboardCopy[resolveLocale(locale)];
  const sidebarIcons = [LayoutDashboard, Building2, FileUp, LineChart, MessageSquare, Shield];

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
                    active ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <Icon size={18} /> {label}
                </button>
              );
            })}
          </aside>

          <main className="flex-grow space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex items-center justify-between rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm md:col-span-2">
                <div>
                  <h1 className="mb-2 text-3xl font-black text-brand-ink">{copy.company}</h1>
                  <p className="mb-4 text-slate-500">{copy.verificationId}: VB-8829-XQ</p>
                  <VerificationBadge status="verified" />
                </div>
                <TrustScore score={94} />
              </div>

              <div className="flex flex-col justify-between rounded-[2rem] bg-[linear-gradient(135deg,#1250d6_0%,#071626_100%)] p-8 text-white shadow-xl">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">{copy.visits}</p>
                  <p className="text-4xl font-black">1,280</p>
                </div>
                <p className="mt-4 text-xs text-slate-200">{copy.visitsTrend}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="mb-8 flex items-center gap-3 text-xl font-black text-brand-ink">
                <FileUp className="text-brand-blue" />
                {copy.documentsTitle}
              </h2>
              <div className="space-y-4">
                {copy.docs.map((doc, index) => (
                  <div key={doc.name} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-400"><FileUp size={20} /></div>
                      <div>
                        <p className="text-sm font-bold text-brand-ink">{doc.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{copy.lastUploaded}: {doc.date}</p>
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${index === 2 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
                <button className="w-full rounded-2xl border-2 border-dashed border-slate-200 py-4 font-bold text-slate-400 transition-all hover:border-brand-blue/30 hover:bg-slate-50">
                  {copy.upload}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
