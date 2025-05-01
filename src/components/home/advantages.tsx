
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const advantagesData = [
  {
    icon: "Trophy",
    title: "Опытные тренеры",
    description: "Наши инструкторы имеют профессиональное образование и многолетний опыт работы."
  },
  {
    icon: "Users",
    title: "Индивидуальный подход",
    description: "Мы учитываем особенности каждого ученика и подбираем оптимальную программу."
  },
  {
    icon: "ShieldCheck",
    title: "Безопасность",
    description: "Все занятия проходят под наблюдением тренера и с соблюдением мер безопасности."
  },
  {
    icon: "Building",
    title: "Современные бассейны",
    description: "Занятия проводятся в чистых бассейнах с комфортной температурой воды."
  },
  {
    icon: "ScrollText",
    title: "Разнообразные программы",
    description: "От обучения новичков до подготовки профессиональных спортсменов."
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    description: "Занятия проводятся в утреннее, дневное и вечернее время."
  }
];

const Advantages = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagesData.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name={item.icon} className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
