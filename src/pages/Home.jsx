import "./style.css"
import vdo from "../assets/Rectangle 31.png"
import brn from "../assets/Rectangle 33.png"
import yana from "../assets/photo-lone-tree-cliff-overlooking-sea (3).png"

function Home(){
    return(
        <div>
            <div style={{width:1352,height:640, padding:380 -137, }} className="divin1">
            <h1 style={{lineHeight:1.3}}>
                Transforming Homes with Superior <br />
                Craftsmanship & Timeless Design
            </h1>
            <p style={{lineHeight:1.2}}>Bringing elegance, durability, and expert craftsmanship to your kitchen, bathroom, and <br />beyond with premium materials and seamless remodeling.</p>
            <div style={{marginTop:20, display:"flex",gap:16}}>
                <button style={{width:120,height:35, backgroundColor:"#FEC813",border:"none"}} >About US</button>
                <button style={{width:120,height:35,border:"none"}}>Contact us</button>
            </div>
        </div>
        <section style={{textAlign:"center", marginTop:100}}>
            <h1 style={{lineHeight:1.4}}>Crafting Your Dream Home with <br />Precision & Care</h1>
            <p style={{lineHeight:1.3, marginTop:15}}>Renovating your home should be seamless and inspiring. At ICal Construction, we simplify the remodeling journey with <br />our expert design-build approach. From concept to completion, our skilled team ensures every detail is handled with <br />precision and care. With decades of experience, we specialize in creating stunning kitchens, luxurious bathrooms, and <br />elegant home transformations. Let’s bring your vision to life—stress-free and beautifully executed.</p>
        </section>
        <img style={{paddingLeft:180,marginTop:60, width:1180,height:470}} src={vdo} alt="" />

        <section className="services">
      <h2 className="title">Our Services</h2>
      <p className="subtitle">
        Quality and affordability are an integral part of Facil’s design and
        construction. Whether we are building a custom residence.
      </p>

      <div className="cards">

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

        <div className="card">
          <img src={brn} alt="" />
          <h3>Our Services</h3>
          <p>Quality and affordability are an integral part of Facil’s design and</p>
        </div>

      </div>
    </section>
    <section className="why">
      <h2 className="why-title">
        WHAT SETS WESTSIDE REMODELING APART?
      </h2>

      <p className="why-subtitle">
        Quality and affordability are an integral part of Facil’s design and
        construction. Whether we are building a custom residence.
      </p>

      <div className="why-cards">

        <div className="why-card">
          <span className="number">1</span>
          <h3>We Use a Proven System</h3>
          <p>
            Using checklists, policies, and procedures developed over the last
            30+ years, we take a systematic approach to the entire remodeling
            process.
          </p>
        </div>

        <div className="why-card">
          <span className="number">2</span>
          <h3>We Customize Every Space</h3>
          <p>
            Our designs are personalized for you. We listen to your wants and
            needs and ask questions about how you and your family will use your space.
          </p>
        </div>

        <div className="why-card">
          <span className="number">3</span>
          <h3>We Keep You Safe and Comfortable</h3>
          <p>
            Our carpenters and trade contractors are highly professional and trustworthy.
            We take great care to protect your home while keeping your workspace tidy.
          </p>
        </div>

      </div>
    </section>

    <section style={{textAlign:"center",lineHeight:1.3,marginTop:50}} className="interact">
        <h1>Interactive Before & After Experience</h1>
        <p>See the transformation for yourself! Use our dynamic slider to compare your space’s past and future—move the <br />slider left to reveal the stunning new design or right to revisit the original layout.</p>


        <div style={{display:"flex", marginTop:30}}>
            <img style={{width:680,}} src={yana} alt="" />
            <hr/>
            <img style={{width:700,}} src={brn} alt="" />
        </div>
    </section>
    <section className="testimonials">

      <div className="title-box">
        <h2>Real Stories, Real Transformations</h2>

        <hr />

        <p>
          Discover why homeowners trust ICal Construction. Our clients’ experiences
          speak for themselves—see their testimonials as they share their journey
          from concept to completion.
        </p>
      </div>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process. From the initial
            phone call or showroom visit to the final inspection and walk through, you can rest
            assured that every aspect of the process will be taken care of professionally.”
          </p>
          <h4>James Oliver</h4>
        </div>

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process. From the initial
            phone call or showroom visit to the final inspection and walk through, you can rest
            assured that every aspect of the process will be taken care of professionally.”
          </p>
          <h4>James Oliver</h4>
        </div>

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process. From the initial
            phone call or showroom visit to the final inspection and walk through, you can rest
            assured that every aspect of the process will be taken care of professionally.”
          </p>
          <h4>James Oliver</h4>
        </div>

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process. From the initial
            phone call or showroom visit to the final inspection and walk through, you can rest
            assured that every aspect of the process will be taken care of professionally.”
          </p>
          <h4>James Oliver</h4>
        </div>

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process.”
          </p>
          <h4>James Oliver</h4>
        </div>

        <div className="card">
          <p>
            “Using checklists, policies, and procedures developed over the last 30+ years,
            we take a systematic approach to the entire remodeling process.”
          </p>
          <h4>James Oliver</h4>
        </div>

      </div>

    </section>
        </div>
    )
}

export default Home;