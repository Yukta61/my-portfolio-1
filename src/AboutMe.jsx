import './AboutMe.css';
import React from 'react';
import me from './assets/me.png';
import resume from './assets/YuktaPatel_WIMTACH.pdf';

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <img src={me} alt="Yukta Patel" />
      <p>Hello! I'm Yukta Patel, Aspiring Frontend Developer and student passionate about designing intuitive web experiences and learning the latest in web development technologies.</p>
      <a href={resume} download>Download My Resume</a>
    </div>
  );
}

export default AboutMe;

