import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const [Time, setTime] = useState(new Date());
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <div>{/* <h2>{Time.toLocaleTimeString()}</h2> */}</div>
      <div>
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
        <div>
          {language === "en" && (
            <p>Current Time: {Time.toLocaleTimeString()}</p>
          )}
          {language === "fr" && (
            <p>Heure actuelle: {Time.toLocaleTimeString()}</p>
          )}
          {language === "es" && <p>Hora actual: {Time.toLocaleTimeString()}</p>}
        </div>
      </div>
    </>
  );
}

export default Clock;
