import { StaticImageData } from "next/image";

export type INav = {
  navOpen: boolean;
  handleNavOpen: () => void;
};

export type IDataRestaurant = {
  photo: string | StaticImageData | any;
  title: string;
};
export type ICardMenu = {
  id: number;
  image: string | StaticImageData | any;
  title: string;
  content: string;
  price: string;
  href: string;
  isVertical?: boolean;
  colorShadow?: string;
};

export type IFeedbackData = {
  image: string | StaticImageData;
  name: string;
  content: string;
};
