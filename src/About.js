import React from 'react';
import './style.css'; // Import CSS file for styling (create this file if it doesn't exist)

function About() {
  return (
    <div className="about-container">
      <h2>About Page</h2>
      <p>
        Welcome to the Travel Packing Checklist App! This application helps you
        prepare for your trips by providing a comprehensive packing checklist.
        Whether you're planning a weekend getaway or a long vacation, we've got
        you covered.
      </p>
      <p>
        Our mission is to make packing for your travels stress-free and
        efficient. We understand the importance of being well-prepared and aim
        to provide you with a checklist that ensures you don't forget any
        essentials.
      </p>
      <p>
        Explore our checklist categories, customize your packing list, and make
        sure you have everything you need for a smooth and enjoyable journey.
        Happy travels!
      </p>
    </div>
  );
}

export default About;