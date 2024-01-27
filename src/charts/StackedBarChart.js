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
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const values1 = [4, 5, 5, 5, 3, 3, 6];
const values2 = [2, 4, 1, 6, 1, 4, 7];
const values3 = [7, 2, 4, 5, 3, 2, 2];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: values1,
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: values2,
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: values3,
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export default function StackedBarChart() {
  return (
    <div className="chart">
      StackedBarChart
      <Bar options={options} data={data} />
    </div>
  );
}
