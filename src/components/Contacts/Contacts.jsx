import React from 'react';
import './contacts.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import messageBubble from '../../assets/chat bubble.png'
import emailjs from 'emailjs-com';
const projectRepo = "www.google.com";

//follow emailjs js package
//template_wa6wztu
//service_0nriyt3
//vS6uFNgCkR9cBjlC1

export const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0nriyt3', 'template_wa6wztu', e.target, 'vS6uFNgCkR9cBjlC1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className="contact section" id='contact'>
        <h2 className='section__titles'>Contact Me</h2>
        <h2 className='section__subtitles'>Connect or share a cool fact!</h2>
        <form className='contact-form' onSubmit={sendEmail}>
            <input type="text" className="contact-form-text" id="fname"  name="name" placeholder='Enter your name'></input>
            <input type="email" className="contact-form-text"  id="lname" name="email" placeholder='Enter your email'></input>
            <textarea className="contact-form-text-message" name="message" placeholder='Enter your message'></textarea>
            <button className="contact-form-button" type="submit">Send Message</button>
        </form>
        <img src={messageBubble} className='chat-bubble' alt="message" />
        <div className="footer">
          <p>Created with React, CSS, Figma and Framer Motion</p>
          <a href={projectRepo} target='_blank' className="git-project-link">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        
    </section>
  )
}

export default Contacts;
