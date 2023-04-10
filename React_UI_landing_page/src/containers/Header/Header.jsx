import React from 'react'
import './header.css'
import mainimg from '../../img/mainimg.png'
function Header() {
  return (
    <>
      <div className='header'>
        <div className="header_content">
          <h1 className='header_text'>OpenAI is an AI research and deployment company</h1>
          <div className="header_paragraph">
            <p>OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. The company conducts research in the field of AI with the stated goal of promoting and developing friendly AI in a way that benefits humanity as a whole.</p>
          </div>
          <div className="header_input">
            <input type="text" placeholder='Email Address'/>
           <button type='submit'>Get Started</button>
          </div>
        </div>
        <div className="header_image">
          <img src={mainimg} alt="random" />
        </div>
      </div>
    </>
  )
}

export default Header