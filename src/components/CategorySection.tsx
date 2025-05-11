
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}

const CategoryCard = ({ title, description, image, color, link }: CategoryCardProps) => {
  return (
    <Link 
      to={link}
      className="group block rounded-3xl overflow-hidden relative hover-lift"
    >
      {/* Background image with overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 opacity-80 ${color} transition-opacity duration-300 group-hover:opacity-90`} />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 max-w-xs">{description}</p>
        </div>
        
        <div className="flex items-center text-white mt-4 overflow-hidden">
          <span className="flex items-center font-medium transform group-hover:translate-x-0 translate-x-6 transition-transform duration-300">
            Просмотреть
            <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <div className="flex-grow h-[1px] bg-white/30 ml-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Биоморфная мебель",
      description: "Мебель, вдохновленная органическими формами природы",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
      color: "bg-accent-purple",
      link: "/category/biomorphic"
    },
    {
      title: "Интерактивная мебель",
      description: "Мебель с интегрированными технологиями и светом",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "bg-accent-pink",
      link: "/category/interactive"
    },
    {
      title: "Модульная мебель",
      description: "Трансформируемые предметы для адаптивных пространств",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "bg-accent-blue",
      link: "/category/modular"
    },
    {
      title: "Экологичная мебель",
      description: "Устойчивые материалы и инновационные технологии переработки",
      image: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "bg-accent-green",
      link: "/category/eco"
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Уникальные категории</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте коллекции необычной мебели, которая сочетает в себе инновационный дизайн, функциональность и эстетику
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        
        {/* Static highlight box */}
        <div className="mt-16 rounded-3xl bg-beige-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Коллаборации с художниками</h3>
              <p className="text-muted-foreground mb-6">
                Откройте для себя лимитированные коллекции, созданные в сотрудничестве с современными художниками и дизайнерами. Каждое изделие – это произведение искусства, которое станет акцентом в вашем доме.
              </p>
              <Link 
                to="/collaborations"
                className="inline-flex items-center text-accent-purple font-medium hover:underline"
              >
                Исследовать коллаборации
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Artist collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent-pink text-white rounded-full px-4 py-2 font-medium shadow-lg">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
