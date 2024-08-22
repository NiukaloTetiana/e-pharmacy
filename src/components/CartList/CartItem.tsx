import { Icon } from "../Icon/Icon";

interface ICartItemProps {
  photo: string;
  name: string;
  price: string;
  description: {
    text: string;
    antioxidantProperties: string;
    antiDiabeticEffects: string;
    antiCancerProperties: string;
    immuneSupport: string;
    digestiveAid: string;
  };
}

export const CartItem: React.FC<ICartItemProps> = ({
  photo,
  name,
  price,
  description,
}) => {
  return (
    <li className="lg:w-[460px] py-5 flex gap-[12px] sm-max:items-center md:gap-5 border-b border-[#1d1e2119] last:border-0">
      <img
        src={photo}
        alt={name}
        className="w-[120px] h-[120px] sm-max:h-[130px] md:w-[122px] md:h-[133px] rounded-[27px] border-[1.15px] border-[#f1f1f1]"
      />
      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-[10px] md:gap-0 md:flex-row md:justify-between">
          <div>
            <h4 className="font-semibold text-[16px] md:text-[18px] leading-[1.4] text-[#1d1e21] mb-[8px]">
              {name}
            </h4>
            <p className="text-[12px] leading-[1.17] md:leading-[1.29] text-[#6a6a6f]">
              {description.immuneSupport}
            </p>
          </div>

          <p className="font-medium text-[12px] md:text-[14px] leading-[1.17] md:leading-[1.29] text-[#1d1e21]">
            ৳&nbsp;{price}
          </p>
        </div>
        <div className="flex sm-max:flex-col sm-max:gap-1 gap-0 sm-max:items-start items-center justify-between sm-max:mt-[5px] mt-auto">
          <button
            type="button"
            className="flex items-center justify-center gap-[12px] w-[95px] h-[32px] font-normal text-[14px] text-[#1d1e21] leading-[1.43] px-[14px] py-[6px] rounded-[60px] border border-[#1d1e2119] bg-transparent hover:border-[#59b17a] focus:border-[#59b17a] hover:shadow-lg focus:shadow-lg transition duration-300"
          >
            <Icon
              id="plus"
              size={18}
              className="fill-none stroke-[#59b17a] hover:text-[#59b17a] focus:text-[#59b17a]"
            />
            1
            <Icon
              id="minus"
              size={18}
              className="fill-none stroke-[#59b17a] hover:text-[#59b17a] focus:text-[#59b17a]"
            />
          </button>
          <button
            type="button"
            className="w-[89px] sm-max:w-[95px] h-[32px] font-medium text-[14px] text-[#e85050] leading-[1] tracking-[-0.05em] text-center px-[12px] py-[8px] rounded-[40px] bg-[#e8505019] hover:shadow-lg focus:shadow-lg transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
