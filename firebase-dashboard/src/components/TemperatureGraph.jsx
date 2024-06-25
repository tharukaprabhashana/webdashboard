import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { collection, onSnapshot, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// Register all Chart.js components
Chart.register(...registerables);

const TemperatureGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const colRef = collection(db, 'bag_data');
        const q = query(colRef, orderBy('rtcDateTime'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempData = snapshot.docs.map(doc => ({
                time: doc.data().rtcDateTime,
                temperature: doc.data().temperature,
            }));
            setData(tempData);
        });

        return () => unsubscribe();
      }, []);

    const chartData = {
        labels: data.map(d => d.time),
        datasets: [
            {
                label: 'Temperature',
                data: data.map(d => d.temperature),
                fill: false,
                backgroundColor: 'white',
                borderColor: 'white',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'white', // X-axis labels
                },
            },
            y: {
                ticks: {
                    color: 'white', // Y-axis labels
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Legend labels
                },
            },
        },
    };

    return (
        <div className='tbox' style={{ width: '550px', height: '350px', padding: '15px', margin: '10px', backgroundColor: 'rgba(13, 2, 82, 0.834)', borderRadius: '10px',marginTop:'-370px',position:'absolute',marginLeft:'20px' }}>
        <h2 style={{ color: 'white' }}>Temperature Data</h2>
        <Line data={chartData} options={options} width={300} height={350} />
    </div>
    );
};

export default TemperatureGraph;