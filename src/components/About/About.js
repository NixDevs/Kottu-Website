/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import data from '../../utils/data';
import AboutShortDetail from './AboutShortDetail';
import logo from '../../logo.svg'
const About = () => {
    const [info, setInfo] = useState(null);
    const [social, setSocial] = useState(null);

    useEffect(() => {   
        setInfo({
            name: 'Anik',
            short_description: 'Hi! I am a 15 year old programmer and Javascript enthusiast',
            image_url: logo,
            description: '<h3>I main libraries such as <br> <code>p5.js</code>, <code>Matter.js</code> and <code>Discord.js</code>',
            email: 'aniklakhany00@gmail.com'
        });
    }, []);

    return ( 
        <div>
            <h1 className="p-5 pb-0">About Me</h1>
            <AboutShortDetail info={info} social={social} />
        </div>
     );
}
 
export default About;