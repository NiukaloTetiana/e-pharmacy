import { useState } from "react";
import ReactPaginate from "react-paginate";

import { Icon } from "../../components";

export const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const pages = [1, 2, 3, 4, 5, 6];

  const handlePageClick = (event: { selected: number }) => {
    setPageNumber(event.selected);
  };

  const handleFirstPage = () => {
    setPageNumber(0);
  };

  const handleLastPage = () => {
    setPageNumber(pages.length - 1);
  };

  return (
    <div className="flex gap-[17px] items-center justify-center">
      <button
        className="page-link"
        onClick={handleFirstPage}
        disabled={pageNumber === 0}
      >
        <Icon
          id="double-arrow"
          size={26}
          className="sm-max:size-[22px] rotate-180 stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
        />
      </button>

      <ReactPaginate
        pageCount={pages.length}
        pageRangeDisplayed={1}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        forcePage={pageNumber}
        containerClassName={"pagination flex gap-[4px]"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeLinkClassName={"active-pg"}
        previousLabel={
          <button className="page-link" disabled={pageNumber === 0}>
            <Icon
              id="chevron-right"
              size={20}
              className="sm-max:size-[18px] rotate-180 stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
            />
          </button>
        }
        nextLabel={
          <button
            className="page-link"
            disabled={pageNumber === pages.length - 1}
          >
            <Icon
              id="chevron-right"
              size={20}
              className="sm-max:size-[18px] stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
            />
          </button>
        }
        breakLabel={"..."}
      />

      <button
        className="page-link"
        onClick={handleLastPage}
        disabled={pageNumber === pages.length - 1}
      >
        <Icon
          id="double-arrow"
          size={26}
          className="sm-max:size-[22px] stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
        />
      </button>
    </div>
  );
};
