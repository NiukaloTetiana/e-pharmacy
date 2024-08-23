import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AuthModal, Icon, Modal } from "../../components";
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import { selectCart, selectIsLoggedIn, updateCart } from "../../redux";

interface ICartButton {
  _id: string;
}

export const CartButton: React.FC<ICartButton> = ({ _id }) => {
  const dispatch = useAppDispatch();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [isOpenModal, toggleModal] = useModal();
  const isLoggedin = useAppSelector(selectIsLoggedIn);
  const cart = useAppSelector(selectCart);
  const location = useLocation();
  const isMedicinePage = location.pathname === "/medicine";

  useEffect(() => {
    if (cart?.products.length) {
      setIsProductInCart(cart?.products.some((product) => product._id === _id));
    } else {
      setIsProductInCart(false);
    }
  }, [_id, cart?.products]);

  const handleAddToCart = () => {
    if (!isLoggedin) {
      toggleModal();
      return;
    }

    const updatedProducts = cart?.products?.length
      ? cart.products.map((product) => ({
          _id: product._id,
          quantity: product.quantity,
        }))
      : [];

    updatedProducts.push({ _id, quantity: 1 });

    const updatedCart = {
      products: updatedProducts,
    };

    dispatch(updateCart(updatedCart));
  };

  const handleRemoveFromCart = () => {
    const updatedProducts =
      cart?.products
        .map((product) => ({
          _id: product._id,
          quantity: product.quantity,
        }))
        .filter((product) => product._id !== _id) || [];
    const updatedCart = {
      products: updatedProducts,
    };

    dispatch(updateCart(updatedCart));
  };
  return (
    <>
      <button
        type="button"
        onClick={isProductInCart ? handleRemoveFromCart : handleAddToCart}
        className={`flex items-center justify-center gap-[6px] font-medium text-[14px] text-white leading-[1] text-center bg-[#59b17a] hover:bg-[#3f945f] focus-visible:bg-[#3f945f] hover:shadow-lg focus-visible:shadow-lg transition duration-300 ${
          isMedicinePage
            ? "w-[108px] h-[34px] px-[16px] py-[10px] rounded-[24px]"
            : "w-[140px] h-[44px] sm-max:w-[108px] px-[32px] sm-max:px-[15px] py-[13px] rounded-[60px]"
        }`}
      >
        {isProductInCart ? (
          <>
            Remove
            <Icon id="cart" size={14} className="fill-none stroke-white" />
          </>
        ) : (
          "Add to cart"
        )}
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="px-[32px] py-[40px] sm-max:px-[20px] md:px-[70px] md:py-[50px]"
        >
          <AuthModal />
        </Modal>
      )}
    </>
  );
};
