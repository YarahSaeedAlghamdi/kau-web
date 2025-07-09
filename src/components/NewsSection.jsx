// src/components/HomeSections.jsx
import React from 'react'
import { motion } from 'framer-motion'
import './NewsSection.css'
import techhub from '../assets/images/techhub.jpg'
import musicclub from '../assets/images/musicclub.jpg'
import summerschool from '../assets/images/summerschool.jpg'

// replace these URLs/titles with your real data
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
]

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
]
function Section({ title, items, className }) {
  return (
    <section className={`hs-section ${className}`}>
      <h2 className="hs-heading">{title}</h2>
      <div className="hs-cards">
        {items.map((item, i) => (
          <motion.a
            key={i}
            href="#"
            className="hs-card"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="hs-img-wrap">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="hs-content">
              <p className="hs-date">{item.date}</p>
              <h3 className="hs-title">{item.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default function HomeSections() {
  return (
    <>
      <Section title="الأخبار العامة" items={newsItems} />
      <Section title="فعاليات" items={eventItems} className="events-bg" />
    </>
  )
}
