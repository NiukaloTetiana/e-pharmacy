import { useLocation } from "react-router-dom";
import { Icon, LogoutButton } from "../../components";

interface IUserBarProps {
  className?: string;
  toggleMenu: () => void;
}

export const UserBar = ({ className, toggleMenu }: IUserBarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`${className} flex justify-center items-center gap-[12px]`}>
      <div className="flex justify-center items-center gap-[8px]">
        <div className="relative flex items-center justify-center w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[50%] bg-white border border-[#f1f1f1]">
          <Icon id="cart" size={16} className="stroke-[#59b17a] fill-none" />
          <p className="absolute -top-[2px] -right-[2px] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] bg-[#D7EAE0] font-bold text-[12px] text-[#59b17a]">
            0
          </p>
        </div>
        <p className="flex items-center justify-center w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[50%] bg-[#D7EAE0] font-semibold text-[18px] text-[#59b17a]">
          {/* {userName} */}I
        </p>
      </div>

      <LogoutButton
        toggleMenu={toggleMenu}
        className={`hidden lg:block ${isHomePage ? "btn-home" : "btn-next"}`}
      />
    </div>
  );
};
