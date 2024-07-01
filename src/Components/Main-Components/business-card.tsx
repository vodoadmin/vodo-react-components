import React from "react";

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
    <div className="flex p-3 items-center gap-x-3 transition-all hover:bg-accent hover:px-6 rounded-sm">
      <div className="relative">
        <img
          width={56}
          height={56}
          src={imageUrl}
          alt={title}
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm">{title}</h4>
          <a
            href={addHref}
            className=" text-destructive underline text-sm leading-5 hover:text-primary transition-colors"
          >
            Add
          </a>
        </div>
        <p className="text-xs leading-5 text-muted-foreground/50">
          {description}
        </p>
      </div>
    </div>
  );
};
