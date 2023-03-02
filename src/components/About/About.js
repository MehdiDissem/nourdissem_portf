import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {
console.log(ThemeContext)
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p> <br/>

                    <div className="about-description">
                    <h3 style={{color: theme.primary}}>Mes Principes : </h3> <br/>
                    <ul style={{color:theme.tertiary80, fontSize:"20px"}}>
                        <li style={{color:theme.tertiary80}}>Conscience professionnelle</li>
                        <li style={{color:theme.tertiary80}}>Assiduité</li>
                        <li style={{color:theme.tertiary80}}>Ponctualité</li>
                        <li style={{color:theme.tertiary80}}>Ambition</li>
                        <li style={{color:theme.tertiary80}}>Bonne relation humaine</li>
                    </ul>

                    </div>

                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
