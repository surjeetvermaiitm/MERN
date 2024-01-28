import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const initialState = { width: 0, height: 0 };
//  ref is the reference to the element whose height and with is required
//  const divRef = useRef(null);
//  const { height, width } = useDimension(divRef);
//  <div ref={divRef}>
const useDimension = (ref) => {
  const [dimensions, setdDimensions] = useState(initialState);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setdDimensions({ width, height });
      });
    });
    if (ref.current) resizeObserverRef.current.observe(ref.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);
  return dimensions;
};

// export default useDimension;

import React, { useRef } from "react";
import useDimension from "./hooks/useDimension";

function App() {
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  return (
    <div
      className="App"
      style={{ display: "flex", height: "400px", padding: "4px" }}
    >
      <div
        ref={divRef}
        style={{
          backgroundColor: "#1abc9c",
          padding: "4px",
          height: "80%",
          flexGrow: 1,
        }}
      >
        <div>
          div height= {height} and width= {width}
        </div>
      </div>
    </div>
  );
}

export default App;
