import "firebase/messaging";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import "./App.css";
import { messaging } from "./firebase";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const currentToken = await getToken(messaging, {
            vapidKey:
              "BJ3mvEAQ6SWJ_2XsIITHNQybkbR4VMBf9FL3UXWWplWzkKHLhSvaCrQuKA8uQHn_lbq7OsGCzItPwVVCI-_p_y0",
          });
          if (currentToken) {
            // Envie o token para o seu servidor e atualize a UI, se necessário
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        }
      } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
      }
    };

    requestPermission();
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
