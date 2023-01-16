import { useState } from "react";
import mainMenuData from "../../data/main-menu-data.json";

interface IMainMenuItem {
  id: number
  name: string
  link: string
}

const mainMenuItems: IMainMenuItem[] = mainMenuData;

function MainMenuItem() {

  const [menuItem, setMenuItem] = useState(mainMenuItems);

  return (
    <>
      {
        menuItem.map((item, index) =>
          <li className="mr-4 last:m-0" key={item.id}>
            <a className=" text-lg" href={item.link}>{item.name + (index+1)}</a>
          </li>
        )
      }
    </>
  );
}

export default MainMenuItem;