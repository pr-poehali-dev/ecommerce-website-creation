import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InfoSections from '@/components/InfoSections';
import Footer from '@/components/Footer';

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
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b6?w=800&q=80',
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
    <div className="min-h-screen bg-slate-950">
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        cart={cart}
        removeFromCart={removeFromCart}
        compare={compare}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
      
      <HeroSection 
        scrollToSection={scrollToSection}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredProducts={filteredProducts}
        addToCart={addToCart}
        toggleCompare={toggleCompare}
        compare={compare}
        categories={categories}
      />
      
      <InfoSections />
      
      <Footer />
    </div>
  );
};

export default Index;