import {useEffect, useMemo} from 'react';
import {Link, Navigate, Route, Routes, useLocation, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {supabase} from '../lib/supabase';
import type {AppLocale} from '../content/translations';

const locales: AppLocale[] = ['en', 'ar', 'fr'];

function resolveLocale(value?: string): AppLocale {
  return locales.includes(value as AppLocale) ? (value as AppLocale) : 'en';
}

function LocaleShell() {
  const {t, i18n} = useTranslation();
  const {locale: routeLocale} = useParams();
  const location = useLocation();
  const locale = resolveLocale(routeLocale);
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, i18n, locale]);

  const supabaseReady = Boolean(supabase);
  const routeIsSearch = location.pathname.endsWith('/search');
  const routeIsDashboard = location.pathname.endsWith('/dashboard');

  const routeContent = useMemo(() => {
    if (routeIsSearch) {
      return {
        title: t('routes.searchTitle'),
        body: t('routes.searchBody'),
      };
    }

    if (routeIsDashboard) {
      return {
        title: t('routes.dashboardTitle'),
        body: t('routes.dashboardBody'),
      };
    }

    return {
      title: t('routes.homeTitle'),
      body: t('hero.body'),
    };
  }, [routeIsDashboard, routeIsSearch, t]);

  return (
    <div className="shell">
      <div className="shell__noise" />
      <header className="topbar">
        <Link className="brand" to={`/${locale}`}>
          <span className="brand__mark">VB</span>
          <span>
            VerifyBusiness
            <small>Vite migration</small>
          </span>
        </Link>

        <nav className="topbar__nav">
          <Link to={`/${locale}`}>{t('nav.overview')}</Link>
          <Link to={`/${locale}/search`}>{t('nav.search')}</Link>
          <Link to={`/${locale}/dashboard`}>{t('nav.dashboard')}</Link>
        </nav>

        <div className="locale-switcher">
          {locales.map((item) => (
            <Link key={item} className={item === locale ? 'is-active' : ''} to={`/${item}`}>
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>

      <main className="layout">
        <section className="hero-card">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-copy">{t('hero.body')}</p>

          <div className="hero-actions">
            <Link className="button button--primary" to={`/${locale}/search`}>
              {t('hero.primary')}
            </Link>
            <Link className="button button--secondary" to={`/${locale}/dashboard`}>
              {t('hero.secondary')}
            </Link>
          </div>
        </section>

        <section className="status-card">
          <div className="status-card__head">
            <p className="eyebrow">{t('status.title')}</p>
            <span className={supabaseReady ? 'badge badge--ok' : 'badge badge--warn'}>
              {supabaseReady ? t('status.configured') : t('status.missing')}
            </span>
          </div>

          <div className="status-grid">
            <article className="info-panel">
              <h2>{routeContent.title}</h2>
              <p>{routeContent.body}</p>
              {(routeIsSearch || routeIsDashboard) && (
                <Link className="inline-link" to={`/${locale}`}>
                  {t('routes.back')}
                </Link>
              )}
            </article>

            <article className="info-panel info-panel--stacked">
              <span className="panel-kicker">Supabase</span>
              <strong>{supabaseReady ? 'Ready' : 'Pending'}</strong>
              <p>{t('status.note')}</p>
            </article>
          </div>
        </section>

        <section className="cards-grid">
          <article className="feature-card">
            <span className="card-index">01</span>
            <h2>{t('cards.stays.title')}</h2>
            <p>{t('cards.stays.body')}</p>
          </article>

          <article className="feature-card">
            <span className="card-index">02</span>
            <h2>{t('cards.changes.title')}</h2>
            <p>{t('cards.changes.body')}</p>
          </article>

          <article className="feature-card">
            <span className="card-index">03</span>
            <h2>{t('cards.hosting.title')}</h2>
            <p>{t('cards.hosting.body')}</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/en" />} />
      <Route path="/:locale" element={<LocaleShell />} />
      <Route path="/:locale/search" element={<LocaleShell />} />
      <Route path="/:locale/dashboard" element={<LocaleShell />} />
      <Route path="*" element={<Navigate replace to="/en" />} />
    </Routes>
  );
}
