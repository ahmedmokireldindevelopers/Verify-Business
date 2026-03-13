import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchResultsClient from '@/components/SearchResultsClient';
import {Search, Filter} from 'lucide-react';
import {Link} from '@/navigation';
import {resolveLocale} from '@/content/siteContent';
import {searchCompanies} from '@/data/companyDirectory';

const searchPageMeta = {
  en: {
    title: 'Search results',
    subtitle: (count: number, query: string) =>
      query ? `Found ${count} businesses matching "${query}".` : `Showing ${count} businesses from our company directory.`,
    suggestedSubtitle: (count: number, query: string) =>
      `No exact match for "${query}". Showing ${count} closest companies instead.`,
    trustScore: 'Trust Score',
    loadMore: 'Refine your search',
    noResults: 'No companies matched your search. Try the legal company name, registry number, domain, or LinkedIn page.',
    coverage: 'Sources',
    guestLimit: 'Guests can browse the first 50 results only.',
    unlimited: 'Signed-in members can browse unlimited results.',
    loginForUnlimited: 'Login for unlimited',
  },
  ar: {
    title: 'نتائج البحث',
    subtitle: (count: number, query: string) =>
      query ? `تم العثور على ${count} شركة مطابقة لعبارة "${query}".` : `نعرض ${count} شركة من دليل الشركات لدينا.`,
    suggestedSubtitle: (count: number, query: string) =>
      `لا توجد مطابقة دقيقة لعبارة "${query}". نعرض ${count} من أقرب الشركات بدلاً من ذلك.`,
    trustScore: 'مؤشر الثقة',
    loadMore: 'حسّن عملية البحث',
    noResults: 'لا توجد شركات مطابقة. جرّب الاسم القانوني للشركة أو رقم التسجيل أو النطاق أو صفحة LinkedIn.',
    coverage: 'المصادر',
    guestLimit: 'الزائر يمكنه تصفح أول 50 نتيجة فقط.',
    unlimited: 'المستخدم المسجل يمكنه تصفح عدد غير محدود من النتائج.',
    loginForUnlimited: 'سجل الدخول لعرض الكل',
  },
  fr: {
    title: 'Résultats de recherche',
    subtitle: (count: number, query: string) =>
      query ? `${count} entreprises correspondent à « ${query} ».` : `${count} entreprises issues de notre annuaire sont affichées.`,
    suggestedSubtitle: (count: number, query: string) =>
      `Aucune correspondance exacte pour « ${query} ». Voici ${count} entreprises proches.`,
    trustScore: 'Score de confiance',
    loadMore: 'Affiner la recherche',
    noResults: 'Aucune entreprise trouvée. Essayez la raison sociale, le numéro d’immatriculation, le domaine ou la page LinkedIn.',
    coverage: 'Sources',
    guestLimit: 'Les visiteurs peuvent voir uniquement les 50 premiers résultats.',
    unlimited: 'Les membres connectés ont un accès illimité.',
    loginForUnlimited: 'Connexion illimitée',
  },
};

export default async function SearchResults(props: {
  params: Promise<{locale: string}>;
  searchParams?: Promise<{q?: string}>;
}) {
  const {locale} = await props.params;
  const query = (await props.searchParams)?.q?.trim() ?? '';
  const lang = resolveLocale(locale);
  const meta = searchPageMeta[lang];
  const searchState = await searchCompanies(query);
  const results = searchState.results;
  const subtitle =
    searchState.mode === 'suggested'
      ? meta.suggestedSubtitle(results.length, query)
      : meta.subtitle(results.length, query);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-grow pb-24 pt-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h1 className="mb-2 text-3xl font-black text-brand-ink">{meta.title}</h1>
              <p className="font-medium text-slate-500">{subtitle}</p>
            </div>
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="relative flex-grow md:w-96">
                <input type="text" readOnly className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 shadow-sm outline-none" value={query} />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <button className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-colors hover:bg-slate-50">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {results.length ? (
            <SearchResultsClient
              results={results}
              lang={lang}
              copy={{
                trustScore: meta.trustScore,
                coverage: meta.coverage,
                guestLimit: meta.guestLimit,
                unlimited: meta.unlimited,
                loginForUnlimited: meta.loginForUnlimited,
              }}
            />
          ) : (
            <div className="max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_20px_48px_rgba(7,22,38,0.06)]">
              <h2 className="mb-3 text-2xl font-black text-brand-ink">{meta.noResults}</h2>
              <p className="text-slate-500">Crunchbase, directory, website, domain, LinkedIn</p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Link href="/" className="rounded-xl bg-[linear-gradient(135deg,#1250d6_0%,#071626_100%)] px-8 py-3 font-black text-white shadow-[0_20px_44px_rgba(18,80,214,0.2)] transition-transform duration-200 hover:-translate-y-0.5">
              {meta.loadMore}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
