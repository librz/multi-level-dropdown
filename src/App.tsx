import { FC } from "react";
import { Navbar, NavItem } from "./components/Nav";
import DropdownMenu from "./components/DropdownMenu";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import ArrowUpIcon from "./icons/arrow-up";

const Descriptions: FC = () => {
  return (
    <>
      <section className="description">
        <h1 style={{ color: "royalblue", textAlign: "right" }}>
          Click icon to open
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 48,
          }}
        >
          <ArrowUpIcon />
        </div>
      </section>
      <section className="description">
        <h1 style={{ textAlign: "right" }}>
          <a
            href="https://github.com/librz/multi-level-dropdown"
            target={"_blank"}
            rel="noreferrer"
          >
            Source Code
          </a>
        </h1>
      </section>
    </>
  )
}

const App: FC = () => {
  return (
    <div>
      <Navbar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <Descriptions />
    </div>
  );
};

export default App;
