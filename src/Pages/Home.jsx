import React, { useContext, useEffect } from "react";
import ComingSoon from "../components/comingsoon/ComingSoon";
import Earnings from "../components/comingsoon/Earnings";
import DepositCard from "../components/DepositCard";
import { web3Context } from "../context/web3Context";

export default function Home() {
  const {
    getMinInvest,
    getMaxInvest,
    getProjectFee,
    getPercentStep,
    getWithdrawFee,
    getPercentsDivider,
  } = useContext(web3Context);

  useEffect(() => {
    (async () => {
      const minInvest = await getMinInvest();
      const maxInvest = await getMaxInvest();
      const projectFee = await getProjectFee();
      const percentStep = await getPercentStep();
      const withdrawFee = await getWithdrawFee();
      const percentsDivider = await getPercentsDivider();

      console.log(
        "minInvest",
        minInvest,
        "maxInvest",
        maxInvest,
        "projectFee",
        projectFee,
        "percentStep",
        percentStep,
        "withdrawFee",
        withdrawFee,
        "percentsDivider",
        percentsDivider
      );
    })();

    return () => {};
  }, []);

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
