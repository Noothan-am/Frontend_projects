import React from 'react'
import './footer.css'
import logo from '../../img/logo.png'
function Footer() {
  return (
    <>
      <div className="footers">
        <div className="footer">
          <div className="footer_heading">
            <h1>Do you want to step into the future before others</h1>
          </div>
          <div className="footer_btn">
            <button>Hit over here</button>
          </div>
          {/* <div className="footer_logo">
            <img src={logo} alt="Logo" />
          </div> */}
          <div className="footer_links">
            <div className="footer_part-1 link">
              <h4>FEAT</h4>
              <p>ChatGPT</p>
              <p>DALL.E 2</p>
              <p>Whisper</p>
              <p>Playground</p>
            </div>
            <div className="footer_part-2 link">
            <h4>BLOG</h4>
              <p>Index</p>
              <p>Research</p>
              <p>Announcement</p>
              <p>Events</p>
              <p>Milestones</p>
            </div>
            <div className="footer_part-3 link">
            <h4>DATA</h4>
              <p>About Us</p>
              <p>Our Charter</p>
              <p>Our Research</p>
              <p>Publications</p>
              <p>Newsroom</p>
              <p>Careers</p>
            </div>
            <div className="footer_part-4 link">
              <h4>API</h4>
              <p>Overview</p>
              <p>Pricing</p>
              <p>Examples</p>
              <p>Docs</p>
              <p>Terms & Policies</p>
              <p>Status</p>
              <p>Log in</p>
            </div>
          </div>
          <div className="footer_copyright">
            <hr />
            <p>OpenAI © 2015–2022 Privacy Policy Terms of Use</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer