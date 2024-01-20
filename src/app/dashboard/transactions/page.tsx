import Transactions from "@/container/Dashboard/Transactions";
import { NextPage } from "next";
import { Suspense } from "react";
import Loading from "../loading";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page: NextPage = () => {
  return (
      <div className="w-full">
          <Suspense fallback={<Loading />}>
            <Transactions/>;
          </Suspense>
      </div>
  )
}

export default page;

