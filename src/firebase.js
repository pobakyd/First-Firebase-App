import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6YRUjLrPjwJb0dlUzjX2eOygpaP7CpXg",
    authDomain: "fir-application-reactjs.firebaseapp.com",
    projectId: "fir-application-reactjs",
    storageBucket: "fir-application-reactjs.appspot.com",
    messagingSenderId: "281605003776",
    appId: "1:281605003776:web:80d1fc06f5a9ebf4efd6e5",
    measurementId: "G-JVJCGBF6K1"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export const tasksRef = database.ref('tasks/')
export const tasksCompletedRef = database.ref('tasksCompleted/')
export const usersRef = database.ref('users/')




// firebase-app - The core firebase client (required).
// firebase-auth - Firebase Authentication (optional).
// firebase-database - The Firebase Realtime Database (optional).
// firebase-firestore - Cloud Firestore (optional).
// firebase-storage - Firebase Storage (optional).
// firebase-messaging - Firebase Cloud Messaging (optional).
// firebase-functions - Firebase Cloud Functions (optional).