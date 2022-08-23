import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  //

  const year = new Date().getFullYear();

  return (
    <>
      <div className="mains">
        <div className="footer__section">
          <p> Shaikh-Abbas copyright © {year} </p>
          <div className="icons">
            <a
              href="https://www.instagram.com/itz.zeeshan.04/"
              target="__blank"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/shaikhabbasdeveloper9325"
              target="__black"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/mrshaikhabbas/"
              target="__black"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/abbas4web" target="__black">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
