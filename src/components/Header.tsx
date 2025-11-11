import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
    battery?: string;
    camera?: string;
  };
  badge?: string;
}

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  cart: {product: Product; quantity: number}[];
  removeFromCart: (productId: number) => void;
  compare: Product[];
  totalPrice: number;
  totalItems: number;
}

const Header = ({ activeSection, scrollToSection, cart, removeFromCart, compare, totalPrice, totalItems }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ВыборПро
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {['Главная', 'Каталог', 'Акции', 'О нас', 'Доставка', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors hover:text-purple-600 ${
                  activeSection === item ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-purple-600 to-pink-600">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Корзина покупок</SheetTitle>
                  <SheetDescription>
                    {totalItems} товаров на сумму {totalPrice.toLocaleString('ru-RU')} ₽
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <div key={item.product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.product.name}</h4>
                            <p className="text-sm text-gray-500">{item.quantity} шт. × {item.product.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                            <Icon name="Trash2" size={18} />
                          </Button>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-bold">Итого:</span>
                          <span className="text-2xl font-bold text-purple-600">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="GitCompare" size={20} />
                  {compare.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-orange-500 to-red-500">
                      {compare.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-4xl overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Сравнение товаров</SheetTitle>
                  <SheetDescription>Выбрано {compare.length} из 3 товаров</SheetDescription>
                </SheetHeader>
                <div className="mt-8">
                  {compare.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Добавьте товары для сравнения</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="text-left p-4 bg-gray-50">Характеристика</th>
                            {compare.map(product => (
                              <th key={product.id} className="p-4 bg-gray-50">
                                <div className="flex flex-col items-center gap-2">
                                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                                  <p className="font-semibold text-sm">{product.name}</p>
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-4 border-t font-medium">Цена</td>
                            {compare.map(product => (
                              <td key={product.id} className="p-4 border-t text-center">
                                <span className="text-lg font-bold text-purple-600">{product.price.toLocaleString('ru-RU')} ₽</span>
                              </td>
                            ))}
                          </tr>
                          {['processor', 'ram', 'storage', 'display', 'battery', 'camera'].map(spec => {
                            const hasSpec = compare.some(p => p.specs[spec as keyof typeof p.specs]);
                            if (!hasSpec) return null;
                            return (
                              <tr key={spec}>
                                <td className="p-4 border-t font-medium capitalize">
                                  {spec === 'processor' && 'Процессор'}
                                  {spec === 'ram' && 'Оперативная память'}
                                  {spec === 'storage' && 'Накопитель'}
                                  {spec === 'display' && 'Дисплей'}
                                  {spec === 'battery' && 'Батарея'}
                                  {spec === 'camera' && 'Камера'}
                                </td>
                                {compare.map(product => (
                                  <td key={product.id} className="p-4 border-t text-center text-sm">
                                    {product.specs[spec as keyof typeof product.specs] || '—'}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;