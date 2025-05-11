
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FAF7F2] border-b border-[#E8E2D6] sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-playfair text-2xl font-bold text-[#283618]"
          >
            ELEGANCE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#283618] hover:text-[#606C38] transition-colors font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-[#283618] hover:text-[#606C38] transition-colors font-medium">
              Каталог
            </Link>
            <Link to="/collections" className="text-[#283618] hover:text-[#606C38] transition-colors font-medium">
              Коллекции
            </Link>
            <Link to="/about" className="text-[#283618] hover:text-[#606C38] transition-colors font-medium">
              О нас
            </Link>
            <Link to="/contact" className="text-[#283618] hover:text-[#606C38] transition-colors font-medium">
              Контакты
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-[#283618] hover:text-[#606C38] hover:bg-[#E8E2D6]">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#283618] hover:text-[#606C38] hover:bg-[#E8E2D6]">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-[#283618] hover:text-[#606C38] hover:bg-[#E8E2D6]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-[#E8E2D6] mt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="block text-[#283618] hover:text-[#606C38] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalog" 
                  className="block text-[#283618] hover:text-[#606C38] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="block text-[#283618] hover:text-[#606C38] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Коллекции
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-[#283618] hover:text-[#606C38] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-[#283618] hover:text-[#606C38] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
