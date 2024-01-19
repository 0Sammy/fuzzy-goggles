import type { Metadata } from 'next'
import { roboto } from "../fonts";
import '../globals.css';
import { Toaster } from 'sonner';

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: 'Target Express Holdings',
  description: `Welcome to Target Express Holdings, your premier destination for seamless courier solutions! At Target Express Holdings, we take pride in being more than just a courier service. We're your reliable partner in connecting people and businesses across the globe.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Toaster richColors position="top-center" closeButton />
        <Footer />
      </body>
    </html>
  )
}
