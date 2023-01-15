import MainPhone from "../MainPhone/MainPhone";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import headerData from "../../data/header-data.json";

function TopPanel() {
  return (
    <div className="top-panel bg-orange-400 py-4">
      <div className="top-panel__container container mx-auto px-4">
        <div className="top-panel__inner flex items-center justify-between">
          <MainPhone 
            phone={headerData[0].mainPhone.phone} 
          />
          <SwitchLanguage 
            currentLanguage={headerData[0].switchLanguage.name}
            anotherLanguage={headerData[0].switchLanguage.switchLanguageAnother.name} 
          />
        </div>
      </div>
    </div>
  );
}

export default TopPanel;

