import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import s from "./Form.module.css";

function Form() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    // response to me
    emailjs
      .sendForm(
        "gmail",
        "template_59ui8wh",
        e.target,
        "user_nFqzK1oa18vqJa7uMu3N6"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message send!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "green",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Message not send!",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "green",
          });
        }
      );

    // response to user
    emailjs
      .sendForm(
        "gmail",
        "template_v487cat",
        e.target,
        "user_nFqzK1oa18vqJa7uMu3N6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={s.container}>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name*" required name="name" />
        <input type="text" placeholder="Email*" required name="email" />
        <input type="text" placeholder="Subject*" required name="subject" />
        <textarea rows={5} placeholder="Message*" required name="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
