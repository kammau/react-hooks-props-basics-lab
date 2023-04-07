import React from "react";

function About(props) {
  function pDisplay() {
    if (!props.bio) {
      return null
    } else {
      return <p>{props.bio}</p>
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {pDisplay()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
    </div>
  );
}




export default About;
