import { ISiteInfoData } from "../../models/siteInfo";
import siteInfoData from "../../data/site-info-data.json";

import "./Footer.scss";

function Footer() {

  const infoData: ISiteInfoData = siteInfoData[0];
  const menu = siteInfoData[0].info.menu;
  const phones = siteInfoData[0].contacts.phones;
  const social = siteInfoData[0].social.item;

  return (
    <footer className="App-footer bg-zinc-800 py-10 mt-10 text-white">
      <div className="App-footer__container container px-4 mx-auto">
        <div className="App-footer__cols grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="App-footer__col">
            <div className="App-footer__title text-zinc-200 font-medium mb-2 border-b border-b-zinc-700 uppercase">
              {infoData.info.title}
            </div> 
            <div className="App-footer__info">
              <nav className="App-footer__nav">
                <ul>
                  {
                    menu.map((item) => {
                      return (
                        <li key={item.id}>
                          <a className="text-zinc-300 transition-colors hover:text-white" 
                            href={item.link}>
                            {item.name}
                          </a>
                        </li>
                      );
                    })
                  }
                </ul>
              </nav>
            </div>
          </div>
          <div className="App-footer__col">
            <div className="App-footer__title text-zinc-200 font-medium mb-2 border-b border-b-zinc-700 uppercase">
              {infoData.schedule.title}
            </div>
            <div className="App-footer__info">
              <p className="text-zinc-300">{infoData.schedule.address}</p>
              <p className="text-zinc-300">{infoData.schedule.timeWeek}</p>
            </div>
          </div>
          <div className="App-footer__col">
            <div className="App-footer__title text-zinc-200 font-medium mb-2 border-b border-b-zinc-700 uppercase">
              {infoData.contacts.title}
            </div>
            <div className="App-footer__info">
              <div className="App-footer__phones">
                {
                  phones.map((item) => {
                    return (
                      <a className="text-zinc-300 transition-colors hover:text-white" 
                        key={item.id}
                        href={`tet:${item.phone}`}>
                        {item.phone}
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="App-footer__col">
            <div className="App-footer__title text-zinc-200 font-medium mb-2 border-b border-b-zinc-700 uppercase">
              {infoData.social.title}
            </div>
            <div className="App-footer__info">
              <div className="App-footer__social">
                {
                  social.map((item) => {
                    return (
                      <a className="text-zinc-300 block w-7 h-7" href={item.link} key={item.id}>
                        <img src={item.icon} alt="" />
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;