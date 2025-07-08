// src/App.jsx
import React from 'react'
import './App.css'
import NewsSection from './components/NewsSection'
import SaudiMapAnimated from "./SaudiMapAnimated";
import Achievements from './components/Achievements';
import Partnerships from './components/Partnerships';
import Footer from "./components/Footer";
import UniversityMessage from "./components/UniversityMessage";
import App0 from './Tool_Main';
import KAUContacts from "./components/KAUContacts"; 



function App() {
  return (
    <div id="app-root" className="App">
      {/* You can add other sections/components here */}
      <App0/>
      <UniversityMessage />
      <SaudiMapAnimated />
      <Achievements />
      <Partnerships />
      <NewsSection />
        <KAUContacts /> {/* عرض المكون */}
      <Footer />

    </div>
  )

}

export default App




