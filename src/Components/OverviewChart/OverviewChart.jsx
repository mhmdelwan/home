// src/components/OverviewChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Apr', Sold: 4000, Rent: 2400 },
  { name: 'May', Sold: 3000, Rent: 1398 },
  { name: 'Jun', Sold: 2000, Rent: 9800 },
  { name: 'Jul', Sold: 2780, Rent: 3908 },
  { name: 'Aug', Sold: 1890, Rent: 4800 },
  { name: 'Sep', Sold: 2390, Rent: 3800 },
  { name: 'Oct', Sold: 3490, Rent: 4300 },
];

const OverviewChart = () => (
  <LineChart
    width={580}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Sold" stroke="#8884d8" />
    <Line type="monotone" dataKey="Rent" stroke="#82ca9d" />
  </LineChart>
);

export default OverviewChart;
