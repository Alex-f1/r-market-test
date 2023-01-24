import { NavLink } from 'react-router-dom';
import mainMenuData from "../../data/main-menu-data.json";

interface IMainMenuItem {
  id: number
  name: string
  link: string
}

function MainMenuItem() {

  const menuItem: IMainMenuItem[] = mainMenuData;

  return (
    <>
      {
        menuItem.map((item) =>
          <li className="mr-4 last:m-0" key={item.id}>
            <NavLink to={item.link} className="text-sm font-normal uppercase">
              {item.name}
            </NavLink>
          </li>
        )
      }
    </>
  );
}

export default MainMenuItem;