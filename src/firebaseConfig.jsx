// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALV0IV9ND1vh6uJx-pYbDhHJHdjrg4s2I",
  authDomain: "treasure-hunt-store.firebaseapp.com",
  projectId: "treasure-hunt-store",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
