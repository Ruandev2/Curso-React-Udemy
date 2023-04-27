
import { initializeApp } from "firebase/app";
import	{getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBJDvQsgW_T9tmmbbjLzLrCZQjh8LwifcM",
  authDomain: "miniblog-c0e30.firebaseapp.com",
  projectId: "miniblog-c0e30",
  storageBucket: "miniblog-c0e30.appspot.com",
  messagingSenderId: "28722418076",
  appId: "1:28722418076:web:b9bc3a23a47b2b0027b859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Banco de dados
const db = getFirestore(app);

export{db};