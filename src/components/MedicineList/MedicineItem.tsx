import { Link } from "react-router-dom";
import { AuthModal, Modal } from "../../components";
import { useModal } from "../../hooks";

interface IMedicineItem {
  id: string;
  photo: string;
  name: string;
  suppliers: string;
  price: string;
}
export const MedicineItem: React.FC<IMedicineItem> = ({
  id,
  photo,
  name,
  suppliers,
  price,
}) => {
  const [isOpenModal, toggleModal] = useModal();
  return (
    <li>
      <img
        src={photo}
        className="flex items-center justify-center w-full h-[300px] md:w-[226px] md:h-[260px] lg:w-[280px] lg:h-[280px] bg-[#f7f7f7] rounded-[20px] border-[1.15px] border-[#59b17a99] mb-[8px]"
        height="300"
        width="335"
        alt={name}
        loading="lazy"
      />
      <div className="p-5 bg-white rounded-[20px]">
        <div className="flex items-center justify-between mb-[4px]">
          <h5 className="font-semibold text-[16px] lg:text-[18px] leading-[1.4] text-[#1d1e21]">
            {name}
          </h5>
          <h5 className="font-semibold text-[16px] lg:text-[18px] leading-[1.4] text-[#1d1e21]">
            ৳{price}
          </h5>
        </div>
        <p className="font-normal text-[12px] leading-[1.5] text-[#1d1e2199] mb-[17px] md:mb-[14px]">
          {suppliers}
        </p>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              toggleModal();
            }}
            className="w-[108px] font-medium text-[14px] text-white leading-[1] text-center px-[16px] py-[10px] rounded-[24px] bg-[#59b17a] hover:bg-[#3f945f] focus:bg-[#3f945f] hover:shadow-lg focus:shadow-lg transition duration-300"
          >
            Add to cart
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
          <Link
            to={`/product/${id}/description`}
            className="decoration-skip-none font-normal text-[12px] leading-[1.5] text-[#1d1e21] underline hover:scale-125 focus:scale-125 hover:text-[#59b17a] focus:text-[#59b17a] transition-transform duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};
