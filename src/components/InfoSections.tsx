import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
  return (
    <>
      <section id="о-нас" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании ВыборПро</h2>
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
                  <p className="text-gray-600">info@viborpro.ru</p>
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
    </>
  );
};

export default InfoSections;