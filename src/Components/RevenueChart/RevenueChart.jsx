import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 300, 400, 350, 500, 450, 400, 600, 650, 550, 600, 500, 700, 750, 800, 900, 850, 900, 950, 800, 750, 700],
        backgroundColor: '#7D40F7',
        borderColor: '#7D40F7',
        borderWidth: 1,
        hoverBackgroundColor: '#3e3e3e',
        hoverBorderColor: '#3e3e3e',
      },
      {
        label: 'Expected Revenue',
        data: [400, 500, 600, 550, 700, 650, 600, 800, 850, 750, 800, 700, 900, 950, 1000, 1100, 1050, 1100, 1150, 1000, 950, 900],
        backgroundColor: '#E2E2E2',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        hoverBackgroundColor: '#3e3e3e',
        hoverBorderColor: '#3e3e3e',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        // text: 'Total Revenue',
        font: {
          size: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 200,
          callback: (value) => `${value}k`,
        },
        grid: {
          color: '#E2E2E2',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%',  }}>
      <h3>Total Revenue</h3>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>$236,535</h3>
      <p style={{ fontSize: '14px', color: '#6c757d' }}>0.8% than last day</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
