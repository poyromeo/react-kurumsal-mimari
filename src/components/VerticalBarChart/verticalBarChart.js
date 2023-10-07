import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./verticalBarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Vertical Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [726, 196, 926, 248, 756, 336, 376],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [405, 951, 692, 30, 240, 590, 144],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [405, 951, 692, 30, 240, 590, 144],
      backgroundColor: "#1AACAC",
    },
  ],
};

export default function VerticalBarChartCls() {
  console.log("data", data);

  return (
    <div className="vertical-bar-chart">
      <Bar options={options} data={data} />
    </div>
  );
}
