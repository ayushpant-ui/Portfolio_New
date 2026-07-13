import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/src/components/navbar/Navbar'
import Footer from '@/src/components/Footer'
import ThemeSwitcher from "../components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Ayush Pant",
  description: "This is my personal portfolio website where I showcase my projects, skills, and experience . Explore my work and get in touch!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="overflow-x-hidden">
        <Navbar /> 
        {children}
        <Footer />
        {/* <ThemeSwitcher /> */}
        </body>
    </html>
  );
}
