import { Icon } from "..";

interface IReviewProductItem {
  name: string;
  photo: string;
  rating: number;
  data: string;
  review: string;
}

export const ReviewProductItem: React.FC<IReviewProductItem> = ({
  name,
  photo,
  rating,
  data,
  review,
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        id="star"
        size={16}
        className={index < rating ? "fill-[#FFC531]" : "fill-[#f1f1f1]"}
      />
    ));
  };

  return (
    <li className="py-[14px] px-[28px] sm-max:px-[20px] rounded-[20px] border border-[#f1f1f1]">
      <div className="flex gap-5 sm-max:gap-[10px] mb-[14px]">
        <img
          src={photo}
          width="44"
          height="44"
          className="w-[44px] h-[44px] sm-max:w-[40px] sm-max:h-[40px] bg-[#f7f7f7] rounded-[50%]"
          alt={name}
          loading="lazy"
        />
        <div className="w-full">
          <div className="flex justify-between mb-[4px]">
            <h4 className="font-semibold text-[16px] sm-max:text-[14px] md:text-[18px] leading-[1.4] text-[#1d1e21]">
              {name}
            </h4>
            <div className="flex">
              <div className="hidden md:flex items-center gap-[6px]">
                <div className="flex gap-[2px]">{renderStars()}</div>
                <p className="font-medium text-[14px] sm-max:text-[12px] text-[#1d1e21]">
                  {rating}
                </p>
              </div>
              <div className="flex items-center gap-[6px] md:hidden">
                <Icon id="star" size={16} className="fill-[#FFC531]" />
                <p className="font-medium text-[14px] text-[#1d1e21]">
                  {rating}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[12px] text-[#1d1e2199] leading-[1.5]">{data}</p>
        </div>
      </div>

      <p className="text-[14px] md:text-[16px] sm-max:text-[14px] text-[#6a6a6f] leading-[1.29] md:leading-[1.5]">
        {review}
      </p>
    </li>
  );
};
