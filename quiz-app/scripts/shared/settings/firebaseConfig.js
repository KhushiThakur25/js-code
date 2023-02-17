//import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCH8wGpkZRXIfN7S3xv1IVPWMkGSWixY24",
    authDomain: "quizapp-6f6de.firebaseapp.com",
    projectId: "quizapp-6f6de",
    storageBucket: "quizapp-6f6de.appspot.com",
    messagingSenderId: "123968822393",
    appId: "1:123968822393:web:7deebe734f6a9648df48a8",
    measurementId: "G-N71GS9QJ6W"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
 // export const db = getFirestore(app);
  const analytics = getAnalytics(app);
