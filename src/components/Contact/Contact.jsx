import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailIcon from '../../../assets/contact/emailIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:myemail@email.com">Priyanshii573@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/priyanshi-soni-634357256/">Priyanshi Soni</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Priyanshii573">Priyanshii573</a>
        </li>
      </ul>
    </footer>
  );
};
