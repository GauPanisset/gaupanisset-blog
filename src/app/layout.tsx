import './globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { NavigationBar } from '@/business/navigation/navigation-bar';
import { ThemeProvider } from '@/business/theme/theme-provider';
import { cn } from '@/technical/ui/helpers';

const description =
  "Gauthier's personal developer blog. Find his last projects here.";
const title = 'Gauthier Panisset';

const metadata: Metadata = {
  description,
  title,
};

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          inter.className,
          inter.variable,
          'prose flex h-screen w-full max-w-none flex-col dark:prose-invert lg:prose-xl'
        )}
      >
        <ThemeProvider>
          <NavigationBar />
          <main className="m-auto flex min-h-0 w-full flex-1 flex-col overflow-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <Script
        src="https://statsy.observer/cl9lgmptj0009ld0bmgxz683f.js"
        defer={true}
      />
    </html>
  );
};

export { metadata, viewport };
export default RootLayout;
