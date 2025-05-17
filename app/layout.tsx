import Navigation from "./components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aaron Min's Blog",
  description: "A blog about my journey in technology and life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
