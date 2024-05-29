import './globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { NavigationBar } from '@/business/navigation/navigation-bar';
import { ThemeProvider } from '@/business/theme/theme-provider';
import { AnalyticsScript } from '@/technical/analytics/analytics-script';
import { SpeedInsightsScript } from '@/technical/analytics/speed-insights-script';

const metadata: Metadata = {
  description:
    "Gauthier's personal developer blog. Find his last projects here.",
  metadataBase: new URL('https://gauthier.panisset.fr'),
  title: 'Gauthier Panisset',
};

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true} className={inter.variable}>
      <body className="prose flex h-screen w-full max-w-none flex-col dark:prose-invert lg:prose-xl">
        <ThemeProvider>
          <NavigationBar />
          <main className="m-auto flex min-h-0 w-full flex-1 flex-col overflow-auto">
            {children}
          </main>
        </ThemeProvider>
        <SpeedInsightsScript />
      </body>
      <AnalyticsScript />
    </html>
  );
};

export { metadata, viewport };
export default RootLayout;
