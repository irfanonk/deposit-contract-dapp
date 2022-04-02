import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  loanAbi,
  loanContractAddress,
  tokenAbi,
  tokenContractAddress,
  ScorpMaticAbi,
  ScorpMaticAddress,
} from "../utils/constants";
import { formatUntis, fromBNtoEth, parseUnits } from "../utils/etherUtils";

export const web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [contractLiquidity, setContractLiquidity] = useState();
  const [isSupportMetaMask, setIsSupportMetaMask] = useState(false);
  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else {
    provider = undefined;
  }

  const contract = new ethers.Contract(
    ScorpMaticAddress,
    ScorpMaticAbi,
    provider
  );

  const requestAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };
  const getAccBalance = async () => {
    if (provider) {
      if (account) {
        let balance = await provider.getBalance(account);
        return ethers.utils.formatEther(balance.toString()).toFixed(2);
      }
    }
  };

  const createScorpContract = (providerOrSigner) => {
    let contract = new ethers.Contract(
      ScorpMaticAddress,
      ScorpMaticAbi,
      providerOrSigner
    );
    return contract;
  };
  const getContractBalance = async () => {
    let contractBalance = await contract.getContractBalance();
    return fromBNtoEth(contractBalance);
  };

  const getMinInvest = async () => {
    const minInvest = await contract.INVEST_MIN_AMOUNT();
    return fromBNtoEth(minInvest);
  };
  const getMaxInvest = async () => {
    const maxInvest = await contract.INVEST_MAX_AMOUNT();
    return fromBNtoEth(maxInvest);
  };
  const getRefarralPercent = async () => {
    const refarralPercent = await contract.REFERRAL_PERCENT(0);
    return fromBNtoEth(refarralPercent);
  };

  const getProjectFee = async () => {
    const projectFee = await contract.PROJECT_FEE();
    return {
      eth: fromBNtoEth(projectFee),
      wei: formatUntis(projectFee, "wei"),
    };
  };
  const getPercentStep = async () => {
    const percentStep = await contract.PERCENT_STEP();
    return fromBNtoEth(percentStep);
  };
  const getWithdrawFee = async () => {
    const withdrawFee = await contract.WITHDRAW_FEE();
    return {
      eth: fromBNtoEth(withdrawFee),
      wei: formatUntis(withdrawFee, "wei"),
    };
  };
  const getPercentsDivider = async () => {
    const percentsDivider = await contract.PERCENTS_DIVIDER();
    return fromBNtoEth(percentsDivider);
  };
  const loadWeb3 = async () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      setIsSupportMetaMask(true);
    } else {
      setIsSupportMetaMask(false);
    }
  };
  const handleStartUp = async () => {
    if (typeof window.ethereum != undefined) {
      const acc = await provider.listAccounts();
      if (acc) {
        setAccount(acc[0]);
      }
      setContractTotalLiquidity();
      setNetworkId(window.ethereum.networkVersion);
      window.ethereum.on("chainChanged", function (networkId) {
        // Time to reload your interface with the new networkId
        window.location.reload();
        // setNetworkId(networkId);
      });
      window.ethereum.on("accountsChanged", async function (acc) {
        if (acc) {
          // changed account
          setAccount(acc[0]);
        } else {
          // disconnect
          setAccount([]);
        }
      });
    }
  };

  // !!! old contract
  const getLoanContract = (providerOrSigner) => {
    const loanContract = new ethers.Contract(
      loanContractAddress,
      loanAbi,
      providerOrSigner
    );
    return loanContract;
  };
  const getTokenContract = (providerOrSigner) => {
    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      tokenAbi,
      providerOrSigner
    );
    return tokenContract;
  };

  const getUserOngoingLend = async () => {
    let arr = [];
    if (provider) {
      const contract = getLoanContract(provider.getSigner());
      if (account) {
        const lends = await contract.getUserNotRetrieveLend();

        lends.forEach((item) => {
          if (item.lender != "0x0000000000000000000000000000000000000000") {
            arr.push(item);
          }
        });
      }
      return arr;
    }
  };
  const getUserOngoingLoan = async () => {
    if (provider) {
      const contract = getLoanContract(provider.getSigner());
      if (account) {
        const loans = await contract.getUserOngoingLoans();
        return loans;
      }
    }
  };
  const setContractTotalLiquidity = async () => {
    if (provider) {
      const contract = getLoanContract(provider);
      const res = await contract.totalLiquidity();
      setContractLiquidity(ethers.utils.formatEther(res.toString()).toFixed(3));
    }
  };
  // !!! old contract
  useEffect(async () => {
    await loadWeb3();
    await handleStartUp();
    await getAccBalance();
    await getUserOngoingLoan();
    await getUserOngoingLend();
  }, [account]);
  return (
    <web3Context.Provider
      value={{
        requestAccount,
        account,
        provider,
        getLoanContract,
        networkId,
        getTokenContract,
        getAccBalance,
        getUserOngoingLend,
        getUserOngoingLoan,
        contractLiquidity,
        setContractTotalLiquidity,
        isSupportMetaMask,

        getContractBalance,
        getMinInvest,
        getMaxInvest,

        getProjectFee,
        getPercentStep,
        getWithdrawFee,
        getPercentsDivider,
      }}
    >
      {children}
    </web3Context.Provider>
  );
};
