import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';
import {routing} from "@/i18n/routing";

const locales = ['ru', 'en', 'uz'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>VBflare - Innovative IT Solutions</title>
        <meta name="description" content="VBflare - инновационная IT-компания, создающая цифровые решения будущего" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
