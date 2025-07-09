// Rewards.jsx
import React, { useRef, useEffect } from "react";
import "./Rewards.css";

export default function Rewards() {
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const restartTimeout = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft = 0;
      }
    }, 16);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  };

  const pauseThenResumeAutoScroll = () => {
    stopAutoScroll();
    clearTimeout(restartTimeout.current);
    restartTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, 2000);
  };

  const scrollByAmount = (amount) => {
    const el = carouselRef.current;
    if (!el) return;
    
    el.scrollLeft += amount;
    pauseThenResumeAutoScroll();
  };

  useEffect(() => {
    const el = carouselRef.current;
    startAutoScroll();

    let startX = 0;
    let scrollStart = 0;
    let isTouching = false;

    const onTouchStart = (e) => {
      isTouching = true;
      stopAutoScroll();
      startX = e.touches[0].clientX;
      scrollStart = el.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isTouching) return;
      const dx = startX - e.touches[0].clientX;
      el.scrollLeft = scrollStart + dx;
    };

    const onTouchEnd = () => {
      isTouching = false;
      pauseThenResumeAutoScroll();
    };

    el.addEventListener("mouseenter", stopAutoScroll);
    el.addEventListener("mouseleave", startAutoScroll);
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      stopAutoScroll();
      clearTimeout(restartTimeout.current);
      el.removeEventListener("mouseenter", stopAutoScroll);
      el.removeEventListener("mouseleave", startAutoScroll);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section className="rewards-section">
      <h2 className="rewards-heading">اعتمادات و جوائز</h2>
      <p className="rewards-description">
        تعد جامعة الملك عبدالعزيز من الجامعات الرائدة في التحول الرقمي، وتتبنى أفضل
        الممارسات العالمية في التعليم الإلكتروني، وقد حصدت الجامعة عددًا من الجوائز
        والاعتمادات المحلية والدولية تقديرًا لجهودها في تطوير بيئة تعليمية رقمية
        متميزة ترتقي بجودة المخرجات التعليمية، وتدعم الابتكار والاستدامة في التعليم.
      </p>
<div className="arrow arrow-left" onClick={() => scrollByAmount(-350)}>‹</div>
<div className="arrow arrow-right" onClick={() => scrollByAmount(350)}>›</div>


      <div className="rewards-carousel" ref={carouselRef}>
        <div className="reward-item">
          <div className="reward-icon">🏅</div>
          <div className="reward-text">جائزة المركز الوطني للتعلم الإلكتروني (شركاء النجاح 2017)</div>
        </div>
        <div className="reward-item">
          <div className="reward-icon">🎓</div>
          <div className="reward-text">جائزة التميز للتعليم الإلكتروني – جامعة الملك عبدالعزيز (2017)</div>
        </div>
        <div className="reward-item">
          <div className="reward-icon">🏆</div>
          <div className="reward-text">جائزة خليفة التربوية – الدورة الثامنة (2014/2015)</div>
        </div>
        <div className="reward-item">
          <div className="reward-icon">⭐</div>
          <div className="reward-text">جائزة التميز في التعلم الإلكتروني الجامعي</div>
        </div>
        <div className="reward-item">
          <div className="reward-icon">🌐</div>
          <div className="reward-text">عضوية المنظمة الأوروبية لجودة التعلم الإلكتروني (EFQUEL)</div>
        </div>
      </div>
    </section>
  );
}