import { StaticImageData } from "next/image";

export type INav = {
  navOpen: boolean;
};

export type ICardMenu = {
  image: string | StaticImageData | any;
  title: string;
  content: string;
  price: string;
};
