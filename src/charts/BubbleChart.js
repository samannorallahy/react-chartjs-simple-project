import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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
      label: "Red dataset",
      data: [
        [2, 10, 15],
        [-5, 30, 20],
        [15, 40, 11],
        [-10, 3, 7],
        [33, -20, 10],
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: [
        [33, 10, 16],
        [20, 33, 16],
        [-20, 16, 5],
        [-1, 22, 20],
        [12, 15, 16],
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function BubbleChart() {
  return (
    <div className="chart">
      BubbleChart
      <Bubble options={options} data={data} />
    </div>
  );
}
