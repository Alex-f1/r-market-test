import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import logoData from "../../data/logo-data.json";

function MenuPanel() {
  return (
    <div className="menu-panel py-4 shadow-xl relative z-50 backdrop-blur-lg bg-slate-50 bg-opacity-90">
      <div className="menu-panel__container container mx-auto px-4">
        <div className="menu-panel__inner flex items-center justify-between">
          <Logo imgSrc="" textLogo={logoData[0].text} />
          <MainMenu />
        </div>
      </div>
    </div>
  );
}

export default MenuPanel;