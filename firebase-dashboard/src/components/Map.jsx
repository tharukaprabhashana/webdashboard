import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const containerStyle = {
    width: '100%',
    height: '620px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {
    const [gpsData, setGpsData] = useState([]);

    useEffect(() => {
        const colRef = collection(db, 'bag_data');
        const q = query(colRef, orderBy('rtcDateTime'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const gpsPoints = snapshot.docs
                .map(doc => doc.data().gps)
                .filter(gps => gps !== 'Invalid GPS data')
                .map(gps => {
                    const [lat, lng] = gps.split(',');
                    return { lat: parseFloat(lat), lng: parseFloat(lng) };
                });
            setGpsData(gpsPoints);
        });

        return () => unsubscribe();
    }, []);

    return (
    
        <LoadScript googleMapsApiKey="AIzaSyDeXzRMC_rcW0CHKiSQlN-qLJfl_WXFfH0">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {gpsData.map((position, index) => (
                    <Marker key={index} position={position} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;