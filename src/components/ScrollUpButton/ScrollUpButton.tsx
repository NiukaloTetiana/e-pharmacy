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
        flex justify-center items-center fixed right-4 bottom-4 sm-max:bottom-2.5 sm-max:right-2.5 md:right-[35px] md:bottom-[25px] lg:right-[60px] lg:bottom-[40px] rounded-full w-12 h-12 sm-max:w-10 sm-max:h-10 bg-[#3F945F] border border-[#d9d9d97e] hover:border-white focus:border-white focus:shadow-md hover:shadow-md transition duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <Icon
        id="arrow"
        className="fill-[#F7F8FA] sm-max:size-[18px]"
        size={20}
      />
    </button>
  );
};
