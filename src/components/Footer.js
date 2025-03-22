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
                    <p className="text-[14px] sm:text-[16px]">find me in:</p>
                </div>
                <div className="footer-bar-icon">
                    <a href="https://www.linkedin.com/in/radu-andrei-taica-708666201/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                    </a>
                </div>
            </div>
            <div className="footer-bar-icon-right">
                <a href="https://github.com/radutaica" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="icon-link"
                >
                    <span className="github-text text-[14px] sm:text-[16px]">@radutaica</span>
                    <FontAwesomeIcon icon={faGithub} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                </a>
            </div>
        </div>
    )
}

export default Footer;
