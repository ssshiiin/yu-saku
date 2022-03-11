import next from "next";
import Link from "next/link";
import { FC } from "react";
import styles from "/styles/sass/footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href="#">
        <a className={styles.footer__message}>BACK TO TOP</a>
      </Link>
      <Link href="#">
        <a>
          <img
            src={"/images/backToTop.png"}
            className={styles.footer__back}
            alt={""}
          />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
