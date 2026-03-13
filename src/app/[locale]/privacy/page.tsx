import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {legalCopy, resolveLocale} from '@/content/siteContent';

export default async function PrivacyPolicy(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  const copy = legalCopy.privacy[resolveLocale(locale)];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-white pb-24 pt-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-8 text-4xl font-black tracking-tight text-brand-ink">{copy.title}</h1>
          <div className="space-y-8 text-slate-600">
            <p className="border-l-4 border-brand-blue pl-6 text-lg italic">{copy.updated}</p>
            {copy.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-black text-brand-ink">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
