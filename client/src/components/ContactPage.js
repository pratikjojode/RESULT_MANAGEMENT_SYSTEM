import React from "react";
import Layout from "./Layout/Layout.js";
import ".././styles/ContactPage.css"; // Importing page-specific CSS

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        {/* Left column content */}
        <div className="left-column">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out!</p>
          <p>Email: resultmanagementsystem@gmail.com</p>
          <p>Phone: +91 9565816219</p>

          <div className="address-info">
            <p>
              <strong>Office Address:</strong>
            </p>
            <p>Banglore, ST 12345, India</p>
            <p>1234 Elm Street, Suite 567</p>
          </div>

          <div className="hours-info">
            <p>
              <strong>Operating Hours:</strong>
            </p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="social-media">
            <p>
              <strong>Connect with us:</strong>
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              LinkedIn
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="map-container">
            <h3>Our Location</h3>
            <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035118524697!2d144.9630581153165!3d-37.81627977975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xe58a451de908a1b2!2s1234%20Elm%20Street!5e0!3m2!1sen!2sin!4v1620416213725!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
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
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
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

          {/* FAQ Section */}
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item">
              <p>
                <strong>Q1:</strong> How can I access my results?
              </p>
              <p>
                <strong>A:</strong> You can access your results by logging into
                your account and navigating to the "Results" section.
              </p>
            </div>
            <div className="faq-item">
              <p>
                <strong>Q2:</strong> Can I update my personal information?
              </p>
              <p>
                <strong>A:</strong> Yes, you can update your personal
                information in the "Profile" section of your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
