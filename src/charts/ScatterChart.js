import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export const data = {
  datasets: [
    {
      label: "A dataset",
      data: [
        [1, 2],
        [0, 1],
        [10, 5],
        [-1, 5],
        [4.3, 3],
        [6.2, 4],
        [-1, 7],
        [2.5, 5.8],
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

export default function ScatterChart() {
  return (
    <div className="chart">
      ScatterChart <Scatter options={options} data={data} />
    </div>
  );
}
