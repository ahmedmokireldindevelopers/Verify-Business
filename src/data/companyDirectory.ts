export type CompanyStatus = 'verified' | 'pending' | 'suspicious' | 'rejected';

export type CompanyRecord = {
  id: string;
  name: string;
  aliases: string[];
  location: {
    en: string;
    ar: string;
    fr: string;
  };
  industry: {
    en: string;
    ar: string;
    fr: string;
  };
  status: CompanyStatus;
  score: number;
  website: string;
  email: string;
  phone: string;
  founded: string;
  description: {
    en: string;
    ar: string;
    fr: string;
  };
  sector: {
    en: string;
    ar: string;
    fr: string;
  };
  documents: Array<{
    name: {
      en: string;
      ar: string;
      fr: string;
    };
    date: {
      en: string;
      ar: string;
      fr: string;
    };
    type: string;
  }>;
  sources: string[];
  sourcePriority: number;
};

type SearchMode = 'all' | 'match' | 'suggested';

type SearchState = {
  mode: SearchMode;
  results: CompanyRecord[];
};

type RankedCompany = {
  company: CompanyRecord;
  relevance: number;
  rank: number;
};

type CsvProvider = {
  name: string;
  url?: string;
  priority: number;
};

const csvProviders: CsvProvider[] = [
  {
    name: 'Crunchbase',
    url: process.env.CRUNCHBASE_CSV_URL,
    priority: 100,
  },
  {
    name: 'Global Directory',
    url: process.env.COMPANY_DIRECTORY_CSV_URL,
    priority: 80,
  },
  {
    name: 'LinkedIn Export',
    url: process.env.LINKEDIN_CSV_URL,
    priority: 70,
  },
  {
    name: 'US Companies',
    url: process.env.US_COMPANIES_CSV_URL,
    priority: 60,
  },
  {
    name: 'UK Companies',
    url: process.env.UK_COMPANIES_CSV_URL,
    priority: 55,
  },
  {
    name: 'Middle East Directory',
    url: process.env.MIDDLE_EAST_COMPANIES_CSV_URL,
    priority: 50,
  },
];

