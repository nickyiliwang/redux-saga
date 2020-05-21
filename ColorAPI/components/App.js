import React from "react";
import "./App.css";

const App = ({ fetchContinuouslyRequest, fetchCancelledRequest, colorAPI }) => {
  return (
    <div>
      <h1>Redux Saga - COLR API</h1>
      <button onClick={fetchContinuouslyRequest}>Start calling colours</button>
      <button onClick={fetchCancelledRequest}>Cancel started sagas</button>
      <div>
        {colorAPI.colors.map((color, i) => {
          console.log(color);
          return (
            <div key={i}>
              {color.tags.map(({ name }, j) => (
                <div key={j} style={{ background: `#${color.hex}` }}>
                  <h4>{name}</h4>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
