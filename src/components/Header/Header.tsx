import { useLocation } from "react-router-dom";

import { AuthButton, BurgerMenu, Icon, NavBar } from "../../components";
import { useModal } from "../../hooks";

import green_mobile_1x from "../../assets/images/logo/logo_green_mobile_1x.png";
import green_mobile_2x from "../../assets/images/logo/logo_green_mobile_2x.png";
import green_tablet_1x from "../../assets/images/logo/logo_green_tablet_1x.png";
import green_tablet_2x from "../../assets/images/logo/logo_green_tablet_2x.png";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const greenLogoSrc = {
    mobile_1x: green_mobile_1x,
    mobile_2x: green_mobile_2x,
    tablet_1x: green_tablet_1x,
    tablet_2x: green_tablet_2x,
  };

  return (
    <header className={`${isHomePage ? "bg-[#59b17a]" : "bg-[#f7f8fa]"}`}>
      <div className="container py-[25px] mb:py-[28px] flex justify-between items-center">
        <NavBar
          navClass="flex flex-col gap-[80px] items-center justify-center lg:flex-row lg:gap-[248px]"
          logoClass={`flex gap-[12px] md:gap-[14px] justify-center items-center logo ${
            isHomePage ? "text-white" : "text-[#1d1e21]"
          }`}
          logoSrc={isHomePage ? undefined : greenLogoSrc}
          linkListClass="hidden lg:flex gap-[1px]"
          linkItemClasses={[
            "w-[96px] link",
            "w-[134px] link",
            "w-[112px] link",
          ]}
          linkClasses={["px-[20px]", "px-[12px]", "px-[17px]"]}
        />

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
            className={`fill-none w-[32px] h-[26px]${
              isHomePage ? " stroke-white" : " stroke-[#59b17a]"
            }`}
            size={32}
          />
        </button>
        <AuthButton className="hidden lg:flex" />
      </div>
    </header>
  );
};
