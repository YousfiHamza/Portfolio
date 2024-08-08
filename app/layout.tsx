import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import clsx from 'clsx';

import { ThemeProvider } from '@/components/layouts/ThemeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hamza Yousfi',
  description: "Hamza's Modern Portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, 'relative')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}{' '}
        </ThemeProvider>
      </body>
    </html>
  );
}
