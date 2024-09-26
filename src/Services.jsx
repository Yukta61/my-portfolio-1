import React from 'react';
import './Services.css'; // Ensure this matches your folder structure

const services = [
  { name: "Web Development", image: "/src/assets/web.png" },
  { name: "UI/UX Designer", image: "/src/assets/uiux.png" },
  { name: "Cybersecurity Consulting", image: "/src/assets/Cyber-Security-PNG-Clipart.png" }
];

function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
