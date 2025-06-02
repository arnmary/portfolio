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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    sessionStorage.setItem('contactForm', JSON.stringify(formData));
    console.log('Form submitted:', formData);

      setFormData({ name: '', email: '', telephone: '', message: '' });
      console.log('Form clened:')
  };

  return (
    <div className="contactContent">
      <h3 className="blockTitle" id='contact'>Contact</h3>
<p className="simpleText simpleSecondText">
  Have a project in mind or just want to say hello? Feel free to reach out — I'm always open to new opportunities and collaborations in frontend development.
</p>

      <img src="./separator.png" alt="Separator image" className="separator" />

      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          pattern="^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,}$"
          title="Name must contain only letters, spaces, apostrophes or hyphens (at least 2 characters)"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          pattern="^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
          title="Please enter a valid email address"
          required
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Telephone*"
          value={formData.telephone}
          onChange={handleChange}
          pattern="^\+?[0-9\s\-]{7,15}$"
          title="Phone number must contain only digits, spaces, hyphens, or start with +"
        />

        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          title="Please enter your message"
          required
        />

        <button type="submit" className="simpleBtn">Submit</button>
      </form>
    </div>
  );
}

