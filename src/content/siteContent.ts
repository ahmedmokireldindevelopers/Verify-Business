export type AppLocale = 'en' | 'ar' | 'fr';

export function resolveLocale(locale: string): AppLocale {
  if (locale === 'ar' || locale === 'fr') return locale;
  return 'en';
}

type TranslatedText = Record<AppLocale, string>;

export const statusText: Record<'verified' | 'pending' | 'suspicious' | 'rejected', TranslatedText> = {
  verified: {
    en: 'Verified',
    ar: 'موثقة',
    fr: 'Vérifiée',
  },
  pending: {
    en: 'Pending',
    ar: 'قيد المراجعة',
    fr: 'En cours',
  },
  suspicious: {
    en: 'Suspicious',
    ar: 'مشبوهة',
    fr: 'Suspecte',
  },
  rejected: {
    en: 'Not Verified',
    ar: 'غير موثقة',
    fr: 'Non vérifiée',
  },
};

export const trustScoreLabel: TranslatedText = {
  en: 'Trust Score',
  ar: 'مؤشر الثقة',
  fr: 'Score de confiance',
};

export const contactInfoCopy = {
  website: {
    en: 'Website',
    ar: 'الموقع الإلكتروني',
    fr: 'Site web',
  },
  headquarters: {
    en: 'Headquarters',
    ar: 'المقر الرئيسي',
    fr: 'Siège social',
  },
  headquartersValue: {
    en: 'Global Business District, Financial Tower, Level 4',
    ar: 'حي الأعمال العالمي، البرج المالي، المستوى الرابع',
    fr: 'Global Business District, Financial Tower, niveau 4',
  },
};

