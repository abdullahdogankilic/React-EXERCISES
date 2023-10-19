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
          <option value="it">Italian</option>
        </select>
        <div>
          {language === "en" && (
            <p>Current Time: {Time.toLocaleTimeString()}</p>
          )}
          {language === "it" && <p>Ora attuale: {Time.toLocaleTimeString()}</p>}
        </div>
      </div>
    </>
  );
}

export default Clock;
