import React from "react"
import './Navbar.scss'
import images from "../../constants/images"
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from "react"

export default function Navbar(){

    const [toggle, setToggle] = useState(false)

    return(
        // BEM methodology
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='logo' width='200px'/>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a
                            href={`#${item}`}
                            // key={item + index}
                            className="app__navigation-dot"
                            >
                                {item}
                        </a>
                    </li>
                    
                    ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    // framer motion properties
                    <motion.div 
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeInOut'}}
                    >
                        <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                                    <li key={{item}}>
                                        <div />
                                        <a
                                            onClick={() => setToggle(false)}
                                            href={`#${item}`}
                                            // key={item + index}
                                            >
                                                {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                    </motion.div>
                )}
            </div>
        </nav>
    )
}