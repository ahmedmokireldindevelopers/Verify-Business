import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'ar', 'fr'] as const;

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales});
