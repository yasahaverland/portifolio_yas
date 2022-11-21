import React, { useState, useEffect } from "react";
import './About.scss'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {

    // const [abouts, setAbouts] = useState([])
    const abouts = [
        {title: 'Web Development', description: 'I am great Web Developer', imgUrl: ''},
        {title: 'Web Development', description: 'I am great Web Developer', imgUrl: ''},
        {title: 'Web Development', description: 'I am great Web Developer', imgUrl: ''},
        {title: 'Web Development', description: 'I am great Web Developer', imgUrl: ''}
    ]

    return(
        <>
            <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

             <div className="app__profiles">
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className="app__profile-item"
                >
                    <h2 className="bold-text" style={{ marginTop: 20 }}>About Me</h2>
                    <p className="p-text" style={{ marginTop: 10 }}>I am a creative-minded, solutions-driven software developer with a passion for intuitive design and function. As a parent we learn that functionality is key to our day to day life, and as an artist, I just can’t let go of an aesthetic pleasing design. Driven to create interactive products shaped around human experience, expression, and intuitive, efficient functionality.</p>
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about'
  );