export const aboutPageCopy = {
  en: {
    heroTitle: 'A verification company built for global trust.',
    heroText:
      'VerifyBusiness helps brands prove legitimacy, unify identity across platforms, and reduce fraud risk before it damages reputation or revenue.',
    valueLabel: 'Core Principles',
    values: [
      {
        title: 'Transparent verification',
        text: 'We structure every review around evidence, legal entity checks, platform signals, and brand consistency.',
      },
      {
        title: 'Fraud pressure testing',
        text: 'Our workflows are built to surface impersonation, suspicious accounts, and weak documentation early.',
      },
      {
        title: 'Global operating model',
        text: 'We support businesses across Arab markets, Europe, North America, and fast-growth regions with the same trust standard.',
      },
    ],
    reachLabel: 'Global Reach',
    reachTitle: 'Operating across 150+ markets with a single trust framework.',
    reachText:
      'From first verification request to ongoing profile monitoring, the platform is designed to keep brand identity consistent and defensible everywhere you operate.',
    metrics: [
      {value: '10K+', label: 'Verified businesses'},
      {value: '2M+', label: 'Monthly verification checks'},
    ],
    registryTitle: 'Live verification intelligence',
    registryText:
      'Profiles, documentation status, and trust indicators are surfaced in one structured layer for faster decision making.',
    registry: [
      {name: 'Tech Flow Inc.', location: 'Berlin, DE', status: 'Verified'},
      {name: 'Sahara Logistics', location: 'Cairo, EG', status: 'Verified'},
      {name: 'Amazonas Trading', location: 'Manaus, BR', status: 'Verified'},
    ],
  },
  ar: {
    heroTitle: 'شركة توثيق بُنيت لثقة عالمية.',
    heroText:
      'تساعد VerifyBusiness العلامات التجارية على إثبات الموثوقية وتوحيد الهوية عبر المنصات وتقليل مخاطر الاحتيال قبل أن تؤثر في السمعة أو الإيرادات.',
    valueLabel: 'مبادئنا الأساسية',
    values: [
      {
        title: 'توثيق شفاف',
        text: 'نبني كل مراجعة على أدلة واضحة وفحص الكيان القانوني وإشارات المنصات وتناسق الهوية التجارية.',
      },
      {
        title: 'اختبار ضغط ضد الاحتيال',
        text: 'تم تصميم إجراءاتنا لاكتشاف الانتحال والحسابات المشبوهة وضعف المستندات في مرحلة مبكرة.',
      },
      {
        title: 'نموذج تشغيل عالمي',
        text: 'ندعم الشركات في الأسواق العربية وأوروبا وأمريكا الشمالية والمناطق سريعة النمو بنفس معيار الثقة.',
      },
    ],
    reachLabel: 'انتشار عالمي',
    reachTitle: 'نعمل في أكثر من 150 سوقاً بإطار ثقة واحد.',
    reachText:
      'من أول طلب توثيق إلى المراقبة المستمرة للملف التجاري، صُممت المنصة للحفاظ على هوية العلامة التجارية متسقة وقابلة للدفاع عنها في كل سوق تعمل فيه.',
    metrics: [
      {value: '10K+', label: 'شركة موثقة'},
      {value: '2M+', label: 'عملية تحقق شهرية'},
    ],
    registryTitle: 'ذكاء تحقق مباشر',
    registryText:
      'نُظهر حالة الملفات والمستندات ومؤشرات الثقة في طبقة واحدة منظمة لتسريع اتخاذ القرار.',
    registry: [
      {name: 'Tech Flow Inc.', location: 'برلين، ألمانيا', status: 'موثقة'},
      {name: 'Sahara Logistics', location: 'القاهرة، مصر', status: 'موثقة'},
      {name: 'Amazonas Trading', location: 'ماناوس، البرازيل', status: 'موثقة'},
    ],
  },
  fr: {
    heroTitle: 'Une société de vérification conçue pour la confiance mondiale.',
    heroText:
      'VerifyBusiness aide les marques à prouver leur légitimité, unifier leur identité sur les plateformes et réduire le risque de fraude avant qu’il n’affecte la réputation ou le chiffre d’affaires.',
    valueLabel: 'Principes fondamentaux',
    values: [
      {
        title: 'Vérification transparente',
        text: 'Chaque revue repose sur des preuves, le contrôle de l’entité légale, les signaux des plateformes et la cohérence de la marque.',
      },
      {
        title: 'Tests anti-fraude',
        text: 'Nos workflows sont pensés pour détecter tôt l’usurpation, les comptes suspects et les documents fragiles.',
      },
      {
        title: 'Modèle opérationnel mondial',
        text: 'Nous accompagnons les entreprises dans les marchés arabes, en Europe, en Amérique du Nord et dans les régions à forte croissance avec le même standard de confiance.',
      },
    ],
    reachLabel: 'Présence mondiale',
    reachTitle: 'Présent sur plus de 150 marchés avec un cadre de confiance unique.',
    reachText:
      'De la première demande de vérification au suivi continu du profil, la plateforme maintient une identité de marque cohérente et défendable partout.',
    metrics: [
      {value: '10K+', label: 'Entreprises vérifiées'},
      {value: '2M+', label: 'Contrôles mensuels'},
    ],
    registryTitle: 'Intelligence de vérification en direct',
    registryText:
      'Profils, état des documents et indicateurs de confiance sont réunis dans une seule couche structurée.',
    registry: [
      {name: 'Tech Flow Inc.', location: 'Berlin, DE', status: 'Vérifiée'},
      {name: 'Sahara Logistics', location: 'Le Caire, EG', status: 'Vérifiée'},
      {name: 'Amazonas Trading', location: 'Manaus, BR', status: 'Vérifiée'},
    ],
  },
};

