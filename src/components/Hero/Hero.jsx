import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../../assets/hero/heroImage.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanshi Soni</h1>
        <p className={styles.description}>
          I'm a frontend developer with experience in building responsive web applications. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        /*src={getImageUrl("hero/heroImage.png")}*/
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
