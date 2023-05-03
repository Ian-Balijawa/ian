//@ts-nocheck
import "@css/contact.css";

import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ianbalijawa16@gmail.com</h5>
            <a href="mailto:ianbalijawa16@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>ianbalijawa</h5>
            <a href="https://m.me/ianbalijawa" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+256787444814</h5>
            <a
              href="https:api.whatsapp.com/send?phone+256787444814"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <Form />
      </div>
    </section>
  );
};
export default Contact;

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dxdqsgs",
        "template_e684n8r",
        form.current,
        "Dv4ZLAmKkTzarU4fK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="text" name="email" placeholder="Your Email" required />
      <textarea name="message" rows={7} placeholder="Your Message" required />

      <button type="submit" className="btn btn-primary">
        SEND MESSAGE
      </button>
    </form>
  );
};
