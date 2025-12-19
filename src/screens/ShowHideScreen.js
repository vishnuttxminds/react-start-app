import React from "react";
import { useState } from "react";

import catImage from "../assets/cat.jpg";

function ShowHideScreen(props) {
  const [name, setName] = useState("");
  const [hideshow, setHideShow] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillsEntered, setSkillsEntered] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      {/* text box on entering your name */}
      <p>1st Question</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>{name && `Welcome ${name}`}</p>

      {/* hide/show image */}
      <p>2nd Question</p>
      {hideshow && <img src={catImage} alt="Profile" width="200" />}

      {/* skill list using string array */}
      <p>3nd Question</p>
      <div>
        <input
          type="text"
          placeholder="Enter your skill here"
          value={skillsEntered}
          onChange={(event) => setSkillsEntered(event.target.value)}
        />
        <button
          onClick={() => {
            setSkills([...skills, skillsEntered]);
            setSkillsEntered("");
          }}
        >
          Add Skill
        </button>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* probs details */}
      <p>{props.userInfo.name} - {props.userInfo.place}</p>


    </div>
  );
}

export default ShowHideScreen;
