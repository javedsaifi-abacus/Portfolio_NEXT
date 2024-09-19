import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar"; // Adjust the import path if necessary

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Javed Saifi's Portfolio",
//   description: "Portfolio of Javed Saifi, showcasing skills, experience, and projects. MERN Stack Developer based in Faridabad, Haryana, India.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          <Navbar />
          <div className="content-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

