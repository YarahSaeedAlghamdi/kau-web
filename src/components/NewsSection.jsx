// src/components/NewsSection.jsx
import React, { useState } from 'react'
import './NewsSection.css'

const tabs = [
  { key: 'main', label: 'الأخبار الرئيسية' },
  { key: 'sub',  label: 'الأخبار الفرعية'   },
  { key: 'ads',  label: 'الإعلانات'         },
]

const newsItems = [
  // ——————— الإعلانات ———————
  {
    category: 'ads',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/25-6-2025-inner.jpg',
    day: '25',
    year: '2025',
    title: 'جامعة الملك عبدالعزيز توقع اتفاقية مع "جيل باي" لإطلاق خدمة تقسيط الرسوم الدراسية',
    link: 'https://cic.kau.edu.sa/Pages-Tuition-fees.aspx'
  },
  {
    category: 'ads',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/25-6-2025-inner2.jpeg',
    day: '23',
    year: '2025',
    title: 'جامعة الملك عبدالعزيز و "مسند العلم" يوقعان اتفاقية تعاون لاستقطاب الطلاب الدوليين',
    link: 'https://cic.kau.edu.sa/Pages-Attracting-students.aspx'
  },
  {
    category: 'ads',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/22-6-2025-inner3.jpg',
    day: '22',
    year: '2025',
    title: 'مكتب نائب رئيس الجامعة يوقّع مذكرة تفاهم مع الوقف العلمي',
    link: 'https://cic.kau.edu.sa/Pages--Memorandum-of-understanding.aspx'
  },

  // ——————— الأخبار الرئيسية ———————
  {
    category: 'main',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/22-6-2025-inner.jpg',   // ← replace with actual URL if you have it
    day: '22',
    year: '2025',
    title: 'جامعة الملك عبدالعزيز و"جرير للاستثمار" يوقعان اتفاقية لدعم الباحثين',
    link: 'https://cic.kau.edu.sa/Pages-Jarir-Investment.aspx'
  },
  {
    category: 'main',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/20-5-2025-inner.jpg',
    day: '20',
    year: '2025',
    title: '13 شركة ناشئة تستعرض أعمالها ضمن مبادرة "بذرة" بجامعة الملك عبدالعزيز',
    link: 'https://cic.kau.edu.sa/Pages-13companies.aspx'
  },
  {
    category: 'main',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/19-6-2025-inner3.jpg',
    day: '19',
    year: '2025',
    title: 'جامعة الملك عبدالعزيز تحتفي بالمتقاعدين والمتقاعدات',
    link: 'https://cic.kau.edu.sa/Pages-Honoring-retirees.aspx'
  },

  // ——————— الأخبار الفرعية ———————
  {
    category: 'sub',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/17-6-2025-inner.jpg',
    day: '17',
    year: '2025',
    title: 'منحة "بندة" تدعم عيادات الأسنان المتنقلة بجامعة الملك عبدالعزيز',
    link: 'https://cic.kau.edu.sa/Pages-Grant-.aspx'
  },
  {
    category: 'sub',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/WhatsApp%20Image%202025-06-16%20at%202.08.29%20PM%20(1).jpeg',
    day: '16',
    year: '2025',
    title: 'دعوة لحضور حفل تكريم المتقاعدين والمتقاعدات',
    link: 'https://cic.kau.edu.sa/Pages-%D8%AF%D8%B9%D9%88%D8%A9.aspx'
  },
  {
    category: 'sub',
    img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/15-6-2025-inner.jpg',
    day: '15',
    year: '2025',
    title: 'مبادرة "بقاع خضراء" تجمع 15 طنًّا من النفايات خلال موسم الحج',
    link: 'https://cic.kau.edu.sa/Pages--initiative-.aspx'
  },
]

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState('ads')

  const filtered = newsItems
    .filter(item => item.category === activeTab)
    .slice(0, 3)

  return (
    <section className="news-section">
      <h2 className="news-heading">الأخبار و الإعلانات</h2>

      <nav className="news-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={tab.key === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="cards-container">
        {filtered.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.img} alt={item.title} />
            <div className="date-badge">
              <div className="day">{item.day}</div>
              <div className="year">{item.year}</div>
            </div>
            <p className="card-title">{item.title}</p>
          </a>
        ))}
      </div>

      <a href="https://www.kau.edu.sa/news.aspx?Type=lst&Site_ID=0&lng=ar" className="all-news">
        ← جميع الأخبار
      </a>
    </section>
  )
}
