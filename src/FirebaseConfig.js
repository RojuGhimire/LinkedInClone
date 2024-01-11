// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYaEy-Bbc-Z1LZdvaF90Z5nYEYEoUnwis",
  authDomain: "linkedin-clone-eb4ad.firebaseapp.com",
  projectId: "linkedin-clone-eb4ad",
  storageBucket: "linkedin-clone-eb4ad.appspot.com",
  messagingSenderId: "733742943162",
  appId: "1:733742943162:web:72a79a3552fa28d38b2b83",
  measurementId: "G-Z67VD1JX1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);