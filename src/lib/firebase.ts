import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9xJcfZlCh5XTwP7lOE_K2vpHkiNxbRWU",
  authDomain: "todo-app-c4ac6.firebaseapp.com",
  projectId: "todo-app-c4ac6",
  storageBucket: "todo-app-c4ac6.appspot.com",
  messagingSenderId: "1030152163087",
  appId: "1:1030152163087:web:e207219421b76c6fe7387a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;
