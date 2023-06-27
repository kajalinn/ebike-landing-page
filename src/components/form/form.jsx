import React from 'react';
import styles from './form.css'

const Form = () => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="form-part"></div>
                <div className="form-content" id="form">
                    <div className="form-title">
                        <p>
                            Contact us
                        </p>
                    </div>
                        <div className="form-field">
                            <ul>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Full name</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Phone number</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Email</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                <div className="form-radio">
                                    <input type="radio" id="radioButton"/>
                                    <label>I would like to upgrade my bike</label>
                                </div>
                                <div className="form-submit">
                                    <button className="form-button">
                                        Send application
                                    </button>
                                </div>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Form;