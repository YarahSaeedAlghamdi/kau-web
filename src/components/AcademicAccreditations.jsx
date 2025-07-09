import React, { useEffect, useState } from "react";
import "./AcademicAccreditations.css";
import denteLogo from "../assets/images/accreditations.png";
import undpLogo from "../assets/images/accreditations.png";
import geologyLogo from "../assets/images/accreditations.png";

const accreditations = [
  {
    title: "DentEd",
    subtitle: "المنظمة الأوروبية لتعليم طب الأسنان",
    date: "مارس 2006",
    duration: "6 سنوات",
    recipient: "طب الأسنان",
    logo: denteLogo,
  },
  {
    title: "UNDP",
    subtitle: "برنامج الأمم المتحدة الإنمائي",
    date: "2007",
    recipient: "الدبلوم التربوي",
    logo: undpLogo,
  },
  {
    title: "The Geological Society",
    subtitle: "الجمعية الجيولوجية",
    date: "مايو 2008",
    duration: "6 سنوات",
    recipient: "كلية علوم الأرض",
    logo: geologyLogo,
  },
];

export default function AcademicAccreditations() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // نؤخر عرض المكون قليلاً لنتأكد أن app-root ما تم مسحه أو تغييره
    const timeout = setTimeout(() => {
      setShow(true);
    }, 0); // ممكن نخليه 100ms لو لزم

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="accreditation-section">
      <h2 className="section-title">الإعتمادات الأكاديمية</h2>
      <div className="accreditation-list">
        {accreditations.map((item, index) => (
          <div className="accreditation-card" key={index}>
            <div className="accreditation-content">
              <h3 className="acc-title">{item.title}</h3>
              <p className="acc-subtitle">{item.subtitle}</p>
              <p>تاريخ الحصول على الاعتماد: {item.date}</p>
              {item.duration && <p>مدة الاعتماد: {item.duration}</p>}
              <p>الجهات الحاصلة عليها: {item.recipient}</p>
            </div>
            <div className="acc-logo">
              <img src={item.logo} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
