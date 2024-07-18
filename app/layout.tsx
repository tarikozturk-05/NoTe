import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoTe",
  description: "Yaratmak yanlizca Allaha mahsustur.",
  icons:{
    icon:{
      // media:"(prefers-color-scheme: dark)",
      url:"/project-main-icon.png",
      href:"/project-main-icon.png",
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="jotion-theme-2"
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
