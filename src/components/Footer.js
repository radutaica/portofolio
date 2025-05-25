import React from "react";
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-bar">
            <div className="footer-section">
                <div className="footer-item">
                    <p className="text-[14px] sm:text-[16px]">find me on:</p>
                </div>
                <div className="footer-item">
                    <a href="https://www.linkedin.com/in/radu-andrei-taica-708666201/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <div className="footer-item">
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
        </div>
    )
}

export default Footer;
