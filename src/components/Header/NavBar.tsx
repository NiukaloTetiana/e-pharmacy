import { Link, NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";

interface INavBarProps {
  className: string;
  toggleMenu?: () => void;
}

export const NavBar = ({ className = "", toggleMenu }: INavBarProps) => {
  return (
    <nav className="flex flex-col gap-[80px] items-center justify-center lg:flex-row lg:gap-[248px]">
      <Link
        to="/"
        className="hidden lg:flex gap-[14px] justify-center items-center font-semibold text-white text-[16px] md:text-[20px] leading-[1.2] tracking-[-0.03em]"
      >
        <Icon
          id="logo"
          className="stroke-[#F7F8FA] fill-none md:size-[44px]"
          size={32}
        />
        E-Pharmacy
      </Link>
      <ul className={className}>
        <li onClick={toggleMenu} className="link w-[96px]">
          <NavLink className="px-[20px]" to="/">
            Home
          </NavLink>
        </li>
        <li onClick={toggleMenu} className="link w-[134px]">
          <NavLink className="px-[12px]" to="medicine-store">
            Medicine store
          </NavLink>
        </li>
        <li onClick={toggleMenu} className="link w-[112px]">
          <NavLink className="px-[17px]" to="medicine">
            Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
