import React, { useEffect, useState } from "react";
import "./VoiceCommands.css";
import voiceIcon from "../assets/images/voice-icon.png"; // أيقونة الميكروفون

const commandsList = [
  // تمرير لاعلى , تمرير لاسفل , 
  { command: "فوق", action: () => window.scrollBy({ top: -100, behavior: "smooth" }) },
  { command: "تحت", action: () => window.scrollBy({ top: 100, behavior: "smooth" }) },
  { command: "أعلى الصفحة", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { command: "أسفل الصفحه", action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }) },
  { command: "تحديث الصفحه", action: () => window.location.reload() },
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
      const matchedCommand = commandsList.find(cmd => transcript.includes(cmd.command));
      if (matchedCommand) {
        matchedCommand.action();
        setLastCommand(matchedCommand.command);
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
                  setLastCommand(cmd.command);
                  playSound();
                  setTimeout(() => setLastCommand(""), 2000);
                }}
                className={lastCommand === cmd.command ? "highlighted" : ""}
              >
                <span className="command-bullet">🗣️</span>
                <strong>{cmd.command}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
