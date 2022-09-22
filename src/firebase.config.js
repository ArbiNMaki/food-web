import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLa-4QpYhJK3sKJZpKOMfU6PN878Eu3ng",
  authDomain: "food-delivery-superapp.firebaseapp.com",
  databaseURL: "https://food-delivery-superapp-default-rtdb.firebaseio.com",
  projectId: "food-delivery-superapp",
  storageBucket: "food-delivery-superapp.appspot.com",
  messagingSenderId: "262281990488",
  appId: "1:262281990488:web:879937cdbe81d17326152d",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
