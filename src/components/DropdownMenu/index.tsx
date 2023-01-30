import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";
import MenuItem from "./MenuItem";
import styles from "./index.module.css";
import "./menu-transitions.css";

type MenuType = "main" | "settings" | "animals";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("main");

  const [menuHeight, setMenuHeight] = useState<number>();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = dropdownRef.current?.firstChild;
    if (menu) {
      const menuHeight = (menu as HTMLElement).offsetHeight;
      console.log("menu height", menuHeight)
      setMenuHeight(menuHeight);
    }
  }, []);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className={styles["dropdown"]}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles["menu"]}>
          <MenuItem leftIcon="M">
            My Profile
          </MenuItem>
          <MenuItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            onClick={() => { setActiveMenu("settings") }}
          >
            Settings
          </MenuItem>
          <MenuItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            onClick={() => { setActiveMenu("animals") }}
          >
            Animals
          </MenuItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames={"menu-secondary"}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles["menu"]}>
          <MenuItem leftIcon={<ArrowIcon />} onClick={() => { setActiveMenu("main") }}>
            <h2>Settings</h2>
          </MenuItem>
          <MenuItem leftIcon={<BoltIcon />}>Theme</MenuItem>
          <MenuItem leftIcon={<BoltIcon />}>Payment</MenuItem>
          <MenuItem leftIcon={<BoltIcon />}>Notification</MenuItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames={"menu-secondary"}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles["menu"]}>
          <MenuItem leftIcon={<ArrowIcon />} onClick={() => { setActiveMenu("main") }}>
            <h2>Animals</h2>
          </MenuItem>
          <MenuItem leftIcon="🦘">Kangaroo</MenuItem>
          <MenuItem leftIcon="🐸">Frog</MenuItem>
          <MenuItem leftIcon="🦋">Butterfly</MenuItem>
          <MenuItem leftIcon="🦔">Hedgehog</MenuItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
