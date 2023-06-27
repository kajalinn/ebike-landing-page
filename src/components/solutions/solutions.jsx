import React, {useState} from 'react';
import First from './FirstSolution'
import Second from './SecondSolution'
import Third from './ThirdSolution'

const Solutions = () => {

    const contentArray = [
        {index: 0, content: First},
        {index: 1, content: Second},
        {index: 2, content: Third}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(currentIndex === contentArray.length - 1 ? 0 : currentIndex + 1)
    }

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? contentArray.length - 1 : currentIndex - 1)
    }

    return (
        <div className="solution-wrapper">
            <div className="solution-panel">
                <button className="solution-button" onClick={handlePrev}>Prev</button>
                <span><b className="solution-title">SOLUTIONS</b></span>
                <button className="solution-button" onClick={handleNext}>
                    Next

                </button>
            </div>
                <div className="solution-container">
                    <div className="solution-content" id="solutions">
                        <div style={{ display: currentIndex === 0 ? 'block' : 'none' }}> <First /></div>
                        <div style={{ display: currentIndex === 1 ? 'block' : 'none' }}><Second/></div>
                        <div style={{ display: currentIndex === 2 ? 'block' : 'none' }}><Third/>></div>
                    </div>
                </div>
        </div>
    );
};

export default Solutions;