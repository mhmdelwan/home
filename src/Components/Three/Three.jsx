import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PropertyReferralsChart = () => {
  const data = {
    labels: ['Social Media', 'Marketplaces', 'Websites', 'Digital Ads', 'Others'],
    datasets: [
      {
        label: 'Social Media',
        data: [20, 80], // 20% social media, 80% empty to complete the ring
        backgroundColor: ['#6A74F7', 'rgba(106, 116, 247, 0.2)'],
        hoverBackgroundColor: ['#4E5DF5', 'rgba(106, 116, 247, 0.2)'],
        borderWidth: 1,
      },
      {
        label: 'Marketplaces',
        data: [40, 60], // 40% marketplaces, 60% empty
        backgroundColor: ['#00BFFF', 'rgba(0, 191, 255, 0.2)'],
        hoverBackgroundColor: ['#1E90FF', 'rgba(0, 191, 255, 0.2)'],
        borderWidth: 1,
      },
      {
        label: 'Websites',
        data: [15, 85], // 15% websites, 85% empty
        backgroundColor: ['#32CD32', 'rgba(50, 205, 50, 0.2)'],
        hoverBackgroundColor: ['#228B22', 'rgba(50, 205, 50, 0.2)'],
        borderWidth: 1,
      },
      {
        label: 'Digital Ads',
        data: [25, 75], // 25% digital ads, 75% empty
        backgroundColor: ['#FFA500', 'rgba(255, 165, 0, 0.2)'],
        hoverBackgroundColor: ['#FF8C00', 'rgba(255, 165, 0, 0.2)'],
        borderWidth: 1,
      },
      {
        label: 'Others',
        data: [15, 85], // 15% others, 85% empty
        backgroundColor: ['#FF4500', 'rgba(255, 69, 0, 0.2)'],
        hoverBackgroundColor: ['#FF0000', 'rgba(255, 69, 0, 0.2)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
        labels: {
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
    cutout: '70%',
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h2 style={{marginBottom:"20px"}}>Property Referrals</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PropertyReferralsChart;