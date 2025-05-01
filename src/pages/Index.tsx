
import Layout from "@/components/layout";
import HeroSection from "@/components/home/hero-section";
import ProgramCards from "@/components/home/program-cards";
import Advantages from "@/components/home/advantages";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramCards />
      <Advantages />
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать плавать?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Запишитесь на пробное занятие прямо сейчас и сделайте первый шаг 
            к освоению плавания под руководством наших профессиональных тренеров.
          </p>
          <a 
            href="/contacts" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Записаться на занятие
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
