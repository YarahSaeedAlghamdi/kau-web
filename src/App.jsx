// src/App.jsx
import React from 'react'
import './App.css'
import NewsSection from './components/NewsSection'
import SaudiMapAnimated from "./SaudiMapAnimated";
import Achievements from './components/Achievements';
function App() {
  return (
    <div className="App">
      {/* You can add other sections/components here */}
      <SaudiMapAnimated />
      <Achievements />
      <NewsSection />
    </div>
  )

}

export default App




