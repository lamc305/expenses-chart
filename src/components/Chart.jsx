import React from "react";
import data from "../data.json";

const Chart = () => {
  const values = data.map((item) => Object.values(item));
  const arrayNumber = values.map((item) => item[1])
  const maxValue = Math.max(...arrayNumber);
  const sumTotal = arrayNumber.map(c => parseFloat(c)).reduce((a, b) => a + b, 0);
  const percentaje = (100 / sumTotal) * 3
  
  return (
    <div className="chart">
      {values.map((item, index) => {
        const style = { height: `${item[1] * percentaje}%` };
        const conditionalClass = maxValue === item[1] ? "bar active" : "bar";
        return (
          <div key={index} className="bar-container">
            <p className="bar-text">{item[0]}</p>
            <div className={conditionalClass} style={style}></div>
            <div className="price">{`$${item[1]}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
