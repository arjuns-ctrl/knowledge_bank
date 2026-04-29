
import React, {useState} from "react";
import "./style.css";

const structure = {
  "\ud83d\udcda Knowledge Log": [
    "\ud83d\udcd6  MY KNOWLEDGE BANK  \u2014  Lifelong Learning Tracker",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "\ud83d\udcca Dashboard": [
    "\ud83d\udcca  KNOWLEDGE BANK DASHBOARD",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "\ud83d\udccb Reading List": [
    "\ud83d\udccb  READING LIST & RESOURCE TRACKER",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "\ud83c\udfaf Goals & Milestones": [
    "\ud83c\udfaf  GOALS & MILESTONES  \u2014  Your North Star",
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "\u2139\ufe0f How to Use": [
    "\u2139\ufe0f  HOW TO USE YOUR KNOWLEDGE BANK",
    null,
    null,
    null,
    null
  ]
};

export default function App() {
  const [data, setData] = useState({});

  const handleChange = (sheet, field, value) => {
    setData(prev => ({
      ...prev,
      [sheet]: {
        ...prev[sheet],
        [field]: value
      }
    }));
  };

  return (
    <div className="container">
      <h1>📘 Knowledge Bank (Excel Replica)</h1>

      {Object.keys(structure).map(sheet => (
        <div className="sheet" key={sheet}>
          <h2>{sheet}</h2>
          <div className="grid">
            {structure[sheet].map(field => (
              <div className="cell" key={field}>
                <label>{field}</label>
                <input 
                  value={data[sheet]?.[field] || ""}
                  onChange={e => handleChange(sheet, field, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
