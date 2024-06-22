// src/components/PropertyReferrals.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Social Media', value: 20 },
  { name: 'Marketplaces', value: 40 },
  { name: 'Websites', value: 15 },
  { name: 'Digital Ads', value: 10 },
  { name: 'Others', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C'];

const PropertyReferrals = () => (
  <PieChart width={580} height={300}>
    <Pie
      data={data}
      cx={300}
      cy={130}
      innerRadius={60}
      outerRadius={100}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default PropertyReferrals;
