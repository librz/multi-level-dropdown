import { useState, FC, ReactNode } from 'react'
import IconButton from "../Icon";
import styles from "./index.module.css"

interface INavItemProps {
  icon: ReactNode;
  children?: ReactNode;
}

const NavItem: FC<INavItemProps> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={styles["nav-item"]}>
      <IconButton icon={icon} onClick={() => { setOpen(!open) }} />
      {open && children}
    </li>
  );
}

interface INavbarProps {
  children?: ReactNode;
}

const Navbar: FC <INavbarProps> = ({ children }) => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-nav"]}>{children}</ul>
    </nav>
  );
}

export { NavItem, Navbar }