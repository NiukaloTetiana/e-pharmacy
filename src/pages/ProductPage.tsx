import { Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { Icon } from "../components";

const products = [
  {
    id: "0",
    photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
    name: "Aspirin",
    suppliers: "Square",
    stock: "12",
    price: "89.66",
    category: "Medicine",
    // Description:
    //   "Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution.",
    //  Medicinal Uses:
    //   Antioxidant Properties: "Moringa is packed with antioxidants that help fight oxidative stress and inflammation in the body.",
    // Anti - Diabetic Effects:"Some studies have shown that moringa leaves might lower blood sugar levels, making it a valuable supplement for managing diabetes.",
    //  Heart Health:"The plant has been linked to reduced cholesterol levels, which is vital for heart health.",
    // Anti - Cancer Properties:"Certain compounds in moringa, such as niazimicin, have been found to suppress the growth of cancer cells in laboratory studies.",
    // Immune Support:"With its high vitamin C content, moringa can boost the immune system.",
    // Digestive Aid:"Moringa can help in treating digestive disorders due to its anti-inflammatory properties.",
  },
  {
    id: "1",
    photo: "https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg",
    name: "Paracetamol",
    suppliers: "Acme",
    stock: "19",
    price: "34.16",
    category: "Heart",
  },
  {
    id: "2",
    photo: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
    name: "Ibuprofen",
    suppliers: "Beximco",
    stock: "09",
    price: "53.76",
    category: "Head",
  },
  {
    id: "3",
    photo: "https://i.ibb.co/GxTVSVk/shop-4-9-1000x1000-min.jpg",
    name: "Acetaminophen",
    suppliers: "ACI",
    stock: "14",
    price: "28.57",
    category: "Hand",
  },
  {
    id: "4",
    photo: "https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg",
    name: "Naproxen",
    suppliers: "Uniliver",
    stock: "10",
    price: "56.34",
    category: "Leg",
  },
  {
    id: "5",
    photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
    name: "Amoxicillin",
    suppliers: "Square",
    stock: "25",
    price: "45.99",
    category: "Medicine",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === id);

  if (!currentProduct) {
    return <div>No product information available</div>;
  }

  return (
    <div className="container pb-[80px] md:pb-[120px]">
      <div className="lg:flex lg:gap-5">
        <div className="flex flex-col md:flex-row lg:flex-col gap-[8px] md:gap-[16px] lg:gap-5 mb-[8px] md:mb-[16px] lg:mb-0">
          <img
            src={currentProduct.photo}
            width={364}
            className="w-full h-[337px] md:w-[364px] md:h-[284px] lg:h-[337px] bg-[#f7f7f7] rounded-[20px] border-[1.15px] border-[#59b17a99]"
            alt={currentProduct.name}
            loading="lazy"
          />

          <div className="p-5 md:p-[32px] bg-white rounded-[20px] lg:w-[364px]">
            <div className="relative flex items-center justify-between mb-[4px]">
              <h5 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
                {currentProduct.name}
              </h5>
              <h5 className="md:absolute md:top-[82px] md:left-0 lg:static font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
                ৳{currentProduct.price}
              </h5>
            </div>
            <p className="font-normal text-[12px] leading-[1.5] text-[#1d1e2199] mb-[32px] md:mb-[126px] lg:mb-10">
              Brand: {currentProduct.suppliers}
            </p>

            <div className="flex items-center justify-between md:gap-[12px] lg:gap-0">
              <button
                type="button"
                className="flex items-center justify-center gap-[12px] w-[108px] font-normal text-[16px] text-[#1d1e21] leading-[1.25] px-[18px] py-[12px] rounded-[60px] border border-[#1d1e2119] bg-transparent hover:border-[#59b17a] focus:border-[#59b17a] hover:shadow-lg focus:shadow-lg transition duration-300"
              >
                <Icon
                  id="plus"
                  size={20}
                  className="fill-none stroke-[#59b17a] hover:text-[#59b17a] focus:text-[#59b17a]"
                />
                1
                <Icon
                  id="minus"
                  size={20}
                  className="fill-none stroke-[#59b17a] hover:text-[#59b17a] focus:text-[#59b17a]"
                />
              </button>
              <button
                type="button"
                className="w-[140px] sm-max:w-[108px] font-medium text-[14px] text-white leading-[1.29] text-center px-[32px] sm-max:px-[15px] py-[13px] rounded-[60px] bg-[#59b17a] hover:bg-[#3f945f] focus:bg-[#3f945f] hover:shadow-lg focus:shadow-lg transition duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-[32px] lg:p-10 pb-10 md:pb-[64px] lg:pb-[80px] bg-white rounded-[20px] lg:w-full">
          <div className="flex items-center gap-[8px] mb-5 md:mb-[32px] lg:mb-10">
            <NavLink to="description" className="product-link">
              Description
            </NavLink>
            <NavLink to="reviews" className="product-link">
              Reviews
            </NavLink>
          </div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
