import React from "react";
import { DataNav } from "../../data/data";

type INav = {
  navOpen: boolean;
};

export const Nav = ({ navOpen }: INav) => {
  return (
    <div
      className={`fixed top-0 text-white bg-red-800 h-screen px-14 py-24 gap-5 flex flex-col right-0 ${
        navOpen
          ? "z-10 opacity-100 transition-all"
          : "-z-[2] opacity-0 right-0 transition-all"
      }`}
    >
      {DataNav.map((data, index) => (
        <a key={index}>{data.value}</a>
      ))}
    </div>
  );
};
