import React from 'react';
import "./style.css"; 
import imgPlaceholder from "../assets/Rectangle 20.png";

function Galleriy() {

  const images = Array(12).fill(imgPlaceholder);

  return (
    <div className="galleriy-container">
      
      <section className="photo-grid-section">
        <div className="photo-grid">
          {images.map((img, index) => (
            <div key={index} className={`grid-item item-${index + 1}`}>
              <img src={img} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Galleriy;