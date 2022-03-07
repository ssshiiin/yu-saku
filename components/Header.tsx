import next from "next";
import Link from "next/link";
import styles from "/styles/sass/header.module.scss";

type Props = {
  isHamburgerClick: boolean;
  clickHamburger: () => void;
};

const Header = (props: Props) => {
  const { isHamburgerClick, clickHamburger } = props;

  const hamburgerButtonClass = (): string => {
    return isHamburgerClick
      ? "header__hamburger_button_close"
      : "header__hamburger_button";
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header__name__link}>
          <object
            className={styles.header__name}
            type="image/svg+xml"
            data="/images/NameLogo.svg"
          />
        </a>
      </Link>
      <menu className={styles.header__menu}>
        <Link href="/">
          <a className={styles.header__menu__link}>
            <span className={styles.header__menu__label_work}>WORK</span>
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.header__menu__link}>
            <span className={styles.header__menu__label_about}>ABOUT</span>
          </a>
        </Link>
        <Link href="mailto:yusaku0801.contact&#64;gmail.com">
          <a className={styles.header__menu__link}>
            <span className={styles.header__menu__label_contact}>CONTACT</span>
          </a>
        </Link>
        <Link href="https://www.instagram.com/yu_saku0801/?hl=ja">
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.header__menu__link}
          >
            <img
              alt={""}
              src={"/images/instaLogo.png"}
              className={styles.header__menu__label_insta}
            />
          </a>
        </Link>
      </menu>
      <button
        onClick={clickHamburger}
        className={styles[hamburgerButtonClass()]}
      >
        <div className={styles.header__hamburger_button_line}></div>
        <div className={styles.header__hamburger_button_line}></div>
      </button>
    </header>
  );
};

export default Header;
