import React,{ useState} from 'react'

export default function AboutBlock() {
   const [showMore, setShowMore] = useState(false);
  return (
    <>
    <div className='about'>
<h3 className='blockTitle' id='about' >
ABOUT ME
</h3>
{!showMore ?(
  <>
    <p className="simpleText simpleSecondText">  I'm a Frontend Developer with a passion for building intuitive, high-performance web interfaces. From responsive design to smooth user interactions — I focus on crafting modern, pixel-perfect experiences.</p>
<div className='linkWrap aboutBlock'>
 <div className='linkWrap'>
              <button onClick={() => setShowMore(true)} className='simpleBtn aboutBtn'>Explore</button>
            </div>

</div>
  </>
) : (
        <div className='extendedInfo'>
          <h4 className='aboutExtendedTitle'> About Me</h4>
             <p className='simpleText simpleSecondText'>
      Hi! I’m Maryna — a frontend developer with an eye for detail, a love for structure, and a passion for turning ideas into real, usable products.

      I completed Frontend Developer courses at Progacademy and studied SEO at Serpstat Academy. Before diving into tech, I worked in online sales, which gave me a strong sense of customer needs and business logic.

      I value honesty, responsibility, and punctuality — and I bring those values into every project I take on. I'm comfortable working independently, but I also enjoy being part of a team.
      I’m driven by problem-solving, and I genuinely enjoy the entire process — from idea to launch.

      Highly self-organized, a quick learner, always on time and on point — I stay connected and never disappear mid-task. You can count on me.
            </p>
            <h4 className='aboutExtendedTitle'> A Bit More About Me</h4>
                <p className='simpleSecondText'>Outside of work, I’m passionate about photographing nature and architecture, enjoying long walks, fishing, and floral design — especially ikebana, bonsai, and growing flowers.
                Cooking is another joy of mine. 
               I love reading — especially historical novels, and I’m always diving into books on psychology or exploring new frontend technologies.</p>
               <h4 className='aboutExtendedTitle'> Let’s Work Together </h4>
               <p className='simpleText simpleSecondText'>
                If you’re looking for someone thoughtful, creative, and reliable — I’d love to connect and help bring your next idea to life.
               </p>
            <div className='linkWrap'>
              <button onClick={() => setShowMore(false)} className='simpleBtn aboutBtn' id='aboutBtn'>Hide</button>
            </div>
          </div>
)}

<img src="./separator.png" alt="Separator image" className='separator' />
<div className='servisSection'>
    {/* <div className="servise">
        <img src="./1363.png" alt="Servise image" />
        <div className='serviseDesc'>
              <h4 className='servisTitle'>DESIGN</h4>
   <p className="simpleSecondText">
  I design clean, user-friendly interfaces with a strong focus on usability and visual hierarchy, ensuring seamless user journeys.
</p>
        </div>
      
    </div> */}
       <div className="servise">
        <img src="./1364.png" alt="Servise image" />
        <div className="serviseDesc">
                <h4 className='servisTitle'> Frontend Development</h4>
    <p className="simpleSecondText">
  I develop responsive and accessible web apps using technologies like React, TypeScript, and modern CSS. My code is clean, scalable, and performance-optimized.
</p>
        </div>
    
    </div>
    <div className="servise">
        <img src="./1365.png" alt="Servise image" />
        <div className='serviseDesc'>
              <h4 className='servisTitle'>SEO</h4>
     <p className="simpleSecondText">
  I implement frontend SEO best practices and performance optimizations to improve page speed and visibility in search engines.
</p>
        </div>
      
    </div>
</div>
<img src="./separator.png" alt="Separator image"id='bottomSeparator' />
    </div>
    </>
  )
}
