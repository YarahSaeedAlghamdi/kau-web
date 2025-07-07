//import '../Achievements.css';

/*function Achievements() {
  const cards = [
    {
      title: "التصنيفات الدولية",
      img: 'https://th.bing.com/th/id/OIP.2iYPw4mQXpCvtvb2CnsaZQHaDt?w=295&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg',
    },
    {
      title: "البحث العلمي",
      img: 'https://th.bing.com/th/id/OIP.2iYPw4mQXpCvtvb2CnsaZQHaDt?w=295&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg',
    },
    {
      title: "التعليم والتعلم",
      img: 'https://th.bing.com/th/id/OIP.eOdJFwYTNwVdUYF746TmngHaFS?w=254&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg',
    },
  ];

  return (
    <section className="achievements-section">
      <h2 className="achievements-heading">إنجاز وتميز</h2>
      <div className="achievements-cards">
        {cards.map((card, i) => (
          <div key={i} className="achievement-card">
            <img src={card.img} alt={card.title} />
            <p className="achievement-title">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;

*/
import './Achievements.css'

function Achievements() {
  const cards = [
    {
      title: "التصنيفات الدولية",
      img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/25-6-2025-inner.jpg',
      link: 'https://www.kau.edu.sa/Home.aspx?lng=ar',
    },
    {
      title: "البحث العلمي",
      img: 'https://th.bing.com/th/id/OIP.HxgfEfBLswk16BzIofqIHwHaEU?w=324&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7.jpg',
      link: 'https://kau.edu.sa/Content-0-AR-285333',
    },
    {
      title: "التعليم والتعلم",
      img: 'https://cmsplus.kau.edu.sa/Images/124/In_news/1446/22-6-2025-inner3.jpg',
      link: 'https://vp-academic-affairs.kau.edu.sa/Default-838-AR',
    },
  ];

  return (
    <section className="achievements-section">
      <h2 className="achievements-heading">إنجاز وتميز</h2>
      <div className="achievements-cards">
        {cards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-card"
          >
            <img src={card.img} alt={card.title} />
            <p className="achievement-title">{card.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Achievements;