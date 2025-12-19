import React from "react";
import { useState } from "react";

function ShowHideScreen() {
  const [name, setName] = useState("");
  const [hideshow, setHideShow] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      {/* text box on entering your name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(data) => setName(data.target.value)}
      />

      <p>{name && `Welcome ${name}`}</p>

      {/* hide/show image */}

     

    </div>
  );
}

export default ShowHideScreen;
