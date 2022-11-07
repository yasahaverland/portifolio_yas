import React from "react";
import './header.scss'
import { motion } from 'framer-motion'
import images from "../../../constants/images"
import { AppWrap } from '../../../'

export default function Header(){

    const scaleVariants = {
        whileInView: {
            scale: [ 0,1 ],
            opacity: [0,1],
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }

    return(
        <div id='home' className='app__header app__flex'>
            <motion.div 
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 3 }}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cpm app__flex'>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Yasmin Haverland</h1>
                        </div>
                    </div>

                    <dav className='tag-cpm app__flex'>
                        <p className='p-text'>Full-Stack Developer</p>
                        <p className='p-text'>Freelancer</p>
                    </dav>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 , delayChildren: 0.5}}
                className='app__header-img'
            >
                <img src={images.profile} alt='profile img' width='400px'/>
                <motion.img 
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    src={images.circle}
                    alt='profile circle'
                    className='overlay_circle'
                />
            </motion.div>

            <motion.div 
                varient={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cpm app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='circle' />
                    </div>)
                )}
            </motion.div>
        </div>
    )
}