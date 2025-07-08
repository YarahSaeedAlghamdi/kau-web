import React, { useState, useEffect } from 'react';
import './AccessibilityTool.css';

import '@fontsource/cairo';
import '@fontsource/tajawal';
import '@fontsource/opendyslexic';

const AccessibilityTool = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [fontClass, setFontClass] = useState('font-100');
  const [fontFamilyClass, setFontFamilyClass] = useState('font-cairo');
  const [contrastClass, setContrastClass] = useState('');
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [cursorLarge, setCursorLarge] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false); // 🗣️ حالة الأوامر الصوتية

  // 🔱 Cursor effect
  useEffect(() => {
    document.body.style.cursor = cursorLarge ? 'url("/cursor-large.cur"), auto' : 'auto';
  }, [cursorLarge]);

  // 🔗 Highlight links & buttons
  useEffect(() => {
    document.body.classList.toggle('highlighted-links', highlightLinks);
  }, [highlightLinks]);

  // 🔠 Font size
  useEffect(() => {
    document.body.classList.remove('font-100', 'font-150', 'font-200');
    document.body.classList.add(fontClass);
  }, [fontClass]);

  // ✍️ Font family
  useEffect(() => {
    document.body.classList.remove('font-cairo', 'font-tajawal', 'font-dyslexic');
    document.body.classList.add(fontFamilyClass);
  }, [fontFamilyClass]);

  // 🎨 Contrast
  useEffect(() => {
    document.body.classList.remove('contrast-high', 'contrast-low');
    if (contrastClass) {
      document.body.classList.add(contrastClass);
    }
  }, [contrastClass]);

  // 🌑 Grayscale
  useEffect(() => {
    if (isGrayscale) {
      document.body.classList.add('grayscale');
    } else {
      document.body.classList.remove('grayscale');
    }
  }, [isGrayscale]);

  // 🖼️ Hide/Show Images
  useEffect(() => {
    document.body.classList.toggle('hide-images', hideImages);
    document.querySelectorAll('img').forEach(img => {
      img.style.display = hideImages ? 'none' : '';
    });
  }, [hideImages]);

  // 🗣️ Voice Commands
  useEffect(() => {
    if (!voiceActive) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('❌ المتصفح لا يدعم التعرف على الصوت');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      console.log('🎤 الأمر الصوتي:', transcript);

      if (transcript.includes('فوق')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } 
      else if (transcript.includes('تحت')) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      else if (transcript.includes('أعلى الصفحة')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } 
      
      else if (transcript.includes('أسفل الصفحة')) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } 
      else if (transcript.includes('تحديث')) {
        window.location.reload();
      }
    };

    recognition.onerror = (e) => {
      console.error('🎤 خطأ في التعرف على الصوت:', e.error);
    };

    recognition.start();
    return () => recognition.stop();
  }, [voiceActive]);

  // 🔊 Text Reader
  const readText = () => {
    const clone = document.body.cloneNode(true);
    const tool = clone.querySelector('.accessibility-wrapper');
    if (tool) tool.remove();

    const text = clone.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const setFontSize = (size) => {
    setFontClass(size);
  };

  const setContrast = (contrast) => {
    setContrastClass(contrast === 'contrast-none' ? '' : contrast);
    setIsGrayscale(contrast === 'contrast-none');
  };

  const resetAll = () => {
    setFontClass('font-100');
    setFontFamilyClass('font-cairo');
    setContrastClass('');
    setIsGrayscale(false);
    setCursorLarge(false);
    setHighlightLinks(false);
    setHideImages(false);
    setVoiceActive(false);
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

  return (
    <div className="accessibility-wrapper">
      <div
        className="accessibility-container"
        onMouseEnter={() => setShowFeatures(true)}
        onMouseLeave={() => setShowFeatures(false)}
      >
        <button className="main-icon" aria-label="فتح أدوات الوصول">
          <img src="access-icon.png" alt="رمز الوصول" />
        </button>

        {showFeatures && (
          <div className="features-box">
            {/* Font Size */}
            <div>
              <button className="feature-button" onClick={() => togglePanel('font')}>🔠 حجم الخط</button>
              {activePanel === 'font' && (
                <div className="settings-panel">
                  <button className="option-button gray-btn" onClick={() => setFontSize('font-100')}>100%</button>
                  <button className="option-button gray-btn" onClick={() => setFontSize('font-150')}>150%</button>
                  <button className="option-button gray-btn" onClick={() => setFontSize('font-200')}>200%</button>
                </div>
              )}
            </div>

            {/* Font Family */}
            <div>
              <button className="feature-button" onClick={() => togglePanel('font-family')}>✍️ نوع الخط</button>
              {activePanel === 'font-family' && (
                <div className="settings-panel">
                  <button className="option-button gray-btn" onClick={() => setFontFamilyClass('font-cairo')}>Cairo</button>
                  <button className="option-button gray-btn" onClick={() => setFontFamilyClass('font-tajawal')}>Tajawal</button>
                  <button className="option-button gray-btn" onClick={() => setFontFamilyClass('font-dyslexic')}>Open Dyslexic</button>
                </div>
              )}
            </div>

            {/* Contrast */}
            <div>
              <button className="feature-button" onClick={() => togglePanel('contrast')}>🎨 تشبع الألوان</button>
              {activePanel === 'contrast' && (
                <div className="settings-panel">
                  <button className="option-button gray-btn" onClick={() => setContrast('contrast-high')}>تشبع عالي</button>
                  <button className="option-button gray-btn" onClick={() => setContrast('contrast-low')}>تشبع منخفض</button>
                  <button className="option-button gray-btn" onClick={() => setContrast('contrast-none')}>عدم التشبع</button>
                </div>
              )}
            </div>

            {/* Cursor */}
            <div>
              <button className="feature-button" onClick={() => setCursorLarge(!cursorLarge)}>
                {cursorLarge ? '👡 إعادة المؤشر' : '👡 تكبير المؤشر'}
              </button>
            </div>

            {/* Highlight Links */}
            <div>
              <button className="feature-button" onClick={() => setHighlightLinks(!highlightLinks)}>
                {highlightLinks ? '🔗 إزالة التمييز' : '🔗 تمييز الروابط والأزرار'}
              </button>
            </div>

            {/* Text Reader */}
            <div>
              <button className="feature-button" onClick={() => togglePanel('read')}>🔊 قراءة النص</button>
              {activePanel === 'read' && (
                <div className="settings-panel">
                  <button className="option-button green-btn" onClick={readText}>تشغيل</button>
                </div>
              )}
            </div>

            {/* 🆕 Voice Command */}
            {/* 🆕 Voice Command */}
            <div>
              <button className="feature-button" onClick={() => setVoiceActive(!voiceActive)}>
                {voiceActive ? '🎙️ إيقاف الأوامر الصوتية' : '🎙️ تشغيل الأوامر الصوتية'}
              </button>
              {voiceActive && <span className="voice-on-indicator">🔊 جاري الاستماع</span>}
            </div>


            {/* Hide Images */}
            <div>
              <button className="feature-button" onClick={() => setHideImages(!hideImages)}>
                {hideImages ? '🖼️ إظهار الصور' : '🖼️ إخفاء الصور'}
              </button>
            </div>

            {/* Reset */}
            <div>
              <button className="feature-button" onClick={resetAll}>♻️ استعادة الإعدادات</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessibilityTool;
