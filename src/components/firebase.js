import { initializeApp} from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig ={
    apiKey: "AIzaSyCsXJMzMykJX3nWq6NutyfPUfaHgVtaYbg",
  authDomain: "minna-blogs.firebaseapp.com",
  projectId: "minna-blogs",
  storageBucket: "minna-blogs.appspot.com",
  messagingSenderId: "675917254034",
  appId: "1:675917254034:web:55fb3d5c0e23a74585454b",
  measurementId: "G-CTQFSCD1P3"
    

};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
  
export { database };