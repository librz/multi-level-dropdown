import { FC } from 'react'
import { Navbar, NavItem } from './components/Nav'
import DropdownMenu from './components/DropdownMenu';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

const App: FC = () => {
  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
