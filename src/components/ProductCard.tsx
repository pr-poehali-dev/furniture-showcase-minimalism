
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  isNew?: boolean;
}

const ProductCard = ({ image, name, category, price, isNew = false }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Product image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="bg-white text-[#283618] hover:bg-[#F5F0E5] hover:text-[#606C38] h-10 w-10 rounded-full shadow-md"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="bg-white text-[#283618] hover:bg-[#F5F0E5] hover:text-[#606C38] h-10 w-10 rounded-full shadow-md"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-[#DDA15E] text-white text-xs font-medium px-2 py-1 rounded">
            Новинка
          </div>
        )}
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <div className="mb-1 text-sm text-[#606C38]">{category}</div>
        <h3 className="font-playfair text-lg font-medium text-[#283618] mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[#283618]">
            {price.toLocaleString()} ₽
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#606C38] hover:text-[#283618] hover:bg-[#F5F0E5] -mr-2"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
