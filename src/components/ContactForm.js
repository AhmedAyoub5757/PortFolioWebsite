import React, { useRef,useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"; // Import the ContactForm.css file

const ContactForm = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grm00pk",
        "template_mbdkcxp",
        form.current,
        "YoP7h6VN7R9jmfVOr"
      )
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000); // Set the duration for the success message to be displayed
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <form id="f" ref={form} onSubmit={sendEmail} className={isSuccess ? 'success' : ''}>
        <label>Name</label>
        <input type="text" name="user_name" className="ti"/>
        <label>Email</label>
        <input type="email" name="user_email" className="ti"/>
        <label>Message</label>
        <textarea name="message" rows={8} className="ti"/>
        <input type="submit" value={isSuccess ? 'Success!' : 'Send'}/>
      </form>
    </>
  );
};

export default ContactForm;
