import React from 'react';

const DescriptionSection = ({ descriptions }) => (
  <div id="description-section" className="section">
    <video autoPlay muted loop>
      <source src="src/assets/Images/bg2.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div className="description-container">
      {descriptions.map((desc, index) => (
        <div key={index} className={`description-box description-box-${index + 1}`} style={{ backgroundImage: `url(${desc.image})` }}>
          {desc.text}
        </div>
      ))}
    </div>
  </div>
);

export default DescriptionSection;