import { useState } from "react";
import { Filter, Icon, MedicineList, Sort } from "../components";

const MedicinePage = () => {
  const [sortLabel, setSortLabel] = useState<string>("Product category");
  const [filter, setFilter] = useState<string>("");

  const handleSortChange = (value: string) => {
    setSortLabel(value);
  };

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  console.log(filter);
  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[80px] md:pb-[120px]">
      <h2 className="title">Medicine</h2>
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[8px] mb-[12px] md:mb-[32px] lg:mb-[40px]">
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[14px]">
          <Sort sortLabel={sortLabel} onSortChange={handleSortChange} />
          <Filter onChange={handleChangeFilter} />
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-[8px] w-[116px] px-[30px] py-[13px] rounded-[60px] bg-[#59b17a] hover:bg-[#3f945f] focus:bg-[#3f945f] font-medium text-[14px] text-white leading-[1.29] hover:shadow-lg focus:shadow-lg transition duration-300"
        >
          <Icon id="reset" size={14} className="fill-white stroke-none" />
          Reset
        </button>
      </div>

      <MedicineList />
    </div>
  );
};

export default MedicinePage;
