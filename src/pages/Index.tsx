import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "HardHat",
      title: "Строительство путей",
      description: "Проектирование и строительство железнодорожных путей любой сложности с применением современных технологий"
    },
    {
      icon: "Wrench",
      title: "Капитальный ремонт",
      description: "Полный комплекс работ по восстановлению и модернизации железнодорожной инфраструктуры"
    },
    {
      icon: "Settings",
      title: "Текущий ремонт",
      description: "Регулярное обслуживание и устранение дефектов для обеспечения безопасности движения"
    },
    {
      icon: "Gauge",
      title: "Диагностика путей",
      description: "Комплексное обследование состояния путей с применением современного оборудования"
    },
    {
      icon: "Zap",
      title: "Сварочные работы",
      description: "Высокоточная сварка рельсов и соединительных элементов железнодорожного полотна"
    },
    {
      icon: "Shield",
      title: "Контроль качества",
      description: "Многоуровневая система контроля качества выполненных работ и используемых материалов"
    }
  ];

  const projects = [
    {
      title: "Реконструкция участка Москва-Тверь",
      description: "Капитальный ремонт 120 км железнодорожного пути",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/07cdb8f7-7fe5-4ea4-ac21-228fccecdc54/files/110ae068-0775-480f-a9d0-e56f82cca145.jpg"
    },
    {
      title: "Модернизация станции Новосибирск",
      description: "Строительство новых путей и обновление инфраструктуры",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/07cdb8f7-7fe5-4ea4-ac21-228fccecdc54/files/cfff6287-27ce-4a7c-bc7e-eebd2d6dd199.jpg"
    },
    {
      title: "Высокоскоростная магистраль",
      description: "Строительство участка высокоскоростной линии протяженностью 85 км",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/07cdb8f7-7fe5-4ea4-ac21-228fccecdc54/files/8039baf9-4a31-4658-b326-db2be71face4.jpg"
    }
  ];

  const stats = [
    { value: "15+", label: "Лет на рынке" },
    { value: "500+", label: "Завершенных проектов" },
    { value: "2000+", label: "Километров путей" },
    { value: "100%", label: "Гарантия качества" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Train" className="text-accent" size={32} />
              <span className="text-xl font-bold text-white">РЖДСтрой</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/90 hover:text-accent transition-colors font-medium">Главная</a>
              <a href="#services" className="text-white/90 hover:text-accent transition-colors font-medium">Услуги</a>
              <a href="#projects" className="text-white/90 hover:text-accent transition-colors font-medium">Проекты</a>
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                Связаться с нами
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Профессиональное строительство и ремонт ж/д путей
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Надежный партнер в создании безопасной железнодорожной инфраструктуры. 
                Работаем с соблюдением всех стандартов и нормативов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-delay">
              <img 
                src="https://cdn.poehali.dev/projects/07cdb8f7-7fe5-4ea4-ac21-228fccecdc54/files/110ae068-0775-480f-a9d0-e56f82cca145.jpg" 
                alt="Строительство железнодорожных путей"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по строительству, ремонту и обслуживанию железнодорожных путей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ по строительству и модернизации железнодорожной инфраструктуры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-2 hover:border-accent transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-accent">{project.year}</span>
                    <Icon name="MapPin" className="text-muted-foreground" size={18} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта. Наши специалисты помогут найти оптимальное решение.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
            Получить консультацию
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Train" className="text-accent" size={28} />
                <span className="text-xl font-bold">РЖДСтрой</span>
              </div>
              <p className="text-white/80">
                Профессиональное строительство и ремонт железнодорожных путей с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={18} />
                  <span>info@rzdstroy.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Строительство путей</li>
                <li>Капитальный ремонт</li>
                <li>Текущий ремонт</li>
                <li>Диагностика</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 РЖДСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;