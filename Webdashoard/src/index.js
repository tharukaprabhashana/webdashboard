import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

// Collection reference
const colRef = collection(db, 'bag_data');

// Get collection data and display it in the table
getDocs(colRef)
    .then((snapshot) => {
        const dataTable = document.getElementById('data-table');
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const dataCell = document.createElement('td');

            idCell.textContent = doc.id;
            dataCell.textContent = JSON.stringify(data); // Convert data to a string to display it

            row.appendChild(idCell);
            row.appendChild(dataCell);
            dataTable.appendChild(row);
        });
    })
    .catch((error) => {
        console.error("Error fetching documents: ", error);
    });
