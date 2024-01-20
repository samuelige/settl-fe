import { Column } from "react-table";
import React from "react";

const AllTransactionsTableHeader = (
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
    Header: "Source acct",
    accessor: 'source_acct',
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
    Header: "Amount",
    accessor: 'amount',
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
    Header: "Transaction type",
    accessor: 'transaction_type',
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
    Header: "Discounted amount",
    accessor: 'discounted_amount',
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
    Header: "destination",
    accessor: (item: any) => {
      if (item.destination) {
        return (
          <div className="text-black-200 font-normal">
            <p>{item.destination}</p>
          </div>
        );
      }
      if (item.network_provider && item.phone_number) {
        return (
          <div className="text-black-200 font-normal">
            <p>{item.network_provider}</p>
            <p>{item.phone_number}</p>
          </div>
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

export default AllTransactionsTableHeader;