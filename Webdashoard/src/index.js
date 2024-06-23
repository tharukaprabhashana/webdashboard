import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCODgpLERh0hG3qwHgVbcNKoME96ms0cTc",
    authDomain: "hardware-project-app-8a263.firebaseapp.com",
    projectId: "hardware-project-app-8a263",
    storageBucket: "hardware-project-app-8a263.appspot.com",
    messagingSenderId: "404431530365",
    appId: "1:404431530365:web:58bc9dd27a1f9003d00414"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Collection reference with query to order by rtcDateTime
const colRef = collection(db, 'bag_data');
const q = query(colRef, orderBy('rtcDateTime'));

// Real-time listener to fetch collection data and display it in the table
onSnapshot(q, (snapshot) => {
    const dataTable = document.getElementById('data-table');
    dataTable.innerHTML = ''; // Clear the table before updating with new data

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        const row = document.createElement('tr');

        // Create cells for each data field
        const weightCell = document.createElement('td');
        const rtcDateTimeCell = document.createElement('td');
        const lockStatusCell = document.createElement('td');
        const gpsCell = document.createElement('td');
        const temperatureCell = document.createElement('td');

        weightCell.textContent = data.weight;
        rtcDateTimeCell.textContent = data.rtcDateTime;
        lockStatusCell.textContent = data.lockStatus;
        gpsCell.textContent = data.gps;
        temperatureCell.textContent = data.temperature;

        row.appendChild(weightCell);
        row.appendChild(rtcDateTimeCell);
        row.appendChild(lockStatusCell);
        row.appendChild(gpsCell);
        row.appendChild(temperatureCell);
        dataTable.appendChild(row);
    });
}, (error) => {
    console.error("Error fetching documents: ", error);
});
