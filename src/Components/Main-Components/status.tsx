import { Button } from "./button";
import React from "react";

interface StatusProps {
  status: "on" | "off";
}

const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <>
      {status === "on" ? (
        <Button variant="secondary" size="icon">
          on
        </Button>
      ) : (
        <Button variant="destructive" size="icon">
          off
        </Button>
      )}
    </>
  );
};
export default Status;
