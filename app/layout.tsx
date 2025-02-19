import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Analytics } from '@vercel/analytics/next';
// css files
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "aos/dist/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/css/main.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Royal Orbit",
  description: "The Royal Orbit Home Stay",
  keywords: [
    "Hotel in Saharanpur",
    "The Royal Orbit",
    "Affordable hotel rooms",
    "Luxury hotel Saharanpur",
    "Best hotel near Court Road",
    "Hotel booking in Saharanpur",
    "Rooms with free Wi-Fi",
    "Hotel with parking Saharanpur",
  ],
  openGraph: {
    title: "The Royal Orbit - Best Hotel in Saharanpur",
    description:
      "Experience comfort and luxury at The Royal Orbit. Stay in spacious rooms with top-class amenities at an affordable price.",
    url: "https://theroyalorbit.vercel.app/",
    siteName: "The Royal Orbit",
    images: [
      {
        url: "https://theroyalorbit.vercel.app/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Royal Orbit Hotel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Orbit - Best Hotel in Saharanpur",
    description:
      "Looking for a comfortable stay in Saharanpur? Book your room at The Royal Orbit now!",
    images: ["https://theroyalorbit.vercel.app/cover-image.jpg"],
  },
  other: {
    "google-site-verification": "3fBWM1HmnoFQLD6S61nNMRT1bQ7NJ_2mas2oITm5D5g"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased index-page`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
        <Loader />


        {/* Vendor JS Files */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendor/php-email-form/validate.js" />
        <Script src="/assets/vendor/aos/aos.js" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />

      </body>
    </html>
  );
}
