import React from "react";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TablePagination = (props: any) => {
  const {
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    currentPage = 0,
    pageLength = 1,
    showPageCounter = true,
  } = props;

  return (
    <div className="flex flex-row items-center justify-between px-4 py-4">
      <Button
        onClick={() => previousPage()}
        component="label"
        variant="outlined"
        className="[&.MuiButtonBase-root]:h-[40px]"
        disabled={!canPreviousPage}
        startIcon={<BsArrowLeft />}
      >
        <span className="text-sm">Previous</span>
      </Button>

      <Pagination
        count={pageOptions?.length}
        page={pageIndex + 1}
        // onChange={onPageChange}
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
        onClick={() => nextPage()}
        component="label"
        variant="outlined"
        className="[&.MuiButtonBase-root]:h-[40px]"
        disabled={!canNextPage}
        endIcon={<BsArrowRight />}
      >
        <span className="text-sm">Next</span>
      </Button>
    </div>
  );
};

export default TablePagination;
