import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChat = ({ salesData }) => {
  return (
    <div>
      <Bar data={salesData} />
    </div>
  );
};

export default BarChat;
