import React from "react";
import "./Footer.css";
import { TelegramShareButton , WhatsappShareButton} from "react-share";
import {TelegramIcon, WhatsappIcon} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Newsly by -{" "}
        <a href="https://www.linkedin.com/in/anushri-jadhav-6086641aa/" target="__blank">
          Anushri Jadhav
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/_anushri_231/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/anushri-jadhav-6086641aa/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="icons">
        <WhatsappShareButton title="Sharing Content"
        url="http://localhost:3000">
          <WhatsappIcon logoFillColor="white" round={true}>
            
          </WhatsappIcon>
        </WhatsappShareButton>
      <TelegramShareButton ur="http://localhost:3000" title="Sharing Content">
          <TelegramIcon logoFillColor="white" round={true}  >
          </TelegramIcon>
        </TelegramShareButton>
        </div>
    </div>
  );
};

export default Footer;
