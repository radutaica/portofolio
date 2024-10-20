import React from "react";
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <div className="footer-bar">
        <div className="footer-bar-left-outer">
            <div className="footer-bar-left">
                <p>find me in:</p>
            </div>
            <div className="footer-bar-icon">
                <a href="https://www.linkedin.com/in/radu-andrei-taica-708666201/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="footer-bar-icon-right">
            <a href="https://github.com/radutaica" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{marginRight: '10px'}}>@radutaica</span>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    </div>
    )
}

export default Footer;
