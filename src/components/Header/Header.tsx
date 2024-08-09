import { useLocation } from "react-router-dom";

import { NavBar } from "../../components";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`${isHomePage ? "bg-[#59b17a]" : "bg-[#f7f8fa]"}`}>
      <div className="container pt-[28px] mb-[197px] md:pb-[186px] lg:mb-[72px] flex justify-between items-center">
        <NavBar className="hidden lg:flex" />
      </div>
    </header>
  );
};
