import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Statistics.css";

const Statistics = () => {
  const { quizes } = useLoaderData();
  const data = quizes;

  return (
    <div className="d-flex justify-content-center">
      <ResponsiveContainer width="40%" height="40%" aspect={1}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
