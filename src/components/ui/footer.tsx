
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">АкваМастер</h3>
            <p className="mb-4">
              Профессиональная школа плавания для всех возрастов.
              Мы обучаем плаванию с 2010 года.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>ул. Водная, 25, Москва, Россия</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@aquamaster.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400">О нас</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-blue-400">Программы</Link>
              </li>
              <li>
                <Link to="/prices" className="hover:text-blue-400">Цены</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-blue-400">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} АкваМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
