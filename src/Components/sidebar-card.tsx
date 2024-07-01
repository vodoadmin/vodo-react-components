import { Button } from "./Main-Components/button";
import React from "react";

interface SideCard {
  open: boolean;
  title: string;
  Svg: React.ElementType;
}
const SideCard: React.FC<SideCard> = ({ open, Svg, title }) => {
  return (
    <Button
      variant={"ghost"}
      className="rounded-none w-full py-8 flex justify-start px-5 gap-4"
    >
      <Svg />
      {open && <span className="text-[#2B2F3880]">{title}</span>}
    </Button>
  );
};

export default SideCard;
