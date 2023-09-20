import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const PlaneCartesian = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={600} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Punto" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Coordenada X (X1)"
          stroke="#8884d8"
          name="Coordenada X (X1)"
        />
        <Line
          type="monotone"
          dataKey="Coordenada Y (X2)"
          stroke="#82ca9d"
          name="Coordenada Y (X2)"
        />
        <Line
          type="monotone"
          dataKey="Valor de la función objetivo (Z)"
          stroke="#ff7300"
          name="Valor de la función objetivo (Z)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PlaneCartesian;
