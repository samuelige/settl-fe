"use client";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime/runtime";
import Image from "next/image";
import { search } from "@/_shared/assets/icons";

type I_Search = {
  filter: any;
  setFilter: any;
  placeholder: string;
  mdHeight?: boolean;
};

const TableSearch = ({
  filter,
  setFilter,
  placeholder,
  mdHeight,
}: I_Search) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <div className="flex flex-row w-full h-[3rem] items-center bg-white rounded-lg border-[1px] border-gray-200">
      <Image
        src={search}
        alt="search_icon"
        className="object-fill w-5 h-5 ml-3.5"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="mx-2 outline-none w-full bg-transparent text-base font-normal leading-6 text-customGreen-200"
        name={"search"}
        value={value || ""}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TableSearch;
