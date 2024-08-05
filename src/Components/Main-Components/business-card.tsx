import React from "react";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  imageUrl: string;
  title: string;
  description: string;
  addHref: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  imageUrl,
  title,
  description,
  addHref,
}) => {
  return (
    <div className="flex items-center p-3 transition-all rounded-sm gap-x-3 hover:bg-accent hover:px-6">
      <div className="relative">
        <img
          width={56}
          height={56}
          src={imageUrl}
          alt={title}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold">{title}</h4>
          <Link
            to={addHref}
            className="text-sm leading-5 underline transition-colors  text-destructive hover:text-primary"
          >
            Add
          </Link>
        </div>
        <p className="text-xs leading-5 text-muted-foreground/50">{description}</p>
      </div>
    </div>
  );
};
