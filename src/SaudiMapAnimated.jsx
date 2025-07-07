export default function SaudiMapAnimated() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        className="w-[90%] animate-draw"
        fill="none"
        stroke="#00b300"
        strokeWidth="1"
      >
        <path
          className="path"
          d="
            M 150 300 L 350 200 L 500 300 L 650 150 L 850 250 L 1000 200
            M 1000 200 L 1100 500 L 1000 700 L 850 600 L 700 700 L 550 550 L 400 700 L 300 600 L 150 300
            M 350 200 L 850 600
            M 500 300 L 700 700
            M 650 150 L 550 550
            M 150 300 L 500 300
            M 300 600 L 850 250
            M 400 700 L 850 250
            M 700 700 L 350 200
            M 1000 200 L 300 600
          "
         // transform=" rotate(30, 0, 0)"
        />
      </svg>
    </div>
  );
}