import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { Icon } from "../../components";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 200);

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
        flex justify-center items-center fixed right-5 bottom-5 sm-max:bottom- sm-max:right-3 md:right-[35px] md:bottom-[25px] lg:right-[60px] lg:bottom-10 rounded-full w-[38px] h-[70px] sm-max:w-[24px] sm-max:h-[44px] lg:w-[44px] lg:h-[82px] bg-[#59b17a] border-[8px] sm-max:border-[6px] border-white z-[49] shadow-scroll hover:-translate-y-2 focus:-translate-y-2 transition-transform duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <Icon
        id="arrow"
        className="stroke-white fill-white sm-max:size-2 lg:size-[22px]"
        size={14}
      />
    </button>
  );
};