export const howItWorksCopy = {
  en: {
    title: 'How VerifyBusiness works',
    subtitle:
      'The process is built for speed, evidence quality, and consistent trust signals across every platform we support.',
    stepsLabel: 'Process',
    steps: [
      {
        title: 'Submit the business profile',
        description: 'Provide the legal entity, brand assets, domains, and target platforms that need verification.',
      },
      {
        title: 'Validate documents and identity',
        description: 'We review ownership documents, business records, and brand consistency signals across channels.',
      },
      {
        title: 'Assess risk and trust score',
        description: 'Verification signals, fraud indicators, and profile completeness are combined into a clear trust output.',
      },
      {
        title: 'Launch the verified profile',
        description: 'Once approved, the business receives a structured profile and can continue monitoring status changes.',
      },
    ],
    stepLabel: 'Step',
    ctaTitle: 'Ready to strengthen trust?',
    ctaText: 'Start verification, unify your brand footprint, and move faster with a clearer trust position.',
    ctaButton: 'Start my verification',
  },
  ar: {
    title: 'كيف تعمل VerifyBusiness',
    subtitle:
      'تم تصميم العملية لتكون سريعة ومرتكزة على جودة الأدلة وتوحيد إشارات الثقة عبر جميع المنصات التي ندعمها.',
    stepsLabel: 'العملية',
    steps: [
      {
        title: 'إرسال ملف الشركة',
        description: 'أدخل الكيان القانوني وأصول العلامة التجارية والنطاقات والمنصات المطلوب توثيقها.',
      },
      {
        title: 'التحقق من المستندات والهوية',
        description: 'نراجع مستندات الملكية والسجلات التجارية وإشارات اتساق العلامة التجارية عبر القنوات.',
      },
      {
        title: 'تقييم المخاطر ومؤشر الثقة',
        description: 'نجمع إشارات التوثيق ومؤشرات الاحتيال واكتمال الملف في نتيجة ثقة واضحة.',
      },
      {
        title: 'إطلاق الملف الموثق',
        description: 'بعد الموافقة تحصل الشركة على ملف منظم ويمكنها متابعة أي تغييرات لاحقة في الحالة.',
      },
    ],
    stepLabel: 'الخطوة',
    ctaTitle: 'جاهز لتعزيز الثقة؟',
    ctaText: 'ابدأ التوثيق ووحّد حضور علامتك التجارية وتحرك بسرعة أكبر بموقف ثقة أوضح.',
    ctaButton: 'ابدأ التوثيق الآن',
  },
  fr: {
    title: 'Comment fonctionne VerifyBusiness',
    subtitle:
      'Le processus est conçu pour la rapidité, la qualité des preuves et des signaux de confiance cohérents sur toutes les plateformes prises en charge.',
    stepsLabel: 'Processus',
    steps: [
      {
        title: 'Soumettre le profil d’entreprise',
        description: 'Ajoutez l’entité légale, les actifs de marque, les domaines et les plateformes à vérifier.',
      },
      {
        title: 'Valider les documents et l’identité',
        description: 'Nous examinons les pièces de propriété, les registres commerciaux et la cohérence de marque sur les canaux.',
      },
      {
        title: 'Évaluer le risque et le score',
        description: 'Les signaux de vérification, les indicateurs de fraude et la complétude du profil sont combinés dans un résultat clair.',
      },
      {
        title: 'Publier le profil vérifié',
        description: 'Une fois approuvée, l’entreprise obtient un profil structuré et peut suivre les changements de statut.',
      },
    ],
    stepLabel: 'Étape',
    ctaTitle: 'Prêt à renforcer la confiance ?',
    ctaText: 'Lancez la vérification, unifiez votre présence de marque et avancez plus vite avec un niveau de confiance plus clair.',
    ctaButton: 'Démarrer la vérification',
  },
};

