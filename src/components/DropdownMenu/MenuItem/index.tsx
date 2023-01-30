import { FC, ReactNode } from "react";
import IconButton from "../../Icon";
import styles from "./index.module.css";

interface IProps {
  leftIcon: ReactNode;
  children?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

const MenuItem: FC<IProps> = ({ leftIcon, rightIcon, children, onClick }) => {
  return (
    <div className={styles["menu-item"]} onClick={onClick}>
      <IconButton
        icon={leftIcon}
        style={{ marginRight: "0.5rem", filter: "none" }}
      />
      {children}
      {rightIcon && <span className={styles["icon-right"]}>{rightIcon}</span>}
    </div>
  );
};

export default MenuItem;