const seedCompanies: CompanyRecord[] = [
  {
    id: 'global-tech-solutions',
    name: 'Global Tech Solutions Ltd.',
    aliases: ['global tech', 'globaltech', 'جلوبال تيك', 'جلوبال تك', 'global tech solutions'],
    location: {
      en: 'San Francisco, CA, USA',
      ar: 'سان فرانسيسكو، كاليفورنيا، الولايات المتحدة',
      fr: 'San Francisco, Californie, États-Unis',
    },
    industry: {
      en: 'Information Technology',
      ar: 'تقنية المعلومات',
      fr: 'Technologies de l’information',
    },
    status: 'verified',
    score: 94,
    website: 'https://globaltech.example.com',
    email: 'contact@globaltech.example.com',
    phone: '+1 (555) 123-4567',
    founded: '2012',
    description: {
      en: 'Global Tech Solutions delivers cloud infrastructure, enterprise software, and digital operations services for regulated and fast-growth businesses.',
      ar: 'تقدم Global Tech Solutions خدمات البنية السحابية وبرمجيات المؤسسات والعمليات الرقمية للشركات المنظمة وسريعة النمو.',
      fr: 'Global Tech Solutions fournit des services d’infrastructure cloud, de logiciels d’entreprise et d’opérations numériques pour des sociétés réglementées et en forte croissance.',
    },
    sector: {
      en: 'Information Technology',
      ar: 'تقنية المعلومات',
      fr: 'Technologies de l’information',
    },
    documents: [
      {
        name: {en: 'Business registration', ar: 'السجل التجاري', fr: 'Immatriculation de l’entreprise'},
        date: {en: 'Jan 2026', ar: 'يناير 2026', fr: 'janv. 2026'},
        type: 'PDF',
      },
      {
        name: {en: 'Tax compliance certificate', ar: 'شهادة الالتزام الضريبي', fr: 'Certificat de conformité fiscale'},
        date: {en: 'Dec 2025', ar: 'ديسمبر 2025', fr: 'déc. 2025'},
        type: 'PDF',
      },
      {
        name: {en: 'ISO 27001 certification', ar: 'شهادة ISO 27001', fr: 'Certification ISO 27001'},
        date: {en: 'Mar 2025', ar: 'مارس 2025', fr: 'mars 2025'},
        type: 'PDF',
      },
    ],
    sources: ['Crunchbase', 'LinkedIn', 'Official Website'],
    sourcePriority: 100,
  },
  {
    id: 'secure-systems-inc',
    name: 'Secure Systems Inc',
    aliases: ['secure systems', 'secure', 'سيكيور سيستمز', 'سيكيور'],
    location: {
      en: 'London, UK',
      ar: 'لندن، المملكة المتحدة',
      fr: 'Londres, Royaume-Uni',
    },
    industry: {
      en: 'Security',
      ar: 'الأمن',
      fr: 'Sécurité',
    },
    status: 'pending',
    score: 62,
    website: 'https://securesystems.example.com',
    email: 'hello@securesystems.example.com',
    phone: '+44 20 5555 1100',
    founded: '2018',
    description: {
      en: 'Secure Systems provides risk intelligence, cyber-defense reviews, and compliance tooling for enterprise procurement teams.',
      ar: 'توفر Secure Systems حلول ذكاء المخاطر ومراجعات الدفاع السيبراني وأدوات الامتثال لفرق المشتريات المؤسسية.',
      fr: 'Secure Systems fournit de l’intelligence de risque, des revues cyber et des outils de conformité pour les équipes achats.',
    },
    sector: {
      en: 'Security',
      ar: 'الأمن',
      fr: 'Sécurité',
    },
    documents: [
      {
        name: {en: 'Pending legal entity review', ar: 'مراجعة الكيان القانوني قيد التنفيذ', fr: 'Revue de l’entité légale en cours'},
        date: {en: 'Feb 2026', ar: 'فبراير 2026', fr: 'févr. 2026'},
        type: 'PDF',
      },
    ],
    sources: ['Crunchbase', 'Companies House', 'LinkedIn'],
    sourcePriority: 90,
  },
  {
    id: 'fast-logistics',
    name: 'Fast Logistics',
    aliases: ['fast logistics', 'fast', 'فاست لوجستكس', 'لوجستكس دبي'],
    location: {
      en: 'Dubai, UAE',
      ar: 'دبي، الإمارات',
      fr: 'Dubaï, EAU',
    },
    industry: {
      en: 'Logistics',
      ar: 'الخدمات اللوجستية',
      fr: 'Logistique',
    },
    status: 'verified',
    score: 88,
    website: 'https://fastlogistics.example.com',
    email: 'ops@fastlogistics.example.com',
    phone: '+971 4 555 1122',
    founded: '2015',
    description: {
      en: 'Fast Logistics manages freight coordination, bonded warehousing, and regional delivery operations across GCC markets.',
      ar: 'تدير Fast Logistics تنسيق الشحن والتخزين الجمركي وعمليات التسليم الإقليمية عبر أسواق الخليج.',
      fr: 'Fast Logistics gère la coordination du fret, l’entreposage sous douane et les opérations de livraison régionales dans le Golfe.',
    },
    sector: {
      en: 'Logistics',
      ar: 'الخدمات اللوجستية',
      fr: 'Logistique',
    },
    documents: [
      {
        name: {en: 'Trade license', ar: 'الرخصة التجارية', fr: 'Licence commerciale'},
        date: {en: 'Jan 2026', ar: 'يناير 2026', fr: 'janv. 2026'},
        type: 'PDF',
      },
    ],
    sources: ['Google Business', 'Official Website', 'LinkedIn'],
    sourcePriority: 70,
  },
  {
    id: 'apex-manufacturing',
    name: 'Apex Manufacturing',
    aliases: ['apex', 'apex manufacturing', 'ابيكس', 'التصنيع'],
    location: {
      en: 'Berlin, Germany',
      ar: 'برلين، ألمانيا',
      fr: 'Berlin, Allemagne',
    },
    industry: {
      en: 'Manufacturing',
      ar: 'التصنيع',
      fr: 'Industrie',
    },
    status: 'suspicious',
    score: 34,
    website: 'https://apexmanufacturing.example.com',
    email: 'compliance@apexmanufacturing.example.com',
    phone: '+49 30 555 2090',
    founded: '2021',
    description: {
      en: 'Apex Manufacturing appears in multiple directories with conflicting registration details and incomplete ownership metadata.',
      ar: 'تظهر Apex Manufacturing في عدة دلائل ببيانات تسجيل متضاربة وبيانات ملكية غير مكتملة.',
      fr: 'Apex Manufacturing apparaît dans plusieurs annuaires avec des détails d’immatriculation contradictoires et des données de propriété incomplètes.',
    },
    sector: {
      en: 'Manufacturing',
      ar: 'التصنيع',
      fr: 'Industrie',
    },
    documents: [
      {
        name: {en: 'Directory mismatch report', ar: 'تقرير تعارض الدلائل', fr: 'Rapport de divergence annuaires'},
        date: {en: 'Mar 2026', ar: 'مارس 2026', fr: 'mars 2026'},
        type: 'PDF',
      },
    ],
    sources: ['Crunchbase', 'Local Directory', 'Official Website'],
    sourcePriority: 50,
  },
  {
    id: 'trust-builders',
    name: 'Trust Builders Ltd',
    aliases: ['trust builders', 'trust', 'تراست بيلدرز', 'بيلدرز'],
    location: {
      en: 'Toronto, Canada',
      ar: 'تورونتو، كندا',
      fr: 'Toronto, Canada',
    },
    industry: {
      en: 'Real Estate',
      ar: 'العقارات',
      fr: 'Immobilier',
    },
    status: 'verified',
    score: 91,
    website: 'https://trustbuilders.example.com',
    email: 'team@trustbuilders.example.com',
    phone: '+1 (416) 555-2244',
    founded: '2010',
    description: {
      en: 'Trust Builders operates licensed real-estate advisory, portfolio planning, and investor onboarding services in Canada.',
      ar: 'تعمل Trust Builders في الاستشارات العقارية المرخصة وتخطيط المحافظ واستقطاب المستثمرين في كندا.',
      fr: 'Trust Builders exploite des services agréés de conseil immobilier, de planification de portefeuille et d’onboarding investisseurs au Canada.',
    },
    sector: {
      en: 'Real Estate',
      ar: 'العقارات',
      fr: 'Immobilier',
    },
    documents: [
      {
        name: {en: 'Provincial registration', ar: 'التسجيل الإقليمي', fr: 'Enregistrement provincial'},
        date: {en: 'Nov 2025', ar: 'نوفمبر 2025', fr: 'nov. 2025'},
        type: 'PDF',
      },
    ],
    sources: ['Crunchbase', 'Google Business', 'LinkedIn'],
    sourcePriority: 85,
  },
];

