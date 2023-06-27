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
                                        <b>1</b>
                                    </div>
                                    <div className="description-text">
                                        Investigate solutions
                                    </div>
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <b>2</b>
                                </div>
                                <div className="description-text">
                                    Investigate solutions
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <b>3</b>
                                </div>
                                <div className="description-text">
                                    Investigate solutions
                                </div>
                            </li>
                            <li className="badge-mark">
                                <div className="description-badge">
                                    <b>4</b>
                                </div>
                                <div className="description-text">
                                    Investigate solutions
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Description;