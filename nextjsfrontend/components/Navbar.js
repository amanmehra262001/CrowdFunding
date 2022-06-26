import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import ConnectButtonMyWay from "./ConnectButtonMyWay";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/"> Home </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about"> About </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contactUs"> Contact</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/supportUs"> Support Us </Link>
          </li>
        </ul>
      </nav>
      <ConnectButtonMyWay />
    </div>
  );
};

export default Navbar;
