
import './Achievements.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function Achievements() {
  const slides = [
    {
      title: "تميّز عالمي بثقة وطنية",
      description: "تقدُّمنا في التصنيفات العالمية هو انعكاس لجودة الأداء الأكاديمي والبحثي، والالتزام المستمر بمعايير التميز والاعتماد المؤسسي.",
      button: "اكتشف المزيد",
      image: "https://cmsplus.kau.edu.sa/Images/124/In_news/1446/25-6-2025-inner.jpg",
      link: "#"
    },
    {
      title: "بحث يقود المستقبل",
      description: "نقود مسيرة الابتكار من خلال دعم البحوث النوعية، وتمكين الباحثين، وتوفير بيئة محفزة لإنتاج المعرفة وتحقيق أثر علمي ومجتمعي مستدام.",
      button: "اعرف المزيد",
      image: "https://th.bing.com/th/id/OIP.2iYPw4mQXpCvtvb2CnsaZQHaDt?w=295&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg",
      link: "#"
    },
    {
      title: "نحو تعليم يصنع الفرق",
      description: "نُعزز التميز في بيئة تعليمية تفاعلية تُمكّن الطلاب من اكتساب المعرفة، وتنمية المهارات، والاستعداد لريادة المستقبل بثقة وكفاءة.",
      button: "تعرف أكثر",
      image: "https://cmsplus.kau.edu.sa/Images/124/In_news/1446/22-6-2025-inner3.jpg",
      link: "#"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const current = slides[activeIndex];

  return (
    <section className="achievements-section">
      <div className="achievements-text">
        <h3 className="achievements-heading">من الجامعة... إلى العالم</h3>
        <h2 className="achievements-title">{current.title}</h2>
        <p className="achievements-description">{current.description}</p>
        <a href={current.link} className="achievements-button" target="_blank" rel="noreferrer">
          {current.button}
        </a>
      </div>

      <div className="achievements-image">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          dir="rtl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`slide-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Achievements;