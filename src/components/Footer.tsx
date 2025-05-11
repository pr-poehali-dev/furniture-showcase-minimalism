
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#283618] text-white pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-white inline-block mb-4">
              ELEGANCE
            </Link>
            <p className="text-[#F5F0E5]/80 mb-6 max-w-xs">
              Создаем интерьеры, которые вдохновляют. Наша мебель — это сочетание элегантного дизайна, качественных материалов и мастерства исполнения.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#DDA15E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#DDA15E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#DDA15E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Категории</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog/sofas" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Диваны
                </Link>
              </li>
              <li>
                <Link to="/catalog/tables" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Столы
                </Link>
              </li>
              <li>
                <Link to="/catalog/chairs" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Стулья
                </Link>
              </li>
              <li>
                <Link to="/catalog/beds" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Кровати
                </Link>
              </li>
              <li>
                <Link to="/catalog/storage" className="text-[#F5F0E5]/80 hover:text-[#DDA15E] transition-colors">
                  Шкафы и комоды
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Контактная информация</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#DDA15E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#F5F0E5]/80">
                  ул. Пушкина, д. 10, Москва, 123456, Россия
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#DDA15E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#F5F0E5]/80">
                  +7 (495) 123-45-67
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#DDA15E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#F5F0E5]/80">
                  info@elegance-furniture.ru
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F5F0E5]/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ELEGANCE. Все права защищены.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-[#F5F0E5]/60 hover:text-[#DDA15E] text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-[#F5F0E5]/60 hover:text-[#DDA15E] text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
