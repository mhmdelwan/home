import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [90, 10], // 90% completed, 10% remaining
        backgroundColor: ['#964B00', '#FFFFFF'],
        borderColor: ['#7F00FF', '#FFFFFF'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Hide the tooltip
      },
    },
    cutout: '70%', // Adjust to make the doughnut chart look like a pie chart
  };

  return (
    <div style={{ width: '80px', height: '80px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
