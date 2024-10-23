import React, { useContext } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import ExpenseContext from '../context/ExpenseContext';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Charts = () => {
  const { state } = useContext(ExpenseContext);

  const monthlyExpenses = {};
  state.expenses.forEach(exp => {
    const month = new Date(exp.date).toLocaleString('default', { month: 'short' });
    monthlyExpenses[month] = (monthlyExpenses[month] || 0) + parseFloat(exp.amount);
  });

  const lineData = {
    labels: Object.keys(monthlyExpenses),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(monthlyExpenses),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(monthlyExpenses),
    datasets: [
      {
        label: 'Category Breakdown',
        data: Object.values(monthlyExpenses),
        backgroundColor: [
          'rgba(75,192,192,0.5)',
          'rgba(255,99,132,0.5)',
          'rgba(255,206,86,0.5)',
          'rgba(54,162,235,0.5)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Expense Charts</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '100%' }}>
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '100%' }}>
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
