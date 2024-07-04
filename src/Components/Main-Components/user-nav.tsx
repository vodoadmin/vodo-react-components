import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { cn } from "../../Utils/utils";
import ArrowDownIcon from "../../Icons/arrow-downSVG";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { UserProfile } from "../user-profile";
import { Button } from "./button";
import EditIcon from "../../Icons/editIcon";
import LogoutIcon from "../../Icons/LogoutSVG";
interface UserNavProps {
  name: string;
  email: string;
  avatarUrl: string;
  className?: string;
  avatarClass?: string;
}
const UserNav: React.FC<UserNavProps> = ({
  name = "Zain Ali",
  email = "zain20@gmail.com",
  avatarUrl = "https://i.pravatar.cc/150?img=3",
  className = " p-1.5",
  avatarClass = " w-8 h-8",
}) => {
  const avatarFallBack = name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
  return (
    <Popover>
      <PopoverTrigger>
        {" "}
        <div
          className={cn(
            "flex items-center gap-3 bg-white p-4 rounded-full shadow-[#EB3D34_7px_-3px]",
            className
          )}
        >
          <Avatar className={cn("h-14 w-14", avatarClass)}>
            <AvatarImage className="object-cover" src={avatarUrl} />
            <AvatarFallback>{avatarFallBack}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-primary">{name}</h3>
          </div>
          <ArrowDownIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <UserProfile
          name={name}
          avatarUrl={avatarUrl}
          email={email}
          className="bg-[#FAFAFA] rounded-3xl"
        />
        <div className="p-4">
          <Button
            variant={"ghost"}
            className="flex items-center justify-start w-full gap-3 my-2"
          >
            <EditIcon /> Edit Account
          </Button>
          <Button
            variant={"ghost"}
            className="flex items-center justify-start w-full gap-3"
          >
            <LogoutIcon /> Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default UserNav;
