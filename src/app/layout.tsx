import Footer from './component/footer';
import Navbar from './component/navbar'
import "./globals.css";
import { Inter } from 'next/font/google'
import type { Metadata } from "next";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Assiment 3',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

