import { NavLink, Link } from "react-router-dom";
import imgUrl from "../assets/images/avatar-icon.png";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about
        "
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/login"
        >
          <img src={imgUrl} alt="login-icon"  className="login-icon"/>
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
 