import React, { useState } from "react";
import Rewards from "./Rewards";
import AcademicAccreditations from "./AcademicAccreditations";
import "./TabbedAwards.css";

export default function TabbedAwards() {
  const [activeTab, setActiveTab] = useState("rewards");

  return (
    <section className="tabbed-section">
      <div className="tabs-header">
        <button
          className={activeTab === "rewards" ? "tab active" : "tab"}
          onClick={() => setActiveTab("rewards")}
        >
          🏆 الجوائز
        </button>
        <button
          className={activeTab === "accreditations" ? "tab active" : "tab"}
          onClick={() => setActiveTab("accreditations")}
        >
          🎖️ الاعتمادات الأكاديمية
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "rewards" ? <Rewards /> : <AcademicAccreditations />}
      </div>
    </section>
  );
}
