import React from 'react';

export default function Footer() {
  const nowYear = new Date().getFullYear();
  const dataInfo = `© ${nowYear}`;

  return (
    <footer>
      <div className="footerBlock">
        <div>
          <a href="#top" className="linkBack">
            <i className="fa-solid fa-angles-up"></i> BACK TO TOP
          </a>
        </div>

        <div className="iconsSection">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-square-facebook socialIcon"></i>
          </a> */}
          <a href="https://linkedin.com/in/maryna-arnaut-a84607351/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin socialIcon"></i>
          </a>
          <a href="https://www.instagram.com/__arnmary__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram socialIcon"></i>
          </a>
          <a href="mailto:marinaarnaut482@gmail.com" aria-label="Email">
            <i className="fas fa-envelope socialIcon"></i>
          </a>
        </div>

        <p className="footerBottom">
          {dataInfo} <span className="bottomText">Marina Arnaut. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
