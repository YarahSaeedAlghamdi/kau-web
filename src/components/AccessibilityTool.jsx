import React, { useState, useEffect } from "react";
import "./AccessibilityTool.css";
import icon from "../assets/accessibility.svg";
import audioIcon from "../assets/font-adjustmen.png";
import textIcon from "../assets/font-selection.png";
import colorSet from "../assets/tint.png";
import visionIcon from "../assets/target.png";
import autismIcon from "../assets/view.png";
import mobilityIcon from "../assets/disability.png";
import dyslexiaIcon from "../assets/dyslexia.png";
import adhdIcon from "../assets/distraction.png";
import epilepsyIcon from "../assets/epilepsy.png";
import Zoom from "../assets/zoom-in.png";
import voice from "../assets/voice-assistant.png";
import link from "../assets/link.png";
import picture from "../assets/invisible.png";
import reset from "../assets/circular.png";

const AccessibilityTools = () => {
  const fontSizes = ["font-xs", "font-md", "font-xl"];
  const fontLabels = {
    "font-xs": "خفيف",
    "font-md": "متوسط",
    "font-xl": "كبير",
  };

  const fontFamilies = ["font-arial", "font-verdana", "font-tahoma"];
  const fontLabelsMap = {
    "font-arial": "Arial",
    "font-verdana": "Verdana",
    "font-tahoma": "Tahoma",
  };

  const saturationLevels = ["low", "medium", "high"];

  const [isOpen, setIsOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [fontSizeIndex, setFontSizeIndex] = useState(0);
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);
  const [saturationIndex, setSaturationIndex] = useState(1);
  const [cursorLarge, setCursorLarge] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  const saturationClass = `saturation-${saturationLevels[saturationIndex]}`;

  const ensureAccessibilityClass = () => {
    if (!document.body.classList.contains("apply-accessibility")) {
      document.body.classList.add("apply-accessibility");
    }
  };

  // 1. ضعف البصر
  const activateVisionMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setFontSizeIndex(2); // كبير
    setFontFamilyIndex(1); // Verdana
    setSaturationIndex(2); // عالي التباين
    setCursorLarge(true);
  };

  // 2. عمى الألوان
  const activateColorBlindMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setSaturationIndex(2); // تباين عالي
    setHighlightLinks(true); // تمييز الروابط
  };

  // 3. الإعاقة الحركية
  const activateMobilityMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setCursorLarge(true); // تكبير المؤشر
    setHighlightLinks(true); // تسهيل التفاعل
  };

  // 4. عسر القراءة
  const activateDyslexiaMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setFontSizeIndex(2); // حجم خط كبير
    setFontFamilyIndex(2); // Tahoma (أوضح خط لعسر القراءة)
    setHighlightLinks(true); // تمييز الروابط
  };

  // 5. فرط الحركة وتشتت الانتباه
  const activateADHDMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setHideImages(true); // إخفاء الصور لتقليل التشويش
    setHighlightLinks(true); // توجيه التركيز
  };

  // 6. الصرع
  const activateEpilepsyMode = () => {
    resetAll();
    ensureAccessibilityClass();
    setHideImages(true); // إخفاء الصور المتحركة
  };

  useEffect(() => {
    document.body.classList.remove("font-xs", "font-md", "font-xl");
    if (document.body.classList.contains("apply-accessibility")) {
      document.body.classList.add(fontSizes[fontSizeIndex]);
    }
  }, [fontSizeIndex]);

  useEffect(() => {
    document.body.classList.remove("font-arial", "font-verdana", "font-tahoma");
    if (document.body.classList.contains("apply-accessibility")) {
      document.body.classList.add(fontFamilies[fontFamilyIndex]);
    }
  }, [fontFamilyIndex]);

  useEffect(() => {
    document.body.classList.remove(
      "saturation-low",
      "saturation-medium",
      "saturation-high"
    );
    if (document.body.classList.contains("apply-accessibility")) {
      document.body.classList.add(saturationClass);
    }
  }, [saturationIndex]);

  useEffect(() => {
    document.body.style.cursor = cursorLarge
      ? 'url("/cursor-large.cur"), auto'
      : "auto";
  }, [cursorLarge]);

  useEffect(() => {
    document.body.classList.toggle("highlight-links", highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    const root = document.getElementById("app-root");
    if (!root) return;
    root.classList.toggle("hide-images", hideImages);
    root.querySelectorAll("img:not(.preserve-image)").forEach((img) => {
      img.style.display = hideImages ? "none" : "";
    });
  }, [hideImages]);

  const cycleFontSize = () => {
    ensureAccessibilityClass();
    setFontSizeIndex((prev) => (prev + 1) % fontSizes.length);
  };

  const cycleFontFamily = () => {
    ensureAccessibilityClass();
    setFontFamilyIndex((prev) => (prev + 1) % fontFamilies.length);
  };

  const cycleSaturation = () => {
    ensureAccessibilityClass();
    setSaturationIndex((prev) => (prev + 1) % saturationLevels.length);
  };

  const toggleCursor = () => setCursorLarge((prev) => !prev);
  const toggleHighlight = () => {
    ensureAccessibilityClass();
    setHighlightLinks((prev) => !prev);
  };

  const toggleImages = () => setHideImages((prev) => !prev);
  const toggleFlip = (cardId) =>
    setFlippedCard((prev) => (prev === cardId ? null : cardId));

  const readText = () => {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const resetAll = () => {
    setFontSizeIndex(0);
    setFontFamilyIndex(0);
    setSaturationIndex(1);
    setCursorLarge(false);
    setHighlightLinks(false);
    setHideImages(false);
    speechSynthesis.cancel();

    document.body.classList.remove(
      "font-xs",
      "font-md",
      "font-xl",
      "highlight-links",
      "font-arial",
      "font-verdana",
      "font-tahoma",
      "saturation-low",
      "saturation-high",
      "apply-accessibility"
    );
    document.body.classList.add("saturation-medium");
    document.querySelectorAll("img").forEach((img) => (img.style.display = ""));
    document.body.style.cursor = "auto";
  };

  const tools = [
    { name: "حجم الخط", icon: audioIcon, id: "fontSize" },
    { name: "نوع الخط", icon: textIcon, id: "fontType" },
    { name: "تشبع الألوان", icon: colorSet, id: "colorContrast" },
    { name: "تكبير المؤشر", icon: Zoom, id: "cursorSize" },
    { name: "تمييز الروابط والأزرار", icon: link, id: "linkHighlight" },
    { name: "قراءة النص", icon: voice, id: "textReader" },
    { name: "إخفاء الصور", icon: picture, id: "hideImages" },
    { name: "استعادة الإعدادات", icon: reset, id: "resetAll" },
  ];

  return (
    <div className={`accessibility-container ${isOpen ? "open" : ""}`}>
      <div className={`access-sidebar ${isOpen ? "open" : ""}`}>
        <button className="access-button" onClick={() => setIsOpen(!isOpen)}>
          <img src={icon} alt="Accessibility" className="preserve-image" />
        </button>
        <div className={`mode-buttons-wrapper ${isOpen ? "open" : ""}`}>
          <button
            className="mode-button"
            title="ضعف البصر"
            onClick={activateVisionMode}
          >
            <img src={visionIcon} alt="ضعف البصر" />
          </button>
          <button
            className="mode-button"
            title="عمى الألوان"
            onClick={activateColorBlindMode}
          >
            <img src={autismIcon} alt="عمى الألوان" />
          </button>
          <button
            className="mode-button"
            title="الإعاقة الحركية"
            onClick={activateMobilityMode}
          >
            <img src={mobilityIcon} alt="الإعاقة الحركية" />
          </button>
          <button
            className="mode-button"
            title="عسر القراءة"
            onClick={activateDyslexiaMode}
          >
            <img src={dyslexiaIcon} alt="عسر القراءة" />
          </button>
          <button
            className="mode-button"
            title="فرط الحركة"
            onClick={activateADHDMode}
          >
            <img src={adhdIcon} alt="فرط الحركة" />
          </button>
          <button
            className="mode-button"
            title="نمط الصرع"
            onClick={activateEpilepsyMode}
          >
            <img src={epilepsyIcon} alt="نمط الصرع" />
          </button>
        </div>
      </div>

      <div className={`accessibility-panel ${isOpen ? "open" : ""}`}>
        <h3 className="access-title">أدوات سهولة الوصول</h3>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="tool-card"
              onClick={() => toggleFlip(tool.id)}
            >
              <div
                className={`card-inner ${
                  flippedCard === tool.id ? "flipped" : ""
                }`}
              >
                <div className="card-front">
                  <img src={tool.icon} alt={tool.name} className="tool-icon" />
                  <span>{tool.name}</span>
                </div>
                <div className="card-back">
                  {tool.id === "fontType" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          cycleFontFamily();
                        }}
                      >
                        {fontLabelsMap[fontFamilies[fontFamilyIndex]]}
                      </button>
                    </div>
                  )}
                  {tool.id === "fontSize" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          cycleFontSize();
                        }}
                      >
                        {
                          fontLabels[
                            fontSizes[(fontSizeIndex + 1) % fontSizes.length]
                          ]
                        }
                      </button>
                    </div>
                  )}
                  {tool.id === "colorContrast" && (
                    <div className="font-buttons-wrapper">
                      <button onClick={(e) => { e.stopPropagation(); cycleSaturation(); }}>
                        {saturationLevels[saturationIndex] === 'low'
                          ? 'منخفض'
                          : saturationLevels[saturationIndex] === 'medium'
                          ? 'عادي'
                          : 'عالي'}
                      </button>
                    </div>
                  )}

                  {tool.id === "cursorSize" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCursor();
                        }}
                      >
                        {cursorLarge ? "عادي" : "كبير"}
                      </button>
                    </div>
                  )}
                  {tool.id === "linkHighlight" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleHighlight();
                        }}
                      >
                        {highlightLinks ? "إيقاف" : "تشغيل"}
                      </button>
                    </div>
                  )}
                  {tool.id === "textReader" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          readText();
                        }}
                      >
                        تشغيل
                      </button>
                    </div>
                  )}
                  {tool.id === "hideImages" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleImages();
                        }}
                      >
                        {hideImages ? "إظهار" : "إخفاء"}
                      </button>
                    </div>
                  )}
                  {tool.id === "resetAll" && (
                    <div className="font-buttons-wrapper">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          resetAll();
                        }}
                      >
                        إعادة تعيين
                      </button>
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
