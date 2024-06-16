import React from 'react';
import { Pie } from 'react-chartjs-2';

const GenderPieChart = ({ goats }) => {

    // Counting the number of male and female goats
    const countMale = goats?.filter(goat => goat.gender === 'Male').length;
    const countFemale = goats?.filter(goat => goat.gender === 'Female').length;

    // Data for the pie chart
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: 'Gender Distribution',
                data: [countMale, countFemale],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{
            height: '400px',
            width: '400px',
        }}>
            <h2>Gender Distribution of Goats</h2>
            <Pie data={data} />
        </div>
    );
};

export default GenderPieChart;
