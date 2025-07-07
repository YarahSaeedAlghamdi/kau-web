import { useState } from 'react';
import './UniversityMessage.css';

const columns = [
  {
    title: 'التميز في التعليم والبحث العلمي',
    image: 'src/assets/images/UniMsg1.jpeg',
    content: 'تعزيز جودة التعليم والتعلم، وتطوير بيئة محفزة تدعم الإبداع والابتكار، إلى جانب دعم برامج الدراسات العليا وتطوير البحث العلمي واستثمار نتائجه لخدمة المجتمع وتنمية الاقتصاد المعرفي.',
  },
  {
    title: 'خدمة المجتمع والشراكات الاستراتيجية',
    image: 'src/assets/images/UniMsg2.jpeg',
    content: 'تعزيز دور الجامعة في خدمة المجتمع من خلال مبادرات نوعية وشراكات محلية ودولية فعالة، تسهم في تنمية المجتمع وتنوع مصادر التمويل وتعزز الاستدامة.',
  },
  {
    title: 'القيادة والتميز المؤسسي',
    image: 'src/assets/images/UniMsg3.jpeg',
    content: 'تطوير مهارات وقدرات القيادات الأكاديمية والإدارية، وتبني منهجيات حديثة تدعم التفكير الابتكاري والتميز المؤسسي، وتعزز الصورة الذهنية للجامعة محلياً وعالمياً.',
  },
  {
    title: 'الكفاءة والاستدامة والتطوير',
    image: 'src/assets/images/UniMsg4.jpeg',
    content: 'رفع كفاءة استخدام الموارد، وتطوير البنية التحتية والخدمات الجامعية بما يتوافق مع معايير الاستدامة والجامعات الذكية والخضراء، مع التركيز على الاستمرارية والتحسين المستمر.',
  },
];

export default function UniversityMessage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="university-message">
      {columns.map((col, index) => (
        <div
          key={index}
          className={`column ${activeIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${col.image})` }}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="overlay">
            {(activeIndex === null || activeIndex === index) && (
              <div className="top-right-title">
                <span className="vertical-bar" />
                <h2>{col.title}</h2>
              </div>
            )}
            {activeIndex === index && (
              <p className="content">{col.content}</p>
            )}
          </div>
        </div>
      ))}

      {activeIndex === null && (
        <div className="center-title">
          <h1>رسالة الجامعة</h1>
        </div>
      )}

      
    </div>
  );
}
