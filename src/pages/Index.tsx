import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(true);

  const services = [
    { name: "Негабаритные грузы", weight: "до 100 тонн", icon: "Truck" },
    {
      name: "Сопровождение ГИБДД",
      description: "Полное юридическое сопровождение",
      icon: "Shield",
    },
    {
      name: "Страхование груза",
      description: "Полная страховая защита",
      icon: "FileText",
    },
    {
      name: "GPS-мониторинг",
      description: "Отслеживание в реальном времени",
      icon: "MapPin",
    },
  ];

  const workSteps = [
    { step: "1", title: "Заявка", description: "Получение заявки от клиента" },
    { step: "2", title: "Расчет", description: "Расчет стоимости перевозки" },
    { step: "3", title: "Договор", description: "Заключение договора" },
    { step: "4", title: "Погрузка", description: "Погрузка и оформление" },
    { step: "5", title: "Доставка", description: "Транспортировка груза" },
    { step: "6", title: "Отчет", description: "Фотоотчет и документы" },
  ];

  const faqItems = [
    {
      question: "Что делать, если груз не прошел по габаритам?",
      answer:
        "Мы предложим альтернативные решения: разборка груза, специальный маршрут или другой тип транспорта.",
    },
    {
      question: "Как изменить маршрут в пути?",
      answer:
        "Изменения маршрута согласовываются с диспетчером. Дополнительные расходы рассчитываются отдельно.",
    },
    {
      question: "Какие документы нужны для перевозки?",
      answer:
        "Техпаспорт груза, разрешение на перевозку, страховой полис. Поможем с оформлением.",
    },
    {
      question: "Сколько времени займет доставка?",
      answer:
        "Оформление документов: 1-2 дня. Доставка: от 3 дней в зависимости от маршрута.",
    },
  ];

  const portfolioItems = [
    {
      title: "Трансформатор 80 тонн",
      route: "Москва — Казань",
      duration: "3 дня",
      image: "/placeholder.svg",
    },
    {
      title: "Промышленное оборудование",
      route: "СПб — Новосибирск",
      duration: "7 дней",
      image: "/placeholder.svg",
    },
    {
      title: "Строительная техника",
      route: "Екатеринбург — Сочи",
      duration: "5 дней",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-900">
                ТрансЛогистика
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#work-process"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Как работаем
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Портфолио
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block text-right">
                <div className="text-sm text-gray-600">г. Москва</div>
                <div className="font-semibold text-blue-600">
                  +7 (495) 123-45-67
                </div>
              </div>
              <Button variant="outline" size="sm">
                Быстрый звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Перевозка негабаритных грузов
              <span className="text-blue-600 block">до 100 тонн</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Собственный автопарк, сопровождение ГИБДД, страхование груза,
              GPS-мониторинг по всей России и СНГ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg">
                Наши работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по перевозке негабаритных грузов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  {service.weight && (
                    <Badge variant="secondary" className="mx-auto">
                      {service.weight}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Информация о грузе
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Максимальные характеристики
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Вес:</span>
                    <span className="font-semibold">до 100 тонн</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Длина:</span>
                    <span className="font-semibold">до 24 метров</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Ширина:</span>
                    <span className="font-semibold">до 4,5 метров</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Высота:</span>
                    <span className="font-semibold">до 4,2 метров</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Стоимость и сроки
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Стоимость</div>
                    <div className="text-2xl font-bold text-blue-600">
                      от 45 ₽/км
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Оформление</div>
                    <div className="text-xl font-semibold">1-2 дня</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Доставка</div>
                    <div className="text-xl font-semibold">от 3 дней</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и прозрачный процесс от заявки до доставки
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {workSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Успешно выполненные проекты по перевозке негабаритных грузов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src="/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg"
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{item.route}</span>
                    <Badge variant="outline">{item.duration}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Получить расчет
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>
            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя (необязательно)" />
                  <Input placeholder="Телефон *" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Вес груза (тонн)" />
                  <Input placeholder="Габариты (м)" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Откуда" />
                  <Input placeholder="Куда" />
                </div>
                <Input placeholder="Описание груза" />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Отправить в WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                ТрансЛогистика
              </div>
              <p className="text-gray-600">
                Надежная перевозка негабаритных грузов по всей России
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Негабаритные перевозки</li>
                <li>Сопровождение ГИБДД</li>
                <li>Страхование груза</li>
                <li>GPS-мониторинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-600">
                <div>г. Москва</div>
                <div>+7 (495) 123-45-67</div>
                <div>info@translogistika.ru</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Документы</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Лицензии</li>
                <li>Сертификаты</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-gray-600">
            © 2024 ТрансЛогистика. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Floating Contact Form */}
      {isContactFormVisible && (
        <div className="fixed right-4 bottom-4 z-50">
          <Card className="w-80 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Быстрая заявка</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsContactFormVisible(false)}
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон *" required />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Отправить
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
