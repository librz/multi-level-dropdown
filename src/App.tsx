import { FC } from 'react'
import { Navbar, NavItem } from './components/Nav'
import DropdownMenu from './components/DropdownMenu';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

const App: FC = () => {
  return (
    <div>
      <Navbar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <h1 style={{ textAlign: "center", color: "royalblue", margin: 120 }}>
        To see the dropdown, click icon on top-right corner
      </h1>
    </div>
  );
}

export default App;
