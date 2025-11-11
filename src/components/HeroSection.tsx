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
      <section id="главная" className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50 border-0">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Новая коллекция 2025
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Электроника
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Откройте для себя передовые технологии. Мощные устройства с премиальным дизайном по выгодным ценам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-lg px-8 shadow-lg shadow-blue-500/30" onClick={() => scrollToSection('Каталог')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400" onClick={() => scrollToSection('Акции')}>
                  <Icon name="Percent" size={20} className="mr-2" />
                  Акции и скидки
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-cyan-400">500+</p>
                  <p className="text-sm text-slate-400">Товаров</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">24/7</p>
                  <p className="text-sm text-slate-400">Поддержка</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-400">2 года</p>
                  <p className="text-sm text-slate-400">Гарантия</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80" 
                alt="Электроника"
                className="relative rounded-3xl shadow-2xl shadow-blue-500/20 w-full border border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-white">Каталог товаров</h2>
            <p className="text-xl text-slate-400">Выберите категорию и найдите идеальное устройство</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30' : 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400'}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden animate-fade-in bg-slate-900 border-slate-800 hover:border-blue-500/50" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/50 border-0">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-slate-700 text-cyan-400">{product.category}</Badge>
                  <CardTitle className="text-xl mb-3 text-white">{product.name}</CardTitle>
                  <CardDescription className="space-y-1 mb-4 text-slate-400">
                    {product.specs.processor && <p>• {product.specs.processor}</p>}
                    {product.specs.ram && <p>• {product.specs.ram} RAM</p>}
                    {product.specs.storage && <p>• {product.specs.storage}</p>}
                    {product.specs.display && <p>• {product.specs.display}</p>}
                  </CardDescription>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price.toLocaleString('ru-RU')} ₽</span>
                    {product.oldPrice && (
                      <span className="text-lg text-slate-500 line-through">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/30"
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => toggleCompare(product)}
                    className={compare.find(p => p.id === product.id) ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400'}
                  >
                    <Icon name="GitCompare" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="акции" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Акции и специальные предложения</h2>
            <p className="text-xl text-slate-300">Не упустите выгодные предложения этого месяца</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Gift" size={40} className="mb-4 text-cyan-400" />
                <CardTitle className="text-white">Скидка 15% на первый заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Используйте промокод WELCOME15 при оформлении заказа</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Truck" size={40} className="mb-4 text-blue-400" />
                <CardTitle className="text-white">Бесплатная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">При заказе от 50 000 ₽ доставка по России бесплатно</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white hover:border-emerald-500/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Percent" size={40} className="mb-4 text-emerald-400" />
                <CardTitle className="text-white">Trade-In программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Сдайте старое устройство и получите скидку до 30%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;