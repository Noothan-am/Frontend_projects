import React from 'react'
import vrImage from '../../img/vr.png'
import './earlyAccess.css'
function EarlyAccess() {
    return (
        <div className="earlyAccess" id='earlyAccess'>
            <div className="earlyAccess_img">
                <img src={vrImage} alt="Randomphoto" />
            </div>
            <div className="earlyAccess_content">
                <h5>Get Early Access!!</h5>
                <p>Early access will give you the opportunity to try out the product/service before it is widely available and provide valuable input that will help shape the final product. We value your opinion and want to make sure we are delivering the best possible experience for our users. 
                <br />
                <br/>If you are interested in getting early access, please let us know and we will provide you with more information on how to get started.</p>
                <button>JOIN NOW !!</button>
            </div>
        </div>
    )
}

export default EarlyAccess