import React from "react";
import Layout from "./Layout/Layout.js";
import ".././styles/ContactPage.css";
// Import the Layout component

const ContactPage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <p>Email: resultmanagementsystem@gmail.com</p>
        <p>Phone: +91 9565816219</p>
        <p><strong>Office Address:</strong></p>
        <p>Banglore, ST 12345, India</p>
        <p>1234 Elm Street, Suite 567</p>
        <p><strong>Operating Hours:</strong></p>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>

        <p><strong>Connect with us:</strong></p>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>





      {/* Right column content */}
      <div className="right-column">
        <h2>Send us a Message</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
