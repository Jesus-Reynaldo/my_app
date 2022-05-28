import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'
const header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Helo I'm</h5>
                <h1>Jesus Reynaldo</h1>
                <h5 className="text-light">Civil Engineer / Systems Engineer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default header