import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata: Metadata = {
  title: 'Canal FinSolutions — Strategic Financial Consulting',
  description: 'Canal FinSolutions provides expert financial & accounting consulting, CFO services, and business growth strategies for sustainable success.',
  keywords: 'financial consulting, CFO services, business growth, accounting, canal finsolutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-bg">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