function normalizeSearchTerm(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s.@/-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value: string) {
  return normalizeSearchTerm(value).replace(/\s+/g, '-');
}

function extractHostname(value: string) {
  if (!value) {
    return '';
  }

  const candidate = value.startsWith('http') ? value : `https://${value}`;

  try {
    return new URL(candidate).hostname.replace(/^www\./, '');
  } catch {
    return normalizeSearchTerm(value).replace(/^www\./, '');
  }
}

function stripCorporateSuffixes(value: string) {
  return normalizeSearchTerm(value)
    .replace(/\b(limited|ltd|llc|inc|incorporated|corp|corporation|plc|llp|gmbh|sarl|sa|co|company)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value: string) {
  return normalizeSearchTerm(value)
    .split(' ')
    .filter((token) => token.length >= 2);
}

function uniqueTerms(values: string[]) {
  return Array.from(
    new Set(
      values
        .map((value) => normalizeSearchTerm(value))
        .filter(Boolean),
    ),
  );
}

function uniqueValues(values: string[]) {
  return Array.from(
    new Set(
      values
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  );
}

function parseCsvRow(line: string) {
  const result: string[] = [];
  let current = '';
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === ',' && !quoted) {
      result.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
}

function parseCsv(text: string) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    return [];
  }

  const headers = parseCsvRow(lines[0]).map((header) => normalizeSearchTerm(header));
  return lines.slice(1).map((line) => {
    const values = parseCsvRow(line);
    return headers.reduce<Record<string, string>>((record, header, index) => {
      record[header] = values[index] ?? '';
      return record;
    }, {});
  });
}

