
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 bg-beige-200 text-accent-purple rounded-full text-sm font-medium mb-6">
              Дизайнерская мебель, которую вы полюбите
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Переосмысли своё <span className="color-gradient">пространство</span> с необычной мебелью
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Откройте для себя уникальные предметы интерьера, созданные лучшими дизайнерами со всего мира для тех, кто ценит индивидуальность и нестандартные решения.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 text-white rounded-full px-8">
                Исследовать коллекции
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-beige-300 hover:bg-beige-200 rounded-full px-8">
                3D-тур по шоуруму
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 mt-12">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-beige-50 bg-accent-pink flex items-center justify-center text-white font-medium">
                  R
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-beige-50 bg-accent-orange flex items-center justify-center text-white font-medium">
                  M
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-beige-50 bg-accent-blue flex items-center justify-center text-white font-medium">
                  K
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-beige-50 bg-accent-green flex items-center justify-center text-white font-medium">
                  J
                </div>
              </div>
              <div>
                <span className="block text-sm">Более 2,000+ довольных</span>
                <span className="block text-sm font-medium">клиентов по всей России</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-accent">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" 
                alt="Современный интерьер с необычной мебелью" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-accent-pink opacity-20 animate-float"></div>
              <div className="absolute bottom-10 -left-10 w-20 h-20 rounded-full bg-accent-purple opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
              
              {/* Info card */}
              <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center text-white font-bold text-sm mr-2">
                    LS
                  </div>
                  <div>
                    <p className="text-sm font-medium">Люминесцентный стул</p>
                    <p className="text-xs text-muted-foreground">Дизайн: Марина Кузнецова</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-accent-purple font-bold">₽42,500</span>
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-full bg-accent-purple/10 hover:bg-accent-purple/20">
                    <ArrowRight className="h-3 w-3 text-accent-purple" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Badges */}
            <div className="absolute -top-4 left-10 bg-white rounded-full py-1 px-4 shadow-md">
              <span className="text-sm font-medium text-accent-pink">Новая коллекция</span>
            </div>
            <div className="absolute -bottom-4 right-24 bg-white rounded-full py-1 px-4 shadow-md">
              <span className="text-sm font-medium text-accent-blue">Эксклюзив</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
