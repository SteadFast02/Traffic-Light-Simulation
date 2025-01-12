import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState("red");
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const switchLight = () => {
      if (light === "red") {
        setLight("yellow");
        setTimer(15);
      } else if (light === "yellow") {
        setLight("green");
        setTimer(30);
      } else if (light === "green") {
        setLight("red");
        setTimer(45);
      }
    };

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          switchLight();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [light]);

  return (
    <div className="app-container">
      <h1 className="title">Traffic Light Simulation</h1>
      <div className="traffic-light-container">
        <div className={`light red ${light === "red" ? "active" : "inactive"}`}>
          {light === "red" && <span className="timer">{timer}</span>}
        </div>
        <div
          className={`light yellow ${
            light === "yellow" ? "active" : "inactive"
          }`}
        >
          {light === "yellow" && <span className="timer">{timer}</span>}
        </div>
        <div
          className={`light green ${light === "green" ? "active" : "inactive"}`}
        >
          {light === "green" && <span className="timer">{timer}</span>}
        </div>
      </div>
      <div className="status">
        Current Light:{" "}
        <span className={`status-text ${light}`}>{light.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default App;
