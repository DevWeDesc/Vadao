"use client";
import React from "react";
import { DataNav } from "../../data/data";
import { INav } from "../../types/types";
import { useState } from "react";

export const Nav = ({ navOpen, handleNavOpen }: INav) => {
  const [sectionSelected, setSectionSelected] = useState("Inicio");
  return (
    <div
      className={`fixed top-0 text-white z-10 bg-red-800 h-screen lg:relative lg:h-full px-14 py-24 lg:p-0 lg:bg-redDefault gap-5 flex flex-col right-0 ${
        navOpen
          ? "z-10 opacity-100 transition-all"
          : "-z-[2] opacity-0 right-0 transition-all hidden lg:flex lg:flex-row lg:opacity-100 lg:z-10 lg:font-bold"
      }`}
    >
      {DataNav.map((data, index) => (
        <a
          aria-label={`Navegação para ${data.value}`}
          href={data.href}
          onClick={() => {
            setSectionSelected(data.value);
            handleNavOpen();
          }}
          key={index}
          className={`${
            data.value === sectionSelected
              ? "transition-all border-b border-white"
              : "border-0"
          }`}
        >
          {data.value}
        </a>
      ))}
    </div>
  );
};
