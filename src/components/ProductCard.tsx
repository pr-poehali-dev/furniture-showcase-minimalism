
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye, Star, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  designer: string;
  price: number;
  images: string[];
  isNew?: boolean;
  rating?: number;
  isLimited?: boolean;
}

const ProductCard = ({ 
  id,
  name, 
  designer, 
  price, 
  images, 
  isNew = false,
  rating = 4.5,
  isLimited = false
}: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="group relative hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl bg-beige-100 aspect-[3/4]">
        <img 
          src={images[currentImageIndex]} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onClick={nextImage}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="inline-block bg-accent-purple text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Новинка
            </span>
          )}
          {isLimited && (
            <span className="inline-block bg-accent-orange text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Лимитед
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className={`absolute right-4 top-4 flex flex-col gap-2 transition-transform duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full shadow-lg">
            <Heart className="h-4 w-4 text-accent-pink" />
          </Button>
          <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full shadow-lg">
            <Eye className="h-4 w-4 text-accent-blue" />
          </Button>
        </div>
        
        {/* Quick add button */}
        <div className={`absolute bottom-4 inset-x-4 transition-transform duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button className="w-full bg-white hover:bg-white/90 text-foreground rounded-xl shadow-lg">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Добавить в корзину
          </Button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="mt-4 px-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">Дизайнер: {designer}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-accent-orange text-accent-orange" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold color-gradient">
            {price.toLocaleString()} ₽
          </p>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-beige-100">
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
