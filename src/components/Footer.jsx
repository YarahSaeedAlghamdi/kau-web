import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* قسم الاشتراك */}
        <div className="subscribe">
          <h3>اشترك في نشرتنا البريدية</h3>
          <input type="email" placeholder="أدخل بريدك الإلكتروني" />
          <button className="subscribe-button">
            اشترك
            <i className="bi bi-arrow-left"></i>
          </button>

        </div>

        {/* روابط */}
        <div className="footer-links">
          <div>
            <h4>روابط مهمة</h4>
            <ul>
              <li>الخدمات الإلكترونية</li>
              <li>روابط سريعة</li>
              <li>الأحداث</li>
              <li>المسؤولية المجتمعية</li>
              <li>روابط تهمك</li>
            </ul>
          </div>
          <div>
            <h4>المصادر</h4>
            <ul>
              <li>البيانات المفتوحة</li>
              <li>المكتبة</li>
              <li>البحث والابتكار</li>
            </ul>
          </div>
          <div>
            <h4>المجتمع الجامعي</h4>
            <ul>
              <li>التوظيف</li>
              <li>الموظفين</li>
              <li>الطلبة الحاليين</li>
              <li>الخريجون</li>
            </ul>
          </div>
          <div>
            <h4>عن الجامعة</h4>
            <ul>
              <li>معلومات عامة</li>
              <li>الخطة الاستراتيجية</li>
              <li>الاعتمادات الأكاديمية</li>
            </ul>
          </div>
        </div>
      </div>

      {/* الأسفل */}
      <div className="footer-bottom">
        <p>
          
          سياسة النشر الإلكتروني | الشروط والاستخدام | سياسة الخصوصية | تواصل معنا
        </p>


             <p>
          
        
          من تطوير  |  رناد تركستاني|جود السلمي |ياره الغامدي | سجى الحربي |ريفان باريان| رحمه عبيد| رزان السريحي |ابتسام الجدعاني |مها الظاهري 
        </p>
      </div>
    </footer>
  );
};

export default Footer; 