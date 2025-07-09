// src/App.jsx
import React from 'react'
import './App.css'
import NewsSection from './components/NewsSection'
import StatisticsAndNumbers from "./components/StatisticsAndNumbers";
import Achievements from './components/Achievements';
import Partnerships from './components/Partnerships';
import Footer from "./components/Footer";
import UniversityMessage from "./components/UniversityMessage";
import App0 from './Tool_Main';
import NavBar from "./components/NavBar";
import KAUContacts from "./components/KAUContacts"; 
import Home from './components/Home';
import Rewards from './components/Rewards';
import AcademicAccreditations from "./components/AcademicAccreditations";
import TabbedAwards from "./components/TabbedAwards";


function App() {
  return (
    <>
      {/* ✅ لوحة الوصول خارج المحتوى */}
      <App0 />

      {/* ✅ محتوى الموقع */}
      <div id="app-root" className="App">
        <NavBar />
        <Home />
        <Achievements />
        <UniversityMessage />
        <Partnerships />
        <StatisticsAndNumbers />
        <NewsSection />
        <TabbedAwards/>
        <KAUContacts />
        <Footer />
      </div>
    </>
  );
}


export default App




