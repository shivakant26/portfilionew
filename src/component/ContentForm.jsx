import React from "react";
const ContactForm = () => {
  return (
    <>
      <form>
        <div className="form-field">
          <input type="text" name="Name" placeholder="Your Name" />
        </div>
        <div className="form-field">
          <input type="text" name="email" placeholder="Your Email" />
        </div>
        <div className="form-field">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-field">
          <textarea rows="5" placeholder="Message"></textarea>
        </div>
        <button className="sent-btn">Send Messaage</button>
      </form>
    </>
  );
};
export default ContactForm;
