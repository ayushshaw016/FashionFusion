import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavbarComp/Navbar";
import Footer from "@/components/FooterComp/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "fashionFusion",
  description: "Clothing Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
