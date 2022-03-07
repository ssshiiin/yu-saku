import next from "next";
import { FC } from "react";
import styles from "/styles/sass/modal.module.scss";

type Props = {
  isDisplay: boolean;
};

const Modal: FC<Props> = (props) => {
  const { isDisplay, children } = props;

  const displayModal = (isDisplay: boolean): string => {
    return isDisplay ? "modal__display" : "modal__display_non";
  };

  return <div className={styles[displayModal(isDisplay)]}>{children}</div>;
};

export default Modal;
