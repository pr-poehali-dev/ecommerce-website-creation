import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Icon name="Cpu" className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold">ВыборПро</span>
            </div>
            <p className="text-slate-400 text-sm">Электроника нового поколения</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Ноутбуки</li>
              <li>Смартфоны</li>
              <li>Планшеты</li>
              <li>Аксессуары</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>О компании</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Гарантия</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+7 (495) 123-45-67</li>
              <li>info@viborpro.ru</li>
              <li>Пн-Вс: 10:00 - 22:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 ВыборПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;