import { useAppSelector } from "../../hooks";
import { selectProductsCart } from "../../redux";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const products = useAppSelector(selectProductsCart);

  return (
    <ul className="lg:mt-5">
      {products.map((product) => (
        <CartItem key={product._id} {...product} />
      ))}
    </ul>
  );
};
