import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pritamelectricals.in"),
  title: {
    default: "Pritam Electrical - Professional Electrical Contractors",
    template: "%s | Pritam Electrical",
  },
  description:
    "Expert electrical services for government and private projects. Licensed contractor providing professional electrical, civil, and mechanical solutions.",
  keywords: [
    "electrical contractor",
    "government contractor",
    "electrical services",
    "civil construction",
    "mechanical services",
    "West Bengal contractor",
    "WBSEDCL approved",
    "PWD registered",
    "industrial electrical",
    "commercial electrical",
    "emergency electrical",
    "electrical maintenance",
    "Kulpi electrical",
    "South 24 Parganas",
  ],
  authors: [{ name: "Pritam Electrical" }],
  creator: "Pritam Electrical",
  publisher: "Pritam Electrical",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pritamelectricals.in",
    title: "Pritam Electrical - Professional Electrical Contractors",
    description:
      "Expert electrical services for government and private projects. Licensed contractor providing professional electrical, civil, and mechanical solutions.",
    siteName: "Pritam Electrical",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pritam Electrical - Professional Electrical Contractors",
    description:
      "Expert electrical services for government and private projects. Licensed contractor providing professional electrical, civil, and mechanical solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
