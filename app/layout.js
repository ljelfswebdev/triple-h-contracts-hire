import Head from "next/head";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import AnimateRoot from "@/components/functions/animations/animations";

export const metadata = {
  title: "Triple H Contract & Hire",
  description:
    "Triple H Contracts & Hire: Powering National Highways with precision logistics, cutting-edge JCB machinery, and the muscle to move what matters — safely, reliably, on time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Triple H Contract & Hire" />
        <meta
          property="og:description"
          content="Powering National Highways with precision logistics and cutting-edge JCB machinery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Triple H Contract & Hire" />
        <meta
          name="twitter:description"
          content="Delivering excellence in highways and logistics across the UK."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://yourdomain.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <AnimateRoot />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}