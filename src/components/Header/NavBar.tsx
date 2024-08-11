import { Link, NavLink } from "react-router-dom";

import { navItems } from "../../constants";
import { Description } from "../../components";
import white_mobile_1x from "../../assets/images/logo/logo_white_mobile_1x.png";
import white_mobile_2x from "../../assets/images/logo/logo_white_mobile_2x.png";
import white_tablet_1x from "../../assets/images/logo/logo_white_tablet_1x.png";
import white_tablet_2x from "../../assets/images/logo/logo_white_tablet_2x.png";

interface ILogoSrc {
  mobile_1x: string;
  mobile_2x: string;
  tablet_1x: string;
  tablet_2x: string;
}

interface INavBarProps {
  logoSrc?: ILogoSrc;
  logoClass?: string;
  navClass?: string;
  linkListClass?: string;
  linkItemClasses?: string[];
  linkClasses?: string[];
  className?: string;
  toggleMenu?: () => void;
}

export const NavBar = ({
  logoSrc = {
    mobile_1x: white_mobile_1x,
    mobile_2x: white_mobile_2x,
    tablet_1x: white_tablet_1x,
    tablet_2x: white_tablet_2x,
  },
  logoClass = "",
  navClass = "",
  linkListClass = "",
  linkItemClasses = [],
  linkClasses = [],
  className = "hidden",
  toggleMenu,
}: INavBarProps) => {
  return (
    <nav className={navClass}>
      <Link to="/" className={logoClass}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${logoSrc.tablet_1x} 1x, ${logoSrc.tablet_2x} 2x`}
            height="44"
            width="44"
          />
          <img
            srcSet={`${logoSrc.mobile_1x} 1x, ${logoSrc.mobile_2x} 2x`}
            height="32"
            width="32"
            alt="Logotype"
            loading="lazy"
          />
        </picture>
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
