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
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const values1 = [4, 5, 5, 5, 3, 3, 6];
const values2 = [6, 2, 3, 5, 1, 4, 7];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: values1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: values2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return (
    <div className="chart">
      VerticalBarChart <Bar options={options} data={data} />
    </div>
  );
}
