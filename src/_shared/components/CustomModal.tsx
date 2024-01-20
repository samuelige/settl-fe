"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface I_CustomFullModal {
  open?: boolean;
  noHeaderBorder?: boolean;
  children?: React.ReactNode;
  setClose?: any;
  header?: boolean;
  hasHeaderText?: boolean;
  hasBorderBottom?: boolean;
  title?: string;
  overFlowShouldNotCloseModal?: boolean;
  image?: string;
  description?: string;
}

const CustomModal = ({
  open,
  children,
  setClose,
  header,
  title,
  noHeaderBorder,
  overFlowShouldNotCloseModal = false,
  image,
  description,
  hasHeaderText,
  hasBorderBottom,
}: I_CustomFullModal) => {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed h-screen w-full inset-0 bg-customGray backdrop-blur z-[5001]"
        onClick={() =>
          overFlowShouldNotCloseModal
            ? null
            : setClose((prev: boolean) => !prev)
        }
      />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[5001] bg-white shadow-xlg rounded-[0.75rem]">
        {header && (
          <div className={`${hasBorderBottom && "border-b-[1px] border-b-gray-200 pb-4"} flex flex-row items-start justify-between px-4 pt-4 sm:px-6 sm:pt-6`}>
            <div className="flex flex-row items-start">
              <Image
                src={image || ""}
                alt="mode-header_icon"
                width={48}
                height={48}
              />
              {
                hasHeaderText && (
                  <div className="flex flex-col ml-4">
                    <span className="text-xl text-gray-400 font-semibold">{title}</span>
                    <span className="text-sm text-gray-200 font-normal mt-2">{description}</span>
                  </div>
                )
              }
            </div>
            
            <AiOutlineClose
              className="text-2xl text-gray-500 cursor-pointer"
              onClick={() => setClose((prev: boolean) => !prev)}
            />
          </div>
        )}

        <main className="w-full">{children}</main>
      </div>
    </>
  );
};

export default CustomModal;
