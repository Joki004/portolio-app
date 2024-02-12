import React, { useState } from "react";
import { useElements } from "../../utils/functions/context";
import "./contact.css";
import SocialLinks from "../../utils/components/socialLinks";

const ContactForm = () => {
  const { windowWidth, mainColor, mainColor10Lighter } = useElements();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [hover, setHover] = React.useState(false);

  // Combine base style with hover style if hover is true.


  const styles = {
    contactForm: {
      width: windowWidth < 768 ? "100%" : "",
      borderRadius: windowWidth < 768 ? "20px" : "",
    },
    button: {
      backgroundColor: mainColor10Lighter,
    },
    buttonHover: {
      backgroundColor: mainColor,
    },
  };

  const currentStyle = hover ? { ...styles.buttonHover } : { ...styles.button };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission, e.g., send to an API or email
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-wrapper">
      <div>
        <h2>Get In Touch</h2>
        <p>
          Let's talk about everything! Don't like forms? Send me an email. 👋
        </p>
        <SocialLinks size="30px" />
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Insert your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ ...styles.contactForm }}
          />
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...styles.contactForm }}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Insert your subject"
          value={formData.subject}
          onChange={handleChange}
          className="full-width"
          required
        />
        <textarea
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
        <button
          type="submit"
          style={currentStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
