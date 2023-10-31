import { StaticImageData } from "next/image";

export type ICardMenu = {
  image: string | StaticImageData | any;
  title: string;
  content: string;
  price: string;
};
