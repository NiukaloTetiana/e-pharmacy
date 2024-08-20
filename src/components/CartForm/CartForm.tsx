import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "react-toastify";

import { cartSchema } from "../../schemas/validationSchemas";
import { inputClass, renderMessage } from "../../helpers";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "Cash On Delivery" | "Bank";
}

export const CartForm = () => {
  const {
    register,
    // reset,
    // handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(cartSchema),
  });

  //   const onSubmit: SubmitHandler<IFormData> = async ({ name }) => {
  //     try {
  //       // isLoading(true);
  //       if (registration) {
  //         // const res = await registerUser({ name, email, phone, password });
  //         toast.success(`Yohoo! ${name}, you are successfully registered!`);
  //       } else {
  //         // const res = await loginUser({ email, password });
  //         toast.success(`Welcome back!`);
  //       }
  //     } catch (e) {
  //       toast.error((e as Error).message);
  //     } finally {
  //       // isLoading(false);
  //     }
  //   };

  return (
    <form
    // onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[12px] md:gap-y-5 md:gap-x-[14px] md:flex-row md:flex-wrap mb-10">
        <div className="relative md:w-[260px]">
          <label
            htmlFor="name"
            className="block mb-[8px] ml-[18px] font-semibold text-[14px] leading-[1.29] text-[#1d1e21]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter text"
            className={inputClass(errors, dirtyFields, "name")}
            {...register("name")}
          />
          {renderMessage(errors, dirtyFields, "name")}
        </div>

        <div className="relative md:w-[260px]">
          <label
            htmlFor="email"
            className="block mb-[8px] ml-[18px] font-semibold text-[14px] leading-[1.29] text-[#1d1e21]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter text"
            className={inputClass(errors, dirtyFields, "email")}
            {...register("email")}
          />
          {renderMessage(errors, dirtyFields, "email")}
        </div>

        <div className="relative md:w-[260px]">
          <label
            htmlFor="tel"
            className="block mb-[8px] ml-[18px] font-semibold text-[14px] leading-[1.29] text-[#1d1e21]"
          >
            Phone
          </label>
          <input
            id="tel"
            type="tel"
            placeholder="Enter text"
            className={inputClass(errors, dirtyFields, "phone")}
            autoComplete="tel"
            {...register("phone")}
          />
          {renderMessage(errors, dirtyFields, "phone")}
        </div>

        <div className="relative md:w-[260px]">
          <label
            htmlFor="address"
            className="block mb-[8px] ml-[18px] font-semibold text-[14px] leading-[1.29] text-[#1d1e21]"
          >
            Address
          </label>
          <input
            id="address"
            type="address"
            placeholder="Enter text"
            className={inputClass(errors, dirtyFields, "address")}
            {...register("address")}
          />
          {renderMessage(errors, dirtyFields, "address")}
        </div>
      </div>

      <div className="relative pt-10 before:absolute before:top-0 before:left-0 before:right-0 before:border-t before:border-[#1d1e2119] mb-10 md:mb-10">
        <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] mb-[12px] md:mb-[14px]">
          Payment method
        </h4>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f] mb-5">
          You can pay us in a multiple way in our payment gateway system.
        </p>
        <div className="flex flex-col gap-[9px]">
          <label className="flex gap-[8px] items-center justify-start text-[14px] leading-[1.29] p-0">
            <input
              {...register("paymentMethod")}
              className="real-radio"
              type="radio"
              value="Cash On Delivery"
            />
            <span className="custom-radio"></span>
            <span className="text-[#1d1e2199]">Cash On Delivery</span>
          </label>
          <label className="flex gap-[8px] items-center justify-start text-[14px] leading-[1.29] p-0">
            <input
              {...register("paymentMethod")}
              className="real-radio"
              type="radio"
              value="Bank"
            />
            <span className="custom-radio"></span>
            <span className="text-[#1d1e2199]">Bank</span>
          </label>
        </div>
      </div>

      <div className="relative pt-10 before:absolute before:top-0 before:left-0 before:right-0 before:border-t before:border-[#1d1e2119] mb-5">
        <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] mb-[12px] md:mb-[14px]">
          Order details
        </h4>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f] mb-5">
          Shipping and additionnal costs are calculated based on values you have
          entered.
        </p>
        <div className="flex justify-between px-[18px] py-[14px] md:p-[20px] bg-[#e7f1ed] rounded-[8px] mb-5">
          <p className="font-semibold text-[16px] md:text-[18px] leading-[1.4] text-[#1d1e21">
            Total:
          </p>
          <p className="font-semibold text-[16px] md:text-[18px] leading-[1.4] text-[#1d1e21">
            ৳ 122.00
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-[141px] h-[44px] border-none bg-[#59b17a] rounded-[60px] py-[13px] px-[32px] font-medium text-white text-center text-[14px] leading-[1.1] hover:bg-[#3f945f] focus:bg-[#3f945f] transition duration-300"
      >
        Place order
      </button>
    </form>
  );
};
