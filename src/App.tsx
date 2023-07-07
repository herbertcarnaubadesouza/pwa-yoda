import firebase from "firebase";
import "firebase/messaging";
import { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB0YLVsu24Ge4s3Kh83qPaWHuSd0kewkdM",
    authDomain: "service-pwa-a0b8a.firebaseapp.com",
    projectId: "service-pwa-a0b8a",
    storageBucket: "service-pwa-a0b8a.appspot.com",
    messagingSenderId: "864048105713",
    appId: "1:864048105713:web:86495c6b0582557be6c150",
    measurementId: "G-DCNTXD2GR7",
  };
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const msg = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn("token", data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yoda Strategy
        </a>
      </header>
    </div>
  );
}

export default App;
