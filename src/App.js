import "./App.css";
import React from "react";
import SegmentChartGrandient from "./charts/SegmentChartGrandient";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import AreaChart from "./charts/AreaChart";
import VerticalBarChart from "./charts/VerticalBarChart";
import HorizontalBarChart from "./charts/HorizontalBarChart";
import StackedBarChart from "./charts/StackedBarChart";
import GroupedBarChart from "./charts/GroupedBarChart";
import MultiaxisLineChart from "./charts/MultiaxisLineChart";
import PieChart from "./charts/PieChart";
import DoughnutChart from "./charts/DoughnutChart";
import PolarAreaChart from "./charts/PolarAreaChart";
import RadarChart from "./charts/RadarChart";
import ScatterChart from "./charts/ScatterChart";
import BubbleChart from "./charts/BubbleChart";
import MultitypeChart from "./charts/MultitypeChart";
import ChartEvents from "./charts/ChartEvents";
function App() {
  return (
    <div className="content">
      <LineChart />
      <BarChart />
      <SegmentChartGrandient />
      <AreaChart />
      <VerticalBarChart />
      <HorizontalBarChart />
      <StackedBarChart />
      <GroupedBarChart />
      <MultiaxisLineChart />
      <PieChart />
      <DoughnutChart />
      <PolarAreaChart />
      <RadarChart />
      <ScatterChart />
      <BubbleChart />
      <MultitypeChart />
      <ChartEvents />
    </div>
  );
}

export default App;
