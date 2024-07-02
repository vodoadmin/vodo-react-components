import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "../Utils/utils";

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl: string;
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatarUrl,
  className,
}) => {
  const avatarFallBack = name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 bg-white p-4",
        className
      )}
    >
      <Avatar className="h-14 w-14">
        <AvatarImage className="object-cover" src={avatarUrl} />
        <AvatarFallback>{avatarFallBack}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-2 space-y-1">
        <h3 className="text-sm font-bold text-primary">{name}</h3>
        <p className="text-xs text-muted-foreground/50">{email}</p>
      </div>
    </div>
  );
};
