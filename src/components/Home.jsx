import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css'; 

const images = [
  { src: 'src/assets/images/HomeImg1.JPG', title: 'نلهم قادة الغد '},
  { src: 'src/assets/images/HomeImg2.JPG', title: 'رؤية. رسالة. تأثير.' },
  { src: 'src/assets/images/HomeImg3.JPG', title: 'شراكات تصنع الفرق' },
  { src: 'src/assets/images/HomeImg4.JPG', title: 'قرارات تُبنى بثقة' },
  { src: 'src/assets/images/HomeImg5.JPG', title: 'روح تتحدى. شغف يتحرك.' },
  
];

export default function Home() {
  return (
    <div className="Home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide">
             <img src={img.src} alt={`slide-${idx}`} />
             <div className="home-overlay" />
             <div className="slide-title">{img.title}</div>
            </div>
          </SwiperSlide>

     ))}
      </Swiper>

      </div>
  );
}

