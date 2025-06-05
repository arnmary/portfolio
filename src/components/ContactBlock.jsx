import React, { useState, useEffect } from 'react';

export default function ContactBlock() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  useEffect(() => {
    const savedFormData = sessionStorage.getItem('contactForm');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      if (response.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', telephone: '', message: '' });
        sessionStorage.removeItem('contactForm');
      } else {
        alert('Sending failed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="contactContent">
      <h3 className="blockTitle" id='contact'>Contact</h3>
      <p className="simpleText simpleSecondText">
        Have a project in mind or just want to say hello? Feel free to reach out — I'm always open to new opportunities and collaborations in frontend development.
      </p>
      <img src="./separator.png" alt="Separator image" className="separator" />

    
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="telephone" />
        <textarea name="message" />
      </form>

      <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          pattern="^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,}$"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          pattern="^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
          required
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Telephone*"
          value={formData.telephone}
          onChange={handleChange}
          pattern="^\+?[0-9\s\-]{7,15}$"
        />

        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="simpleBtn">Submit</button>
      </form>
    </div>
  );
}

