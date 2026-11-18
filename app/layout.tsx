import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import themeConfig from '@/theme/themeConfig';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPInitializer from "@/components/GSAPInitializer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ThreeBackground from "@/components/ThreeBackground";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Sonu | MERN Stack Developer (2+ Years Experience)",
  description: "Portfolio of Sonu - MERN Stack Developer with 2 years of experience in React, Next.js, Node.js, Express, MongoDB, AWS cloud deployment, and automated testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={themeConfig}>
            <GSAPInitializer />
            <ThreeBackground />
            <CustomCursor />
            <SmoothScroll>
              <Navbar />
              <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
