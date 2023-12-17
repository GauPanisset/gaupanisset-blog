import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const description =
  "Gauthier's personal developer blog. Find his last projects here.";
const title = 'Gauthier Panisset';

const metadata: Metadata = {
  description,
  title,
  viewport: 'width=device-width,initial-scale=1',
};

const inter = Inter({ weight: ['400', '700', '900'], subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
