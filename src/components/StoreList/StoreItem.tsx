import { Icon } from "..";

interface IStoreItem {
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  openTime?: string;
  closeTime?: string;
}

export const StoreItem: React.FC<IStoreItem> = ({
  name,
  address,
  city,
  phone,
  rating,
}) => {
  return (
    <li className="relative overflow-hidden flex flex-col gap-[32px] md:gap-5 p-[32px] md:p-10 w-[335px] h-[202px] sm-max:w-[280px] md:w-[344px] md:h-[232px] lg:w-[392px] rounded-[27px] border-[1.15px] border-[#f1f1f1] bg-[#e7f1ed] transition-transform transform hover:shadow-lg focus:shadow-lg hover:scale-105 focus:scale-105">
      <div className="flex justify-between">
        <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] truncate max-w-[123px]">
          {name}
        </h4>
        <div className="flex items-center gap-[14px]">
          <div className="flex items-center gap-[6px]">
            <Icon id="star" size={16} className="fill-[#ffc531]" />
            <p className="font-medium text-[14px] text-[#1d1e21]">{rating}</p>
          </div>
          <div className="px-[16px] py-[8px] rounded-[8px] bg-[#59b17a19] font-semibold text-[12px] leading-[1.5] tracking-[-0.02em] uppercase text-center text-[#59b17a]">
            Open
          </div>
        </div>
      </div>
      <address>
        <ul>
          <li className="flex gap-[8px] mb-[18px] md:mb-[14px] text-[14px] md:text-[16px] not-italic leading-[1.29] md:leading-[1.25] text-[#93939A]">
            <Icon
              id="map-pin"
              className="fill-none stroke-[#59b17a]"
              size={18}
            />
            <div>
              <p className="mb-[4px]">{address}</p>
              <p>{city}</p>
            </div>
          </li>
          <li className="flex gap-[8px] text-[14px] md:text-[16px] not-italic leading-[1.29] md:leading-[1.25] text-[#93939A]">
            <Icon id="phone" className="fill-none stroke-[#59b17a]" size={18} />
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        </ul>
      </address>
      <Icon
        id="bgr-store"
        className="absolute size-[140px] md:size-[160px] lg:size-[165px] bottom-[-15px] md:bottom-[-10px] lg:bottom-[-15px] right-[-15px] md:right-[-45px] lg:right-[-5px] stroke-none fill-[#59b17a14]"
      />
    </li>
  );
};
