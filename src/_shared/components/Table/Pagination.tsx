import React from "react";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = (props) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(event, page);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-4 py-4">
      <Button
        onClick={(e) => handlePageChange(e, currentPage - 1)}
        component="label"
        variant="outlined"
        className="[&.MuiButtonBase-root]:h-[40px]"
        disabled={currentPage === 1}
        startIcon={<BsArrowLeft />}
      >
        <span className="text-sm">Previous</span>
      </Button>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        shape="rounded"
        hidePrevButton
        hideNextButton
        className="HELLO [&.MuiButtonBase-root]"
        sx={{
          "& .MuiButtonBase-root": {
            fontSize: "14px !important",
            height: "2rem !important",
          },
        }}
      />

      <Button
        onClick={(e) => handlePageChange(e, currentPage + 1)}
        component="label"
        variant="outlined"
        className="[&.MuiButtonBase-root]:h-[40px]"
        disabled={currentPage === totalPages}
        endIcon={<BsArrowRight />}
      >
        <span className="text-sm">Next</span>
      </Button>
    </div>
  );
};

export default CustomPagination;
