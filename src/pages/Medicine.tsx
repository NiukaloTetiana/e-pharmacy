import { useState } from "react";
import { Filter, MedicineList, Sort } from "../components";

const Medicine = () => {
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
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] mb-[80px] md:mb-[120px]">
      <h2 className="title">Medicine</h2>
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[14px] mb-[12px] md:mb-[32px] lg:mb-[40px]">
        <Sort sortLabel={sortLabel} onSortChange={handleSortChange} />
        <Filter onChange={handleChangeFilter} />
      </div>

      <MedicineList />
    </div>
  );
};

export default Medicine;
