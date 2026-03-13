'use client';

import {useLocale} from 'next-intl';
import type {ReactNode, SVGProps} from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

function baseLogoProps(props: LogoProps) {
  return {
    viewBox: '0 0 156 42',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    ...props,
  };
}

function AramcoLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <defs>
        <linearGradient id="aramco-mark" x1="10" y1="7" x2="34" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EE7A6" />
          <stop offset="1" stopColor="#0B9C73" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="21" r="15" fill="url(#aramco-mark)" />
      <path d="m22 9.8 2.9 8.3H33l-6.7 4.9 2.6 8.2-6.9-4.8-6.9 4.8 2.6-8.2-6.7-4.9h8.1L22 9.8Z" fill="#fff" />
      <text x="46" y="26" fill="#F2FFFB" fontFamily="Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="700">
        aramco
      </text>
    </svg>
  );
}

function EmiratesLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <rect x="7" y="7" width="30" height="30" rx="9" fill="#D71920" />
      <path d="M18 14h10.8l-6.6 6 6.6 6H18l4.4-6-4.4-6Z" fill="#fff" />
      <text x="48" y="26" fill="#FFF2F2" fontFamily="Georgia, 'Times New Roman', serif" fontSize="17" fontWeight="700">
        Emirates
      </text>
    </svg>
  );
}

function StcLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <defs>
        <linearGradient id="stc-mark" x1="8" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D67DFF" />
          <stop offset="0.55" stopColor="#9F44FF" />
          <stop offset="1" stopColor="#5E1FD0" />
        </linearGradient>
      </defs>
      <rect x="7" y="7" width="30" height="30" rx="10" fill="url(#stc-mark)" />
      <path d="M15.5 16c1.7-1.4 5.6-2.1 8.8-1.3M15 25.5c2.2 1.5 6.1 1.9 10.1.8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <text x="48" y="27" fill="#F8F0FF" fontFamily="Segoe UI, Arial, sans-serif" fontSize="21" fontWeight="800">
        stc
      </text>
    </svg>
  );
}

function EAndLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <rect x="7" y="7" width="30" height="30" rx="10" fill="#111827" />
      <text x="13" y="26" fill="#FF4A4A" fontFamily="Segoe UI, Arial, sans-serif" fontSize="16" fontWeight="900">
        e&amp;
      </text>
      <text x="48" y="27" fill="#F3F4F6" fontFamily="Segoe UI, Arial, sans-serif" fontSize="21" fontWeight="900">
        e&amp;
      </text>
    </svg>
  );
}

function QatarEnergyLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <circle cx="22" cy="21" r="15" fill="#8D1B3D" />
      <path d="M22 10.2c4.1 5.3 4.1 15.3 0 20.6-4.1-5.3-4.1-15.3 0-20.6Z" fill="#fff" opacity="0.96" />
      <path d="M13 21c4-2.8 14-2.8 18 0-4 2.9-14 2.9-18 0Z" fill="#fff" opacity="0.96" />
      <text x="47" y="20" fill="#F7EAF0" fontFamily="Segoe UI, Arial, sans-serif" fontSize="14" fontWeight="800">
        Qatar
      </text>
      <text x="47" y="31" fill="#F7EAF0" fontFamily="Segoe UI, Arial, sans-serif" fontSize="14" fontWeight="600">
        Energy
      </text>
    </svg>
  );
}

function OoredooLogo(props: LogoProps) {
  return (
    <svg {...baseLogoProps(props)}>
      <g transform="translate(8 11)">
        {['o', 'o', 'r', 'e', 'd', 'o', 'o'].map((letter, index) => (
          <g key={`${letter}-${index}`} transform={`translate(${index * 13} 0)`}>
            <circle cx="7" cy="10" r="7" fill="#E5262A" />
            <text
              x="7"
              y="13"
              textAnchor="middle"
              fill="#fff"
              fontFamily="Segoe UI, Arial, sans-serif"
              fontSize="7.5"
              fontWeight="900"
            >
              {letter}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

type Company = {
  name: string;
  sector: string;
  accent: string;
  shine: string;
  logo: ReactNode;
};

function CompanyTile({company}: {company: Company}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] p-4 shadow-[0_18px_28px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-1">
      <div className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r ${company.shine}`} />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className={`absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${company.accent} blur-2xl opacity-20`} />
      </div>
      <div className="relative">
        <div className="mb-3">{company.logo}</div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200/85">
            {company.sector}
          </span>
          <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${company.accent} shadow-[0_0_14px_rgba(243,178,27,0.45)]`} />
        </div>
      </div>
    </div>
  );
}

const companies: Company[] = [
  {
    name: 'Aramco',
    sector: 'Energy',
    accent: 'from-[#1EE7A6] to-[#0B9C73]',
    shine: 'from-transparent via-[#27d8a8] to-transparent',
    logo: <AramcoLogo className="h-9 w-auto" />,
  },
  {
    name: 'Emirates',
    sector: 'Aviation',
    accent: 'from-[#FF6B6B] to-[#D71920]',
    shine: 'from-transparent via-[#ff6a6a] to-transparent',
    logo: <EmiratesLogo className="h-9 w-auto" />,
  },
  {
    name: 'stc',
    sector: 'Telecom',
    accent: 'from-[#D67DFF] to-[#5E1FD0]',
    shine: 'from-transparent via-[#c56dff] to-transparent',
    logo: <StcLogo className="h-9 w-auto" />,
  },
  {
    name: 'e&',
    sector: 'Digital',
    accent: 'from-[#FF5C5C] to-[#111827]',
    shine: 'from-transparent via-[#ff5c5c] to-transparent',
    logo: <EAndLogo className="h-9 w-auto" />,
  },
  {
    name: 'QatarEnergy',
    sector: 'Utilities',
    accent: 'from-[#B12B56] to-[#8D1B3D]',
    shine: 'from-transparent via-[#b12b56] to-transparent',
    logo: <QatarEnergyLogo className="h-9 w-auto" />,
  },
  {
    name: 'Ooredoo',
    sector: 'Connectivity',
    accent: 'from-[#FF5C5C] to-[#E5262A]',
    shine: 'from-transparent via-[#ff5c5c] to-transparent',
    logo: <OoredooLogo className="h-9 w-auto" />,
  },
];

export default function MiddleEastCompanyStrip() {
  const locale = useLocale();
  const copy = {
    en: {
      title: 'Regional Leaders',
      subtitle: 'Premium company marks tailored for the Gulf market',
      chip: 'Curated',
    },
    ar: {
      title: 'شركات إقليمية رائدة',
      subtitle: 'شعارات وهوية بصرية مختارة لسوق الخليج والشرق الأوسط',
      chip: 'مختارة',
    },
    fr: {
      title: 'Acteurs régionaux',
      subtitle: 'Logos premium sélectionnés pour le marché du Golfe',
      chip: 'Sélection',
    },
  }[locale as 'en' | 'ar' | 'fr'] ?? {
    title: 'Regional Leaders',
    subtitle: 'Premium company marks tailored for the Gulf market',
    chip: 'Curated',
  };

  return (
    <div className="mt-7 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-gold/80">
            {copy.title}
          </p>
          <p className="mt-1 text-xs text-slate-300/80">
            {copy.subtitle}
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
          {copy.chip}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {companies.map((company) => (
          <CompanyTile key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
}
