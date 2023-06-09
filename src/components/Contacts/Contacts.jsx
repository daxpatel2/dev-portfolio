import React from 'react';
import './contacts.css'
import messageBubble from '../../assets/chat bubble.png'

function contact() {
    console.log("hello");
}
//follow emailjs js package
//template_wa6wztu
//service_0nriyt3
//vS6uFNgCkR9cBjlC1
export const Contacts = () => {
  return (
    <section className="contact section" id='contact'>
        <h2 className='section__titles'>Contact Me</h2>
        <h2 className='section__subtitles'>Lets build something together!🤝</h2>
        <form className='contact-form' onSubmit={() => contact}>
            <input type="text" className="contact-form-text" id="fname" name="fname" placeholder='Enter your name'></input>
            <input type="email" className="contact-form-text" id="lname" name="lname" placeholder='Enter your email'></input>
            <textarea className="contact-form-text-message" placeholder='Enter your message'></textarea>
            <button className="contact-form-button" type="submit">Send Message</button>
        </form>
        <img src={messageBubble} className='chat-bubble' alt="message" />
    </section>
  )
}

export default Contacts;
