import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
  addToCart: (product: Product) => void;
  toggleCompare: (product: Product) => void;
  compare: Product[];
  categories: string[];
}

const HeroSection = ({ 
  scrollToSection, 
  selectedCategory, 
  setSelectedCategory, 
  filteredProducts, 
  addToCart, 
  toggleCompare, 
  compare,
  categories 
}: HeroSectionProps) => {
  return (
    <>
      <section id="главная" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Новая коллекция 2025
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
    </>
  );
};

export default HeroSection;