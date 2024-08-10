interface IAuthButtonProps {
  className: string;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  toggleMenu,
  className = "",
}: IAuthButtonProps) => {
  return (
    <>
      <ul className={`justify-center items-center gap-[14px] ${className}`}>
        <li>
          <button
            type="button"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className="button border border-[#f1f1f180] rounded-[60px] px-[32px] py-[16px] hover:bg-[#3F945F] focus:bg-[#3F945F] active:bg-[#3F945F]"
          >
            Register
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className="button underline"
          >
            Login
          </button>
        </li>
      </ul>
    </>
  );
};
