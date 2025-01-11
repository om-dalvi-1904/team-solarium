import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { twMerge } from "tailwind-merge";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});





export const metadata: Metadata = {
  title: "Team Solarium",
  description: "Team Solarium, a student-run non-profit at Pimpri Chinchwad College of Engineering, designs and manufactures efficient solar electric vehicles for competitions across India. Uniting brilliant engineering minds, the team fosters innovation, real-world problem-solving, and career-ready skills in electric mobility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(`antialiased bg-black`, poppins.className)}
      >
        {children}
      </body>
    </html>
  );
}
