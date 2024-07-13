import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import '../css/LatesData.css';

const LatestData = () => {
    const [latestData, setLatestData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const colRef = collection(db, 'bag_data');
        const q = query(colRef, orderBy('rtcDateTime', 'desc'), limit(1));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                setLatestData({});
                return;
            }

            const latestDoc = snapshot.docs[0]?.data();
            if (latestDoc) {
                setLatestData(latestDoc);
            } else {
                setLatestData({});
            }
        }, (err) => {
            console.error('Error Fetching Latest Data:', err);
            setError(err);
        });

        return () => unsubscribe();
    }, []);

    if (error) {
        return <div className='error'>Error: {error.message}</div>;
    }

    return (
        <div className='latest_data'>
            <h2>Latest Data</h2>
            <p>Weight: {latestData.weight !== undefined ? latestData.weight : 'N/A'}</p>
            <p>Lock Status: {latestData.lockStatus !== undefined ? latestData.lockStatus : 'N/A'}</p>
        </div>
    );
};

export default LatestData;