import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = {
  resultados: {
    Punto: ["O", "A", "B", "C", "D"],
    "Coordenada X (X1)": [0, 0, 5, 5.0, 0],
    "Coordenada Y (X2)": [0, 0.0, 0, 0.0, 2],
    "Valor de la función objetivo (Z)": [0, 25.0, 25.0, 25.0, 25.0],
  },
};

// Transforma los datos en un formato adecuado para Recharts
const chartData = data.resultados.Punto.map((punto, index) => ({
  Punto: punto,
  "Coordenada X (X1)": data.resultados["Coordenada X (X1)"][index],
  "Coordenada Y (X2)": data.resultados["Coordenada Y (X2)"][index],
  "Valor de la función objetivo (Z)":
    data.resultados["Valor de la función objetivo (Z)"][index],
}));

const PlaneCartesian = () => {
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
