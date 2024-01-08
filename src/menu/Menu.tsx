import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import "./Menu.scss";
import { Link } from 'react-router-dom';

type Props = {
  list: string[];
};

const Menu: React.FC<Props> = ({ list }) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const isOpen = menuState ? "open" : "";

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className='menubar'>
      <div className='menu_icon' onClick={toggleMenu}>
        {menuState ? <IoClose /> : <IoMenu />}
      </div>
      <div className={`menu_background ${isOpen}`}></div>

      {menuState && (
        <div className={`menu_container ${isOpen}`}>
          <ul>
          {list.map((item, index) => (
            <li
             key={item}
             className={menuState ? "appear" : ""}
             style={{
                animationDelay: `0.${index + 1}s`
             }}
             ><Link
              to={`/${item}`}
              className='link'
              onClick={toggleMenu}
              >{item}</Link></li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
