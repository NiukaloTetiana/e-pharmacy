import { useLocation } from "react-router-dom";

import { BurgerMenu, Icon, NavBar } from "../../components";
import { useModal } from "../../hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`${isHomePage ? "bg-[#59b17a]" : "bg-[#f7f8fa]"}`}>
      <div className="container py-[25px] mb:py-[28px] flex justify-between items-center">
        <NavBar className="hidden lg:flex gap-[1px]" />

        <BurgerMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
          classMenu={`${isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
        />

        <button
          type="button"
          onClick={() => {
            toggleMenu();
          }}
          className="outline-none flex justify-between lg:hidden"
        >
          <Icon
            id="burger"
            className="stroke-white fill-none w-[32px] h-[26px]"
            size={32}
          />
        </button>
      </div>
    </header>
  );
};
