import type {Metadata} from "next";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'ar', 'fr'] as const;

export async function generateMetadata(
  props: {params: Promise<{locale: string}>}
): Promise<Metadata> {
  const {locale} = await props.params;
  const t = await getTranslations({locale, namespace: 'Common'});

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`
    },
    icons: {
      icon: '/brand-tab-icon.svg',
      shortcut: '/brand-tab-icon.svg',
      apple: '/brand-tab-icon.svg',
    },
    description: t('description'),
    keywords: ["business verification", "verify company", "trusted business", "company legitimacy", "fraud detection", "business trust badge"],
    metadataBase: new URL('https://VerifyBusiness.online'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ar': '/ar',
        'fr': '/fr',
      },
    }
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