export const legalCopy = {
  privacy: {
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: March 13, 2026',
      sections: [
        {
          title: '1. Introduction',
          body: [
            'VerifyBusiness collects personal and business information only for verification, account management, fraud prevention, and platform integrity.',
            'Using the platform means you accept the collection and use of data as described in this policy.',
          ],
        },
        {
          title: '2. Data we collect',
          body: [
            'We may collect contact details, company registration data, domain ownership evidence, platform account details, uploaded documents, and usage telemetry.',
            'Sensitive records are processed only to validate legitimacy and reduce abuse risk.',
          ],
        },
        {
          title: '3. How we use data',
          body: [
            'Data is used to review verification requests, maintain profiles, communicate status changes, detect suspicious activity, and improve operational reliability.',
            'We do not sell submitted verification data to third parties.',
          ],
        },
        {
          title: '4. Contact',
          body: ['For privacy questions, contact info@VerifyBusiness.online.'],
        },
      ],
    },
    ar: {
      title: 'سياسة الخصوصية',
      updated: 'آخر تحديث: 13 مارس 2026',
      sections: [
        {
          title: '1. المقدمة',
          body: [
            'تجمع VerifyBusiness البيانات الشخصية وبيانات الشركات فقط لأغراض التوثيق وإدارة الحسابات ومنع الاحتيال وحماية سلامة المنصة.',
            'استخدامك للمنصة يعني موافقتك على جمع البيانات واستخدامها وفقاً لهذه السياسة.',
          ],
        },
        {
          title: '2. البيانات التي نجمعها',
          body: [
            'قد نجمع بيانات التواصل وبيانات التسجيل التجاري وإثبات ملكية النطاق وتفاصيل الحسابات على المنصات والمستندات المرفوعة وبيانات الاستخدام.',
            'تُعالج السجلات الحساسة فقط للتحقق من الموثوقية وتقليل مخاطر إساءة الاستخدام.',
          ],
        },
        {
          title: '3. كيفية استخدام البيانات',
          body: [
            'نستخدم البيانات لمراجعة طلبات التوثيق وإدارة الملفات وإبلاغك بتغيرات الحالة واكتشاف الأنشطة المشبوهة وتحسين موثوقية التشغيل.',
            'لا نقوم ببيع بيانات التوثيق المقدمة إلى أي طرف ثالث.',
          ],
        },
        {
          title: '4. التواصل',
          body: ['للاستفسارات المتعلقة بالخصوصية تواصل معنا عبر info@VerifyBusiness.online.'],
        },
      ],
    },
    fr: {
      title: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : 13 mars 2026',
      sections: [
        {
          title: '1. Introduction',
          body: [
            'VerifyBusiness collecte les informations personnelles et professionnelles uniquement pour la vérification, la gestion de compte, la prévention de la fraude et l’intégrité de la plateforme.',
            'L’utilisation de la plateforme vaut acceptation de cette politique.',
          ],
        },
        {
          title: '2. Données collectées',
          body: [
            'Nous pouvons collecter les coordonnées, les données d’immatriculation, les preuves de propriété de domaine, les comptes de plateformes, les documents déposés et la télémétrie d’usage.',
            'Les éléments sensibles sont traités uniquement pour valider la légitimité et réduire le risque d’abus.',
          ],
        },
        {
          title: '3. Utilisation des données',
          body: [
            'Les données servent à examiner les demandes, maintenir les profils, communiquer les changements de statut, détecter les activités suspectes et améliorer la fiabilité du service.',
            'Nous ne vendons pas les données de vérification soumises.',
          ],
        },
        {
          title: '4. Contact',
          body: ['Pour toute question relative à la confidentialité : info@VerifyBusiness.online.'],
        },
      ],
    },
  },
  terms: {
    en: {
      title: 'Terms & Conditions',
      updated: 'Last updated: March 13, 2026',
      sections: [
        {
          title: '1. Acceptance of terms',
          body: ['By using VerifyBusiness, you agree to these terms and to the operational rules required for verification and profile management.'],
        },
        {
          title: '2. Service scope',
          body: ['The platform provides business verification workflows, trust scoring, monitoring signals, and profile visibility tools.'],
        },
        {
          title: '3. User responsibilities',
          body: ['Users must submit accurate records, keep documents current, and avoid deceptive or unauthorized submissions.'],
        },
        {
          title: '4. Contact',
          body: ['Legal inquiries can be sent to info@VerifyBusiness.online.'],
        },
      ],
    },
    ar: {
      title: 'الشروط والأحكام',
      updated: 'آخر تحديث: 13 مارس 2026',
      sections: [
        {
          title: '1. قبول الشروط',
          body: ['باستخدامك VerifyBusiness فإنك توافق على هذه الشروط وعلى القواعد التشغيلية اللازمة للتوثيق وإدارة الملف التجاري.'],
        },
        {
          title: '2. نطاق الخدمة',
          body: ['توفر المنصة إجراءات توثيق الشركات ومؤشر الثقة وإشارات المراقبة وأدوات إظهار الملفات التجارية.'],
        },
        {
          title: '3. مسؤوليات المستخدم',
          body: ['يجب على المستخدم تقديم بيانات دقيقة وتحديث المستندات وتجنب أي تقديم مضلل أو غير مصرح به.'],
        },
        {
          title: '4. التواصل',
          body: ['يمكن إرسال الاستفسارات القانونية إلى info@VerifyBusiness.online.'],
        },
      ],
    },
    fr: {
      title: 'Conditions générales',
      updated: 'Dernière mise à jour : 13 mars 2026',
      sections: [
        {
          title: '1. Acceptation',
          body: ['En utilisant VerifyBusiness, vous acceptez ces conditions ainsi que les règles opérationnelles liées à la vérification et à la gestion du profil.'],
        },
        {
          title: '2. Portée du service',
          body: ['La plateforme fournit des workflows de vérification, un score de confiance, des signaux de suivi et des outils de visibilité du profil.'],
        },
        {
          title: '3. Responsabilités',
          body: ['Les utilisateurs doivent fournir des informations exactes, maintenir leurs documents à jour et éviter toute soumission trompeuse.'],
        },
        {
          title: '4. Contact',
          body: ['Les demandes juridiques peuvent être envoyées à info@VerifyBusiness.online.'],
        },
      ],
    },
  },
  cookies: {
    en: {
      title: 'Cookie Policy',
      updated: 'Last updated: March 13, 2026',
      sections: [
        {
          title: '1. What cookies do',
          body: ['Cookies help the platform remember sessions, language choices, and performance preferences.'],
        },
        {
          title: '2. How we use them',
          body: ['We use cookies to keep accounts signed in when applicable, improve reliability, and understand product usage patterns.'],
        },
        {
          title: '3. Contact',
          body: ['Questions about cookies can be sent to info@VerifyBusiness.online.'],
        },
      ],
    },
    ar: {
      title: 'سياسة ملفات الارتباط',
      updated: 'آخر تحديث: 13 مارس 2026',
      sections: [
        {
          title: '1. ما الذي تفعله ملفات الارتباط',
          body: ['تساعد ملفات الارتباط المنصة على تذكر الجلسات واختيارات اللغة وتفضيلات الأداء.'],
        },
        {
          title: '2. كيفية استخدامها',
          body: ['نستخدمها للحفاظ على تسجيل الدخول عند الحاجة وتحسين الاعتمادية وفهم أنماط استخدام المنتج.'],
        },
        {
          title: '3. التواصل',
          body: ['للاستفسارات المتعلقة بملفات الارتباط راسلنا على info@VerifyBusiness.online.'],
        },
      ],
    },
    fr: {
      title: 'Politique relative aux cookies',
      updated: 'Dernière mise à jour : 13 mars 2026',
      sections: [
        {
          title: '1. Rôle des cookies',
          body: ['Les cookies aident la plateforme à mémoriser les sessions, la langue et certaines préférences de performance.'],
        },
        {
          title: '2. Notre usage',
          body: ['Nous les utilisons pour maintenir les sessions, améliorer la fiabilité et comprendre les usages du produit.'],
        },
        {
          title: '3. Contact',
          body: ['Pour toute question : info@VerifyBusiness.online.'],
        },
      ],
    },
  },
  disclaimer: {
    en: {
      title: 'Disclaimer',
      updated: 'Last updated: March 13, 2026',
      sections: [
        {
          title: '1. Information accuracy',
          body: ['We work to keep verification data current, but profile information may change after review or due to external platform activity.'],
        },
        {
          title: '2. No professional advice',
          body: ['Verification outputs do not replace legal, financial, or compliance advice. Independent review may still be necessary.'],
        },
        {
          title: '3. External links',
          body: ['References to third-party sites or platforms are provided for context and do not constitute endorsement.'],
        },
      ],
    },
    ar: {
      title: 'إخلاء المسؤولية',
      updated: 'آخر تحديث: 13 مارس 2026',
      sections: [
        {
          title: '1. دقة المعلومات',
          body: ['نعمل على إبقاء بيانات التوثيق محدثة، لكن قد تتغير معلومات الملفات بعد المراجعة أو بسبب نشاط خارجي على المنصات.'],
        },
        {
          title: '2. ليس بديلاً عن المشورة المهنية',
          body: ['نتائج التوثيق لا تُعد بديلاً عن الاستشارات القانونية أو المالية أو التنظيمية، وقد تبقى الحاجة إلى مراجعة مستقلة.'],
        },
        {
          title: '3. الروابط الخارجية',
          body: ['الإشارات إلى مواقع أو منصات خارجية تُعرض للسياق فقط ولا تمثل اعتماداً أو ضماناً.'],
        },
      ],
    },
    fr: {
      title: 'Clause de non-responsabilité',
      updated: 'Dernière mise à jour : 13 mars 2026',
      sections: [
        {
          title: '1. Exactitude des informations',
          body: ['Nous nous efforçons de maintenir les données à jour, mais certaines informations peuvent évoluer après revue ou en raison d’activités externes.'],
        },
        {
          title: '2. Pas un conseil professionnel',
          body: ['Les résultats de vérification ne remplacent pas un avis juridique, financier ou réglementaire indépendant.'],
        },
        {
          title: '3. Liens externes',
          body: ['Les références vers des sites tiers sont fournies à titre contextuel et ne constituent pas une approbation.'],
        },
      ],
    },
  },
};

