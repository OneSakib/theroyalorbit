import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
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
