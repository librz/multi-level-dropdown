import { useState, useEffect, useRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";
import IconButton from "../Icon";
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

  function DropdownItem(props: {
    goToMenu?: MenuType;
    leftIcon: ReactNode;
    children?: ReactNode;
    rightIcon?: ReactNode;
  }) {
    return (
      <div
        className={styles["menu-item"]}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <IconButton
          icon={props.leftIcon}
          style={{ marginRight: "0.5rem", filter: "none" }}
        />
        {props.children}
        {props.rightIcon && (
          <span className={styles["icon-right"]}>{props.rightIcon}</span>
        )}
      </div>
    );
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
          <DropdownItem leftIcon="M">
            My Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
