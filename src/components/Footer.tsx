
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-beige-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 mb-16 shadow-lg hover-lift">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-3">Подпишитесь на новости</h3>
              <p className="text-muted-foreground">
                Будьте в курсе новых коллекций, специальных предложений и эксклюзивных мероприятий
              </p>
            </div>
            
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 rounded-full border-beige-200 focus-visible:ring-accent-purple bg-beige-50"
                />
                <Button type="submit" className="bg-accent-purple hover:bg-accent-purple/90 text-white rounded-full px-6">
                  Подписаться
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Подписываясь, вы соглашаетесь с нашей <Link to="/privacy" className="underline hover:text-accent-purple">политикой конфиденциальности</Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">
                <span className="text-accent-purple">NOVA</span>
                <span className="text-accent-pink">HAUS</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Мы создаем необычную дизайнерскую мебель, которая становится центром внимания и меняет представление о жилом пространстве.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-beige-200">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-beige-200">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-beige-200">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-beige-200">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-accent-purple transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-accent-purple transition-colors">
                  Магазин
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-accent-purple transition-colors">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/designers" className="hover:text-accent-purple transition-colors">
                  Дизайнеры
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-purple transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent-purple transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-purple transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Категории</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/biomorphic" className="hover:text-accent-purple transition-colors">
                  Биоморфная мебель
                </Link>
              </li>
              <li>
                <Link to="/category/interactive" className="hover:text-accent-purple transition-colors">
                  Интерактивная мебель
                </Link>
              </li>
              <li>
                <Link to="/category/modular" className="hover:text-accent-purple transition-colors">
                  Модульная мебель
                </Link>
              </li>
              <li>
                <Link to="/category/eco" className="hover:text-accent-purple transition-colors">
                  Экологичная мебель
                </Link>
              </li>
              <li>
                <Link to="/category/multifunctional" className="hover:text-accent-purple transition-colors">
                  Многофункциональная мебель
                </Link>
              </li>
              <li>
                <Link to="/category/limited" className="hover:text-accent-purple transition-colors">
                  Лимитированные коллекции
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-purple mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  ул. Архитекторов, 15<br />
                  Москва, 123456<br />
                  Россия
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-purple mr-3 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-purple mr-3 flex-shrink-0" />
                <span>hello@novahaus.ru</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Часы работы:</h4>
              <p className="text-muted-foreground">
                Пн-Пт: 10:00 - 20:00<br />
                Сб-Вс: 11:00 - 18:00
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-beige-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NovaHaus. Все права защищены.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/terms" className="text-sm hover:text-accent-purple transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm hover:text-accent-purple transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/shipping" className="text-sm hover:text-accent-purple transition-colors">
              Доставка и возврат
            </Link>
            <Link to="/faq" className="text-sm hover:text-accent-purple transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
