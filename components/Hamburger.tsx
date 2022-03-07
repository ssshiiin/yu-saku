import next from "next";
import Link from "next/link";
import styles from "/styles/sass/hamburger.module.scss";
import { FC } from "react";

type Props = {
  isHamburgerClick: boolean;
  clickHamburger: () => void;
};

const Hamburger: FC<Props> = (props) => {
  const { isHamburgerClick, clickHamburger } = props;

  const hamburgerButtonClass = (): string => {
    return isHamburgerClick
      ? "hamburger__hamburger_button_close"
      : "hamburger__hamburger_button";
  };

  return (
    <div className={styles.hamburger}>
      <button
        onClick={clickHamburger}
        className={styles[hamburgerButtonClass()]}
      >
        <div className={styles.hamburger__hamburger_button_line}></div>
        <div className={styles.hamburger__hamburger_button_line}></div>
      </button>
      <menu className={styles.hamburger__menu}>
        <Link href="/">
          <a className={styles.hamburger__menu__link_work}>
            <span className={styles.hamburger__menu__label_work}>WORK</span>
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.hamburger__menu__link}>
            <span className={styles.hamburger__menu__label_about}>ABOUT</span>
          </a>
        </Link>
        <Link href="mailto:yusaku0801.contact&#64;gmail.com">
          <a className={styles.hamburger__menu__link}>
            <span className={styles.hamburger__menu__label_contact}>
              CONTACT
            </span>
          </a>
        </Link>
        <Link href="https://www.instagram.com/yu_saku0801/?hl=ja">
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.hamburger__menu__link}
          >
            <img
              src={"/images/instaLogo.png"}
              className={styles.hamburger__menu__link__insta}
              alt={""}
            />
          </a>
        </Link>
      </menu>
    </div>
  );
};

export default Hamburger;
