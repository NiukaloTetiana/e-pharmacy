import { useState } from "react";
import { MedicineList, Sort } from "../components";

const Medicine = () => {
  const [sortLabel, setSortLabel] = useState<string>("Product category");

  const handleSortChange = (value: string) => {
    setSortLabel(value);
  };

  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] mb-[80px] md:mb-[120px]">
      <h2 className="title">Medicine</h2>
      <Sort sortLabel={sortLabel} onSortChange={handleSortChange} />
      <MedicineList />
    </div>
  );
};

export default Medicine;
