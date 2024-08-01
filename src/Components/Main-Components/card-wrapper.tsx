import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Button } from "./button";
import { cn } from "../../Utils/utils";
import { Link } from "react-router-dom";

interface CardWrapperProps {
  cardTitle: string;
  children: React.ReactNode;
  showFooter?: boolean;
  footerHref?: string;
  className?: string;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  cardTitle,
  children,
  showFooter = false,
  footerHref = "",
  className,
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="relative">{children}</CardContent>
      {showFooter && (
        <CardFooter>
          <Button size="sm" variant="link" className="w-full" asChild>
            <Link to={footerHref}>View all</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
