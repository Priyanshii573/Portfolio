import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from '../../../assets/about/aboutImage.png';
import cursorIcon from '../../../assets/about/cursorIcon.png';
import serverIcon from '../../../assets/about/serverIcon.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                I have experience in developing UI based applications.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
