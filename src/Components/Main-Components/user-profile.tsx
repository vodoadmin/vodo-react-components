import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { cn } from "../../Utils/utils";

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
    <div className={cn("flex items-center gap-3 bg-white p-4", className)}>
      <Avatar className="h-14 w-14">
        <AvatarImage className="object-cover" src={avatarUrl} />
        <AvatarFallback>{avatarFallBack}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h3 className="text-primary font-bold text-sm">{name}</h3>
        <p className="text-muted-foreground/50 text-xs">{email}</p>
      </div>
    </div>
  );
};
