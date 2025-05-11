
import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Кресло Софи",
    category: "Кресла",
    price: 28500,
    isNew: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Диван Мадрид",
    category: "Диваны",
    price: 87900,
    isNew: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Комод Верона",
    category: "Хранение",
    price: 42000,
    isNew: false
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Стол Милан",
    category: "Столы",
    price: 35600,
    isNew: true
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    name: "Кровать Элиза",
    category: "Спальня",
    price: 64200,
    isNew: false
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    name: "Стул Барселона",
    category: "Стулья",
    price: 15900,
    isNew: true
  }
];

const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-[#FAF7F2] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#283618]">Популярные товары</h2>
            <p className="text-[#606C38] mt-2">Выбор наших клиентов</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="border-[#DDA15E] text-[#DDA15E] hover:bg-[#DDA15E]/10 disabled:opacity-50 h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={startIndex + visibleCount >= products.length}
              className="border-[#DDA15E] text-[#DDA15E] hover:bg-[#DDA15E]/10 disabled:opacity-50 h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div ref={carouselRef} className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-none" 
                style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)` }}
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  isNew={product.isNew}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            className="bg-[#606C38] hover:bg-[#283618] text-white transition-colors"
          >
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
