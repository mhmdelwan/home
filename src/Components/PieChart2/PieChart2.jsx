import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [60, 40], // 60% completed, 40% remaining
        backgroundColor: ['#FFA500', '#FFFFFF'],
        borderColor: ['#FFA500', '#FFFFFF'],
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
