
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Sparkles, Palette, Award } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
      <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Инновационный дизайн",
      description: "Каждое изделие воплощает в себе новаторские идеи, выходящие за рамки традиционного представления о мебели."
    },
    {
      icon: Sparkles,
      title: "Уникальность",
      description: "Многие модели выпускаются ограниченными сериями, что делает вашу мебель по-настоящему эксклюзивной."
    },
    {
      icon: Palette,
      title: "Индивидуализация",
      description: "Возможность кастомизации материалов, цветов и отделки для соответствия вашему интерьеру."
    },
    {
      icon: Award,
      title: "Качество исполнения",
      description: "Мы сотрудничаем только с мастерами высшего класса для создания долговечных и качественных изделий."
    }
  ];

  return (
    <section className="py-24 bg-beige-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent-pink opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent-purple opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-beige-200 text-accent-purple rounded-full text-sm font-medium mb-6">
              Почему NovaHaus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Выбирайте мебель, которая рассказывает вашу историю
            </h2>
            <p className="text-muted-foreground mb-8">
              Мы создаем не просто предметы интерьера, а произведения искусства, которые отражают вашу индивидуальность и становятся центром внимания в любом пространстве.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Прямое сотрудничество с дизайнерами — без посредников",
                "Производство в России с использованием импортных материалов",
                "Доставка по всей стране и сборка под ключ",
                "5 лет гарантии на все изделия"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-purple shrink-0 mt-0.5 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-accent-purple hover:bg-accent-purple/90 text-white rounded-full px-8">
              Узнать больше о нас
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-24 p-8 md:p-12 bg-white rounded-3xl shadow-lg relative">
          <div className="absolute -top-6 left-12 bg-accent-pink text-white px-6 py-2 rounded-full font-medium">
            Отзывы наших клиентов
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-beige-100 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80" 
                alt="Анна Кузнецова" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg md:text-xl italic mb-6">
                "Моя модульная система от NovaHaus стала не просто функциональной мебелью, но и настоящим произведением искусства в моей гостиной. Гости всегда восхищаются ее необычным дизайном и многофункциональностью."
              </p>
              
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Анна Кузнецова</p>
                  <p className="text-sm text-muted-foreground">Архитектор, Москва</p>
                </div>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-accent-orange fill-accent-orange" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
