import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import { StaticImageData } from "next/image";

interface data {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  align: "left" | "right";
}

export const data: data[] = [
  {
    id: 1,
    title: "Property sales.",
    description:
      "Buy luxury homes and lands in Lekki, Ajah, Ikoyi, and Victoria Island.",
    image: img2,
    align: "left",
  },
  {
    id: 2,
    title: "Rentals & short lets.",
    description:
      "Curated listings for quality rentals and premium short stays.",
    image: img1,
    align: "right",
  },
  {
    id: 3,
    title: "Consultancy & ventures.",
    description:
      "Expert consulting and joint venture facilitation for investors.",
    image: img3,
    align: "left",
  },
];
