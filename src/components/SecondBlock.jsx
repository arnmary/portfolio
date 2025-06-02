import React, { useState } from 'react';

export default function SecondBlock() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='blockWrap'>
      <div className='secondDescBlock'>
        <h3 className='secondBlockTitle'>Frontend Development & SEO Integration</h3>

        {!showMore ? (
          <>
            <p className='simpleText'>
              I’m a frontend developer, I create responsive, accessible websites using React, JavaScript, HTML and CSS — with a strong focus on clean code and real user experience.
            </p>
            <div className='linkWrap'>
              <button onClick={() => setShowMore(true)} className='simpleBtn'>Read more</button>
            </div>
          </>
        ) : (
          <div className='extendedInfo'>
            <p className='simpleText'>
              I’ve completed the Frontend Development course from ProgAcademy and studied SEO at Serpstat Academy. I enjoy building intuitive UIs and solving real problems — from idea to final result. I’m self-organized, quick to learn, and always meet deadlines.
            </p>

            <h4 className='extendedTitle'>🛠 My Core Skills:</h4>
            <ul className='extendedList'>
              <li> React (Hooks, Context, Routing)</li>
              <li> JavaScript ES6+, async/await, fetch API</li>
              <li> HTML5, CSS3, Flexbox, Grid, responsive design</li>
              <li> Git & GitHub, Vite, Bootstrap, Swiper</li>
              <li> SEO basics & integration</li>
              <li> REST API, Form validation</li>
              <li> Mobile-first & cross-browser development</li>
            </ul>

            <h4 className='extendedTitle'> Selected Projects:</h4>
            <ul className='extendedList'>
              <li>
                <strong>E-commerce project “PetsMania”</strong> – Built with React (Hooks, Router, Context), Bootstrap, and Swiper. Features dynamic content rendering, shopping cart, and responsive design.  
                <br />
                <button className="siteBtn">
                  <a href="https://petsmaniyashop.netlify.app/" target="_blank" rel="noreferrer" className='siteLink'>Go to link <i className="fa-solid fa-arrow-right"></i></a>
                </button>
                <br />
                <button className="siteBtn">
                  <a href="https://github.com/arnmary/e-commerse" target="_blank" rel="noreferrer" className='siteLink'>View on GitHub <i className="fa-solid fa-arrow-right"></i></a>
                </button>
              </li>

              <li>
                <strong>Netflix-style Movies App</strong> – React app with API integration. Features include search by genre, star rating system, login simulation. Responsive and deployed on Netlify.  
                <br />
                <button className="siteBtn">
                  <a href="https://serene-platypus-6b29b0.netlify.app/" target="_blank" rel="noreferrer" className='siteLink'>Go to link <i class="fa-solid fa-arrow-right"></i></a>
                </button>
                <br />
                <button className="siteBtn">
                  <a href="https://github.com/arnmary/newReactNetflix" target="_blank" rel="noreferrer" className='siteLink'>View on GitHub<i class="fa-solid fa-arrow-right"></i></a>
                </button>
              </li>

              <li>
                <strong>Organic Shop</strong> – E-commerce React project with Bootstrap & Swiper. Includes product search via Search Context, cart functionality with Cart Context, and routing. Fully responsive and deployed on Netlify.
                <br />
                <button className='siteBtn'>
                  <a href="https://friendly-smakager-0f0932.netlify.app/" target="_blank" rel="noreferrer" className='siteLink'>Go to link<i class="fa-solid fa-arrow-right"></i></a>
                </button>
                <br />
                <button className="siteBtn">
                  <a href="https://github.com/arnmary/newOrganic" target="_blank" rel="noreferrer" className='siteLink'>View on GitHub<i class="fa-solid fa-arrow-right"></i></a>
                </button>
              </li>
            </ul>

            <div className='linkWrap'>
              <button onClick={() => setShowMore(false)} className='simpleBtn'>Hide</button>
            </div>
          </div>
        )}
      </div>

      <div className="imgWrap">
        <img src="./LogoITB.png" alt="Logo ITB" />
      </div>
    </div>
  );
}



