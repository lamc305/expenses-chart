import React from "react";
import Chart from "./Chart";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="main">
      <h1 className="text-color-dark-browm text-lg">Spending - Last 7 days</h1>
      <Chart />
      <hr />
      <Footer />
    </div>
  );
};

export default Main;
