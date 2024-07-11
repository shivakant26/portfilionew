import { Link as ScrollLink } from 'react-scroll';
import {Link} from "react-router-dom";
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
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Resume</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="">skills</Link>
                </li>
                <li>
                  <Link to="">Project</Link>
                </li>
                <li>
                  <Link to="">MyBlog</Link>
                </li>
                <li>
                  <Link to="">contact</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
