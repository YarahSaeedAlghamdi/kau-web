import React, { useEffect, useState } from "react";
import "./VoiceCommands.css";
import voiceIcon from "../assets/images/voice-icon.png"; // أيقونة الميكروفون

const commandsList = [
  { command: ["تمرير لأعلى", "فوق", "اطلع"], action: () => window.scrollBy({ top: -100, behavior: "smooth" }) },
  { command: ["تمرير لأسفل", "تحت", "انزل"], action: () => window.scrollBy({ top: 100, behavior: "smooth" }) },
  { command: ["أعلى الصفحة", "الاعلى"], action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { command: ["أسفل الصفحة", "نهاية الصفحة", "الاسفل"], action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }) },
  { command: ["تحديث", "حدث الصفحة", "اعادة تحميل", "ريفريش"], action: () => window.location.reload() },
];

export default function VoiceCommands() {
  const [showList, setShowList] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.lang = 'ar-SA';
    recog.continuous = true;
    recog.interimResults = false;

    recog.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      const matchedCommand = commandsList.find(cmd =>
        cmd.command.some(phrase => transcript.includes(phrase))
      );
      if (matchedCommand) {
        matchedCommand.action();
        setLastCommand(matchedCommand.command[0]); // نعرض أول اسم كتمثيل
        playSound();
        setTimeout(() => setLastCommand(""), 2000);
      }
    };

    setRecognition(recog);
  }, []);

  const toggleListening = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
    audio.play();
  };

  return (
    <>
      <button className="voice-btn" onClick={() => setShowList(!showList)}>
        <img src={voiceIcon} alt="Voice Icon" className="voice-icon preserve-image" />
      </button>

      {showList && (
        <div className="voice-panel">
          <h4>قائمة الأوامر:</h4>

          <button className={`toggle-mic ${isListening ? 'on' : 'off'}`} onClick={toggleListening}>
            {isListening ? "إيقاف التعرف الصوتي" : "تشغيل التعرف الصوتي"}
          </button>

          <ul>
            {commandsList.map((cmd, i) => (
              <li
                key={i}
                onClick={() => {
                  cmd.action();
                  setLastCommand(cmd.command[0]);
                  playSound();
                  setTimeout(() => setLastCommand(""), 2000);
                }}
                className={lastCommand === cmd.command[0] ? "highlighted" : ""}
              >
                <span className="command-bullet">🗣️</span>
                <strong>{cmd.command[0]}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
