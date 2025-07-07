// src/App.jsx
import React from 'react'
import './App.css'
import NewsSection from './components/NewsSection'
import SaudiMapAnimated from "./SaudiMapAnimated";
import Achievements from './components/Achievements';
import Footer from "./components/Footer";
import UniversityMessage from "./components/UniversityMessage";


function App() {
  return (
    <div className="App">
      {/* You can add other sections/components here */}
      <UniversityMessage />
      <SaudiMapAnimated />
      <Achievements />
      <NewsSection />
      <Footer />
    </div>
  )

}

export default App




