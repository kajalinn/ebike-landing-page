import React from 'react';
import styles from './solutions.css'
import Bike from '../../assets/kisspng-haibike-xduro-fatsix-electric-bike-electric-bicycl-5b215da0a954b9.6936179115289133126936.png'
import EngineIcon from '../../assets/motorSVG.svg'
import BatteryIcon from '../../assets/batterySVG.svg'
import BikeIcon from '../../assets/bikeSVG.svg'


const SecondSolution = () => {
    return (
        <div className="solution-variant hiddenX">
            <div className="bicycle-img">
                <img src={Bike} alt="Bike" width="570" height="350"/>
            </div>
            <div className="bicycle-info">
                <div className="solution-title">
                    <b>STANDARD +++</b>
                </div>
                <div className="solution-includes">
                    <div className="solution-parameters">
                        <ul>
                            <li>
                                <span><img src={EngineIcon} alt="Engine icon" width="28" height="28"/></span>
                                <b>36V 250-500W MOTOR</b>
                            </li>
                            <li>
                                <span><img src={BatteryIcon} alt="Engine icon" width="28" height="28"/></span>
                                <b>36V 13ah BATTERY + key`s</b>
                            </li>
                            <li>
                                <span><img src={BikeIcon} alt="Engine icon" width="32" height="32"/></span>
                                <b>
                                    BRING YOUR BIKE OR USE OUR BIKE
                                </b>
                            </li>
                        </ul>
                    </div>
                    <div className="bicycle-include">
                        <b>Also included</b>
                        <ul>
                            <li>Screen</li>
                            <li>Throttle</li>
                            <li>Pedal-assist</li>
                            <li>2A charger</li>
                        </ul>
                    </div>
                </div>
                <div className="bicycle-additions">
                    <div className="solution-advantages-title">
                        <b>Also can be installed</b>
                    </div>
                    <ul>
                        <li>Signal alarm</li>
                        <li>GPS tracker</li>
                        <li>Various handlebar</li>
                        <li>Modified battery</li>
                        <li>Extra battery</li>
                        <li>Battery case</li>
                    </ul>
                </div>
                <div className="solution-advantages">
                    <div className="solution-advantages-title">
                        <b>Advantages</b>
                    </div>
                    <div className="solution-advantages-items">
                        <ul>
                            <li>Speed [30-35KMH]</li>
                            <li>One charge up to 60km</li>
                        </ul>
                    </div>
                </div>
                <div className="solution-price">
                    <div className="solution-advantages-title">
                        <b>Upgrade price</b>
                    </div>
                    <div className="solution-price-variants">
                        <ul>
                            <li>
                                <span>NO BIKE</span>
                                <span>549 EUR</span>
                            </li>
                            <li>
                                <li>
                                    <span>WITH BIKE</span>
                                    <span>799 EUR</span>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="warranty">
                        <span>
                            1 YEAR WARRANTY FOR FREE
                        </span>
                </div>
            </div>
        </div>
    );
};

export default SecondSolution;



<div className="solution-extra-container">
    <div className="bicycle-additions">
        Also can be installed
        <ul>
            <li>SIGNAL ALARM</li>
            <li>GPS TRACKER</li>
            <li>VARIOUS HANDLEBAR</li>
            <li>MODIFIED BATTERY</li>
            <li>EXTRA BATTERY <br/> AND ETC.</li>
        </ul>
    </div>
    <div className="bicycle-include">
        Included
        <ul>
            <li>SCREEN</li>
            <li>THROTTLE</li>
            <li>PEDAL-ASSIST</li>
            <li>2A CHARGER</li>
        </ul>
    </div>
</div>