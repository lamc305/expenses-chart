import React from "react";
import data from "../data.json";


const Chart = () => {
  const values = data.map((item) => Object.values(item));
  const maxValue = Math.max(...values.map((item) => item[1]));
  const percentaje = 100 / maxValue;

  return (
    <div className="chart">
      {values.map((item, index) => {
        const style = { height: `${item[1] * percentaje}%` };
        const conditionalClass = maxValue === item[1] ? "bar active" : "bar";
        return (
          <div key={index} className="bar-container">
            <div className="price">{`$${item[1]}`}</div>
            <div className={conditionalClass} style={style}></div>
            <p className="bar-text">{item[0]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
