import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC9TcKYgK-mLtEYsckJ3RQZuCxR-YPWKmQ",
    authDomain: "koalla-6916a.firebaseapp.com",
    databaseURL: "https://koalla-6916a-default-rtdb.firebaseio.com",
    projectId: "koalla-6916a",
    storageBucket: "koalla-6916a.appspot.com",
    messagingSenderId: "474291551590",
    appId: "1:474291551590:web:48d0336f286d0098cadca7",
    measurementId: "G-VR8PZF596W"
}


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);