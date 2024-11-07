import LOGO from "../../assets/logo.png";
import BURGER from "../../assets/burger.svg";
import { NavLink } from "react-router-dom";
import "./header.css";
import MobileMenu from "../MobileMenu";
import { useState } from "react";
import SwitchTheme from "../SwitchTheme";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="dark_theme">
      
      <SwitchTheme />

      <header>
        <img src={LOGO} width={134} height={27} />
        
        <nav className="nav">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/services" className="nav-item">
            Services
          </NavLink>
        </nav>
        <button className="main-btn header-btn">Contact Me</button>
        <button onClick={handleMenu} className="burger">
          <img src={BURGER} />
        </button>
        {menuOpen && <MobileMenu handleMenu={handleMenu} />}
      </header>
    </div>
  );
};

export default Header;
