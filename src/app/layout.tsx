import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const Shabnam = localFont({
  src: [
    {
      path:'../../public/fonts/Shabnam/Shabnam-Thin.ttf',
      weight:'100',
      style:'normal',
    },
    {
      path:'../../public/fonts/Shabnam/Shabnam-Light.ttf',
      weight:'300',
      style:'normal',
    },
    {
      path:'../../public/fonts/Shabnam/Shabnam-Medium.ttf',
      weight:'500',
      style:'normal',
    },
    {
      path:'../../public/fonts/Shabnam/Shabnam.ttf',
      weight:'400',
      style:'normal',
    },
    {
      path:'../../public/fonts/Shabnam/Shabnam-Bold.ttf',
      weight:'700',
      style:'normal',
    },

  ]
  ,
  variable:'--font-Shabnam'
})
export const metadata: Metadata = {
  title: "gajino",
  description: "zohreh omidi ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  dir="rtl" className={`${Shabnam.variable}`}>
    <body>
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
    </body>
  </html>
  );
}
