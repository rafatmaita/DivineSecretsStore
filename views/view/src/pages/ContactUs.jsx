import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/addComment', formData);
      
      console.log(response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <div>
      <section className="hero-section-contact">
        <h2>Contact Us</h2>
      </section>

      <div className="page-container">
        <section className="contact-form">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </section>

        <div className='text'>
          Contact Us
          <p>"+96278999899"</p>
          <p>Email: <a href="mailto:divin-secrets@gmail.com">divin-secrets@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