export const searchPageCopy = {
  en: {
    title: 'Search results',
    subtitle: 'Found 5 businesses matching your search.',
    searchValue: 'Global Tech',
    trustScore: 'Trust Score',
    loadMore: 'Load more results',
    industries: ['Technology', 'Security', 'Logistics', 'Manufacturing', 'Real Estate'],
    locations: ['San Francisco, USA', 'London, UK', 'Dubai, UAE', 'Berlin, Germany', 'Toronto, Canada'],
  },
  ar: {
    title: 'نتائج البحث',
    subtitle: 'تم العثور على 5 شركات مطابقة لبحثك.',
    searchValue: 'جلوبال تيك',
    trustScore: 'مؤشر الثقة',
    loadMore: 'تحميل المزيد من النتائج',
    industries: ['التقنية', 'الأمن', 'الخدمات اللوجستية', 'التصنيع', 'العقارات'],
    locations: ['سان فرانسيسكو، الولايات المتحدة', 'لندن، المملكة المتحدة', 'دبي، الإمارات', 'برلين، ألمانيا', 'تورونتو، كندا'],
  },
  fr: {
    title: 'Résultats de recherche',
    subtitle: '5 entreprises correspondent à votre recherche.',
    searchValue: 'Global Tech',
    trustScore: 'Score de confiance',
    loadMore: 'Charger plus de résultats',
    industries: ['Technologie', 'Sécurité', 'Logistique', 'Industrie', 'Immobilier'],
    locations: ['San Francisco, États-Unis', 'Londres, Royaume-Uni', 'Dubaï, EAU', 'Berlin, Allemagne', 'Toronto, Canada'],
  },
};

