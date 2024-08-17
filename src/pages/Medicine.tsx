import { MedicineList } from "../components/MedicineList/MedicineList";

const Medicine = () => {
  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] mb-[80px] md:mb-[120px]">
      <h2 className="title">Medicine</h2>
      <MedicineList />
    </div>
  );
};

export default Medicine;
