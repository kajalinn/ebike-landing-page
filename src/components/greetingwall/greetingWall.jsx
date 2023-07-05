import React from 'react';
import styles from './greetingWall.css'
import Logo from '../../assets/ELPUNKTLOGO.svg'
import bgImg from '../../assets/WALLBG.svg'
import {useEffect} from "react";
import NavBar from "../navbar/navbar"


const GreetingWall = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show')
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));



    })
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show')
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hiddenX');
        hiddenElements.forEach((el) => observer.observe(el));



    })

    return (
    <div className="wrapper">
        <div className="hero-container" style={{ backgroundImage: `url(${bgImg})` }}>
            <NavBar/>
            <section className="hero hidden" id="hero">
                <img  className="wall-img" src={Logo} alt="logo" width="700" height="300"/>
                {/*<span className="hero-text">*/}
                {/*    <p>BUILD&nbsp;&nbsp;UPGRADE&nbsp;&nbsp;FIX</p>*/}
                {/*</span>*/}
            </section>
        </div>
    </div>
    );
};

export default GreetingWall;