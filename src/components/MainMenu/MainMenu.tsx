import MainMenuItem from "../MainMenuItem/MainMenuItem";
import "./MainMenu.scss";

function MainMenu() {
  return (
    <div className="main-menu">
      <nav className="main-menu__nav">
        <ul className="flex items-center">
          <MainMenuItem />
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;

