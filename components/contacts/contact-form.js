import React from 'react';
import classes from './contact-form.module.css';

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>Need tips and tricks</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <div className={classes.control}>
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
