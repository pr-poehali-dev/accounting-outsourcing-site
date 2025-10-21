import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-secondary">БухЭксперт</div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Связаться</Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary">
                Бухгалтерский аутсорсинг
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Профессиональное ведение бухгалтерского учета для вашего бизнеса. Освободите время для развития, доверив учет экспертам.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="hover-scale">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="TrendingUp" className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>15+</CardTitle>
                  <CardDescription>лет опыта</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Users" className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>500+</CardTitle>
                  <CardDescription>клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Shield" className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>100%</CardTitle>
                  <CardDescription>надежность</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Clock" className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>24/7</CardTitle>
                  <CardDescription>поддержка</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр бухгалтерских услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calculator" className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Ведение учета</CardTitle>
                <CardDescription className="text-base mt-3">
                  Комплексное ведение бухгалтерского и налогового учета. Учет первичных документов, формирование проводок, расчет зарплаты.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Отчетность</CardTitle>
                <CardDescription className="text-base mt-3">
                  Своевременная подготовка и сдача всех видов отчетности. Налоговая, бухгалтерская и статистическая отчетность в срок.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Консультации</CardTitle>
                <CardDescription className="text-base mt-3">
                  Профессиональные консультации по вопросам бухучета и налогообложения. Помощь в оптимизации налоговой нагрузки.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на предоставлении профессиональных услуг бухгалтерского аутсорсинга. Наша команда состоит из опытных специалистов, которые помогут вашему бизнесу работать эффективно.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Работая с нами, вы получаете не просто исполнителя, а надежного партнера, который заинтересован в развитии вашего бизнеса.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Опыт</div>
                    <div className="text-sm text-muted-foreground">Более 15 лет на рынке</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Команда</div>
                    <div className="text-sm text-muted-foreground">Квалифицированные специалисты</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Надежность</div>
                    <div className="text-sm text-muted-foreground">Гарантия качества услуг</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Поддержка</div>
                    <div className="text-sm text-muted-foreground">Всегда на связи</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="Award" className="w-12 h-12 text-primary mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="BarChart" className="w-12 h-12 text-primary mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Качество сервиса</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="Briefcase" className="w-12 h-12 text-primary mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="HeartHandshake" className="w-12 h-12 text-primary mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный тариф для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription className="text-base mt-2">Для малого бизнеса</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">15 000₽</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">До 20 операций в месяц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Подготовка отчетности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Email поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription className="text-base mt-2">Для среднего бизнеса</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">30 000₽</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">До 100 операций в месяц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Полная отчетность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Телефонные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Личный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription className="text-base mt-2">Для крупного бизнеса</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">50 000₽</span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Неограниченные операции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Все виды отчетности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Приоритетная поддержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Налоговая оптимизация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm">Финансовый анализ</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать тариф</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Ваше сообщение"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@buhexpert.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@buhexpert.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 1
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: Выходной
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">БухЭксперт</div>
              <p className="text-sm text-white/80">
                Профессиональный бухгалтерский аутсорсинг для вашего бизнеса
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4">Навигация</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Услуги</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Ведение учета</li>
                <li>Отчетность</li>
                <li>Консультации</li>
                <li>Налоговая оптимизация</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@buhexpert.ru</li>
                <li>г. Москва, ул. Тверская, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 БухЭксперт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