export const businessProfileCopy = {
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
    premiumText:
      'This business has passed our highest verification tier, including ownership review and document authenticity checks.',
    sectorValue: 'Information Technology',
    description:
      'Global Tech Solutions Ltd. delivers cloud infrastructure, enterprise software, and digital operations services for regulated and fast-growth businesses.',
    documentsList: [
      {name: 'Business registration', date: 'Jan 2026', type: 'PDF'},
      {name: 'Tax compliance certificate', date: 'Dec 2025', type: 'PDF'},
      {name: 'ISO 27001 certification', date: 'Mar 2025', type: 'PDF'},
    ],
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
    premiumText:
      'اجتازت هذه الشركة أعلى مستوى من التحقق لدينا، بما في ذلك مراجعة الملكية وفحص أصالة المستندات.',
    sectorValue: 'تقنية المعلومات',
    description:
      'تقدم Global Tech Solutions Ltd. خدمات البنية السحابية وبرمجيات المؤسسات والعمليات الرقمية للشركات المنظمة وسريعة النمو.',
    documentsList: [
      {name: 'السجل التجاري', date: 'يناير 2026', type: 'PDF'},
      {name: 'شهادة الالتزام الضريبي', date: 'ديسمبر 2025', type: 'PDF'},
      {name: 'شهادة ISO 27001', date: 'مارس 2025', type: 'PDF'},
    ],
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
    premiumText:
      'Cette entreprise a passé notre niveau de vérification le plus élevé, y compris la revue de propriété et l’authenticité documentaire.',
    sectorValue: 'Technologies de l’information',
    description:
      'Global Tech Solutions Ltd. fournit des services d’infrastructure cloud, de logiciels d’entreprise et d’opérations numériques pour des sociétés réglementées et en forte croissance.',
    documentsList: [
      {name: 'Immatriculation de l’entreprise', date: 'janv. 2026', type: 'PDF'},
      {name: 'Certificat de conformité fiscale', date: 'déc. 2025', type: 'PDF'},
      {name: 'Certification ISO 27001', date: 'mars 2025', type: 'PDF'},
    ],
  },
};

