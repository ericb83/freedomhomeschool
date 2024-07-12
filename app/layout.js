import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/navbar";
import Footer from "./components/ui/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freedom Homeschool",
  description:
    "A homeschool tracker for tracking hours and creating a transcript. Created by homeschoolers for homeschoolers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="aqua">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
