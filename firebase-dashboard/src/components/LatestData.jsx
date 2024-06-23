import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

const LatestData = () => {
    const [latestData, setLatestData] = useState({});

    useEffect(() => {
        const colRef = collection(db, 'bag_data');
        const q = query(colRef, orderBy('rtcDateTime', 'desc'), limit(1));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const latestDoc = snapshot.docs[0]?.data();
            setLatestData(latestDoc || {});
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Latest Data</h2>
            <p>Weight: {latestData.weight}</p>
            <p>Lock Status: {latestData.lockStatus}</p>
        </div>
    );
};

export default LatestData;
