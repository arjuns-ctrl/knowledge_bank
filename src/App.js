
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import EntryForm from "./EntryForm";

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(data);
  }, []);

  const addEntry = (entry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div style={{padding:"20px", fontFamily:"Arial"}}>
      <h1>📘 Knowledge Bank</h1>
      <Dashboard entries={entries}/>
      <EntryForm addEntry={addEntry}/>
    </div>
  );
}
