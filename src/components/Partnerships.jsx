/*import React from "react";
import "./Partnerships.css";

export default function Partnerships() {
  const items = [
    "التعاون الدولي",
    "الاعتمادات الاكاديمية",
    "المسؤولية المجتمعية"
  ];

  return (
    <section className="partnerships">
      <h2>الشراكات</h2>
      <div className="partnerships-list">
        {items.map((item, idx) => (
          <div key={idx} className="partnership-item">
            <span className="arrow">›</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <img
        className="logo-bg"
        src="https://upload.wikimedia.org/wikipedia/ar/9/9f/KAU_Logo.png"
        alt="logo"
      />
    </section>
  );
}  */

/*
import React from "react";
import "./Partnerships.css";

export default function Partnerships() {
const items = [
  "التعاون الدولي",
  "الإعتمادات الأكاديمية",
  "المسؤولية المجتمعية"
];

return (
  <section className="partnerships">
    <h2>الشراكات</h2>
    
    <img 
src="https://th.bing.com/th/id/OIP.2iYPw4mQXpCvtvb2CnsaZQHaDt?w=295&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg" 
alt="شعار" 
className="logo" 
/>
    <div className="list">
      {items.map((item, i) => (
        <div className="partnership-item" style={{ "--i": i }} key={i}>
          <span>›</span> {item}
        </div>
      ))}
    </div>
  </section>
);
}*/
/*
import React from "react";
import "./Partnerships.css";

export default function Partnerships() {
  const items = [
    "التعاون الدولي",
    "الإعتمادات الأكاديمية",
    "المسؤولية المجتمعية"
  ];

  return (
    <section className="partnerships">
      <div className="bg-image"></div>

      <div className="content">
        <h2>الشراكات</h2>

        <div className="list">
          {items.map((item, i) => (
            <div className="partnership-item" key={i}>
              <span>›</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} */
import React from "react";
import "./Partnerships.css";

export default function Partnerships() {
  return (
    <section className="partnerships">
      <h2>الشراكات</h2>
      <div className="partnerships-box">
        <a href="#" className="partnership-item">› التعاون الدولي</a>
        <a href="#" className="partnership-item">› الإعتمادات الأكاديمية</a>
        <a href="#" className="partnership-item">› المسؤولية المجتمعية</a>
      </div>
    </section>
  );
}
