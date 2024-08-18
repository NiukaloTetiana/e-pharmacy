import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { registerSchema, loginSchema } from "../../schemas/validationSchemas";
import { inputClass, renderMessage } from "../../helpers";
import { Icon } from "../../components";
import { Link, useLocation } from "react-router-dom";

interface IFormData {
  name?: string;
  email: string;
  phone?: string;
  password: string;
}

interface IAuthFormProps {
  registration: boolean;
  toggleRegistration?: () => void;
}

export const AuthForm = ({
  registration,
  toggleRegistration,
}: IAuthFormProps) => {
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const isAuthRoutes = ["/register", "/login"].includes(location.pathname);

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(registration ? registerSchema : loginSchema),
  });

  const onSubmit: SubmitHandler<IFormData> = async ({ name }) => {
    try {
      // isLoading(true);
      if (registration) {
        // const res = await registerUser({ name, email, phone, password });
        toast.success(`Yohoo! ${name}, you are successfully registered!`);
      } else {
        // const res = await loginUser({ email, password });
        toast.success(`Welcome back!`);
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      // isLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col mb-[14px] ${
          registration && isAuthRoutes ? "lg:w-[574px]" : ""
        }`}
      >
        <div
          className={`relative flex flex-col gap-[10px] md:gap-[14px] ${
            registration ? "md:flex-row md:flex-wrap mb-[20px]" : "mb-[128px]"
          } ${isAuthRoutes ? "md:mb-[62px]" : "mb-[25px]"}`}
        >
          {registration && (
            <div
              className={`relative ${isAuthRoutes ? "md:w-[280px]" : "w-full"}`}
            >
              <input
                type="text"
                placeholder="User Name"
                className={inputClass(errors, dirtyFields, "name")}
                {...register("name")}
              />
              {renderMessage(errors, dirtyFields, "name")}
            </div>
          )}

          <div
            className={`relative ${isAuthRoutes ? "md:w-[280px]" : "w-full"}`}
          >
            <input
              type="text"
              placeholder="Email address"
              className={inputClass(errors, dirtyFields, "email")}
              {...register("email")}
            />
            {renderMessage(errors, dirtyFields, "email")}
          </div>
          {registration && (
            <div
              className={`relative ${isAuthRoutes ? "md:w-[280px]" : "w-full"}`}
            >
              <input
                type="tel"
                placeholder="Phone number"
                className={inputClass(errors, dirtyFields, "phone")}
                autoComplete="tel"
                {...register("phone")}
              />
              {renderMessage(errors, dirtyFields, "phone")}
            </div>
          )}

          <div
            className={`relative ${isAuthRoutes ? "md:w-[280px]" : "w-full"}`}
          >
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className={inputClass(errors, dirtyFields, "password")}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              {showPass ? (
                <Icon
                  id="eye"
                  className="fill-none stroke-[#1d1e21] sm-max:size-[14px]"
                  size={16}
                />
              ) : (
                <Icon
                  id="eye-off"
                  className="fill-none stroke-[#1d1e21] sm-max:size-[14px]"
                  size={16}
                />
              )}
            </button>
            {renderMessage(errors, dirtyFields, "password")}
          </div>
        </div>

        <button
          type="submit"
          className={`relative w-full h-[44px] border-none bg-[#59b17a] rounded-[60px] py-[13px] lg:py-[16px] font-medium text-white text-center text-[14px] leading-[1.1] hover:bg-[#3f945f] focus:bg-[#3f945f] transition duration-300 ${
            isAuthRoutes ? "md:w-[280px]" : ""
          }`}
        >
          {registration ? "Register" : "Log in"}
        </button>
      </form>

      {isAuthRoutes ? (
        <Link
          to={registration ? "/login" : "/register"}
          className="block w-full md:w-[280px] font-normal text-[12px] leading-[1.5] text-center text-[#1d1e2166]"
        >
          {registration ? "Already have an account?" : "Don't have an account?"}
        </Link>
      ) : (
        <button
          onClick={toggleRegistration}
          type="button"
          className="w-full font-normal text-[12px] leading-[1.5] text-center text-[#1d1e2166]"
        >
          {registration ? "Already have an account?" : "Don't have an account?"}
        </button>
      )}
    </div>
  );
};
