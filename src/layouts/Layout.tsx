import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      {/* Spacer to avoid navbar overlap for fixed nav */}
      <main className="flex-grow pt-20 md:pt-24 bg-[#F8FAFC]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
