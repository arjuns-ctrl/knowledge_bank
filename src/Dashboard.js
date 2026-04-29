
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard({ entries }) {
  const data = entries.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(data).map(k => ({name:k, value:data[k]}));

  return (
    <div style={{background:"#fff", padding:"20px", margin:"20px 0", borderRadius:"10px"}}>
      <h2>📊 Dashboard</h2>
      <p>Total Entries: {entries.length}</p>
      <BarChart width={400} height={250} data={chartData}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="value"/>
      </BarChart>
    </div>
  );
}
