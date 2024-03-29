import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ContextProvider from "@/_lib/Context/ContextProvider";
import MuiTheme from "@/_lib/MuiTheme";
import MainLayout from "@/container/MainLayout";
import { Providers } from "@/_lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ContextProvider>
            <MuiTheme>
              <MainLayout>
                {children}
              </MainLayout>
            </MuiTheme>
          </ContextProvider>
        </Providers>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
