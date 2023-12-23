'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

type Props = { children: React.ReactNode };

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
};

export { ThemeProvider };
