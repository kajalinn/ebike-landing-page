import React from 'react';
import styles from './description.css'
import {Card} from "reactstrap";

const Description = () => {
    return (
        <div className="description-wrapper">
            <div className="description-container">
                <div className="description-title" id="description">
                    <b className="main-title">How it works</b><br/>
                </div>
                <div className="description-content">
                        <ul>
                            <li className="badge-mark">
                                <div className="description-step">
                                    <div className="description-badge">
                                        <p>1</p>
                                    </div>
                                    <div className="description-text">
                                        Send us application.
                                    </div>
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <p>2</p>
                                </div>
                                <div className="description-text">
                                    We contact you to understand your needs and discuss your order.
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <p>3</p>
                                </div>
                                <div className="description-text">
                                    We make e-bike by your wishes.
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <p>4</p>
                                </div>
                                <div className="description-text">
                                    Enjoy your electric bicycle!
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Description;