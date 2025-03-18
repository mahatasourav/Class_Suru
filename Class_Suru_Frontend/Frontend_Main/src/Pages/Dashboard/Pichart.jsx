import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Style from "../../css/profile.module.css";

const Pichart = () => {
  // Exam Data
  const data = [
    { name: "Not Attended", value: 150, color: "#ccc" },
    { name: "Passed", value: 35, color: "#4caf50" },
    { name: "Failed", value: 5, color: "#f44336" },
    { name: "Attended", value: 10, color: "#2196f3" },
  ];

  return (
    <div>
      <div className={Style.pie}>
        <PieChart width={200} height={200} className={Style.piePhoto}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className={Style.piData}>
        <p>
          {" "}
          <div className={`${Style.circlePassed} ${Style.circle}`}></div> 35
          Exam Passed
        </p>
        <p>
          <div className={`${Style.circleFailed} ${Style.circle}`}></div> 2 Exam
          Failed
        </p>
        <p>
          <div className={`${Style.circleAttend} ${Style.circle}`}></div> 10
          Exam Attend
        </p>
        <p>
          <div className={`${Style.circleNotAttend} ${Style.circle}`}></div> 10
          Exam Not Attened
        </p>
      </div>
    </div>
  );
};

export default Pichart;
