import React, { useContext } from "react";
import { web3Context } from "../context/web3Context";

export default function DepositCard({ isProceeding }) {
  const { account, requestAccount, getLoanContract, provider } =
    useContext(web3Context);
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Package 1
        </h5>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Check
              </label>
            </div>
          </div>
        </div>
        {!account ? (
          <div
            onClick={() => requestAccount()}
            className="mt-3 bg-[#153d6f70] px-2 py-2 md:py-3 rounded-2xl text-center text-[#5090ea] cursor-pointer hover:bg-[#1f5ba370] transition text-xl"
          >
            Connect Wallet
          </div>
        ) : !isProceeding ? (
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Deposit
          </button>
        ) : (
          <div className="my-10 w-20 h-20 animate-spin rounded-full border-blue-700 border-b-2 mx-auto"></div>
        )}
      </form>
    </div>
  );
}
