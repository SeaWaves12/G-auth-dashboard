import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9GskvmG-dMGpXRlnGYSqitmP26jwBDhY",
    authDomain: "g-auth-dashboard.firebaseapp.com",
    projectId: "g-auth-dashboard",
    storageBucket: "g-auth-dashboard.appspot.com",
    messagingSenderId: "634900475287",
    appId: "1:634900475287:web:5bb7c615ae473a63dc68d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
// export const db = getFirestore(app);

export const authentication = getAuth(app)