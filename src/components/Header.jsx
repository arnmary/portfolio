import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navigationLinks = (
    <>
      <a href="#about">About me</a>
      <a href="#skills">Skills</a>
      <a href="#portfolioTitle">Projects</a>
      <div
        className="contactLinkWrapper"
        onMouseEnter={() => setContactOpen(true)}
        onMouseLeave={() => setContactOpen(false)}
        onClick={() => setContactOpen(!contactOpen)} 
      >
        <a href="#contact" className="contactLink">Contact me</a>
        {contactOpen && (
          <div className="contactDropdown">
            <a href="https://t.me/arnmary" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-telegram contactIcon" aria-label="Telegram"></i>
            </a>
            <a href="https://wa.me/380734370581" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-whatsapp contactIcon" aria-label="WhatsApp"></i>
            </a>
            <a href="tel:+380734370581">
              <i className="fa-solid fa-square-phone-flip contactIcon" aria-label="Phone"></i>
            </a>
          </div>
        )}
      </div>
    </>
  );

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <a href="#top">
            <img src="./logo01.png" alt="Logo" className="mainLogo" />
          </a>
        </div>

        <nav className="headerNav desktop">
          {navigationLinks}
        </nav>

        <button className="menuButton mobile" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          {navigationLinks}
        </div>
      )}
    </header>
  );
}


