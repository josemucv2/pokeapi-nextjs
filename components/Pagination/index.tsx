import React from "react";

type PaginationPropsType = {
  totalPages: number;
  currentPage: number;
  onPageChange: (e: number) => void;
  nextPage: () => void;
  backPage: () => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  nextPage,
  backPage,
}: PaginationPropsType) => {
  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <input
          key={i}
          className={`join-item btn btn-square ${
            currentPage === i ? "checked" : ""
          }`}
          type="radio"
          name="options"
          aria-label={i.toString()}
          checked={currentPage === i}
          onChange={() => onPageChange(i)}
        />
      );
    }

    return buttons;
  };

  return (
    <div className="flex sapce-x-10">
      <button className="join-item btn  w-16" onClick={backPage}>
        {"<"}
      </button>
      <div className="join">{renderPageButtons()}</div>
      <button className="join-item btn w-16" onClick={nextPage}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
