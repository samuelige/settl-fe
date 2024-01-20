import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';
import { emptyState } from "@/_shared/assets/images";

const EmptyUserState: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid place-content-center py-11">
      <Image src={emptyState} alt="emptyState" className="mx-auto" />

      <div className="flex flex-col text-center mt-5">
        <h5 className="text-black-20 text-lg font-semibold">
          No user added at the moment
        </h5>
        <p className="text-gray-400 text-sm mt-2">Please create a user</p>

        <div className="flex flex-col items-center mt-4">
          <Button
            className="text-primary-25 text-sm"
            variant="outlined"
            onClick={() => null}
          >
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyUserState;
