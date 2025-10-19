import "./Contact.css";

import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact">
        <h2 className="contact__title">Get In Touch</h2>
        <div className="contact__container">
          <div className="contact__item">
            <div className="contact__icon contact__icon--gmail">
              <SiGmail />
            </div>
            <div className="contact__info">
              <h3>Email</h3>
              <a href="mailto:luzeninoleg2012@gmail.com">
                luzeninoleg2012@gmail.com
              </a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon contact__icon--telegram">
              <FaTelegram />
            </div>
            <div className="contact__info">
              <h3>Telegram</h3>
              <a
                href="https://t.me/oleg_lzn"
                target="_blank"
                rel="noopener noreferrer"
              >
                @oleg_lzn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
