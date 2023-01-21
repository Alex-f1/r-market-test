import MenuPanel from "../MenuPanel/MenuPanel";
import TopPanel from "../TopPanel/TopPanel";

function Header() {
  return (
    <header className="App-header">
      <TopPanel />
      <MenuPanel />
    </header>
  )
}

export default Header;