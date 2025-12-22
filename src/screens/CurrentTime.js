import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 10000); 

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>Current Time</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;
