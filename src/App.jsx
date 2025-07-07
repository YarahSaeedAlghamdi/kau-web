// src/App.jsx
import React from 'react'
import './App.css'
import NewsSection from './components/NewsSection'
import SaudiMapAnimated from "./SaudiMapAnimated";
function App() {
  return (
    <div className="App">
      {/* You can add other sections/components here */}
      <SaudiMapAnimated />
      <NewsSection />
    </div>
  )

}

export default App




