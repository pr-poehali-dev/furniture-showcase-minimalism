
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  link: string;
}

const CategoryCard = ({ title, image, count, link }: CategoryCardProps) => {
  return (
    <Link 
      to={link}
      className="group overflow-hidden rounded-lg relative h-80 block"
    >
      {/* Background image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent group-hover:via-black/35 transition-colors duration-300" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
        <h3 className="font-playfair text-white text-2xl font-medium mb-1.5 group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-3 group-hover:translate-x-2 transition-transform duration-300 delay-75">
          {count} товаров
        </p>
        <span className="inline-block py-2 px-4 bg-[#FAF7F2] text-[#283618] rounded-md font-medium text-sm transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          Смотреть категорию
        </span>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Диваны",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      count: 32,
      link: "/catalog/sofas"
    },
    {
      title: "Столы",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      count: 45,
      link: "/catalog/tables"
    },
    {
      title: "Стулья",
      image: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      count: 28,
      link: "/catalog/chairs"
    },
    {
      title: "Кровати",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      count: 21,
      link: "/catalog/beds"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-[#283618] mb-3">Категории мебели</h2>
          <p className="text-[#606C38] max-w-xl mx-auto">
            Откройте для себя нашу коллекцию мебели, созданную с любовью к деталям и уважением к материалам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/catalog" 
            className="inline-block py-2.5 px-6 border border-[#DDA15E] text-[#DDA15E] rounded-md hover:bg-[#DDA15E]/10 transition-colors font-medium"
          >
            Все категории
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
