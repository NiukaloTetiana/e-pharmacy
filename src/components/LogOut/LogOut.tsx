// import { toast } from "react-toastify";

// import { Loader } from "../../components";

interface ILogOutProps {
  toggleLogOutModal: () => void;
}

export const LogOut = ({ toggleLogOutModal }: ILogOutProps) => {
  const handleLogout = () => {
    //     isLoading(true);
    //       .then(() => {
    //         toast.info(
    //           "In order to see , please log in."
    //         );
    //       })
    //       .catch(() => {
    //         toast.error("Oops...Something wrong.");
    //       })
    //       .finally(() => {
    //         isLoading(false);
    //       });
  };

  return (
    <div>
      <h2 className="font-semibold text-[#1d1e21] text-center text-[28px] sm-max:text-[25px] leading-[1.14] mb-[40px]">
        Are you sure you want to log out?
      </h2>
      <div className="flex gap-[25px] justify-center">
        <button
          type="button"
          onClick={handleLogout}
          className="px-[20px] py-[13px] w-[115px] h-[44px] md:h-[46px] border-none bg-[#59b17a] rounded-[60px] font-medium text-white text-center text-[14px] leading-[1.1] hover:bg-[#3f945f] focus:bg-[#3f945f] transition duration-300"
        >
          Log out
        </button>
        <button
          type="button"
          onClick={toggleLogOutModal}
          className="px-[20px] py-[13px] w-[115px] h-[44px] md:h-[46px] border-none bg-[#59b17a] rounded-[60px] font-medium text-white text-center text-[14px] leading-[1.1] hover:bg-[#3f945f] focus:bg-[#3f945f] transition duration-300"
        >
          Cancel
        </button>
      </div>
      {/* {isLoading && <Loader />} */}
    </div>
  );
};
