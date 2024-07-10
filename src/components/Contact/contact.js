import React, { useRef } from 'react';
import './contact.css';
import SIEM from '../../asset/siem.png';
import VAPT from '../../asset/vapt.png';
import THA from '../../asset/threatassesment.png';
import IDPS from '../../asset/idps.png';
import you from '../../asset/youtube.png';
import Facebook from '../../asset/facebook-icon.png';
import Instagram from '../../asset/instagram.png';
import twi from '../../asset/twitter.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbvd26f', 'template_w9aap5q', form.current, 'GLe0auXM4jC2fPOMu')
       .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !')
       }, (error) => {
             console.log(error.text);
           });
   };
  return (
   <section id="contactpage">
    <div id="services">
<h1 className="contactpageTitle">OUR SERVICES</h1>
<p className="servicedesc">
Cybersecurity services encompass a wide range of measures designed to protect computer systems, 
networks, and data from unauthorized access, attacks, damage, or theft. These services are crucial in the modern digital landscape
 where organizations and individuals rely heavily on technology. Here's a general description of key cybersecurity services.
</p>
<div className="serviceimgs">
  <img src={SIEM} alt="Services" className="serviceimg" />
  <img src={VAPT} alt="Services" className="serviceimg" />
  <img src={THA} alt="Services" className="serviceimg" />
  <img src={IDPS} alt="Services" className="serviceimg" />
</div>
    </div>
    <div id="contact">
          <h1 className="contactpagetitle">CONTACT US</h1>
          <span className="contactsdesc">Please fill out the details below to reach out to us.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name'/>
            <input type="text" className="email" placeholder="Your Email" name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitbtn">Submit</button>
            <div className="links">
          <a href="https://youtube.com/@shrutimishra2544?si=yljvh1qUVi5AK28W" rel="noreferrer" target="_blank"><img src={you}  alt="c1" className="link" /></a>
          <img src={Facebook} alt="c1" className="link" />
          <a href="https://www.instagram.com/_incognit0o___/" target="_blank" rel="noreferrer" ><img src={Instagram} alt="c1" className="link" /></a>
          <img src={twi} alt="c1" className="link" />
            </div>
          </form>
    </div>
   </section>
  )
}

export default Contact;
