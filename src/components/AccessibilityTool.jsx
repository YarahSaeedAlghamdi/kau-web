import React, { useState, useEffect } from 'react';
import './AccessibilityTool.css';
import icon from '../assets/accessibility.svg';
import audioIcon from '../assets/font-adjustment.png';
import textIcon from '../assets/speaker-filled-audio-tool.png';
import visionIcon from '../assets/target.png';
import autismIcon from '../assets/view.png';
import mobilityIcon from '../assets/disability.png';
import dyslexiaIcon from '../assets/dyslexia.png';
import adhdIcon from '../assets/distraction.png';
import epilepsyIcon from '../assets/epilepsy.png';

const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [fontFamilyClass, setFontFamilyClass] = useState('font-cairo');
  const [fontSizeClass, setFontSizeClass] = useState('font-100');
  const [contrastClass, setContrastClass] = useState('');
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [cursorLarge, setCursorLarge] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  useEffect(() => {
    document.body.classList.remove('font-cairo', 'font-tajawal', 'font-dyslexic');
    document.body.classList.add(fontFamilyClass);
  }, [fontFamilyClass]);

  useEffect(() => {
    document.body.classList.remove('font-100', 'font-150', 'font-200');
    document.body.classList.add(fontSizeClass);
  }, [fontSizeClass]);

  useEffect(() => {
    document.body.classList.remove('contrast-high', 'contrast-low');
    if (contrastClass) {
      document.body.classList.add(contrastClass);
    }
  }, [contrastClass]);

  useEffect(() => {
    document.body.classList.toggle('grayscale', isGrayscale);
  }, [isGrayscale]);

  useEffect(() => {
    document.body.style.cursor = cursorLarge ? 'url("/cursor-large.cur"), auto' : 'auto';
  }, [cursorLarge]);

  useEffect(() => {
    document.body.classList.toggle('highlighted-links', highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    document.querySelectorAll('img').forEach(img => {
      img.style.display = hideImages ? 'none' : '';
    });
  }, [hideImages]);

  const toggleFlip = (cardId) => {
    setFlippedCard(prev => (prev === cardId ? null : cardId));
  };

  const readText = () => {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const resetAll = () => {
    setFontSizeClass('font-100');
    setFontFamilyClass('font-cairo');
    setContrastClass('');
    setIsGrayscale(false);
    setCursorLarge(false);
    setHighlightLinks(false);
    setHideImages(false);
    speechSynthesis.cancel();

    document.body.classList.remove(
      'font-150', 'font-200',
      'contrast-high', 'contrast-low',
      'highlighted-links', 'grayscale',
      'font-tajawal', 'font-dyslexic'
    );
    document.body.classList.add('font-100', 'font-cairo');

    document.querySelectorAll('img').forEach(img => {
      img.style.display = '';
    });
  };

  const tools = [
    { name: "حجم الخط", icon: "🔠", id: "fontSize" },
    { name: "نوع الخط", icon: "✍️", id: "fontType" },
    { name: "تشبع الألوان", icon: "🎨", id: "colorContrast" },
    { name: "تكبير المؤشر", icon: "🚩", id: "cursorSize" },
    { name: "تمييز الروابط والأزرار", icon: "🔗", id: "linkHighlight" },
    { name: "قراءة النص", icon: "🗣️", id: "textReader" },
    { name: "إخفاء الصور", icon: "🖼️", id: "hideImages" },
    { name: "استعادة الإعدادات", icon: "♻️", id: "resetAll" },
  ];

  return (
    <div className={`accessibility-container ${isOpen ? 'open' : ''}`}>
      <div className={`access-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="access-button" onClick={() => setIsOpen(!isOpen)}>
          <img src={icon} alt="Accessibility" />
        </button>

        <div className={`mode-buttons-wrapper ${isOpen ? 'open' : ''}`}>
          <button className="mode-button" title="نمط صوتي"><img src={audioIcon} alt="نمط صوتي" /></button>
          <button className="mode-button" title="نمط قراءة"><img src={textIcon} alt="نمط قراءة" /></button>
          <button className="mode-button" title="ضعف البصر"><img src={visionIcon} alt="ضعف البصر" /></button>
          <button className="mode-button" title="نمط التوحد"><img src={autismIcon} alt="نمط التوحد" /></button>
          <button className="mode-button" title="الإعاقة الحركية"><img src={mobilityIcon} alt="الإعاقة الحركية" /></button>
          <button className="mode-button" title="عسر القراءة"><img src={dyslexiaIcon} alt="عسر القراءة" /></button>
          <button className="mode-button" title="فرط الحركة"><img src={adhdIcon} alt="فرط الحركة" /></button>
          <button className="mode-button" title="نمط الصرع"><img src={epilepsyIcon} alt="نمط الصرع" /></button>
        </div>
      </div>

      <div className={`accessibility-panel ${isOpen ? 'open' : ''}`}>
        <h3 className="access-title">أدوات سهولة الوصول</h3>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card" onClick={() => toggleFlip(tool.id)}>
              <div className={`card-inner ${flippedCard === tool.id ? 'flipped' : ''}`}>
                <div className="card-front">
                  <span className="emoji">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>

                <div className="card-back">
                  {tool.id === "fontType" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); setFontFamilyClass('font-cairo'); }}>Cairo</button>
                      <button onClick={(e) => { e.stopPropagation(); setFontFamilyClass('font-tajawal'); }}>Tajawal</button>
                      <button onClick={(e) => { e.stopPropagation(); setFontFamilyClass('font-dyslexic'); }}>Open Dyslexic</button>
                    </div>
                  )}
                  {tool.id === "fontSize" && (
                    <div className="font-buttons-wrapper">
                      {["font-100", "font-150", "font-200"].map((cls) => (
                        <button
                          key={cls}
                          onClick={(e) => { e.stopPropagation(); setFontSizeClass(cls); }}
                          className={fontSizeClass === cls ? 'active' : ''}
                        >
                          {cls.split('-')[1]}%
                        </button>
                      ))}
                    </div>
                  )}
                  {tool.id === "colorContrast" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); setContrastClass('contrast-high'); setIsGrayscale(false); }}>عالي</button>
                      <button onClick={(e) => { e.stopPropagation(); setContrastClass('contrast-low'); setIsGrayscale(false); }}>منخفض</button>
                      <button onClick={(e) => { e.stopPropagation(); setContrastClass(''); setIsGrayscale(true); }}>تدرج رمادي</button>
                    </div>
                  )}
                  {tool.id === "cursorSize" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); setCursorLarge(true); }}>تكبير</button>
                      <button onClick={(e) => { e.stopPropagation(); setCursorLarge(false); }}>إعادة</button>
                    </div>
                  )}
                  {tool.id === "linkHighlight" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); setHighlightLinks(prev => !prev); }}>تفعيل</button>
                    </div>
                  )}
                  {tool.id === "textReader" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); readText(); }}>تشغيل</button>
                    </div>
                  )}
                  {tool.id === "hideImages" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); setHideImages(prev => !prev); }}>
                        {hideImages ? "إظهار" : "إخفاء"}
                      </button>
                    </div>
                  )}
                  {tool.id === "resetAll" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); resetAll(); }}>إعادة تعيين</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityTools;

