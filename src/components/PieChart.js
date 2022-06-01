import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const PieChat = ({ salesData }) => {
  return (
    <div>
      <Pie data={salesData} />
    </div>
  );
};

export default PieChat;
