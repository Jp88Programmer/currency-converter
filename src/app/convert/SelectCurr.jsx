"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getCurrencyCode } from "../libs/getCurrInfo";

export default function SelectCurr({ onChange, value, className }) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    async function getCode() {
      const cacheData = localStorage.getItem("currCodeArr");
      if (cacheData) {
        setOptions(JSON.parse(cacheData));
      } else {
        const currCode = await getCurrencyCode();
        const currCodeArr = [
          ...currCode?.map((code) => {
            return { value: code, label: code };
          }),
        ];
        localStorage.setItem("currCodeArr", JSON.stringify(currCodeArr));
        setOptions(currCodeArr);
      }
    }
    getCode();
    return () => {};
  }, []);
  return (
    <Select
      options={options}
      placeholder="Select Currency"
      className={`react-select-container ${className}`}
      classNamePrefix="react-select"
      value={options?.filter((op) => op.value == value)}
      onChange={onChange}
    />
  );
}
