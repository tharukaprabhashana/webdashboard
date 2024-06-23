import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
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
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return <Line data={chartData} />;
};

export default TemperatureGraph;
