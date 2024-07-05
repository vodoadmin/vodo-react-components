import React from "react";
import "../../index.css";
import ThTable from "../ThTable";
import TdTable from "../TdTable";
import { TableHead } from "../table";
import { capitalizeFirstLetter } from "../../Utils/capitalizeFirstLetter";
import { tableHeaderType, tableItemType } from "@/Utils/tableTypes";

interface myProps {
  TabelHead: tableHeaderType[];
  TabelData: tableItemType[];
  tableStyling: {
    headStyle: string;
    bodyStyle: string;
  };
}

export default function MainTabel({ TabelHead, TabelData }: myProps) {
  // Check if all accessor keys in headers are present in tableData
  const allKeysPresent = TabelHead.every((header) =>
    Object.keys(TabelData[0])
      .map((el) => el.toLowerCase())
      .includes(header.accessorKey.toLowerCase())
  );

  if (!allKeysPresent) {
    throw new Error("Table data does not contain all required accessor keys");
  }

  return (
    <>
      <div className="inline-block min-w-full rounded-lg shadow-md ">
        <table className="min-w-full leading-normal custom_tabel">
          <thead className="border-none rounded-lg whitespace-nowrap bg-neutral-100 hover:bg-neutral-100">
            <tr className="">
              {TabelHead?.map((item: tableHeaderType) => (
                <ThTable>{item.header}</ThTable>
              ))}
            </tr>
          </thead>
          <tbody>
            {TabelData.length === 0 ? (
              <p className="text-center">No data available</p>
            ) : (
              TabelData.map((row: tableItemType, rowIndex: number) => (
                <tr key={rowIndex}>
                  {TabelHead.map((head: tableHeaderType, colIndex: number) => (
                    <TdTable key={colIndex}>
                      {head.accessorKey === "image" && row[head.accessorKey] ? (
                        <div className="flex items-center justify-center">
                          <img
                            alt="img"
                            src={row[head.accessorKey]}
                            width={50}
                            height={50}
                            className=""
                          />
                        </div>
                      ) : (
                        row[head.accessorKey] ?? ""
                      )}
                    </TdTable>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
