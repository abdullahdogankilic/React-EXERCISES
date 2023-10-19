import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const Clock = () => {
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
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italy</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default Clock;
