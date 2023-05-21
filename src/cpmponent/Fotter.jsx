import React from 'react'
import {FaLinkedin,FaGithubSquare,FaInstagram} from 'react-icons/fa'
import '../styles/Fotter.scss'

const Fotter = () => {
    return (
        <div className="foot">
            <div className="message">
                <div className="lspr">
                    
                    <h3>Let's start a project together</h3>
                    <div className="send">
                    <textarea name="project" id="fotter_text" cols="70" rows="5" placeholder="write your messege here..."></textarea>
                        <button>Send</button>
                        </div>
                    
                    
                    </div>
                <div className="job">
                    <div className="photo"></div>
                    <h2>Want to HIRE me</h2>
                    <div className="ctaction">
                <div className="de"> <b> Download Resume </b> </div>
                <div className="em"> <b>Email me </b></div>
                </div>
                </div>
            </div>
            <div className="socials">
                <div className="social">
                    <a href="https://www.linkedin.com/feed/"><FaLinkedin className="icon linkedin" /></a>
                    <a href="https://github.com/Sumanyadava"><FaGithubSquare className="icon github "/></a>
                    <a href="https://www.instagram.com/sumanydv__/"><FaInstagram className="icon insta" /></a>

                </div>
                <div className="copy">@at suman</div>
            </div>
        </div>
    )
}

export default Fotter
