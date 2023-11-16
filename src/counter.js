import React, { useState } from "react";
import "./counter.css"; // Import your CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="top-box">
          <div className="number">{count}</div>
        </div>
        <div className="button-container">
          <div className="bottom-box">
            <div className="plus-box" onClick={increaseCount}>
              +
            </div>
            <div className="minus-box" onClick={decreaseCount}>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
