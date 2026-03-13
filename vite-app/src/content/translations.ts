export const resources = {
  en: {
    translation: {
      nav: {
        overview: 'Overview',
        search: 'Search',
        dashboard: 'Dashboard',
      },
      hero: {
        eyebrow: 'Vite Migration Workspace',
        title: 'VerifyBusiness, rebuilt for shared hosting simplicity.',
        body:
          'This workspace lets you migrate from Next.js to React + Vite without touching the live Next application. Routing, translations, and Supabase are already bootstrapped for the next migration stage.',
        primary: 'Open search route',
        secondary: 'Review dashboard route',
      },
      cards: {
        stays: {
          title: 'What stays',
          body: 'Supabase, search logic, business data sources, branding direction, and multilingual content can all be moved forward.',
        },
        changes: {
          title: 'What changes',
          body: 'App Router, Next middleware, server metadata, and next-intl flow will be replaced with Vite, React Router, and react-i18next.',
        },
        hosting: {
          title: 'Hosting impact',
          body: 'Vite gives you a static-first deployment path that is materially easier on shared hosting than a Node runtime-centered Next setup.',
        },
      },
      status: {
        title: 'Environment status',
        configured: 'Supabase is configured',
        missing: 'Supabase environment variables are missing',
        note: 'Use VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY or VITE_SUPABASE_ANON_KEY in vite-app/.env.local.',
      },
      routes: {
        homeTitle: 'Migration home',
        searchTitle: 'Search route placeholder',
        searchBody: 'This route is ready for the company search migration from Next.js.',
        dashboardTitle: 'Dashboard route placeholder',
        dashboardBody: 'This route is reserved for signed-in dashboard flows after the Vite migration.',
        back: 'Back to migration home',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        overview: 'نظرة عامة',
        search: 'البحث',
        dashboard: 'لوحة التحكم',
      },
      hero: {
        eyebrow: 'مساحة ترحيل Vite',
        title: 'VerifyBusiness بصيغة أبسط للاستضافة المشتركة.',
        body:
          'هذه المساحة تتيح ترحيل المشروع من Next.js إلى React + Vite بدون المساس بالتطبيق الحالي. التوجيه والترجمة وتهيئة Supabase أصبحت جاهزة للمرحلة التالية من الترحيل.',
        primary: 'فتح مسار البحث',
        secondary: 'مراجعة مسار لوحة التحكم',
      },
      cards: {
        stays: {
          title: 'ما الذي سيبقى',
          body: 'يمكن نقل Supabase ومنطق البحث ومصادر بيانات الشركات والهوية البصرية والمحتوى متعدد اللغات كما هي.',
        },
        changes: {
          title: 'ما الذي سيتغير',
          body: 'سيتم استبدال App Router وmiddleware وmetadata الخاصة بـ Next وتدفق next-intl بـ Vite وReact Router وreact-i18next.',
        },
        hosting: {
          title: 'أثر الاستضافة',
          body: 'Vite يعطيك مسار نشر ثابت أسهل بكثير على الاستضافة المشتركة مقارنة بتشغيل Next المعتمد على Node runtime.',
        },
      },
      status: {
        title: 'حالة البيئة',
        configured: 'تم إعداد Supabase',
        missing: 'متغيرات Supabase غير موجودة',
        note: 'استخدم VITE_SUPABASE_URL و VITE_SUPABASE_PUBLISHABLE_KEY أو VITE_SUPABASE_ANON_KEY داخل vite-app/.env.local.',
      },
      routes: {
        homeTitle: 'الصفحة الرئيسية للترحيل',
        searchTitle: 'مسار البحث التجريبي',
        searchBody: 'هذا المسار جاهز لنقل صفحة البحث عن الشركات من Next.js.',
        dashboardTitle: 'مسار لوحة التحكم التجريبي',
        dashboardBody: 'هذا المسار مخصص لنقل لوحات المستخدمين بعد اكتمال ترحيل Vite.',
        back: 'العودة إلى صفحة الترحيل',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        overview: 'Vue d’ensemble',
        search: 'Recherche',
        dashboard: 'Tableau de bord',
      },
      hero: {
        eyebrow: 'Espace de migration Vite',
        title: 'VerifyBusiness reconstruit pour un hébergement mutualisé plus simple.',
        body:
          'Cet espace permet de migrer de Next.js vers React + Vite sans toucher à l’application Next actuelle. Le routage, les traductions et Supabase sont déjà amorcés pour la prochaine étape.',
        primary: 'Ouvrir la route de recherche',
        secondary: 'Voir la route du tableau de bord',
      },
      cards: {
        stays: {
          title: 'Ce qui reste',
          body: 'Supabase, la logique de recherche, les sources d’entreprises, l’identité visuelle et le contenu multilingue peuvent être réutilisés.',
        },
        changes: {
          title: 'Ce qui change',
          body: 'App Router, middleware, metadata Next et next-intl seront remplacés par Vite, React Router et react-i18next.',
        },
        hosting: {
          title: 'Impact hébergement',
          body: 'Vite offre une voie de déploiement statique beaucoup plus simple sur un hébergement mutualisé qu’une exécution Next centrée sur Node.',
        },
      },
      status: {
        title: 'État de l’environnement',
        configured: 'Supabase est configuré',
        missing: 'Les variables Supabase sont absentes',
        note: 'Utilisez VITE_SUPABASE_URL et VITE_SUPABASE_PUBLISHABLE_KEY ou VITE_SUPABASE_ANON_KEY dans vite-app/.env.local.',
      },
      routes: {
        homeTitle: 'Accueil de migration',
        searchTitle: 'Espace de recherche',
        searchBody: 'Cette route est prête pour migrer la recherche d’entreprises depuis Next.js.',
        dashboardTitle: 'Espace tableau de bord',
        dashboardBody: 'Cette route est réservée à la migration des tableaux de bord utilisateurs.',
        back: 'Retour à l’accueil de migration',
      },
    },
  },
} as const;

export type AppLocale = keyof typeof resources;
