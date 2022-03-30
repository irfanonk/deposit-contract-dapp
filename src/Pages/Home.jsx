import React from "react";
import ComingSoon from "../components/comingsoon/ComingSoon";
import DepositCard from "../components/DepositCard";

export default function Home() {
  return (
    <div className="container  mx-auto md:px-12  ">
      <div className="h-[100vh]">
        <ComingSoon />
      </div>
      <div className="text-4xl">Packages</div>
      <div className="flex flex-wrap justify-between items-center  ">
        {Array.from("deposittt").map((elm, i) => {
          return (
            <div key={i} className="m-5">
              <DepositCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
