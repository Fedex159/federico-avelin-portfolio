import { routing } from "@/i18n/routing";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { SC } from "./layout.styles";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Federico Avelin | FullStack Web Developer",
  description: "Portfolio of Federico Avelin, a FullStack Web Developer",
  openGraph: {
    url: "https://fede-avelin-dev.vercel.app",
    type: "website",
    siteName: "Portfolio of Federico Avelin",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <SC.Body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Toaster position="top-right" />
          {children}
        </NextIntlClientProvider>
      </SC.Body>
    </html>
  );
}
