import React from 'react'
import './socialMedia.css'

import dropbox from '../../img/dropbox.png'
import google from '../../img/google.png'
import shopify from '../../img/shopify.png'
import slack from '../../img/slack.png'

function SocialMedia() {
  return (
    <>
    <div className="socialMedia" id='socialMedia'>
      <img src={dropbox} alt="socialMedia-logo" />
      <img src={shopify} alt="socialMedia-logo" />
      <img src={google} alt="socialMedia-logo" />
      <img src={slack} alt="socialMedia-logo" />
    </div>
    </>
  )
}

export default SocialMedia