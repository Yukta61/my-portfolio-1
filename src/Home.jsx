import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <h3>Building innovative solutions to bring your ideas to life.</h3>
      <Link to="/about"><button>Learn more about me</button></Link>
      <Link to="/projects"><button>View my projects</button></Link>
    </div>
  );
}

export default Home;
