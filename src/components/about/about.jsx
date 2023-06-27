import React from 'react';
import styles from './about.css'
import VectorIcon from '../../assets/Vector.svg'


const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-container">

                <div className="about-things">
                    <div className="about-content" id="aboutUs">About us</div>
                    <ul>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <p>3 years working experience</p>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <p>Friendly and communicative staff</p>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <p>We pick the best option right for you</p>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <p>Also providing e-bikes for rent!</p>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <p>#1 on building e-bikes in Tallinn</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;