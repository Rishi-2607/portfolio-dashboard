import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Rishikant Yadav — Full-Stack Developer | MERN & Next.js',
  description:
    'Full-stack developer with 1+ year of professional experience building scalable web applications using the MERN stack and Next.js. Specializing in clean code, responsive design, and production-grade web solutions.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090e11] text-[#f4f8fa] antialiased selection:bg-[#C1FF72]/30 selection:text-[#C1FF72]">
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frishikant3509back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  );
}
