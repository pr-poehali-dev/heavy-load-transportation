import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [extendedFormData, setExtendedFormData] = useState({
    weight: "",
    dimensions: "",
    from: "",
    to: "",
    cargoType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите номер телефона",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "" });
  };

  const handleExtendedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Груз: ${extendedFormData.cargoType}
Вес: ${extendedFormData.weight}
Габариты: ${extendedFormData.dimensions}
Откуда: ${extendedFormData.from}
Куда: ${extendedFormData.to}`;
    const whatsappUrl = `https://wa.me/79001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleExtendedInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setExtendedFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const navigationItems = [
    { title: "Информация о грузе", href: "#cargo-info" },
    { title: "Как мы работаем", href: "#how-we-work" },
    { title: "Юридические моменты", href: "#legal" },
    { title: "Частые вопросы", href: "#faq" },
    { title: "Портфолио", href: "#portfolio" },
    { title: "Контакты", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-roboto font-bold text-gray-900">
                ГрузТранс
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                  <span>Негабаритные перевозки</span>
                  <Icon name="ChevronDown" className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navigationItems.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <a href={item.href} className="w-full">
                        {item.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-500">
                  г. Москва, ул. Транспортная, 10
                </p>
                <p className="font-semibold text-gray-900">
                  +7 (495) 123-45-67
                </p>
              </div>

              {/* Header Contact Form */}
              <div className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Имя"
                  className="w-24 h-8 text-xs"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Телефон*"
                  className="w-28 h-8 text-xs"
                  required
                />
                <Button
                  onClick={handleSubmit}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 h-8 text-xs"
                >
                  Позвонить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Перевозка негабаритных грузов до 100 тонн
              <span className="block text-blue-200 text-2xl md:text-3xl mt-2">
                по России и СНГ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Собственный автопарк, сопровождение ГИБДД, страхование груза
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
              >
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                Быстрый звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Info Section */}
      <section id="cargo-info" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Информация о грузе
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="Package"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Максимальные габариты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Длина:</span>
                    <span className="font-semibold">до 25 м</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ширина:</span>
                    <span className="font-semibold">до 4.5 м</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Высота:</span>
                    <span className="font-semibold">до 4.2 м</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Вес:</span>
                    <span className="font-semibold">до 100 т</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="MapPin"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">География доставки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Вся территория России</div>
                  <div>• Казахстан, Беларусь</div>
                  <div>• Киргизия, Узбекистан</div>
                  <div>• Армения, Азербайджан</div>
                  <div className="text-blue-600 font-semibold mt-3">
                    85 регионов
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="Calculator"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Стоимость</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      от 45 ₽/км
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-3">
                    В стоимость входит:
                  </div>
                  <div className="text-xs space-y-1">
                    <div>• Топливо и водитель</div>
                    <div>• Страхование груза</div>
                    <div>• Сопровождение ГИБДД</div>
                    <div>• Разрешительные документы</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Сроки доставки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Оформление:</span>
                    <span className="font-semibold">1-2 дня</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span className="font-semibold">от 3 дней</span>
                  </div>
                  <div className="mt-3 text-xs text-gray-600">
                    Необходимые документы:
                  </div>
                  <div className="text-xs space-y-1">
                    <div>• Паспорт груза</div>
                    <div>• Товарная накладная</div>
                    <div>• Схема строповки</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-6 gap-4">
            {[
              {
                icon: "FileText",
                title: "Заявка",
                desc: "Получаем заявку с описанием груза",
              },
              {
                icon: "Calculator",
                title: "Расчет",
                desc: "Рассчитываем стоимость в течение 2 часов",
              },
              {
                icon: "FileCheck",
                title: "Договор",
                desc: "Заключаем договор и получаем документы",
              },
              {
                icon: "Truck",
                title: "Погрузка",
                desc: "Прибываем для погрузки в назначенное время",
              },
              {
                icon: "Navigation",
                title: "Доставка",
                desc: "Доставляем груз с GPS-мониторингом",
              },
              {
                icon: "CheckCircle",
                title: "Отчет",
                desc: "Предоставляем фотоотчет о доставке",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </div>
                  <Icon
                    name={step.icon}
                    className="h-8 w-8 text-blue-600 mx-auto mb-2"
                  />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">
              Что мы гарантируем
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" className="h-6 w-6 text-blue-600" />
                <span>Полное страхование груза</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Satellite" className="h-6 w-6 text-blue-600" />
                <span>GPS-мониторинг в реальном времени</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Camera" className="h-6 w-6 text-blue-600" />
                <span>Фотоотчеты на каждом этапе</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Юридические и производственные моменты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">
                  Наша ответственность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-green-600 mt-0.5"
                    />
                    <span>Сохранность груза во время транспортировки</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-green-600 mt-0.5"
                    />
                    <span>Соблюдение сроков доставки</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-green-600 mt-0.5"
                    />
                    <span>Оформление всех необходимых документов</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-green-600 mt-0.5"
                    />
                    <span>Компенсация ущерба согласно страховке</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      className="h-4 w-4 text-green-600 mt-0.5"
                    />
                    <span>Сопровождение ГИБДД и согласование маршрута</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700">
                  Исключения из ответственности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="AlertTriangle"
                      className="h-4 w-4 text-red-600 mt-0.5"
                    />
                    <span>
                      Форс-мажорные обстоятельства (стихийные бедствия)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="AlertTriangle"
                      className="h-4 w-4 text-red-600 mt-0.5"
                    />
                    <span>Неправильная упаковка груза заказчиком</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="AlertTriangle"
                      className="h-4 w-4 text-red-600 mt-0.5"
                    />
                    <span>Задержки по вине государственных органов</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="AlertTriangle"
                      className="h-4 w-4 text-red-600 mt-0.5"
                    />
                    <span>Скрытые дефекты груза</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="AlertTriangle"
                      className="h-4 w-4 text-red-600 mt-0.5"
                    />
                    <span>Предоставление неполной информации о грузе</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Возможные риски и наши действия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-700">
                      Что может пойти не так:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Изменение погодных условий</li>
                      <li>• Технические неисправности транспорта</li>
                      <li>• Изменение дорожной обстановки</li>
                      <li>• Проблемы с документооборотом</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">
                      Наши действия:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Резервный автопарк и запасные маршруты</li>
                      <li>• Техническая поддержка 24/7</li>
                      <li>• Оперативное информирование клиента</li>
                      <li>• Юридическое сопровождение</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Что делать, если груз не прошел по габаритам?
                </AccordionTrigger>
                <AccordionContent>
                  Мы предложим альтернативные варианты: разборку груза на части,
                  использование специального транспорта или изменение маршрута.
                  Все варианты обсуждаются с клиентом заранее.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Как изменить маршрут в пути?
                </AccordionTrigger>
                <AccordionContent>
                  Изменение маршрута возможно только при согласовании с ГИБДД и
                  нашим диспетчером. Дополнительные расходы рассчитываются
                  отдельно согласно тарифам.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Какие документы нужны для перевозки?
                </AccordionTrigger>
                <AccordionContent>
                  Основные документы: паспорт груза, товарная накладная, схема
                  строповки, техпаспорт транспортного средства. Полный список
                  предоставляется при заключении договора.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Сколько стоит сопровождение ГИБДД?
                </AccordionTrigger>
                <AccordionContent>
                  Стоимость сопровождения ГИБДД уже включена в базовую стоимость
                  перевозки. Дополнительно оплачивается только в случае сложных
                  маршрутов или особых требований.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Можно ли отследить местоположение груза?
                </AccordionTrigger>
                <AccordionContent>
                  Да, все наши транспортные средства оборудованы
                  GPS-мониторингом. Вы получите доступ к личному кабинету для
                  отслеживания груза в реальном времени.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Что включает страхование груза?
                </AccordionTrigger>
                <AccordionContent>
                  Страхование покрывает полную стоимость груза от повреждений,
                  утери или хищения во время транспортировки. Страховая сумма
                  определяется стоимостью груза, указанной в договоре.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Портфолио наших работ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Трансформатор 80т",
                route: "Москва – Казань",
                days: 3,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
              {
                title: "Промышленный станок 45т",
                route: "СПб – Новосибирск",
                days: 5,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
              {
                title: "Строительная техника 65т",
                route: "Екатеринбург – Сочи",
                days: 4,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
              {
                title: "Нефтяное оборудование 90т",
                route: "Уфа – Владивосток",
                days: 7,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
              {
                title: "Генератор 35т",
                route: "Тюмень – Мурманск",
                days: 6,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
              {
                title: "Металлоконструкции 55т",
                route: "Челябинск – Краснодар",
                days: 4,
                image: "/img/eb627ab6-f506-45b4-b023-7285e1bcc7b4.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Маршрут: {project.route}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Выполнено за {project.days} дня
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Contact Form Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Форма обратной связи
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку в WhatsApp</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы отправим данные в WhatsApp для быстрой
                    обработки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleExtendedSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Вес груза</Label>
                        <Input
                          id="weight"
                          name="weight"
                          value={extendedFormData.weight}
                          onChange={handleExtendedInputChange}
                          placeholder="например, 45 тонн"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Габариты</Label>
                        <Input
                          id="dimensions"
                          name="dimensions"
                          value={extendedFormData.dimensions}
                          onChange={handleExtendedInputChange}
                          placeholder="д×ш×в в метрах"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from">Откуда</Label>
                        <Input
                          id="from"
                          name="from"
                          value={extendedFormData.from}
                          onChange={handleExtendedInputChange}
                          placeholder="Город отправления"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to">Куда</Label>
                        <Input
                          id="to"
                          name="to"
                          value={extendedFormData.to}
                          onChange={handleExtendedInputChange}
                          placeholder="Город назначения"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargoType">Тип груза</Label>
                      <Textarea
                        id="cargoType"
                        name="cargoType"
                        value={extendedFormData.cargoType}
                        onChange={handleExtendedInputChange}
                        placeholder="Опишите ваш груз"
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Отправить в WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Контакты</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageCircle"
                    className="h-5 w-5 text-green-600"
                  />
                  <span>+7 (900) 123-45-67 (WhatsApp)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <span>info@gruztrans.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  <span>г. Москва, ул. Транспортная, д. 10</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                  <span>Круглосуточно, без выходных</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  Быстрый звонок
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" className="h-6 w-6" />
                <span className="text-xl font-bold">ГрузТранс</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные негабаритные перевозки по России и СНГ
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#cargo-info" className="hover:text-white">
                    Негабаритные перевозки
                  </a>
                </li>
                <li>
                  <a href="#cargo-info" className="hover:text-white">
                    Тяжеловесные перевозки
                  </a>
                </li>
                <li>
                  <a href="#how-we-work" className="hover:text-white">
                    Логистика
                  </a>
                </li>
                <li>
                  <a href="#legal" className="hover:text-white">
                    Документооборот
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#how-we-work" className="hover:text-white">
                    Как мы работаем
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white">
                    Портфолио
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@gruztrans.ru</p>
                <p>г. Москва, ул. Транспортная, д. 10</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 ГрузТранс. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
