import { Link, NavLink } from "react-router-dom";

import { Description, Icon } from "../../components";
import { navItems } from "../../constants";

interface INavBarProps {
  logoClass?: string;
  logoIconClass?: string;
  navClass?: string;
  linkListClass?: string;
  linkItemClasses?: string[];
  linkClasses?: string[];
  className?: string;
  toggleMenu?: () => void;
}

export const NavBar = ({
  className = "hidden",
  navClass = "",
  logoClass = "",
  logoIconClass = "",
  linkListClass = "",
  linkItemClasses = [] || "",
  linkClasses = [] || "",
  toggleMenu,
}: INavBarProps) => {
  return (
    <nav className={navClass}>
      <Link to="/" className={logoClass}>
        <Icon id="logo" className={logoIconClass} size={32} />
        E-Pharmacy
      </Link>
      <Description className={className} />
      <ul className={linkListClass}>
        {navItems.map((item, index) => (
          <li
            key={item.path}
            onClick={toggleMenu}
            className={linkItemClasses[index]}
          >
            <NavLink className={linkClasses[index]} to={item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
