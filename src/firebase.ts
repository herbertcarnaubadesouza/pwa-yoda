// import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0YLVsu24Ge4s3Kh83qPaWHuSd0kewkdM",
    authDomain: "service-pwa-a0b8a.firebaseapp.com",
    projectId: "service-pwa-a0b8a",
    storageBucket: "service-pwa-a0b8a.appspot.com",
    messagingSenderId: "864048105713",
    appId: "1:864048105713:web:86495c6b0582557be6c150",
    measurementId: "G-DCNTXD2GR7"
};
// Inicialize o módulo de mensagens

// Inicialize o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicialize o Firebase Messaging e obtenha uma referência para o serviço
const messaging = getMessaging(firebaseApp);

export { firebaseApp, messaging };

