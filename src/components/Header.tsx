
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-beige-50 fixed top-0 left-0 right-0 z-50 border-b border-beige-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient">
              <span className="text-accent-purple">NOVA</span>
              <span className="text-accent-pink">HAUS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-accent-purple transition-colors">
              Главная
            </Link>
            <Link to="/shop" className="font-medium hover:text-accent-purple transition-colors">
              Магазин
            </Link>
            <Link to="/collections" className="font-medium hover:text-accent-purple transition-colors">
              Коллекции
            </Link>
            <Link to="/designers" className="font-medium hover:text-accent-purple transition-colors">
              Дизайнеры
            </Link>
            <Link to="/about" className="font-medium hover:text-accent-purple transition-colors">
              О нас
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-beige-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-beige-100">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-accent-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full hover:bg-beige-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-beige-50 absolute w-full">
          <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-accent-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/shop" 
              className="font-medium py-2 hover:text-accent-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Магазин
            </Link>
            <Link 
              to="/collections" 
              className="font-medium py-2 hover:text-accent-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Коллекции
            </Link>
            <Link 
              to="/designers" 
              className="font-medium py-2 hover:text-accent-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Дизайнеры
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-accent-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
