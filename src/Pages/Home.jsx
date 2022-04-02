import React from "react";
import ComingSoon from "../components/comingsoon/ComingSoon";
import Earnings from "../components/comingsoon/Earnings";
import DepositCard from "../components/DepositCard";

export default function Home() {
  return (
    <div className="container mx-auto md:px-12  ">
      <div className="flex flex-col space-y-16">
        <div className="">
          <ComingSoon />
        </div>
        <div className="flex flex-col">
          <div className="text-soft-yellow font-bold sm:text-4xl">Packages</div>
          <div className="flex flex-wrap justify-center sm:justify-between items-center  ">
            {Array.from("deposittt").map((elm, i) => {
              return (
                <div key={i} className="m-5">
                  <DepositCard index={i} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Earnings />
        </div>
      </div>
    </div>
  );
}
