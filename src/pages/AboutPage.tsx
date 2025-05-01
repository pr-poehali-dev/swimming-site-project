
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">О школе плавания «АкваМастер»</h1>
        
        {/* История школы */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Наша история</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Школа плавания «АкваМастер» была основана в 2010 году командой профессиональных тренеров и мастеров спорта по плаванию. 
                За более чем десятилетнюю историю мы выросли из небольшой студии в одну из ведущих школ плавания в Москве.
              </p>
              <p className="text-lg mb-4">
                С момента основания школы нашими услугами воспользовались более 10 000 учеников разных возрастов — 
                от малышей, делающих первые шаги в воде, до взрослых, совершенствующих свои навыки плавания.
              </p>
              <p className="text-lg">
                Сегодня «АкваМастер» — это сеть учебных центров в различных районах Москвы, 
                команда из 30+ квалифицированных тренеров и разнообразие программ для всех возрастов и уровней подготовки.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="История школы плавания" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <Separator className="my-10" />
        
        {/* Миссия и ценности */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Наша миссия и ценности</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-xl italic text-blue-800 text-center">
              "Сделать плавание доступным для каждого, независимо от возраста и уровня подготовки, 
              обеспечивая безопасную и поддерживающую среду для обучения."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Безопасность</h3>
              <p>
                Безопасность наших учеников — наш главный приоритет. Все занятия проходят под строгим контролем опытных тренеров 
                и с соблюдением всех норм безопасности.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Профессионализм</h3>
              <p>
                Мы гордимся нашей командой высококвалифицированных тренеров, постоянно совершенствующих свои навыки 
                и использующих современные методики обучения.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Индивидуальный подход</h3>
              <p>
                Мы уверены, что каждый ученик уникален, поэтому разрабатываем индивидуальные программы, 
                учитывающие особенности и цели каждого.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="my-10" />
        
        {/* Достижения */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Наши достижения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>Более 10 000 обученных учеников разных возрастов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>30+ профессиональных тренеров в команде</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>7 бассейнов в разных районах Москвы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>5 уникальных программ обучения для разных возрастов и целей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>Официальный партнер Федерации плавания России</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Нам доверяют</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="block text-4xl font-bold">98%</span>
                  <span className="text-sm">положительных отзывов</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold">87%</span>
                  <span className="text-sm">приходят по рекомендации</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold">12+</span>
                  <span className="text-sm">лет опыта</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold">5000+</span>
                  <span className="text-sm">часов в воде ежегодно</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="text-center bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h2>
          <p className="text-lg mb-6">
            Мы приглашаем вас стать частью нашей дружной команды и открыть для себя мир плавания.
          </p>
          <a 
            href="/contacts" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Записаться на пробное занятие
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