function getCell(row: Record<string, string>, keys: string[]) {
  for (const key of keys) {
    const normalizedKey = normalizeSearchTerm(key);
    if (row[normalizedKey]) {
      return row[normalizedKey];
    }
  }

  return '';
}

function createExternalCompanyRecord(
  row: Record<string, string>,
  provider: CsvProvider,
): CompanyRecord | null {
  const name = getCell(row, ['name', 'company', 'company name', 'organization', 'organization name']);
  if (!name) {
    return null;
  }

  const website = getCell(row, ['website', 'domain', 'company website', 'homepage url']);
  const email = getCell(row, ['email', 'contact email']);
  const city = getCell(row, ['city', 'locality']);
  const country = getCell(row, ['country', 'country code']);
  const location = [city, country].filter(Boolean).join(', ') || 'Global';
  const industry = getCell(row, ['industry', 'sector', 'categories', 'category']) || 'Business';
  const description = getCell(row, ['description', 'about', 'summary']) || `${name} imported from ${provider.name}.`;
  const founded = getCell(row, ['founded', 'founded year', 'year founded']) || 'N/A';
  const phone = getCell(row, ['phone', 'telephone', 'contact phone']) || 'N/A';
  const websiteHost = extractHostname(website);
  const aliases = uniqueTerms([
    getCell(row, ['legal name']),
    getCell(row, ['alternate name']),
    getCell(row, ['company number', 'company no', 'registration number', 'registration no', 'license number']),
    getCell(row, ['linkedin', 'linkedin url', 'linkedin company page']),
    getCell(row, ['directory', 'directory url', 'profile url', 'crunchbase url']),
    website,
    websiteHost,
    country,
    city,
    name,
    stripCorporateSuffixes(name),
  ]);

  return {
    id: slugify(`${name}-${website || provider.name}`),
    name,
    aliases,
    location: {
      en: location,
      ar: location,
      fr: location,
    },
    industry: {
      en: industry,
      ar: industry,
      fr: industry,
    },
    status: 'verified',
    score: provider.priority >= 100 ? 96 : provider.priority >= 70 ? 84 : 72,
    website,
    email,
    phone,
    founded,
    description: {
      en: description,
      ar: description,
      fr: description,
    },
    sector: {
      en: industry,
      ar: industry,
      fr: industry,
    },
    documents: [],
    sources: uniqueValues([
      provider.name,
      getCell(row, ['directory', 'directory name', 'source']),
      getCell(row, ['crunchbase', 'crunchbase url']),
      getCell(row, ['linkedin', 'linkedin url']),
    ]),
    sourcePriority: provider.priority,
  };
}

let externalCompaniesCache: Promise<CompanyRecord[]> | null = null;
let unifiedDirectoryCache: Promise<CompanyRecord[]> | null = null;

async function loadExternalCompanies() {
  if (externalCompaniesCache) {
    return externalCompaniesCache;
  }

  externalCompaniesCache = (async () => {
    const providers = csvProviders.filter((provider) => provider.url);

    if (!providers.length) {
      return [];
    }

    const records = await Promise.all(
      providers.map(async (provider) => {
        try {
          const response = await fetch(provider.url!, {cache: 'no-store'});
          if (!response.ok) {
            return [];
          }

          const text = await response.text();
          return parseCsv(text)
            .map((row) => createExternalCompanyRecord(row, provider))
            .filter((company): company is CompanyRecord => company !== null);
        } catch {
          return [];
        }
      }),
    );

    const deduped = new Map<string, CompanyRecord>();

    for (const companies of records) {
      for (const company of companies) {
        const key = normalizeSearchTerm(company.website || company.name);
        const existing = deduped.get(key);

        if (!existing || company.sourcePriority > existing.sourcePriority) {
          deduped.set(key, company);
        } else if (existing) {
          existing.sources = Array.from(new Set([...existing.sources, ...company.sources]));
        }
      }
    }

    return Array.from(deduped.values());
  })();

  return externalCompaniesCache;
}

