import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

type I_TableLayout = {
  getTableProps: any;
  headerGroups: any;
  getTableBodyProps: any;
  retrieveData: Record<string, any>[];
  page: any;
  prepareRow: any;
};

const TableLayout = (props: I_TableLayout) => {
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    retrieveData,
    page,
    prepareRow,
  } = props;
    
  return (
    <table className="w-full table-auto" {...getTableProps()}>
      <thead className="bg-gray-50 bg-transparent">
        {headerGroups.map((headerGroup: any, index: any) => (
          <tr
            key={index}
            {...headerGroup.getHeaderGroupProps()}
            className="text-black-200 text-xs font-medium border-b-[1px] border-b-gray-600"
          >
            {headerGroup.headers.map((column: any, index: any) => (
              <th
                className="px-6 py-3 text-left"
                key={index}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <div className="flex flex-row">
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BsArrowUpShort />
                      ) : (
                        <BsArrowDownShort />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-sm">
        {retrieveData &&
          retrieveData?.length > 0 &&
          page?.map((row: any, index: any) => {
            prepareRow(row);
            return (
              <tr
                key={index}
                {...row.getRowProps()}
                className="border-b-[1px] border-b-gray-600"
              >
                {row.cells.map((cell: any, index: any) => {
                  return (
                    <td
                      className="whitespace-nowrap px-6 py-4"
                      key={index}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableLayout;
