import React from 'react'

export default function Description() {
  return (
    <>
    <div className='description'>
        <div className='title'>
          <h2>Hi, I am</h2>
        <h1>Arnaut Marina</h1>
        <h2>From Odessa</h2>
        <h3>Front-End Developer</h3>
        <div className='linkBtnWrap'>
         <span className='linkBtn'>
             <a href="https://github.com/arnmary" target='_blank'rel="noreferrer"><i className="fa-brands fa-github deckIcon"></i></a>
          </span>
        <span className='linkBtn'>
             <a href="https://www.linkedin.com/in/maryna-arnaut-a84607351/" target='_blank'rel="noreferrer"><i className="fa-brands fa-linkedin deckIcon"></i></a>
        </span>
        </div>
      </div>
      <div className='photoBlock'>
        <div className='photoBack'>
<img src="/photo01.png" alt="Photo of Arnaut Maryna" className='photo' />
        </div>
        <div className='thirdDescBlock'></div>
      </div>
      
    </div>

    </>
  )
}
