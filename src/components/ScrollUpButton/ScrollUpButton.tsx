import { useEffect, useState } from "react";

import { Icon } from "../../components";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollUp}
      className={`
        flex justify-center items-center fixed right-4 bottom-4 sm-max:bottom-2.5 sm-max:right-2.5 md:right-[35px] md:bottom-[25px] lg:right-[60px] lg:bottom-[40px] rounded-full w-12 h-[68px] sm-max:w-8 sm-max:h-[48px] lg:w-14 lg:h-[82px] bg-[#59b17a] border-[10px] sm-max:border-[6px] border-white z-[49] shadow-scroll transition duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <Icon
        id="arrow"
        className="stroke-white fill-white sm-max:size-[14px] size-[18px]"
        size={24}
      />
    </button>
  );
};
