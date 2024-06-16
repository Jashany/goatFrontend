// AgeHistogram.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const AgeHistogram = ({ goats }) => {
    // Counting the age distribution
    const ageCounts = {};
    goats.forEach(goat => {
        const age = calculateAge(goat.dob);
        if (ageCounts[age]) {
            ageCounts[age]++;
        } else {
            ageCounts[age] = 1;
        }
    });

    // Data for the histogram
    const data = {
        labels: Object.keys(ageCounts),
        datasets: [
            {
                label: 'Age Distribution',
                data: Object.values(ageCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{
            height: '400px',
            width: '400px',
        }}>
            <h2>Age Distribution</h2>
            <Bar data={data} />
        </div>
    );
};

// Function to calculate age
const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export default AgeHistogram;
