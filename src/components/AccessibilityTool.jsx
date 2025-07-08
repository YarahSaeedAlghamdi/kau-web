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
  const fontSizes = ['font-100', 'font-150', 'font-200'];
  const fontFamilies = ['font-cairo', 'font-tajawal', 'font-dyslexic'];
  const contrastModes = ['', 'contrast-high', 'contrast-low', 'grayscale'];

  const [isOpen, setIsOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [fontSizeIndex, setFontSizeIndex] = useState(0);
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);
  const [contrastIndex, setContrastIndex] = useState(0);
  const [cursorLarge, setCursorLarge] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  const contrastClass = contrastModes[contrastIndex];

  // ✅ نفعّل الوراثة فقط بعد أول تعديل بالحجم أو نوع الخط
  const ensureAccessibilityClass = () => {
    if (!document.body.classList.contains('apply-accessibility')) {
      document.body.classList.add('apply-accessibility');
    }
  };

  useEffect(() => {
    document.body.classList.remove('font-100', 'font-150', 'font-200');
    document.body.classList.add(fontSizes[fontSizeIndex]);
    ensureAccessibilityClass();
  }, [fontSizeIndex]);

  useEffect(() => {
    document.body.classList.remove('font-cairo', 'font-tajawal', 'font-dyslexic');
    document.body.classList.add(fontFamilies[fontFamilyIndex]);
    ensureAccessibilityClass();
  }, [fontFamilyIndex]);

  useEffect(() => {
    document.body.classList.remove('contrast-high', 'contrast-low', 'grayscale');
    if (contrastClass === 'grayscale') {
      document.body.classList.add('grayscale');
    } else if (contrastClass) {
      document.body.classList.add(contrastClass);
    }
  }, [contrastClass]);

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

  const cycleFontSize = () => {
    setFontSizeIndex((prev) => (prev + 1) % fontSizes.length);
  };

  const cycleFontFamily = () => {
    setFontFamilyIndex((prev) => (prev + 1) % fontFamilies.length);
  };

  const cycleContrast = () => {
    setContrastIndex((prev) => (prev + 1) % contrastModes.length);
  };

  const toggleCursor = () => {
    setCursorLarge(prev => !prev);
  };

  const toggleHighlight = () => {
    setHighlightLinks(prev => !prev);
  };

  const toggleImages = () => {
    setHideImages(prev => !prev);
  };

  const readText = () => {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const resetAll = () => {
    setFontSizeIndex(0);
    setFontFamilyIndex(0);
    setContrastIndex(0);
    setCursorLarge(false);
    setHighlightLinks(false);
    setHideImages(false);
    speechSynthesis.cancel();

    document.body.classList.remove(
      'font-150', 'font-200',
      'contrast-high', 'contrast-low', 'grayscale',
      'highlighted-links',
      'font-tajawal', 'font-dyslexic',
      'apply-accessibility'
    );
    document.body.classList.add('font-100', 'font-cairo');
    document.querySelectorAll('img').forEach(img => img.style.display = '');
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
                      <button onClick={(e) => { e.stopPropagation(); cycleFontFamily(); }}>
                        {fontFamilies[fontFamilyIndex].replace('font-', '')}
                      </button>
                    </div>
                  )}
                  {tool.id === "fontSize" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); cycleFontSize(); }}>
                        {fontSizes[fontSizeIndex].split('-')[1]}%
                      </button>
                    </div>
                  )}
                  {tool.id === "colorContrast" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); cycleContrast(); }}>
                        {contrastClass === ''
                          ? 'عادي'
                          : contrastClass === 'contrast-high'
                          ? 'عالي'
                          : contrastClass === 'contrast-low'
                          ? 'منخفض'
                          : 'تدرج رمادي'}
                      </button>
                    </div>
                  )}
                  {tool.id === "cursorSize" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); toggleCursor(); }}>
                        {cursorLarge ? 'عادي' : 'كبير'}
                      </button>
                    </div>
                  )}
                  {tool.id === "linkHighlight" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); toggleHighlight(); }}>
                        {highlightLinks ? 'إيقاف' : 'تشغيل'}
                      </button>
                    </div>
                  )}
                  {tool.id === "textReader" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); readText(); }}>تشغيل</button>
                    </div>
                  )}
                  {tool.id === "hideImages" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); toggleImages(); }}>
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
