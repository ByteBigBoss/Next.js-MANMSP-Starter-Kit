import type { Metadata } from "next";
import "@/style/globals.css";
import '@mantine/core/styles.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import { theme } from "@/config/mantine-theme";
import Head from "next/head";

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import '@shoelace-style/shoelace/dist/themes/light.css';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.17.1/cdn/');

export const metadata: Metadata = {
  ...SiteMetadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto"/>
      </Head>
      <body className={`${poppins.className} antialiased bg-white dark:bg-black text-black dark:text-white relative`}>
       
        <ThemeProvider
        enableSystem
          attribute='class'
          defaultTheme='system'
          
        >
          <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Navbar />
          {children}
          <Footer />
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
