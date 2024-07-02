import React, { ReactNode } from "react";
import { Button } from "../Components/Main-Components/button";

import MainTabel from "../Components/Main-Components/MainTabel";
import { tableHeaderType, tableItemType } from "@/Utils/tableTypes";
import { DropDown } from "../Components/Main-Components/DropDown";
import { dropOptions } from "@/Utils/DropDown.types";
import { Copy, Edit, EditIcon } from "lucide-react";
import Status from "../Components/Main-Components/status";
import PaginationComponent from "../Components/Main-Components/PaginationComponent";

// interface tableDesign {
//   ID: string;
//   image: string;
//   SKU: string;
//   name: string;
//   category: string;
//   priceCost: string;
//   price: string;
//   kind: string;
//   virtual: string;
//   status: string;
//   SupplierChair: string;
//   actions: ReactNode;
// }

// const tableHead: tableHeaderType[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//   },
//   {
//     accessorKey: "image",
//     header: "Image",
//   },
//   {
//     accessorKey: "sku",
//     header: "SKU",
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//   },
//   {
//     accessorKey: "category",
//     header: "Category",
//   },
//   {
//     accessorKey: "priceCost",
//     header: "Price cost",
//   },
//   {
//     accessorKey: "price",
//     header: <Button variant={"secondary"}>Price</Button>,
//   },
//   {
//     accessorKey: "kind",
//     header: "Kind",
//   },
//   {
//     accessorKey: "virtual",
//     header: "Virtual",
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "supplierChair",
//     header: "Supplier Chair",
//   },
//   {
//     header: "Actions",
//     accessorKey: "actions",
//   },
// ];

// const selections: dropOptions[] = [
//   {
//     icon: <Copy className="w-4 h-4 mr-2" />,
//     name: "Copy",
//     action: () => {
//       console.log("copy");
//     },
//   },

//   {
//     icon: <Edit className="w-4 h-4 mr-2" />,
//     name: "Edit",
//     action: () => {
//       console.log("edit");
//     },
//   },
// ];

// const tableData: tableItemType[] = Array.from({ length: 8 }, (_, index) => ({
//   id: `ID_${index}`,
//   image: `https://example.com/image_${index}.jpg`,
//   sku: `SKU_${index}`,
//   name: `Product ${index}`,
//   category: `Category ${index}`,
//   priceCost: `$${(index + 1) * 10}.00`,
//   price: `$${(index + 1) * 15}.00`,
//   kind: `Kind ${index}`,
//   virtual: index % 2 === 0 ? "Yes" : "No",
//   status: <Status status="off" />,
//   supplierChair: `Supplier ${index}`,
//   actions: (
//     <DropDown
//       selections={selections}
//       mainIcon={<EditIcon className="w-6 h-6" />}
//       title="Actions"
//     />
//   ),
// }));

const Test: React.FC = () => {
  return (
    <div className="p-5">
      <PaginationComponent
        setLimitFn={() => {}}
        setPageFn={() => {}}
        totalDataLength={100}
      />
    </div>
  );
};

export default Test;
