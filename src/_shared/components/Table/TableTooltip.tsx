import React, { ReactNode } from "react";
import { Tooltip } from "@mui/material";

import helpIcon from "@/_shared/assets/images/icons/help-icon.svg?url";
import helpIconGray from "@/_shared/assets/images/icons/help-icon-gray.svg?url";
import Image from "next/image";

type ITooltip = {
  children?: ReactNode;
  style?: string;
  title?: string;
  iconColor?: string;
};

const TableTooltip = (props: ITooltip) => {
  const { children, style, title, iconColor } = props;
  return (
    <Tooltip
      title={children ? <div className="bg-white full">{children}</div> : ""}
      arrow
      placement="top"
      classes={{
        arrow: "before:bg-white before:border-[1px] before:border-[#E6E8ED]",
        tooltip: "bg-white border-[1px] border-[#E6E8ED] rounded-lg w-80",
      }}
    >
      <span className={`flex flex-row space-x-3 ${style && style}`}>
        {title || "Missing"}
        {iconColor !== "gray" ? (
          <Image
            src={helpIcon}
            width={16}
            height={16}
            alt="help-icon"
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={helpIconGray}
            width={16}
            height={16}
            alt="help-icon"
            className="ml-[0.38rem] cursor-pointer"
          />
        )}
      </span>
    </Tooltip>
  );
};

export default TableTooltip;
