import { ReactNode } from "react";

export interface tableHeaderType {
  accessorKey: string;
  header: string | ReactNode;
}

export interface tableItemType {
  [key: string]: any;
}
