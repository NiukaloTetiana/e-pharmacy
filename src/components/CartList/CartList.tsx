import { CartItem } from "./CartItem";

export const CartList = () => {
  const cart = [
    {
      photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
      name: "Aspirin",
      suppliers: "Square",
      stock: "12",
      price: "89.66",
      category: "Medicine",
      description: {
        text: "Aspirin is a commonly used medicine that reduces pain, fever, and inflammation. It is also used as a blood thinner in patients with heart disease.",
        antioxidantProperties:
          "Aspirin has mild antioxidant effects, reducing oxidative stress.",
        antiDiabeticEffects: "Not typically used for diabetes management.",
        antiCancerProperties:
          "Some studies suggest aspirin may reduce the risk of certain cancers.",
        immuneSupport: "Aspirin does not directly support the immune system.",
        digestiveAid:
          "Can cause stomach irritation; should be taken with food.",
      },
    },
    {
      photo: "https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg",
      name: "Paracetamol",
      suppliers: "Acme",
      stock: "19",
      price: "34.16",
      category: "Heart",
      description: {
        text: "Paracetamol, also known as acetaminophen, is widely used for pain relief and fever reduction. It is gentler on the stomach compared to other pain relievers.",
        antioxidantProperties: "Minimal antioxidant properties.",
        antiDiabeticEffects: "No significant effects on blood sugar.",
        antiCancerProperties: "No known anti-cancer properties.",
        immuneSupport: "Helps in fever reduction, aiding in immune response.",
        digestiveAid: "Generally easy on the stomach when taken as directed.",
      },
    },
  ];

  return (
    <ul className="lg:mt-5">
      {cart.map((product, index) => (
        <CartItem key={index} {...product} />
      ))}
    </ul>
  );
};
