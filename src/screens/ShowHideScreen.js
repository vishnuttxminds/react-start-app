import React from "react";
import { useState } from "react";

import catImage from "../assets/cat.jpg";

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
        onChange={(event) => setName(event.target.value)}
      />

      <p>{name && `Welcome ${name}`}</p>

      {/* hide/show image */}

      {hideshow && <img src={catImage} alt="Profile" width="200" />}
    </div>
  );
}

export default ShowHideScreen;
