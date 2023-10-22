import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="clock">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italy</option>
        <option value="es">Spanish</option>
      </select>
      <div>
        {language === "en" && <p>Current Time: {time.toLocaleTimeString()}</p>}
        {language === "it" && <p>Ora attuale: {time.toLocaleTimeString()}</p>}
        {language === "es" && <p>Hora actual: {time.toLocaleTimeString()}</p>}
      </div>
    </div>
  );
}

export default Clock;
