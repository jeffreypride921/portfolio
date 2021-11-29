import React from "react";
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends React.Component{
    
    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_797lxgm', 'template_skkqx4g', e.target, process.env.REACT_APP_EMAIL_JS_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        this.clearForm()
    };

    clearForm = () => {
        document.getElementById('contactForm').reset();
    }

    render(){
        return(
            <div className='ContactItems' id='contact'>
                <h1 className='contact-header'>Contact</h1>
                <form className='contact-form' id='contactForm' onSubmit={this.sendEmail} autoComplete='off'>
                    <input className='contact-name' type="text" placeholder='Name' name="name" autoComplete='off'/>
                    <input className='contact-email' type="email" placeholder='Email' name="email" />
                    <input className='contact-subject' type="text" placeholder='Subject' name="subject"/>
                    <textarea className='contact-message' placeholder='Message' name="message" />
                    <input className='contact-submit' type="submit" value="Send Email" />
                </form>
            </div>
        )
    }
}

export default Contact;