export async function getUnifiedCompanyDirectory() {
  if (unifiedDirectoryCache) {
    return unifiedDirectoryCache;
  }

  unifiedDirectoryCache = (async () => {
    const external = await loadExternalCompanies();
    const merged = new Map<string, CompanyRecord>();

    for (const company of [...external, ...seedCompanies]) {
      const key = normalizeSearchTerm(company.website || company.name);
      const existing = merged.get(key);

      if (!existing || company.sourcePriority > existing.sourcePriority) {
        merged.set(key, company);
      } else if (existing) {
        existing.sources = Array.from(new Set([...existing.sources, ...company.sources]));
      }
    }

    return Array.from(merged.values());
  })();

  return unifiedDirectoryCache;
}

function buildSearchFields(company: CompanyRecord) {
  const websiteHost = extractHostname(company.website);
  const emailDomain = company.email.includes('@') ? company.email.split('@')[1] : '';
  const nameWithoutSuffix = stripCorporateSuffixes(company.name);

  return uniqueTerms([
    company.id,
    company.name,
    nameWithoutSuffix,
    company.website,
    websiteHost,
    company.email,
    emailDomain,
    company.location.en,
    company.location.ar,
    company.location.fr,
    company.industry.en,
    company.industry.ar,
    company.industry.fr,
    company.sector.en,
    company.sector.ar,
    company.sector.fr,
    company.description.en,
    company.description.ar,
    company.description.fr,
    ...company.aliases,
    ...company.sources,
  ]);
}

function scoreCompany(company: CompanyRecord, query: string): RankedCompany {
  const normalizedQuery = normalizeSearchTerm(query);
  if (!normalizedQuery) {
    return {
      company,
      relevance: 0,
      rank: company.sourcePriority * 100 + company.score,
    };
  }

  const fields = buildSearchFields(company);
  const queryTokens = tokenize(normalizedQuery);
  let relevance = 0;
  let matchedFields = 0;

  for (const field of fields) {
    if (!field) continue;

    let fieldScore = 0;

    if (field === normalizedQuery) {
      fieldScore += 260;
    } else if (field.startsWith(normalizedQuery)) {
      fieldScore += 180;
    } else if (field.includes(normalizedQuery)) {
      fieldScore += 120;
    }

    const matchedTokens = queryTokens.filter((token) => field.includes(token)).length;

    if (matchedTokens > 0) {
      fieldScore += matchedTokens * 24;

      if (matchedTokens === queryTokens.length) {
        fieldScore += 90;
      }
    }

    if (fieldScore > 0) {
      matchedFields += 1;
      relevance += fieldScore;
    }
  }

  if (!relevance) {
    return {
      company,
      relevance: 0,
      rank: 0,
    };
  }

  const rank = relevance * 1000 + matchedFields * 100 + company.sourcePriority * 10 + company.score;

  return {
    company,
    relevance,
    rank,
  };
}

export async function searchCompanies(query: string): Promise<SearchState> {
  const normalized = normalizeSearchTerm(query);
  const directory = await getUnifiedCompanyDirectory();

  if (!normalized) {
    return {
      mode: 'all',
      results: directory.sort((left, right) => right.sourcePriority - left.sourcePriority),
    };
  }

  const ranked = directory
    .map((company) => scoreCompany(company, normalized))
    .filter((item) => item.relevance > 0)
    .sort((left, right) => right.rank - left.rank);

  const minimumRelevance = normalized.includes(' ') ? 140 : 120;
  const matched = ranked.filter((item) => item.relevance >= minimumRelevance).map((item) => item.company);
  if (matched.length) {
    return {
      mode: 'match',
      results: matched,
    };
  }

  return {
    mode: 'suggested',
    results: ranked.slice(0, 8).map((item) => item.company),
  };
}

export async function getCompanyById(id: string) {
  const directory = await getUnifiedCompanyDirectory();
  return directory.find((company) => company.id === id) ?? null;
}
