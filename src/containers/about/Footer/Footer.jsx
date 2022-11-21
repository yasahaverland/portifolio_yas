import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import images from "../../../constants/images"
import { AppWrap, MotionWrap } from '../../../wrapper'

import { urlFor, client } from '../../../client';
import './footer.scss'

const Footer = () => {

    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;
    console.log('FORM DATA',formData)

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = () => {
        setLoading(true);
    
        const contact = {
          _type: 'contact',
          name: formData.username,
          email: formData.email,
          message: formData.message,
        };
    
        client.create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
      };

    return(
       <>
        <div id='contact'>
        <h2 className="head-text">Contact <span>Information</span></h2>
            <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href="mailto:yasahaverland@icloud.com" className="p-text">yasahaverland@icloud.com</a>
            </div>
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel: +1 (302) 510-3986" className="p-text">+1 (302) 510-3986</a>
            </div>
          </div>
        </div>
       </>
    )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);