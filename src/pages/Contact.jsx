import "./style.css";

function Contact() {
  return (
    <div>

      <div className="contact">
        <h1 style={{marginTop:150}}>Contact us</h1>
        <p>
          Discover why homeowners trust ICal Construction. Our clients’ experiences speak for themselves—
          <br />
          see their testimonials as they share their journey from concept to completion.
        </p>
      </div>

      <div className="map-container">
        <iframe
          title="uzbekistan-map"
          src="https://www.google.com/maps?q=Uzbekistan&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;