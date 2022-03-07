import next from "next";
import { FC, useState } from "react";
import styles from "/styles/sass/base.module.scss";
import { Header, Modal, ModalShadow, Hamburger, Footer } from "./index";

type Props = {
  isFooter: boolean;
};

const Base: FC<Props> = (props) => {
  const { children, isFooter } = props;
  const [isHamburgerClick, setIsHamburgerClick] = useState<boolean>(false);

  const clickHamburger = (): void => {
    setIsHamburgerClick(!isHamburgerClick);
  };

  return (
    <div className={styles.body}>
      <Header
        isHamburgerClick={isHamburgerClick}
        clickHamburger={clickHamburger}
      ></Header>
      <Modal isDisplay={isHamburgerClick}>
        <Hamburger
          isHamburgerClick={isHamburgerClick}
          clickHamburger={clickHamburger}
        />
      </Modal>
      <ModalShadow
        isDisplay={isHamburgerClick}
        clickHamburger={clickHamburger}
      />
      <main className={styles.main}>{children}</main>
      {isFooter && <Footer />}
    </div>
  );
};

export default Base;
