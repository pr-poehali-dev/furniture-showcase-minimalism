
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Экологичность",
    description: "Мы используем только сертифицированные материалы, безопасные для вас и окружающей среды."
  },
  {
    title: "Качество",
    description: "Каждый предмет мебели проходит тщательный контроль качества на всех этапах производства."
  },
  {
    title: "Долговечность",
    description: "Наша мебель создана служить десятилетиями, сохраняя свою функциональность и эстетику."
  },
  {
    title: "Уникальный дизайн",
    description: "Каждая коллекция разработана нашими дизайнерами с вниманием к современным тенденциям."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-[#F5F0E5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#283618] mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-[#606C38] mb-8">
              Мы создаем не просто мебель, а пространство для жизни, в котором каждый элемент имеет свое значение и гармонично вписывается в общую картину.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="h-6 w-6 text-[#DDA15E] mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#283618]">{feature.title}</h3>
                    <p className="text-[#606C38] text-sm mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                alt="Мебель премиум-класса" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-md max-w-[220px] hidden md:block">
              <p className="text-[#283618] text-sm">
                "Мебель должна быть не только красивой, но и функциональной. Именно этого принципа мы придерживаемся в нашей работе."
              </p>
              <p className="text-[#DDA15E] font-medium text-sm mt-2">
                Анна Ковалева, главный дизайнер
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
