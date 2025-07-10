import { useState, useEffect, useRef } from "react";
import "./StatisticsAndNumbers.css";

const statsGroups = [
  [
    { value: "1", label1: "محليًا في", label2: "الاستدامة" },
    { value: "5", label1: "عربيًا" },
    { value: "143", label1: "عالميًا" },
    { value: "267", label1: "طالب حاصل على", label2: "جوائز محلية ودولية" },
  ],
  [
    { value: "117,096", label1: "إجمالي عدد طلاب", label2: "الجامعة" },
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
];

export default function StatisticsAndNumbers() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowStats(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (showStats) {
      const interval = setInterval(() => {
        setCurrentGroup((prev) => (prev + 1) % statsGroups.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showStats]);

  const baseY = 420;
  const baseX = 450;
  const spacing = 200;

  return (
    <div ref={containerRef} className="w-full py-20 flex flex-col items-center justify-center bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        className={`w-[90%] ${showStats ? "animate-draw" : ""}`}
        fill="none"
        stroke="#2F7A55"
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
              أرقام تُميزنا
            </text>

            <line
              x1={baseX - 250}
              y1={baseY}
              x2={baseX + 3 * spacing}
              y2={baseY}
              className="stats-connector"
            />

            {statsGroups.map((_, i) => (
              <g key={i}>
                <title>الصفحة {i + 1}</title>
                <circle
                  cx={baseX - 250 + i * 20}
                  cy={baseY}
                  r={6}
                  className={`nav-circle-svg ${currentGroup === i ? "active" : ""}`}
                  onClick={() => setCurrentGroup(i)}
                />
              </g>
            ))}
          </>
        )}

        {showStats && (
          <g
            className={`stats-slider group-${currentGroup}`}
            fontFamily="Cairo"
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
    </div>
  );
}
