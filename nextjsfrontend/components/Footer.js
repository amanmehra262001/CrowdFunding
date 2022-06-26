import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a href="https://github.com/amanmehra262001" target="_blank">
          Created by<strong> Aman Mehra</strong>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
