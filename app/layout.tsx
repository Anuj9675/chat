import type { Metadata } from 'next';
import './globals.css';
import { Provider } from '../src/providers';
export const metadata: Metadata = {
  title: 'Chat',
  description: 'Under Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={' font-indivisible h-screen antialiased'}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
