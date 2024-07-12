import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { MenuItem } from "../utils/utils";
const Header = () => {
  return (
    <>
      <header>
        <div className="center_wr">
          <div className="header_inner">
            <div className="logo">
              <Link to="">Portfolio</Link>
            </div>
            <div className="menu">
              <ul>
                {MenuItem.map((menu,index) => {
                  return (
                    <li key={index}>
                      <Link to={menu.url}>{menu.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mobile-menu">
            {MenuItem.map((menu,index) => {
                  return (
                    <li key={index}>
                      <Link to={menu.url}>{menu.label}</Link>
                    </li>
                  );
                })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
