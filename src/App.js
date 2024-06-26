import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Cpu, DollarSign, TrendingUp, Users } from 'lucide-react';

const WexQ12024Report = () => {
  const financialData = [
    { name: 'Q1 2023', revenue: 612.0, netIncome: 68.0 },
    { name: 'Q1 2024', revenue: 652.7, netIncome: 65.8 },
  ];

  const segmentData = [
    { name: 'Mobility', revenue: 339.0, growth: -1 },
    { name: 'Corporate Payments', revenue: 122.5, growth: 17 },
    { name: 'Benefits', revenue: 191.2, growth: 16 },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">WEX Inc. Q1 2024 Business Intelligence Report</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2" /> Financial Highlights</h2>
          <ul className="list-disc list-inside">
            <li>Q1 revenue increased 7% year-over-year to $652.7 million</li>
            <li>GAAP net income was $1.55 per diluted share</li>
            <li>Adjusted net income was $3.46 per diluted share</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><TrendingUp className="mr-2" /> Performance Metrics</h2>
          <ul className="list-disc list-inside">
            <li>Total volume across all segments: $56.8 billion (+8.6% YoY)</li>
            <li>Mobility payment processing transactions: 136.9 million (flat YoY)</li>
            <li>Average number of vehicles serviced: 19.4 million (+4% YoY)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center"><Cpu className="mr-2" /> Segment Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={segmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($M)" />
            <Bar yAxisId="right" dataKey="growth" fill="#82ca9d" name="Growth (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center"><Users className="mr-2" /> Key Achievements</h2>
        <ul className="list-disc list-inside">
          <li>Continued progress in integrating recent acquisitions</li>
          <li>Launched pilot for enhanced acceptance offering for North American Mobility customers</li>
          <li>Driving innovation to expand customer value proposition</li>
          <li>Focusing on leveraging technology and AI to improve efficiency and enhance offerings</li>
        </ul>
      </div>
    </div>
  );
};

export default WexQ12024Report;
