import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bzonemap",
  description: "generated for wafy fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.className} antialiased `}
      >
        <div className="md:flex-row flex flex-col h-screen">
          {/* Sidebar */}
          <div className="">
            <SidebarDemo />
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-hidden md:mt-[5dvh] m-3 mt-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
