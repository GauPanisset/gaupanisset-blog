import './globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

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

const inter = Inter({ weight: ['400', '700', '900'], subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          inter.className,
          'prose m-auto flex min-h-screen w-full max-w-7xl flex-col bg-background px-6 text-foreground dark:prose-invert lg:prose-xl sm:px-16'
        )}
      >
        <ThemeProvider>
          <NavigationBar />

          <main className="flex min-h-0 flex-1 flex-col overflow-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export { metadata, viewport };
export default RootLayout;
