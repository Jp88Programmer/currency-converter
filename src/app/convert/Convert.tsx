"use client";
import React, { useEffect, useState } from "react";
import "./convert.css";
import Select from "./SelectCurr";
import { getLatestCurrencyData } from "../libs/getCurrInfo";
import Image from "next/image";
import Usd from "../../../public/doller.png";
import Usdc from "../../../public/usdc.png";
import Rupee from "../../../public/rupee.png";
import Euro from "../../../public/euro.jpg";

const Convert = () => {
  const [fromPrice, setFromPrice] = useState("0");
  const [toPrice, setToPrice] = useState("0");
  const [fromCurrCode, setFromCurrCode] = useState("");
  const [toCurrCode, setToCurrCode] = useState("");

  const onChangeFromCurrCode = (e: any) => {
    if (e.value == fromCurrCode || e.value == toCurrCode) return;
    setFromCurrCode(e.value);
  };

  const onChangeToCurrCode = (e: any) => {
    if (e.value == fromCurrCode || e.value == toCurrCode) return;
    setToCurrCode(e.value);
  };

  useEffect(() => {
    const interval = setTimeout(async () => {
      if (
        parseFloat(fromPrice) > 0 &&
        fromCurrCode?.length > 0 &&
        toCurrCode?.length > 0
      ) {
        const data = await getLatestCurrencyData({
          fromCurrencyCode: fromCurrCode,
          toCurrencyCode: [fromCurrCode, toCurrCode].join(","),
        });
        const fromPriceUsd =
          parseFloat(fromPrice) / parseFloat(data[fromCurrCode]?.value);
        const toPriceValue = parseFloat(data[toCurrCode]?.value) * fromPriceUsd;
        setToPrice(toPriceValue?.toString());
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [fromPrice, toCurrCode, fromCurrCode]);

  useEffect(() => {
    const interval = setTimeout(async () => {
      if (
        parseFloat(toPrice) > 0 &&
        fromCurrCode?.length > 0 &&
        toCurrCode?.length > 0
      ) {
        const data = await getLatestCurrencyData({
          fromCurrencyCode: fromCurrCode,
          toCurrencyCode: [fromCurrCode, toCurrCode].join(","),
        });
        const toPriceUsd =
          parseFloat(toPrice) / parseFloat(data[toCurrCode]?.value);
        const fromPriceValue =
          parseFloat(data[fromCurrCode]?.value) * toPriceUsd;
        setFromPrice(fromPriceValue?.toString());
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toPrice, toCurrCode, fromCurrCode]);

  return (
    <div className="main-layout-container">
      <Image src={Usd} alt="usd" className="curr-icon usd-icon" />
      <Image src={Usdc} alt="usdc" className="curr-icon usdc-icon" />
      <Image src={Rupee} alt="rupee" className="curr-icon rupee-icon" />
      <Image src={Euro} alt="rupee" className="curr-icon euro-icon" />
      <h1 className="main-heading">Currency Conventer</h1>
      <div className="convert-main-container">
        <div className="convert-from-price">
          <input
            className="convert-from-input"
            type="number"
            value={fromPrice}
            onChange={(e) => {
              setFromPrice(e?.target?.value);
            }}
          />
          <Select
            onChange={onChangeFromCurrCode}
            value={fromCurrCode}
            className=""
          />
        </div>
        <div className="convert-from-price">
          <input
            className="convert-from-input"
            type="number"
            value={toPrice}
            onChange={(e) => {
              setToPrice(e?.target?.value);
            }}
          />
          <Select
            onChange={onChangeToCurrCode}
            value={toCurrCode}
            className="to-curr-code"
          />
        </div>
      </div>
    </div>
  );
};

export default Convert;
