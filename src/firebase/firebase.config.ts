// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fU3BcpCJbIb64-90REveXZHlyhjX1Bo",
  authDomain: "dish-palate.firebaseapp.com",
  projectId: "dish-palate",
  storageBucket: "dish-palate.appspot.com",
  messagingSenderId: "858864696344",
  appId: "1:858864696344:web:08e201e34adbe0c93e576d",
};

//?NOTE: I didn't keep firebase config in .env file. Because if you can access easily without any difficulties

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
