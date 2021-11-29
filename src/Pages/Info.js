import React from 'react'
import "../Css/Info.css"
import Tweet from "../images/twitter.png"
import Insta from "../images/insta.png"
import Fb from "../images/facebook.png"
import Gmail from "../images/email.png"

const Info = () => {
    return (
        <div>
                <div class="headinginfo">
                     <h2>Information</h2>
                </div>

                <div class="para1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reprehenderit!</p>
                    <p>For Further Detail Contact us on our Social Media handles:</p>
                    <div class="mid10">
                            <p></p>
                            <a href="https://www.twitter.com/" target="_blanck"><img src={Tweet} alt="Error"
                                    class="vvv" /></a>
                            <a class="para2" href="https://www.instagram.com/" target="_blanck"><img src={Insta}
                                    alt="Error" class="vvv" /></a>
                            <a class="para2" href="https://www.facebook.com/" target="_blanck"><img src={Fb}
                                    alt="Error" class="vvv" /></a>
                            <a class="para2" href="https://www.gmail.com/" target="_blanck"><img src={Gmail}
                                    alt="Error" class="vvv" /></a>
                    </div>
                </div>
        
        </div>
    )
}

export default Info;
