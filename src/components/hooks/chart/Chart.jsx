import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'Web Development', value: 600 },
        { name: 'UI/UX Design', value: 300 },
        { name: 'Data Science', value: 200 },
        { name: 'Marketing', value: 150 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="w-full  h-[400px] bg-white rounded-xl shadow-md p-10">
            <h2 className="text-xl font-semibold mb-4 text-center">📊 Course Enrollment Statistics</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;
