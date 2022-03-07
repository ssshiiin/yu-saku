import next from "next";
import { FC } from "react";
import styles from "/styles/sass/modal.module.scss";

type Props = {
  isDisplay: boolean;
  clickHamburger: () => void;
};

const ModalShadow: FC<Props> = (props) => {
  const { isDisplay, clickHamburger } = props;

  const displayModalShadow = (isDisplay: boolean): string => {
    return isDisplay ? "modal_shadow__display" : "modal_shadow__display_non";
  };

  return (
    <div
      className={styles[displayModalShadow(isDisplay)]}
      onClick={clickHamburger}
    />
  );
};

export default ModalShadow;
