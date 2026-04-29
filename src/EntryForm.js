
import React, { useState } from "react";

export default function EntryForm({ addEntry }) {
  const [form, setForm] = useState({
    date: "",
    topic: "",
    category: "",
    notes: ""
  });

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    addEntry(form);
    setForm({date:"", topic:"", category:"", notes:""});
  };

  return (
    <form onSubmit={handleSubmit} style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
      <h2>Add Learning</h2>
      <input name="date" placeholder="Date" value={form.date} onChange={handleChange}/><br/>
      <input name="topic" placeholder="Topic" value={form.topic} onChange={handleChange}/><br/>
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange}/><br/>
      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange}/><br/>
      <button type="submit">Save</button>
    </form>
  );
}
