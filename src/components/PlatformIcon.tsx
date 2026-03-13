import type {SVGProps} from 'react';
import type {ReactNode} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export type PlatformId =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'snapchat'
  | 'whatsapp'
  | 'x'
  | 'google'
  | 'youtube'
  | 'linkedin'
  | 'telegram'
  | 'pinterest'
  | 'threads';

export type CountryFlagId =
  | 'sa'
  | 'ae'
  | 'eg'
  | 'qa'
  | 'kw'
  | 'bh'
  | 'om'
  | 'jo'
  | 'lb'
  | 'iq'
  | 'ma'
  | 'tn'
  | 'dz'
  | 'ng'
  | 'za'
  | 'ke'
  | 'gb'
  | 'us'
  | 'ca'
  | 'eu';

function baseProps(props: IconProps) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    ...props,
  };
}

function flagProps(props: IconProps) {
  return {
    viewBox: '0 0 64 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    ...props,
  };
}

export function PlatformIcon({
  platform,
  className,
  ...props
}: IconProps & {platform: PlatformId}) {
  switch (platform) {
    case 'facebook':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#1877F2" />
          <path
            d="M13.55 20V12.73h2.4l.36-2.83h-2.76V8.1c0-.82.22-1.39 1.4-1.39H16V4.18c-.2-.03-.89-.08-1.69-.08-1.67 0-2.82 1.02-2.82 2.9v2.9H9.2v2.83h2.29V20h2.06Z"
            fill="#fff"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...baseProps(props)} className={className}>
          <defs>
            <linearGradient id="ig-gradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F58529" />
              <stop offset="0.45" stopColor="#DD2A7B" />
              <stop offset="0.8" stopColor="#8134AF" />
              <stop offset="1" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="url(#ig-gradient)" />
          <rect x="7" y="7" width="10" height="10" rx="5" stroke="#fff" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.8" r="1.2" fill="#fff" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#111" />
          <path d="M12.6 6.3v7.35a2.3 2.3 0 1 1-1.7-2.2v-1.88a4.04 4.04 0 1 0 3.68 4.03v-3.2a5.1 5.1 0 0 0 2.9.9V9.36a3.39 3.39 0 0 1-2.9-3.06H12.6Z" fill="#25F4EE" opacity="0.85" />
          <path d="M13.15 5.9v7.25a2.3 2.3 0 1 1-1.7-2.2v1.3a1 1 0 1 0 .72.97V7.8c1.06 1.03 2.45 1.61 3.96 1.64v1.84a5.26 5.26 0 0 1-2.98-.92v2.82a4.04 4.04 0 1 1-2.98-3.9V7.4h.98a3.38 3.38 0 0 0 2-1.5Z" fill="#FE2C55" opacity="0.9" />
          <path d="M13.02 5.82c.3 1.35 1.35 2.4 2.69 2.7v1.17a4.58 4.58 0 0 1-2.69-1.07v4.45a3.52 3.52 0 1 1-2.58-3.39v1.22a2.3 2.3 0 1 0 1.6 2.2V5.82h.98Z" fill="#fff" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#FFFC00" />
          <path
            d="M12 5.9c1.85 0 3.15 1.33 3.15 3.42 0 .38-.05.76-.14 1.1.29.31.67.6 1.12.8.25.11.38.39.31.65-.08.27-.34.45-.62.44-.24 0-.48-.03-.7-.08-.43.95-1.27 1.62-2.37 1.88l-.24 1.07h-.92l-.24-1.07c-1.1-.26-1.94-.93-2.37-1.88a2.95 2.95 0 0 1-.7.08.64.64 0 0 1-.62-.44.6.6 0 0 1 .31-.65c.45-.2.83-.49 1.12-.8-.09-.34-.14-.72-.14-1.1C8.85 7.23 10.15 5.9 12 5.9Z"
            fill="#111"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...baseProps(props)} className={className}>
          <circle cx="12" cy="12" r="10" fill="#25D366" />
          <path
            d="M17.28 15.63c-.23.65-1.35 1.25-1.86 1.3-.48.06-1.08.08-3.48-.96-3.07-1.33-5.05-4.6-5.2-4.8-.14-.2-1.24-1.64-1.24-3.13 0-1.49.77-2.22 1.05-2.52.28-.29.6-.37.8-.37h.58c.18 0 .43-.07.67.51.25.6.83 2.08.9 2.23.07.15.11.33.02.53-.09.2-.14.33-.28.5-.14.17-.3.38-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.45.12.62-.08.17-.2.7-.82.89-1.1.18-.29.37-.24.62-.15.25.08 1.6.75 1.87.89.27.14.45.2.51.31.06.11.06.65-.17 1.3Z"
            fill="#fff"
          />
        </svg>
      );
    case 'x':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#111" />
          <path d="M7 6h2.66l3.18 4.43L16.6 6H18l-4.52 5.13L18 18h-2.67l-3.45-4.8L7.45 18H6l5.02-5.7L7 6Z" fill="#fff" />
        </svg>
      );
    case 'google':
      return (
        <svg {...baseProps(props)} className={className}>
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <path d="M20.18 12.25c0-.63-.06-1.08-.18-1.56H12v3.04h4.7c-.09.76-.57 1.9-1.64 2.67l-.01.1 2.38 1.84.16.02c1.48-1.36 2.59-3.35 2.59-6.11Z" fill="#4285F4" />
          <path d="M12 20.5c2.3 0 4.23-.76 5.63-2.06l-2.68-2.07c-.72.5-1.69.86-2.95.86-2.25 0-4.15-1.48-4.83-3.53l-.1.01-2.47 1.92-.03.09A8.5 8.5 0 0 0 12 20.5Z" fill="#34A853" />
          <path d="M7.17 13.7A5.12 5.12 0 0 1 6.9 12c0-.59.1-1.15.26-1.7l-.01-.11-2.5-1.95-.08.04A8.49 8.49 0 0 0 3.5 12c0 1.35.32 2.63.89 3.76l2.78-2.06Z" fill="#FBBC05" />
          <path d="M12 6.77c1.6 0 2.68.68 3.3 1.25l2.41-2.35C16.22 4.29 14.3 3.5 12 3.5a8.5 8.5 0 0 0-7.43 4.78l2.59 2.02c.69-2.05 2.59-3.53 4.84-3.53Z" fill="#EA4335" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="5" width="20" height="14" rx="5" fill="#FF0000" />
          <path d="M10 9.2v5.6l5-2.8-5-2.8Z" fill="#fff" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0A66C2" />
          <circle cx="7.3" cy="8" r="1.2" fill="#fff" />
          <path d="M6.2 10h2.2v7.8H6.2zM10 10h2.1v1.06h.03c.3-.56 1.01-1.22 2.08-1.22 2.22 0 2.63 1.46 2.63 3.36V17h-2.2v-3.28c0-.78-.01-1.79-1.1-1.79-1.1 0-1.26.85-1.26 1.73V17H10V10Z" fill="#fff" />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...baseProps(props)} className={className}>
          <circle cx="12" cy="12" r="10" fill="#24A1DE" />
          <path d="M17.26 7.57 6.95 11.54c-.7.28-.69.67-.12.84l2.65.83 1.02 3.28c.12.34.06.48.42.48.28 0 .4-.13.56-.28l1.44-1.4 2.99 2.2c.55.3.95.15 1.09-.52l1.87-8.84c.21-.83-.31-1.2-.9-.93Zm-5.36 6.53-.22 2.08-.5-1.66 5.82-5.25-5.1 4.83Z" fill="#fff" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg {...baseProps(props)} className={className}>
          <circle cx="12" cy="12" r="10" fill="#E60023" />
          <path d="M12.55 5.2c-3.1 0-4.66 2.22-4.66 4.07 0 1.12.42 2.11 1.32 2.48.15.06.28 0 .32-.16l.12-.47c.04-.16.02-.22-.1-.35-.26-.31-.43-.72-.43-1.3 0-1.68 1.26-3.19 3.28-3.19 1.79 0 2.77 1.1 2.77 2.56 0 1.93-.85 3.56-2.11 3.56-.7 0-1.22-.57-1.05-1.28.2-.84.6-1.75.6-2.36 0-.54-.29-.99-.9-.99-.72 0-1.29.74-1.29 1.72 0 .63.21 1.06.21 1.06l-.85 3.6c-.25 1.06-.04 2.36-.02 2.49.01.07.1.09.14.03.06-.07.8-.99 1.05-1.9.07-.26.42-1.63.42-1.63.2.39.8.74 1.43.74 1.88 0 3.15-1.71 3.15-4 0-1.74-1.48-3.36-3.73-3.36Z" fill="#fff" />
        </svg>
      );
    case 'threads':
      return (
        <svg {...baseProps(props)} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="#111" />
          <path
            d="M15.48 11.08c-.28-.1-.57-.18-.88-.23-.2-1.68-1.4-2.65-3.36-2.65-2.08 0-3.44 1.15-3.6 2.95h1.88c.08-.8.7-1.27 1.67-1.27.96 0 1.48.42 1.64 1.3-1.92.03-4.6.44-4.6 2.93 0 1.67 1.29 2.7 3.28 2.7 2.17 0 3.64-1.17 3.64-3.08 0-.34-.06-.65-.18-.95.56.25.9.68.9 1.3 0 1.17-1.05 2-2.63 2.1v1.62c2.61-.07 4.47-1.55 4.47-3.74 0-1.45-.85-2.46-2.23-2.98Z"
            fill="#fff"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function FlagBadge({
  emoji,
  children,
  className,
}: {
  emoji?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl shadow-[0_10px_30px_rgba(5,15,30,0.2)] backdrop-blur-sm ${className ?? ''}`}
    >
      {children ?? emoji}
    </span>
  );
}

export function CountryFlag({
  country,
  className,
  ...props
}: IconProps & {country: CountryFlagId}) {
  switch (country) {
    case 'sa':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#006C35" />
          <rect x="15" y="17" width="34" height="3" rx="1.5" fill="#fff" />
          <rect x="20" y="29" width="24" height="2.5" rx="1.25" fill="#fff" />
          <rect x="42" y="28" width="8" height="2.5" rx="1.25" fill="#fff" />
        </svg>
      );
    case 'ae':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#fff" />
          <rect width="16" height="48" rx="8" fill="#FF0000" />
          <rect x="16" width="48" height="16" fill="#00732F" />
          <rect x="16" y="16" width="48" height="16" fill="#fff" />
          <rect x="16" y="32" width="48" height="16" rx="0 0 8 0" fill="#000" />
        </svg>
      );
    case 'eg':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="16" rx="8" fill="#CE1126" />
          <rect y="16" width="64" height="16" fill="#fff" />
          <rect y="32" width="64" height="16" rx="0 0 8 8" fill="#000" />
          <rect x="28" y="18" width="8" height="12" rx="2" fill="#C8A24D" />
        </svg>
      );
    case 'qa':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#8D1B3D" />
          <rect width="22" height="48" rx="8" fill="#fff" />
          <path d="M22 0 26 3 22 6 26 9 22 12 26 15 22 18 26 21 22 24 26 27 22 30 26 33 22 36 26 39 22 42 26 45 22 48" fill="#8D1B3D" />
        </svg>
      );
    case 'kw':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect x="16" width="48" height="16" rx="0 8 0 0" fill="#007A3D" />
          <rect x="16" y="16" width="48" height="16" fill="#fff" />
          <rect x="16" y="32" width="48" height="16" rx="0 0 8 0" fill="#CE1126" />
          <path d="M0 0h18l12 10v28L18 48H0Z" fill="#000" />
        </svg>
      );
    case 'bh':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#CE1126" />
          <rect width="22" height="48" rx="8" fill="#fff" />
          <path d="M22 0 28 4.8 22 9.6 28 14.4 22 19.2 28 24 22 28.8 28 33.6 22 38.4 28 43.2 22 48" fill="#CE1126" />
        </svg>
      );
    case 'om':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#fff" />
          <rect width="16" height="48" rx="8" fill="#C8102E" />
          <rect x="16" width="48" height="16" fill="#fff" />
          <rect x="16" y="16" width="48" height="16" fill="#C8102E" />
          <rect x="16" y="32" width="48" height="16" rx="0 0 8 0" fill="#007A3D" />
        </svg>
      );
    case 'jo':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="16" rx="8" fill="#000" />
          <rect y="16" width="64" height="16" fill="#fff" />
          <rect y="32" width="64" height="16" rx="0 0 8 8" fill="#007A3D" />
          <path d="M0 0v48l30-24Z" fill="#CE1126" />
          <circle cx="10" cy="24" r="2.2" fill="#fff" />
        </svg>
      );
    case 'lb':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#fff" />
          <rect width="64" height="12" rx="8" fill="#ED1C24" />
          <rect y="36" width="64" height="12" rx="0 0 8 8" fill="#ED1C24" />
          <path d="M32 14 24 30h4l-3 8 7-5 7 5-3-8h4L32 14Z" fill="#00A651" />
        </svg>
      );
    case 'iq':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="16" rx="8" fill="#CE1126" />
          <rect y="16" width="64" height="16" fill="#fff" />
          <rect y="32" width="64" height="16" rx="0 0 8 8" fill="#000" />
          <rect x="22" y="21" width="20" height="5" rx="2.5" fill="#007A3D" />
        </svg>
      );
    case 'ma':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#C1272D" />
          <path d="m32 14 3.6 11.2H47l-9.2 6.8L41.4 43 32 36.2 22.6 43l3.6-11-9.2-6.8h11.4L32 14Z" stroke="#006233" strokeWidth="2.6" fill="none" />
        </svg>
      );
    case 'tn':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#E70013" />
          <circle cx="32" cy="24" r="11" fill="#fff" />
          <path d="M35 24a6 6 0 1 1-5.8-7.4 7 7 0 1 0 0 14.8A6 6 0 0 1 35 24Z" fill="#E70013" />
          <path d="m36.7 19.2 1.5 3.4 3.7.3-2.8 2.4.9 3.6-3.3-1.9-3.2 1.9.8-3.6-2.7-2.4 3.6-.3 1.5-3.4Z" fill="#E70013" />
        </svg>
      );
    case 'dz':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="32" height="48" rx="8 0 0 8" fill="#006233" />
          <rect x="32" width="32" height="48" rx="0 8 8 0" fill="#fff" />
          <path d="M38 24a10 10 0 1 1-9.2-12.4 11 11 0 1 0 0 24.8A10 10 0 0 1 38 24Z" fill="#D21034" />
          <path d="m34.8 19.2 1.6 3.8 4.1.3-3.1 2.7 1 3.9-3.6-2.1-3.6 2.1 1-3.9-3.1-2.7 4.1-.3 1.6-3.8Z" fill="#D21034" />
        </svg>
      );
    case 'ng':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="21.34" height="48" rx="8 0 0 8" fill="#008751" />
          <rect x="21.33" width="21.34" height="48" fill="#fff" />
          <rect x="42.66" width="21.34" height="48" rx="0 8 8 0" fill="#008751" />
        </svg>
      );
    case 'za':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#002395" />
          <path d="M0 0h64v24H0Z" fill="#DE3831" />
          <path d="M0 0v48l26-24Z" fill="#000" />
          <path d="M0 4v8l18 12L0 36v8l28-18Z" fill="#FFB612" />
          <path d="M0 7v5l16 12L0 36v5l24-17Z" fill="#007A4D" />
          <path d="M18 21 64 9v6L25 24l39 9v6L18 27Z" fill="#fff" />
        </svg>
      );
    case 'ke':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="16" rx="8" fill="#000" />
          <rect y="16" width="64" height="4" fill="#fff" />
          <rect y="20" width="64" height="8" fill="#BB0000" />
          <rect y="28" width="64" height="4" fill="#fff" />
          <rect y="32" width="64" height="16" rx="0 0 8 8" fill="#006600" />
          <ellipse cx="32" cy="24" rx="7" ry="12" fill="#BB0000" stroke="#fff" strokeWidth="2" />
        </svg>
      );
    case 'gb':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#012169" />
          <path d="M0 0 64 48M64 0 0 48" stroke="#fff" strokeWidth="10" />
          <path d="M0 0 64 48M64 0 0 48" stroke="#C8102E" strokeWidth="5" />
          <path d="M32 0v48M0 24h64" stroke="#fff" strokeWidth="14" />
          <path d="M32 0v48M0 24h64" stroke="#C8102E" strokeWidth="8" />
        </svg>
      );
    case 'us':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#fff" />
          {Array.from({length: 7}).map((_, index) => (
            <rect key={index} y={index * 6.86} width="64" height="3.43" fill="#B22234" />
          ))}
          <rect width="28" height="20" rx="8 0 6 0" fill="#3C3B6E" />
          {Array.from({length: 3}).map((_, row) =>
            Array.from({length: 4}).map((_, col) => (
              <circle key={`${row}-${col}`} cx={5 + col * 5.5} cy={4 + row * 5.5} r="1" fill="#fff" />
            )),
          )}
        </svg>
      );
    case 'ca':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#fff" />
          <rect width="16" height="48" rx="8 0 0 8" fill="#D52B1E" />
          <rect x="48" width="16" height="48" rx="0 8 8 0" fill="#D52B1E" />
          <path d="m32 11 2.4 6h5.6l-4.4 3.2 1.8 5.4-5.4-3.2-5.4 3.2 1.8-5.4-4.4-3.2h5.6L32 11Zm-1 14h2v12h-2Z" fill="#D52B1E" />
        </svg>
      );
    case 'eu':
      return (
        <svg {...flagProps(props)} className={className}>
          <rect width="64" height="48" rx="8" fill="#003399" />
          {[
            [32, 10], [40, 12], [46, 18], [48, 24], [46, 30], [40, 36],
            [32, 38], [24, 36], [18, 30], [16, 24], [18, 18], [24, 12],
          ].map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r="2" fill="#FFCC00" />
          ))}
        </svg>
      );
    default:
      return null;
  }
}
