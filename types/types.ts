import { StaticImageData } from "next/image";

export type INav = {
  navOpen: boolean;
  handleNavOpen: () => void;
};

export type ICardMenu = {
  image: string | StaticImageData | any;
  title: string;
  content: string;
  price: string;
  isVertical?: boolean;
  colorShadow?: string;
};

export type IFeedbackData = {
  image: string | StaticImageData;
  name: string;
  content: string;
};