export const businessDashboardCopy = {
  en: {
    sidebar: ['Dashboard', 'Company profile', 'Documents', 'Trust metrics', 'Feedback', 'Verification status'],
    company: 'Global Tech Solutions',
    verificationId: 'Verification ID',
    visits: 'Profile visits',
    visitsTrend: '+12% from last week',
    documentsTitle: 'Document status',
    upload: '+ Upload new document',
    docs: [
      {name: 'Business license', status: 'Verified', date: 'Jan 12, 2026'},
      {name: 'Tax certificate', status: 'Verified', date: 'Jan 12, 2026'},
      {name: 'Site photograph', status: 'Under review', date: 'Pending'},
    ],
    lastUploaded: 'Last uploaded',
  },
  ar: {
    sidebar: ['لوحة التحكم', 'ملف الشركة', 'المستندات', 'مؤشرات الثقة', 'التعليقات', 'حالة التوثيق'],
    company: 'جلوبال تيك سولوشنز',
    verificationId: 'معرّف التوثيق',
    visits: 'زيارات الملف',
    visitsTrend: '+12% مقارنة بالأسبوع الماضي',
    documentsTitle: 'حالة المستندات',
    upload: '+ رفع مستند جديد',
    docs: [
      {name: 'الرخصة التجارية', status: 'موثقة', date: '12 يناير 2026'},
      {name: 'شهادة ضريبية', status: 'موثقة', date: '12 يناير 2026'},
      {name: 'صورة الموقع', status: 'قيد المراجعة', date: 'قيد الانتظار'},
    ],
    lastUploaded: 'آخر رفع',
  },
  fr: {
    sidebar: ['Tableau de bord', 'Profil entreprise', 'Documents', 'Indicateurs', 'Avis', 'Statut de vérification'],
    company: 'Global Tech Solutions',
    verificationId: 'ID de vérification',
    visits: 'Visites du profil',
    visitsTrend: '+12 % depuis la semaine dernière',
    documentsTitle: 'État des documents',
    upload: '+ Déposer un nouveau document',
    docs: [
      {name: 'Licence commerciale', status: 'Vérifiée', date: '12 janv. 2026'},
      {name: 'Certificat fiscal', status: 'Vérifiée', date: '12 janv. 2026'},
      {name: 'Photo du site', status: 'En cours', date: 'En attente'},
    ],
    lastUploaded: 'Dernier dépôt',
  },
};

export const userDashboardCopy = {
  en: {
    sidebar: ['Overview', 'Saved businesses', 'Notifications', 'My reports', 'Settings', 'Logout'],
    title: 'Welcome back, Ahmed',
    subtitle: 'Track your verification requests and manage your saved businesses.',
    saved: 'Saved businesses',
    viewAll: 'View all',
    notifications: 'Recent notifications',
    notificationItems: [
      {
        title: 'Verification update',
        text: 'Secure Systems Inc is currently under review.',
      },
      {
        title: 'New trust badge',
        text: 'Fast Logistics has been verified.',
      },
    ],
  },
  ar: {
    sidebar: ['نظرة عامة', 'الشركات المحفوظة', 'الإشعارات', 'تقاريري', 'الإعدادات', 'تسجيل الخروج'],
    title: 'مرحباً بعودتك، أحمد',
    subtitle: 'تابع طلبات التوثيق الخاصة بك وأدر الشركات التي حفظتها.',
    saved: 'الشركات المحفوظة',
    viewAll: 'عرض الكل',
    notifications: 'أحدث الإشعارات',
    notificationItems: [
      {
        title: 'تحديث في التوثيق',
        text: 'شركة Secure Systems Inc قيد المراجعة حالياً.',
      },
      {
        title: 'شارة ثقة جديدة',
        text: 'تم توثيق شركة Fast Logistics.',
      },
    ],
  },
  fr: {
    sidebar: ['Vue d’ensemble', 'Entreprises enregistrées', 'Notifications', 'Mes rapports', 'Paramètres', 'Déconnexion'],
    title: 'Bon retour, Ahmed',
    subtitle: 'Suivez vos demandes de vérification et gérez vos entreprises enregistrées.',
    saved: 'Entreprises enregistrées',
    viewAll: 'Voir tout',
    notifications: 'Notifications récentes',
    notificationItems: [
      {
        title: 'Mise à jour de vérification',
        text: 'Secure Systems Inc est actuellement en cours de revue.',
      },
      {
        title: 'Nouveau badge de confiance',
        text: 'Fast Logistics a été vérifiée.',
      },
    ],
  },
};
