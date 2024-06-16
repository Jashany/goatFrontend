// VaccinationStatusChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const VaccinationStatusChart = ({ goats }) => {
    // Counting the vaccination status
    const vaccinatedCount = goats.filter(goat => goat.vaccinationDate).length;
    const notVaccinatedCount = goats.length - vaccinatedCount;

    // Data for the bar chart
    const data = {
        labels: ['Vaccinated', 'Not Vaccinated'],
        datasets: [
            {
                label: 'Vaccination Status',
                data: [vaccinatedCount, notVaccinatedCount],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
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
            <h2>Vaccination Status</h2>
            <Bar data={data} />
        </div>
    );
};

export default VaccinationStatusChart;
