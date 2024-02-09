import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("notino", "template_5", form.current, "PoL_ycRCH_zLvYB2i")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact creative" id="contact">
        <div className="container">
          <div className="itemContent">
            <div className="content flex">
              <div className="contentRight">
                <span className="baget">KONTAKT</span>
                <img src="./images/notino.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <span>
                  <i className="fa fa-map-marker-alt"> </i>
                  Beograd Knez Mihailova 10
                </span>
                <br /> <br />
                <span>
                  <i className="fa fa-envelope"></i>
                  notino@gmail.com
                </span>
                <br /> <br />
                <span>
                  <i className="fa fa-phone"></i>
                  +381 64 157 22 55
                </span>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="* VASE IME "
                    name="user_name"
                    id="user_name"
                  />
                  <input
                    type="text"
                    placeholder="* VAS EMAIL"
                    name="user_email"
                    id="user_email"
                  />
                  <textarea
                    cols="30"
                    rows="7"
                    name="message"
                    placeholder="* VASA PORUKA"
                  />
                  <button className="primary-btn" value="send">
                    SUBMIT <i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
