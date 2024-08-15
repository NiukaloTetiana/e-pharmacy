import { AuthForm, Icon, TitleAuth } from "../components";

const handleClick = () => {};

const Register = () => {
  return (
    <div className="relative overflow-hidden container lg:px-[100px] pt-[81px] md:pt-[143px] lg:pt-[201px] pb-[191px]">
      <div className="lg:flex lg:gap-[54px]">
        <TitleAuth />
        <AuthForm registration onClick={handleClick} />
      </div>
      <Icon
        id="bgr-store"
        className="absolute size-[264px] md:size-[271px] lg:size-[279px] bottom-[15px] md:bottom-[-10px] lg:bottom-0 right-[15px] md:right-[-45px] lg:right-[70px] stroke-none fill-[#59b17a14]"
      />
    </div>
  );
};

export default Register;
