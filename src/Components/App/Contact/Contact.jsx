import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    alert("Message sent successfully!");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contact Oleg Luzenin</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input
            className="contact__input"
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onError={error}
            placeholder="Enter your name"
            minLength={1}
            maxLength={35}
          />
        </div>

        <div className="contact__field">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            className="contact__input"
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onError={error}
            placeholder="Enter your email"
          />
        </div>

        <div className="contact__field">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__textarea"
            required
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onError={error}
            placeholder="Enter your message"
          />
        </div>

        {error && <p className="contact__error">{error}</p>}
        <button className="contact__button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
