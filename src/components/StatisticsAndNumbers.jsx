import { useState, useEffect } from "react";
import "./StatisticsAndNumbers.css";

const statsGroups = [
  [
    { value: "117096", label1: "إجمالي عدد طلاب", label2: "الجامعة" },
    { value: "25%", label1: "نسبة الطلاب من", label2: "ذوي الإعاقة" },
    { value: "1460", label1: "عدد المستفيدين من", label2: "خدمات الإسكان" },
    { value: "35", label1: "كلية" },
  ],
  [
    { value: "141", label1: "برنامج بكالوريوس" },
    { value: "17", label1: "برنامج تعليم عن بعد" },
    { value: "15", label1: "برنامج بحثي" },
    { value: "39", label1: "نادي طلابي" },
  ],
  [
    { value: "1", label1: "محليًا في", label2: "الاستدامة" },
    { value: "5", label1: "عربيًا" },
    { value: "143", label1: "عالميًا" },
    { value: "267", label1: "طالب حاصل على", label2: "جوائز محلية ودولية" },
  ],
];

export default function StatisticsAndNumbers() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (showStats) {
      const interval = setInterval(() => {
        setCurrentGroup((prev) => (prev + 1) % statsGroups.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showStats]);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const baseY = 420;
  const baseX = 450;
  const spacing = 200;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        className="w-[90%] animate-draw"
        fill="none"
        stroke="green"
        strokeWidth="1"
      >
        <path
          className="path"
          d="M 150 300 L 350 200 L 500 300 L 650 150 L 850 250 L 1000 200
             M 1000 200 L 1100 500 L 1000 700 L 850 600 L 700 700 L 550 550 L 400 700 L 300 600 L 150 300
             M 350 200 L 850 600 M 500 300 L 700 700 M 650 150 L 550 550
             M 150 300 L 500 300 M 300 600 L 850 250 M 400 700 L 850 250
             M 700 700 L 350 200 M 1000 200 L 300 600"
        />

        {showStats && (
          <>
            <text
              x={baseX - 400}
              y={baseY + 5}
              className="stats-title"
              textAnchor="end"
            >
              احصائيات وارقام
            </text>
            <line
              x1={baseX - 190}
              y1={baseY}
              x2={baseX + 3 * spacing}
              y2={baseY}
              className="stats-connector"
            />
          </>
        )}

        {showStats && (
          <g>
            {[0, 1, 2].map((groupIndex, i) => (
              <circle
                key={i}
                cx={baseX - 140 - i * 25}
                cy={baseY}
                r={5}
                className="nav-circle"
                onClick={() => setCurrentGroup(groupIndex)}
              />
            ))}
          </g>
        )}

        {showStats && (
          <g
            className={`stats-slider group-${currentGroup}`}
            fontFamily="Segoe UI"
            textAnchor="middle"
            style={{ transformOrigin: "center" }}
          >
            {statsGroups.map((group, groupIndex) =>
              group.map((stat, i) => {
                const cx = baseX + i * spacing + groupIndex * 1200;
                const cy = baseY;
                return (
                  <g key={`${groupIndex}-${i}`}>
                    <circle cx={cx} cy={cy} r="65" className="stats-circle" />
                    <text x={cx} y={cy - 10} className="stats-value">
                      {stat.value}
                    </text>
                    {stat.label1 && (
                      <text x={cx} y={cy + 15} className="stats-label">
                        {stat.label1}
                      </text>
                    )}
                    {stat.label2 && (
                      <text x={cx} y={cy + 35} className="stats-label">
                        {stat.label2}
                      </text>
                    )}
                  </g>
                );
              })
            )}
          </g>
        )}
      </svg>

      {showStats && (
        <div className="flex gap-3 mt-8 mb-6">
          {statsGroups.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentGroup(i)}
              className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 border-2 ${
                currentGroup === i
                  ? "bg-green-600 border-green-600 scale-110"
                  : "bg-white border-gray-400"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
