import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>GET TIME</button>
    </div>
  );
}

export default App;
