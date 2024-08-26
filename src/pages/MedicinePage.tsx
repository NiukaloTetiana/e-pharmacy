import { useEffect, useState } from "react";
import { Filter, Icon, MedicineList, Pagination, Sort } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getProducts, selectPage, selectProducts, setPage } from "../redux";

export const LIMIT = 12;

const MedicinePage = () => {
  const products = useAppSelector(selectProducts);
  const page = useAppSelector(selectPage);
  const pageNumber = page - 1;
  const dispatch = useAppDispatch();
  const [sortLabel, setSortLabel] = useState<string>("Product category");
  const [filter, setFilter] = useState<string>("");
  const category =
    sortLabel === "Product category" || sortLabel === "Show all"
      ? ""
      : sortLabel;

  useEffect(() => {
    const params = { page, limit: LIMIT, name: filter, category };
    dispatch(getProducts(params));
  }, [category, dispatch, filter, page]);

  const handleSortChange = (value: string) => {
    setSortLabel(value);
    dispatch(setPage(1));
  };

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    dispatch(setPage(1));
  };

  const handleResetClick = () => {
    setSortLabel("Product category");
    setFilter("");
    dispatch(setPage(1));
  };

  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[80px] md:pb-[120px]">
      <h2 className="title">Medicine</h2>
      {products.length > 0 ? (
        <>
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[8px] mb-[12px] md:mb-[32px] lg:mb-[40px]">
            <div className="flex flex-col md:flex-row gap-[12px] md:gap-[14px]">
              <Sort sortLabel={sortLabel} onSortChange={handleSortChange} />
              <Filter onChange={handleChangeFilter} filter={filter} />
            </div>

            <button
              onClick={handleResetClick}
              type="button"
              className="flex items-center justify-center gap-[8px] w-[116px] px-[30px] py-[13px] rounded-[60px] bg-[#59b17a] hover:bg-[#3f945f] focus:bg-[#3f945f] font-medium text-[14px] text-white leading-[1.29] hover:shadow-lg focus:shadow-lg transition duration-300"
            >
              <Icon id="reset" size={14} className="fill-white stroke-none" />
              Reset
            </button>
          </div>

          <MedicineList />
          <Pagination page={pageNumber} />
        </>
      ) : (
        <h3 className="font-semibold text-center text-[24px] md:text-[26px] leading-[1.14] text-[#59b17a]">
          Nothing was found for your request.
        </h3>
      )}
    </div>
  );
};

export default MedicinePage;
