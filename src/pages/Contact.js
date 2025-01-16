import { useState } from "react";

function Contact (){
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [inputErrorList, setInputErrorList] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate success
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Contact Us</h1>
        <p className="text-muted">We'd love to hear from you! Please fill out the form below.</p>
      </header>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInput}
                rows="5"
                className="form-control"
              ></textarea>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;