import React, { useState } from 'react';
import { motion } from 'framer-motion';
import techhub      from '../assets/images/techhub.jpg';
import musicclub    from '../assets/images/musicclub.jpg';
import summerschool from '../assets/images/summerschool.jpg';
import './NewsSection.css';

const newsItems = [
  {
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/25-6-2025-inner.jpg',
    date: '25 يوليو 2025',
    title: 'جامعة الملك عبدالعزيز توقع اتفاقية جديدة'
  },
  {
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/20-5-2025-inner.jpg',
    date: '20 يوليو 2025',
    title: 'انطلاق مبادرة البذرة لدعم الشركات الناشئة'
  },
  {
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/WhatsApp%20Image%202025-06-16%20at%202.08.29%20PM%20(1).jpeg',
    date: '18 يوليو 2025',
    title: 'تكريم المتقاعدين بجامعة الملك عبدالعزيز'
  }
];

const eventItems = [
  {
    img: techhub,
    date: 'باب التسجيل يُغلق 10 يوليو 2025',
    title: 'Empowering the Future with FCIT (TECHHUB)'
  },
  {
    img: musicclub,
    date: 'افتتاح نادي الموسيقى الآن',
    title: 'نادي الموسيقى – لهواة ومحترفي فنون العزف والغناء'
  },
  {
    img: summerschool,
    date: '29 يونيو 2025 – مدّة أسبوعين',
    title: 'المدرسة الصيفية – أساسيات ومبادئ العلوم بطريقة ممتعة'
  }
];

export default function NewsSection() {
  const [active, setActive] = useState(null);
  const transition = { type: 'tween', duration: 0.5, ease: 'easeInOut' };

  const leftVariants = {
    initial:  { left: 0,     width: '50%', pointerEvents: 'auto', clipPath: 'polygon(0 0, 100% 0, 0 100%)' },
    expanded: { left: 0,     width: '100%',pointerEvents: 'auto', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    hidden:   { left: 0,     width: '0%',  pointerEvents: 'none', clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }
  };

  const rightVariants = {
    initial:  { left: '50%', width: '50%',pointerEvents: 'auto', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' },
    expanded: { left: 0,     width: '100%',pointerEvents: 'auto', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    hidden:   { left: '100%',width: '0%',  pointerEvents: 'none', clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }
  };

  const toggle = pane => setActive(active === pane ? null : pane);

  return (
    <section className="split-flex" onDoubleClick={() => setActive(null)}>
      {/* ——— Always-on “About” overlay ————————————————— */}
      <div className="split-info">
        <h3 className="info-title">📰 أخبار وفعاليات جامعة الملك عبدالعزيز</h3>
        <p className="info-sub">
          استكشف أهم الأخبار والفعاليات هنا. انقر على أي جهة لمزيد من التفاصيل.
        </p>
      </div>

      {/* ——— EVENTS (left) —————————————————————————— */}
      <motion.div
        className="pane pane-left"
        onClick={() => toggle('left')}
        variants={leftVariants}
        initial="initial"
        animate={ active === 'left'   ? 'expanded'
                : active === 'right'  ? 'hidden'
                                      : 'initial' }
        transition={transition}
        style={{ zIndex: active === 'left' ? 2 : 1 }}
      >
        {active === 'left' && (
          <div className="hs-section events-bg">
            <h2 className="hs-heading">فعاليات</h2>
            <div className="hs-cards">
              {eventItems.map((item,i) => (
                <a key={i} href="#" className="hs-card">
                  <div className="hs-img-wrap">
                    <img src={item.img} alt={item.title}/>
                  </div>
                  <div className="hs-content">
                    <p className="hs-date">{item.date}</p>
                    <h3 className="hs-title">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* ——— NEWS (right) —————————————————————————— */}
      <motion.div
        className="pane pane-right"
        onClick={() => toggle('right')}
        variants={rightVariants}
        initial="initial"
        animate={ active === 'right'  ? 'expanded'
                : active === 'left'   ? 'hidden'
                                      : 'initial' }
        transition={transition}
        style={{ zIndex: active === 'right' ? 2 : 1 }}
      >
        {active === 'right' && (
          <div className="hs-section events-bg news-bg">
            <h2 className="hs-heading">الأخبار العامة</h2>
            <div className="hs-cards">
              {newsItems.map((item,i) => (
                <a key={i} href="#" className="hs-card">
                  <div className="hs-img-wrap">
                    <img src={item.img} alt={item.title}/>
                  </div>
                  <div className="hs-content">
                    <p className="hs-date">{item.date}</p>
                    <h3 className="hs-title">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
