import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0); // To store the timer counter
  const timer = useRef(); // for setInterval instance

  const start = () => {
    timer.current = setInterval(() => {
      setCounter((prevState) => { // Counter is set using callback to get the latest value of state inside setInterval
        return prevState + 1;
      });
    }, 1000);
  };
  const stop = () => {
    clearInterval(timer.current);
  };
  const restart = () => {
    setCounter(0);
    start();
  };
  const reset = () => {
    clearInterval(timer.current);
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => restart()}>Restart</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
