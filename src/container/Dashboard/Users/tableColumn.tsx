import { Column } from "react-table";
import React from "react";

const AllUsersTableHeader = (
  action: (item: any) => void
): readonly Column<any>[] => [
  {
    Header: "Name",
    accessor: 'name',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Acct Number",
    accessor: 'acct_number',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "User Type",
    accessor: 'user_type',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "No of Transactions",
    accessor: 'number_of_transactions',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return 0;
    },
  },
  {
    Header: "Discount",
    accessor: 'discount',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },
  {
    Header: "Created Date",
    accessor: 'createAt',
    Cell: ({ value }: Record<string, string>) => {
      if (value) {
        return (
          <p className="text-black-200 font-normal">
            {value}
          </p>
        );
      }
      return "N/A";
    },
  },

  {
    id: "action",
    accessor: (item: any) => {
      return <>{action(item)}</>;
    },
  },
];

export default AllUsersTableHeader;