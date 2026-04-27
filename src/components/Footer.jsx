import React from 'react';
import './footer.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-top">
        <div className="contact-text">
          <h1>Let's work<br/>together</h1>
          <p>
            Call or fill out the form to learn more about ICal<br/>
            Construction's expert remodeling services.<br/>
            You're also welcome to visit our showroom by appointment<br/>
            and explore our premium materials in person!
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label>Phone number</label>
                <input type="text" placeholder="" />
              </div>
              <div className="input-group">
                <label>Full name</label>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="input-group full-width">
              <label>Describe Your Project</label>
              <textarea rows="3" placeholder=""></textarea>
            </div>
            <button type="button" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="divider"></div>

      <footer className="contact-footer">
        <div className="footer-left">
          <div>
            <p>Focil Construction Inc</p>
            <p>LIC #1022003</p>
          </div>
          <p className="copyright">© 2025 | Kitchen Showroom & Design Studio</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-col">
            <h4>ADDRESS</h4>
            <p>2636 Conejo Center Drive<br/>Thousand Oaks, CA 91320</p>
          </div>
          <div className="footer-col">
            <h4>CALL US ON</h4>
            <p>(805) 405-9225</p>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US ON</h4>
            <div className="social-icons">
              <span>fb</span>
              <span>tw</span>
              <span>ig</span>
              <span>yt</span>
              <span>yelp</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;