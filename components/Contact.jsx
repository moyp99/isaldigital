import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useTranslation } from 'next-i18next'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const subject = "Correo desde ISALdigital.com";
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const API_PATH = "https://mjpg-portfolio-api.herokuapp.com/api/email/";
  const { t } = useTranslation('common')

  const sendMail = (event) => {
    event.preventDefault();
    console.log("attempting to send an email... wait for response");
    setEmailSent(true);
    Axios.post(API_PATH, { name, email, subject, message }).then((res) => {
      console.log("email sent!");
      setName('')
      setEmail('')
      setMessage('')
    });
  };

  const closePopUp = (event) => {
    event.preventDefault();
    setEmailSent(false);
  };

  useEffect(() => {
    if (name !== "" && email !== "" && message !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [message, name, email, subject]);

  return (
    <div id="Contacto" className="home-5">
      <h2 className="gradient-text">{t('h2-contacto')}</h2>
      <form onSubmit={(event) => sendMail(event)}>
        <div className="input-divs">
          <div>
            <p>{t('p-contacto-nombre')}</p>{" "}
            <input
              className="gm-sec"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              required
              placeholder="Jack Sparrow"
            ></input>
          </div>
          <div>
            <p>{t('p-contacto-email')}</p>{" "}
            <input
              className="gm-sec"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setDisabled(false);
              }}
              type="text"
              required
              placeholder="jack@mail.com"
            ></input>
          </div>
          <div>
            <p>{t('p-contacto-mensaje')}:</p>{" "}
            <textarea
              className="gm-sec"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              placeholder="Hey there!"
            ></textarea>
          </div>
        </div>
        <button
        aria-label="Send Email Button"
          disabled={disabled}
          className={`btn ${!disabled ? "gm" : "gm-disabled"} `}
          type="submit"
        >
          {t('btn-contacto')}
        </button>
        {emailSent === true && (
          <div className={`gm popup`}>
            <h3>¡Tu correo ha sido enviado!</h3>
            <p>Pronto nos comunicaremos contigo.</p>
            <button
            aria-label="Close Alert Button"
              onClick={(event) => closePopUp(event)}
              className="mt-2 btn gm-sec"
            >
              Cerrar
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
