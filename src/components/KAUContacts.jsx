import React from "react";
import "./KAUContacts.css";

const KAUContacts = () => {
  return (
    <footer className="kau-social">
      <div className="follow-text">تابع جامعة الملك عبدالعزيز عبر التطبيقات</div>
      <div className="social-buttons">
        <button>instagram</button>
        <button>x</button>
        <button>linkedin</button>
        <button>MyKau</button>
        <button>SnapChat</button>
      </div>
      <div className="posters-grid">
        {/* بوستر 1: ضع الرابط داخل href و رابط الصورة داخل src */}
        <a
          href="https://x.com/kauedu_sa?lang=arhttps://x.com/kauedu_sa?lang=ar"  /* هنا حط رابط الصفحة */
          target="_blank"
          rel="noopener noreferrer"
          className="poster-item"
        >
          <img
            src="https://x.com/kauedu_sa/status/1730166399115333948https://cic.kau.edu.sa/Pages-Attracting-students.aspx" /* هنا حط رابط الصورة */
            alt="بوستر 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
          />
        </a>

        {/* بوستر 2 */}
        <a
          href="https://example.com/بوستر2" /* رابط البوستر 2 */
          target="_blank"
          rel="noopener noreferrer"
          className="poster-item"
        >
          <img
            src="https://via.placeholder.com/150x128?text=بوستر+2" /* رابط صورة البوستر 2 */
            alt="بوستر 2"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
          />
        </a>

        {/* بوستر 3 */}
        <a
          href="https://example.com/بوستر3" /* رابط البوستر 3 */
          target="_blank"
          rel="noopener noreferrer"
          className="poster-item"
        >
          <img
            src="https://via.placeholder.com/150x128?text=بوستر+3" /* رابط صورة البوستر 3 */
            alt="بوستر 3"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
          />
        </a>

        {/* بوستر 4 */}
        <a
          href="https://example.com/بوستر4" /* رابط البوستر 4 */
          target="_blank"
          rel="noopener noreferrer"
          className="poster-item"
        >
          <img
            src="https://via.placeholder.com/150x128?text=بوستر+4" /* رابط صورة البوستر 4 */
            alt="بوستر 4"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default KAUContacts;
