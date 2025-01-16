import { Link } from "react-router-dom";


function Home (){
  
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to Customer Service Portal</h1>
        <p className="text-muted">Your one-stop solution for managing customer interactions</p>
      </header>

      <nav className="text-center mb-5">
        <Link to="/customer/create" className="btn btn-primary mx-2">
          Add Customer
        </Link>
        <Link to="/customer" className="btn btn-secondary mx-2">
          View Customers
        </Link>
        <Link to="/contact-us" className="btn btn-success mx-2">
          Customer Support
        </Link>
      </nav>

      <section className="text-center">
        <h2>How Can We Help You Today?</h2>
        <p>
          Our portal allows you to:
          <ul className="list-unstyled">
            <li>✔ Add new customers</li>
            <li>✔ View customer details</li>
            <li>✔ Get customer support</li>
          </ul>
        </p>
        <Link to="/contact-us" className="btn btn-info">
          Learn More
        </Link>
      </section>

      <footer className="text-center mt-5">
        <p className="text-muted">© {new Date().getFullYear()} Customer Service Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;