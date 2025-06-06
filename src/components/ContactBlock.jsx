import React, { useState, useEffect } from 'react';

export default function ContactBlock() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  useEffect(() => {
    const saved = sessionStorage.getItem('contactForm');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      sessionStorage.setItem('contactForm', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
       
        setFormData({
          name: '',
          email: '',
          telephone: '',
          message: '',
        });

        sessionStorage.removeItem('contactForm');


        window.location.href = "/success";
      })
      .catch((error) => {
        console.error("Sending failed:", error);
        alert("Sending failed. Try again later.");
      });
  };

  return (
    <div className="contactContent">
      <h3 className="blockTitle" id="contact">Contact</h3>
      <p className="simpleText simpleSecondText">
        Have a project in mind or just want to say hello? Feel free to reach out — I'm always open to new opportunities and collaborations in frontend development.
      </p>
      <img src="./separator.png" alt="Separator" className="separator" />

    
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="telephone" />
        <textarea name="message" />
      </form>

    
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="contactForm"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleChange}
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





