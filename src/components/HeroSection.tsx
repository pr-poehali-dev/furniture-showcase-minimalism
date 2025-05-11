
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E5] min-h-[600px] md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
          alt="Элегантный интерьер" 
          className="object-cover w-full h-full opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E5]/90 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="max-w-xl md:max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#283618] mb-6 leading-tight">
            Искусство комфорта<br />в каждой детали
          </h1>
          
          <p className="text-lg md:text-xl text-[#606C38] mb-8 max-w-lg">
            Откройте для себя коллекцию мебели, созданную для тех, кто ценит элегантность, качество и аутентичность.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#606C38] hover:bg-[#283618] text-white px-8 py-6 rounded-md transition-colors"
            >
              Смотреть каталог
            </Button>
            
            <Button 
              variant="outline" 
              className="border-[#DDA15E] text-[#DDA15E] hover:bg-[#DDA15E]/10 px-8 py-6 rounded-md transition-colors"
            >
              Наши коллекции
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/80 backdrop-blur-sm p-3 rounded-lg text-[#283618] hidden md:block">
          <p className="font-playfair text-sm">
            Создаем с <span className="text-[#DDA15E]">1997</span> года
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
