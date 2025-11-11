import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: 'Ноутбуки',
    price: 289990,
    oldPrice: 319990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      processor: 'Apple M3 Pro',
      ram: '32 ГБ',
      storage: '1 ТБ SSD',
      display: '16.2" Liquid Retina XDR'
    },
    badge: 'ХИТ'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    category: 'Смартфоны',
    price: 134990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      processor: 'A17 Pro',
      ram: '8 ГБ',
      storage: '256 ГБ',
      display: '6.7" Super Retina XDR',
      camera: '48 МП'
    },
    badge: 'НОВИНКА'
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    category: 'Аксессуары',
    price: 24990,
    oldPrice: 29990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      battery: 'до 6 часов',
    },
    badge: 'АКЦИЯ'
  },
  {
    id: 4,
    name: 'iPad Air 11"',
    category: 'Планшеты',
    price: 69990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      processor: 'Apple M2',
      ram: '8 ГБ',
      storage: '128 ГБ',
      display: '11" Liquid Retina'
    }
  },
  {
    id: 5,
    name: 'Apple Watch Ultra 2',
    category: 'Смарт-часы',
    price: 89990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      display: '1.92" Always-On',
      battery: 'до 36 часов'
    },
    badge: 'НОВИНКА'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Смартфоны',
    price: 119990,
    image: 'https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg',
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '12 ГБ',
      storage: '256 ГБ',
      display: '6.8" Dynamic AMOLED',
      camera: '200 МП'
    }
  }
];

const Index = () => {
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>([]);
  const [compare, setCompare] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeSection, setActiveSection] = useState<string>('Главная');

  const categories = ['Все', 'Ноутбуки', 'Смартфоны', 'Планшеты', 'Аксессуары', 'Смарт-часы'];

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCart([...cart, {product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const toggleCompare = (product: Product) => {
    if (compare.find(p => p.id === product.id)) {
      setCompare(compare.filter(p => p.id !== product.id));
    } else {
      if (compare.length < 3) {
        setCompare([...compare, product]);
      }
    }
  };

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase().replace(/ /g, '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TechStore
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

      <section id="главная" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Новая коллекция 2024
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Электроника
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Откройте для себя передовые технологии. Мощные устройства с премиальным дизайном по выгодным ценам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8" onClick={() => scrollToSection('Каталог')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('Акции')}>
                  <Icon name="Percent" size={20} className="mr-2" />
                  Акции и скидки
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-purple-600">500+</p>
                  <p className="text-sm text-gray-600">Товаров</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-600">24/7</p>
                  <p className="text-sm text-gray-600">Поддержка</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">2 года</p>
                  <p className="text-sm text-gray-600">Гарантия</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/6c292588-968b-4244-becf-53209edb5142/files/1d070bd4-4af5-41ee-b719-dbe7aa493917.jpg" 
                alt="Электроника"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-xl text-gray-600">Выберите категорию и найдите идеальное устройство</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{product.category}</Badge>
                  <CardTitle className="text-xl mb-3">{product.name}</CardTitle>
                  <CardDescription className="space-y-1 mb-4">
                    {product.specs.processor && <p>• {product.specs.processor}</p>}
                    {product.specs.ram && <p>• {product.specs.ram} RAM</p>}
                    {product.specs.storage && <p>• {product.specs.storage}</p>}
                    {product.specs.display && <p>• {product.specs.display}</p>}
                  </CardDescription>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-purple-600">{product.price.toLocaleString('ru-RU')} ₽</span>
                    {product.oldPrice && (
                      <span className="text-lg text-gray-400 line-through">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => toggleCompare(product)}
                    className={compare.find(p => p.id === product.id) ? 'bg-orange-50 border-orange-500' : ''}
                  >
                    <Icon name="GitCompare" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="акции" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Акции и специальные предложения</h2>
            <p className="text-xl opacity-90">Не упустите выгодные предложения этого месяца</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="Gift" size={40} className="mb-4" />
                <CardTitle className="text-white">Скидка 15% на первый заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Используйте промокод WELCOME15 при оформлении заказа</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="Truck" size={40} className="mb-4" />
                <CardTitle className="text-white">Бесплатная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">При заказе от 50 000 ₽ доставка по России бесплатно</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Icon name="Percent" size={40} className="mb-4" />
                <CardTitle className="text-white">Trade-In программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">Сдайте старое устройство и получите скидку до 30%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании TechStore</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы — команда энтузиастов технологий с 10-летним опытом работы на рынке электроники. 
              Наша миссия — сделать передовые технологии доступными каждому.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold text-xl mb-2">Качество</h3>
                <p className="text-gray-600">Только оригинальная продукция от официальных поставщиков</p>
              </div>
              <div className="p-6">
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-pink-600" />
                <h3 className="font-bold text-xl mb-2">Поддержка</h3>
                <p className="text-gray-600">Консультации и помощь в выборе 24/7</p>
              </div>
              <div className="p-6">
                <Icon name="Shield" size={48} className="mx-auto mb-4 text-orange-500" />
                <h3 className="font-bold text-xl mb-2">Гарантия</h3>
                <p className="text-gray-600">Расширенная гарантия на все товары до 2 лет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="доставка" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
          <Tabs defaultValue="delivery" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" size={24} />
                    Курьерская доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Доставка по Москве и МО — от 500 ₽</p>
                  <p className="text-gray-600">Срок доставки: 1-2 дня</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    Пункты выдачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Более 1000 пунктов выдачи по России</p>
                  <p className="text-gray-600">Срок доставки: 3-7 дней</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Store" size={24} />
                    Самовывоз
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Забрать из нашего магазина бесплатно</p>
                  <p className="text-gray-600">Готовность заказа: в день оформления</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payment" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={24} />
                    Банковские карты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Visa, MasterCard, МИР — оплата онлайн при оформлении заказа</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={24} />
                    Электронные кошельки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">ЮMoney, QIWI, WebMoney</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Banknote" size={24} />
                    Наличными
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">При получении товара курьеру или в пункте выдачи</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Тверская, д. 1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">info@techstore.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Вс: 10:00 - 22:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Телефон" />
                <Input placeholder="Сообщение" />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">TechStore</span>
              </div>
              <p className="text-gray-400 text-sm">Электроника нового поколения</p>
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
                <li>info@techstore.ru</li>
                <li>Пн-Вс: 10:00 - 22:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 TechStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
