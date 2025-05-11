
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCarousel from '@/components/ProductCarousel';
import CategorySection from '@/components/CategorySection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "NovaHaus - Необычная дизайнерская мебель";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);

    return () => {
      // Clean up - remove the link if component unmounts
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Header />
      <div className="pt-20"> {/* Adding padding for fixed header */}
        <HeroSection />
        <ProductCarousel />
        <CategorySection />
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
