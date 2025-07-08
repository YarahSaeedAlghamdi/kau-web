import { useState } from 'react';
import './UniversityMessage.css';

const columns = [
  {
    title: 'ريادة في التعليم وبحث يلهم التغيير',
    image: 'src/assets/images/UniMsg1.jpeg',
    content: 'نلتزم بتميّز تعليمي يعزز جودة التعلّم ويطلق شرارة الإبداع في بيئة محفّزة، مع دعم متواصل للدراسات العليا وتطوير البحث العلمي وتحويل نتائجه إلى حلول تخدم المجتمع وتغذي الاقتصاد المعرفي.',
  },
  {
    title: 'مجتمع أقوى بشراكات استراتيجية فعّالة',
    image: 'src/assets/images/UniMsg2.jpeg',
    content: 'نُعزّز دورنا في تنمية المجتمع من خلال مبادرات مبتكرة وشراكات محلية وعالمية تفتح آفاقًا جديدة، وتُسهم في تنويع مصادر التمويل وتعميق مفاهيم الاستدامة.'
   },
  {
    title: 'قيادة تُلهم.. وتميّز يُحتذى به',
    image: 'src/assets/images/UniMsg3.jpeg',
    content: 'نُطوّر قدراتنا القيادية والأكاديمية عبر منهجيات حديثة تدعم التفكير الابتكاري وتعزّز الأداء المؤسسي، لترتقي الجامعة بمكانتها محليًا وعالميًا.' 
   },
  {
    title: 'نحو جامعة ذكية.. خضراء.. مستدامة',
    image: 'src/assets/images/UniMsg4.jpeg',
    content: 'نستثمر مواردنا بكفاءة عالية، ونبني بنية تحتية متقدمة وخدمات عصرية وفق أعلى معايير الاستدامة، سعيًا نحو تطوير دائم وجامعة ذكية تنبض بالحياة.'
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
          <h1>رسالتنا في صناعة الغد</h1>
        </div>
      )}
      {/* محتوى مخفي مخصص لقارئ النصوص فقط */}
      <div className="sr-only">
        {columns.map((col, index) => (
          <p key={index}>
            {col.title}. {col.content}
          </p>
        ))}
      </div>

      
    </div>
    
  );
}
