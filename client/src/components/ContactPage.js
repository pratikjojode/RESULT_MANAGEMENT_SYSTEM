import React from "react";
import Layout from "./Layout/Layout.js";

// Import the Layout component

const ContactPage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 (234) 567-8901</p>
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
