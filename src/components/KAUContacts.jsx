import React from "react";
import "./KAUContacts.css";

const KAUContacts = () => {
  return (
    <footer className="kau-social">
      <div className="gallery-title">موجودين وين ما تكون </div>


     <div className="d-flex justify-content-center flex-wrap gap-3 align-items-center social-names">
  <span><i className="bi bi-snapchat"></i> SnapChat</span>
  <span><i className="bi bi-globe"></i> MyKau</span>
  <span><i className="bi bi-linkedin"></i> LinkedIn</span>
  <span><i className="bi bi-twitter-x"></i> منصة  </span>
  <span><i className="bi bi-instagram"></i> Instagram</span>
</div>













      <div className="ads-grid">
        {/* إعلان 1 - سناب شات */}
        <a
          href="https://www.snapchat.com/add/kauedu_sa"
          target="_blank"
          rel="noopener noreferrer"
          className="ad-item"
        >
          <div className="image-container">
            <img
              src="https://story.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYYWRpanBvdG5jAYhMxlDOAYhMxjv1AAAAAQ/preview/square.jpeg"
              alt="KAU Snapchat"
              className="poster-image"
            />
            <img
              src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c9cb2d25.jpg"
              alt="Snapchat Icon"
              className="icon-overlay"
            />
          </div>
        </a>

        {/* إعلان 2 - LinkedIn */}
        <a
          href="https://www.linkedin.com/school/king-abdulaziz-university/"
          target="_blank"
          rel="noopener noreferrer"
          className="ad-item"
        >
          <div className="image-container">
            <img
              src="https://cmsplus.kau.edu.sa/Images/305/web2025/%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A2.jpg"
              alt="KAU LinkedIn"
              className="poster-image"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Icon"
              className="icon-overlay"
            />
          </div>
        </a>

        {/* إعلان 3 - Instagram */}
        <a
          href="https://www.instagram.com/kauedu_sa/"
          target="_blank"
          rel="noopener noreferrer"
          className="ad-item"
        >
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33psIr15KQ-1O-UUDG_ujytHL12TF6F8UNUH3fgjobSn9516faDRDnhF8kTKAR7pab2s&usqp=CAU"
              alt="KAU Instagram"
              className="poster-image"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
              alt="Instagram Icon"
              className="icon-overlay"
            />
          </div>
        </a>

        {/* إعلان 4 - X */}
        <a
          href="https://x.com/kauedu_sa"
          target="_blank"
          rel="noopener noreferrer"
          className="ad-item"
        >
          <div className="image-container">
            <img
              src="https://www.al-madina.com/uploads/images/2024/08/04/2329772.jpg"
              alt="KAU X"
              className="poster-image"
            />
            <img
              src="https://pngimg.com/uploads/x_logo/small/x_logo_PNG3.png"
              alt="X Icon"
              className="icon-overlay"
            />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default KAUContacts;
