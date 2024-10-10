import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = (ev: MouseEvent) => {
    setX(ev.clientX);
    setY(ev.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        backgroundColor: "green",
        padding: "5px",
      }}
    >
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
}

export default App;
