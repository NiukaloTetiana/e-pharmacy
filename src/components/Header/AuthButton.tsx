interface IAuthButtonProps {
  className: string;
  btnRegClass?: string;
  btnLogClass?: string;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  toggleMenu,
  className = "",
  btnRegClass = "",
  btnLogClass = "",
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
            className={`button border rounded-[60px] px-[32px] py-[16px] ${btnRegClass}`}
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
            className={`button underline ${btnLogClass}`}
          >
            Login
          </button>
        </li>
      </ul>
    </>
  );
};
