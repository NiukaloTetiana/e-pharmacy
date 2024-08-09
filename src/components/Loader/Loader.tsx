import { ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-[#68616199] backdrop-blur-sm w-full h-full left-0 top-0 z-50">
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        borderColor="#59B17A"
        barColor="#F7F8FA"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
