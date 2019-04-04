import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const Chart = props => {
  //Pushes a new recharts Line in an array of JSX elements for each sensor selected
  const lines = [];
  props.selected.forEach(sensor => {
    lines.push(
      <Line
        key={sensor}
        type="monotone"
        dataKey={sensor}
        stroke={
          sensor === "CH01 SE01"
            ? "#FF5151"
            : sensor === "CH01 SE14"
            ? "#98FF98"
            : sensor === "CH03 SE01"
            ? "#6FD3FF"
            : ""
        }
      />
    );
  });
  console.log(props.data);
  return (
    <div>
      <ResponsiveContainer height={400}>
        <LineChart data={props.data}>
          <XAxis dataKey="time" stroke="grey" tickLine={false} />
          <YAxis
            domain={[-50, 200]}
            ticks={[-50, 0, 50, 100, 150, 200]}
            unit={"\u00b0C"}
            axisLine={false}
            tickLine={false}
          />
          />
          <CartesianGrid stroke="grey" strokeDasharray="3 3" />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="middle"
            layout="vertical"
            height={36}
            iconType="circle"
          />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
