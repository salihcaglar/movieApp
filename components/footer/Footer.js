import React from "react";
import styles from "../../components/footer/_Footer.module.scss";

import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.mainFooter}>
        <div>
          <img src="./images/Logo-2.png" alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique laudantium temporibus!</p>
          <div className={styles.icons}>
            <FaFacebookF />
            <FaInstagram />
            <FaSkype />
            <FaTwitter />
          </div>
        </div>
        <div className={styles.listElems}>
          <h2>Explore</h2>
          <div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Tw Shows</a>
              </li>
              <li>
                <a href="">Actors</a>
              </li>
              <li>
                <a href="">Celebrity</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Movies</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">Basketball</a>
              </li>
              <li>
                <a href="">Cross</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.listElems}>
          <h2>Company</h2>
          <div>
            <ul>
              <li>
                <a href="">Company</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Subscribe</a>
              </li>
              <li>
                <a href="">Faq</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Download App</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quod eveniet velit in deleniti repudiandae cum atque, alias eligendi. Earum.</p>
          <div className={styles.loginAndApple}>
            <a href="">
              <img src="./images/getPlay.png" alt="" />
            </a>
            <a href="">
              <img src="./images/getApp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.botFooter}>
        <p>Copyright 2021 streamlab All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
