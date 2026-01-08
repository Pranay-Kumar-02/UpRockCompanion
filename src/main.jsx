import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "lenis";
import "./index.css";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll />
  </React.StrictMode>
);