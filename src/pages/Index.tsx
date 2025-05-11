
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCarousel from '@/components/ProductCarousel';
import CategorySection from '@/components/CategorySection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "ELEGANCE - Мебельный магазин премиум-класса";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add Google Fonts for Playfair Display
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);

    return () => {
      // Clean up - remove the link if component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductCarousel />
        <CategorySection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
