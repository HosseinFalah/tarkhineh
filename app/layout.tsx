import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import "./globals.css";

const IranSansFont = localFont({
  src: [
    {
      path: "../public/fonts/woff2/IRANSansX-Thin.woff2",
      weight: "100",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-UltraLight.woff2",
      weight: "200",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-Light.woff2",
      weight: "300",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/woff2/IRANSansX-DemiBold.woff2",
      weight: "600",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-ExtraBold.woff2",
      weight: "800",
      style: "normal", 
    },
    {
      path: "../public/fonts/woff2/IRANSansX-Black.woff2",
      weight: "900",
      style: "normal", 
    }
  ],
  variable: '--font-iran-sans'
})

export const metadata: Metadata = {
  title: "ترخینه",
  description: "یک پروژه طراحی رابط سفارش غذا بصورت آنلاین برای رستوران‌های زنجیره‌ای ترخینه است که توسط ما طراحی و تکمیل شده است",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${IranSansFont.variable} font-sans`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;