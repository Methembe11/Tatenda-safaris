import "@fontsource/nanum-myeongjo/latin-400.css";
import "@fontsource/nanum-myeongjo/latin-700.css";
import "@fontsource/nunito-sans/latin-400.css";
import "@fontsource/nunito-sans/latin-700.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tatenda Safaris | Zimbabwe Safaris, Stays & Transport",
    template: "%s | Tatenda Safaris",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Zimbabwe safari",
    "Victoria Falls",
    "Hwange",
    "Mana Pools",
    "Zimbabwe accommodation",
    "Zimbabwe transport",
    "Tatenda Safaris",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "/",
    siteName: site.name,
    title: "Tatenda Safaris | Zimbabwe Safaris, Stays & Transport",
    description: site.description,
    images: [
      {
        url: "/images/hero-falls.jpg",
        width: 1800,
        height: 1100,
        alt: "Victoria Falls and the Zambezi River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatenda Safaris | Zimbabwe Safaris, Stays & Transport",
    description: site.description,
    images: ["/images/hero-falls.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ea",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZW",
    },
  };

  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
