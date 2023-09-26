import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
export const Footer = () => {
    return (
        <footer>

            <ul className={'footer__links'}>
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#about'}>About</a></li>
                <li><a href={'#experience'}>Experience</a></li>
                <li><a href={'#portfolio'}>Portfolio</a></li>
                <li><a href={'#contact'}>Contact</a></li>
            </ul>

            <div className={'footer__socials'}>
                <a href={"https://www.linkedin.com"} target={'_blank'}> <BsLinkedin/></a>
                <a href={"https://www.github.com"} target={'_blank'}> <FaGithub/></a>
            </div>

            <div className={'footer__copyright'}>
                <small>&copy; Siya Garg</small>
            </div>
        </footer>
    )
}

export default Footer