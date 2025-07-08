import React from 'react';
import './App.css';

// ✅ استدعاء أداة الوصول الموحدة
import AccessibilityTool from './components/AccessibilityTool';

function App0() {
  const [fontClass, setFontClass] = React.useState('');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      const bodyClasses = Array.from(document.body.classList);
      const fontFamily = bodyClasses.find(cls =>
        cls === 'font-cairo' || cls === 'font-tajawal' || cls === 'font-dyslexic'
      );
      setFontClass(fontFamily || '');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app ${fontClass}`}>
      <AccessibilityTool />
    </div>
  );
}

export default App0;
