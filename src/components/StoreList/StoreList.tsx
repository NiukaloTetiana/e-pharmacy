import { StoreItem } from "./StoreItem";

export const StoreList = () => {
  const stores = [
    {
      name: "Bright Health Pharmacy",
      address: "Vozdvyzhenka St, 8",
      city: "Kyiv",
      phone: "045-403-6079",
      rating: 1,
      openTime: "18:00",
      closeTime: "6:00",
    },
    {
      name: "Green Cross Pharmacy",
      address: "Reitarska St, 8",
      city: "Kyiv",
      phone: "048-623-5168",
      rating: 1,
      openTime: "7:00",
      closeTime: "17:00",
    },
    {
      name: "MediServe Pharmacy",
      address: "Velyka Vasylkivska St, 34",
      city: "Kyiv",
      phone: "050-381-2329",
      rating: 5,
      openTime: "18:00",
      closeTime: "6:00",
    },
    {
      name: "Green Cross Pharmacy",
      address: "Reitarska St, 2",
      city: "Kyiv",
      phone: "067-278-1856",
      rating: 1,
      openTime: "7:00",
      closeTime: "17:00",
    },
    {
      name: "Bright Health Pharmacy",
      address: "Vozdvyzhenka St, 19",
      city: "Kyiv",
      phone: "048-947-8907",
      rating: 4,
      openTime: "18:00",
      closeTime: "6:00",
    },
    {
      name: "Healthline Chemists",
      address: "Mezhyhirska St, 13",
      city: "Kyiv",
      phone: "044-284-5317",
      rating: 4,
      openTime: "7:00",
      closeTime: "17:00",
    },
  ];

  return (
    <section className="pb-[80px] md:pb-[120px]">
      <div className="container lg:px-[96px]">
        <h2 className="w-[291px] md:w-full mx-auto font-semibold text-[28px] md:text-[36px] leading-[1.14] md:leading-[1.2] text-[#1d1e21] text-center mb-[14px]">
          Your Nearest Medicine Store
        </h2>
        <p className="font-normal text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.25] text-[#93939a] text-center mb-10 md:mb-[64px]">
          Search for Medicine, Filter by your location
        </p>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-y-[32px] md:gap-x-[16px] lg:gap-y-[38px] lg:gap-x-[36px]">
          {stores.map((store, index) => (
            <StoreItem key={index} {...store} />
          ))}
        </ul>
      </div>
    </section>
  );
};
