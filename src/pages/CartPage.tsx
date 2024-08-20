import { CartForm } from "../components";

const CartPage = () => {
  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[80px] md:pb-[120px]">
      <h2 className="title">Cart</h2>
      <div className="p-5 pb-10 md:px-[78px] md:py-10 lg:p-10 bg-white rounded-[20px] lg:w-full">
        <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] mb-[12px] md:mb-[14px]">
          Enter shipping info
        </h4>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f] mb-10 md:mb-10">
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
        <CartForm />
      </div>
    </div>
  );
};

export default CartPage;
