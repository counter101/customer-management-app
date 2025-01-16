import { Link } from "react-router-dom";
function About (){
  
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>About Us</h1>
        <p className="text-muted">Learn more about our mission and how we serve our customers</p>
      </header>

      <section className="mb-5">
        <h2>Our Mission</h2>
        <p>
          At <strong>Customer Service Portal</strong>, our mission is to provide the best customer experience through
          easy-to-use tools and responsive support. We believe in making customer interactions smooth, efficient, and
          seamless. Our goal is to help businesses effectively manage customer relationships and resolve issues quickly.
        </p>
      </section>

      <section className="mb-5">
        <h2>Why Choose Us?</h2>
        <ul className="list-unstyled">
          <li>✔ Dedicated customer support available 24/7</li>
          <li>✔ Easy-to-navigate platform</li>
          <li>✔ Fast response times</li>
          <li>✔ Secure and reliable data protection</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Meet the Team</h2>
        <p>
          Our team is composed of passionate individuals who are dedicated to improving your customer service
          experience. From our engineers to our support staff, we are committed to providing excellent service.
        </p>
        <div className="d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member 1" />
            <div className="card-body">
              <h5 className="card-title">Jane Doe</h5>
              <p className="card-text">CEO & Founder</p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member 2" />
            <div className="card-body">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, don't hesitate to reach out to us!</p>
        <Link to="/contact-us" className="btn btn-primary">
          Contact Us
        </Link>
      </section>

      <footer className="text-center mt-5">
        <p className="text-muted">© {new Date().getFullYear()} Customer Service Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;