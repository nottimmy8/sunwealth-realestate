import React from "react";
import { Data } from "@/lib/dummydata";

interface CardProps {
  item: Data;
}

const Card = ({ item }: CardProps) => {
  return <div>{item.title}</div>;
};

export default Card;
