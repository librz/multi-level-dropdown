import React, { useState } from 'react'
import IconButton from "../Icon";
import styles from "./index.module.css"

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className={styles["nav-item"]}>
      <IconButton icon={props.icon} onClick={() => setOpen(!open)} />
      {open && props.children}
    </li>
  );
}

function Navbar(props) {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-nav"]}>{props.children}</ul>
    </nav>
  );
}

export { NavItem, Navbar }