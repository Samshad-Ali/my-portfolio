import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDT4RtVYTck83PFmXXTe3xIjYlpFcCiCiw",
  authDomain: "my-react-portfolio-23091.firebaseapp.com",
  projectId: "my-react-portfolio-23091",
  storageBucket: "my-react-portfolio-23091.appspot.com",
  messagingSenderId: "524145471105",
  appId: "1:524145471105:web:f35d3e365a0f2fa6756780"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()