import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const DEFAULT_LOCALES = ["en", "es"];

export const routing = defineRouting({
  locales: DEFAULT_LOCALES,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const {
  Link,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);
