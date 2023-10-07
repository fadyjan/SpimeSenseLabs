import React from "react";
import module from "./Footer.module.css";
import SpimeSenseLogo from "../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div id={module.FooterWrapper}>
      <div id={module.LogoWithColumnsWrapper}>
        <div id={module.ColumnWrapper}>
          <div className={module.SingleColumn}>
            <label>Our Comunity</label>
            <ul>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
            </ul>
          </div>
          <div className={module.SingleColumn}>
            <label>Our Comunity</label>
            <ul>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
            </ul>
          </div>

          <div className={module.SingleColumn}>
            <label>Our Comunity</label>
            <ul>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
            </ul>
          </div>
          <div className={module.SingleColumn}>
            <label>Our Comunity</label>
            <ul>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
            </ul>
          </div>
          <div className={module.SingleColumn}>
            <label>Our Comunity</label>
            <ul>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
              <li>ABcd</li>
            </ul>
          </div>
        </div>
        <div id={module.DoubleColumn}>
          <img src={SpimeSenseLogo} alt="" />
        </div>
      </div>

      <hr></hr>
      <div id={module.FooterLowerInfo}>
        <div>
          <label>simply dummy text of the printing</label>
          <p>
            © 2023 dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown p
          </p>
        </div>

        <div>
          <FacebookIcon style={{ fontSize: "43px" }}></FacebookIcon>
          <LinkedInIcon style={{ fontSize: "43px" }}></LinkedInIcon>
          <YouTubeIcon style={{ fontSize: "44px" }}></YouTubeIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
