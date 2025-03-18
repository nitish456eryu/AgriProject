import React from 'react';
import Navbar from './navbar';
import './App.css'; 

const About = () => {
  return (
    <>
    <div className='logo'>NK Agro</div>
    <Navbar />
    <section className="about-section">
      <div className="about-container">
        {/* About Header */}
        <h2 className="about-header">Welcome to Our Agritourism Experience</h2>

        {/* About Description */}
        <div className="about-description">
          <p className='company-description'>
            Nestled in the heart of the countryside, our farm offers a unique agritourism experience that connects you to nature, farming, and the traditions of rural life.
            Whether you're looking to relax, explore, or learn about sustainable agriculture, our farm is the perfect destination for families, groups, and solo travelers alike.
          </p>
          <p>Our platform features a curated selection of farms, each with its own story to tell. From family-run orchards to sustainable ranches, our listing showcase a diverse range of agritourism oppportunities. every farm offers something spoecial-whether it's a hands-on experience in the fields, cozy farm stays, educational workshops, or seasonal harvests.</p>
          <p>
            Experience the beauty of nature, get hands-on with farming activities, and taste fresh, locally grown produce right from our farm to your plate.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="about-mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to promote sustainable farming practices, educate visitors about the importance of agriculture, and provide a relaxing and immersive experience where guests can enjoy nature and learn about farm life.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="about-highlights">
          <h3>Why Visit Us?</h3>
          <ul>
            <li>Farm tours and workshops led by experienced farmers.</li>
            <li>Seasonal activities like apple picking, pumpkin carving, and more!</li>
            <li>Locally sourced food and products from our farm shop.</li>
            <li>Outdoor activities like hiking, picnicking, and fishing.</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
