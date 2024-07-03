"use client";
import React from "react";
import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Button } from "./button";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { TablePageSwitcher } from "../table-page-switcher";
import { Selector } from "./selector";
import DeleteIcon from "../../Icons/deleteSVG";
import DownloadIcon from "../../Icons/downloadSVG";
import ExportIcon from "../../Icons/exportSVG";
import FilterSearchIcon from "../../Icons/filterSearchSVG";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      sorting,
    },
  });

  const currentPage = table.getState().pagination.pageIndex + 1;

  const totalPagesArray = Array.from({ length: table.getPageCount() }).map(
    (el, i) => (el = String(i + 1))
  );

  const handlePageChange = (value: string) => {
    table.setPageIndex(Number(value) - 1);
  };

  const handleNextPage = () => {
    if (table.getCanNextPage()) {
      table.nextPage();
    }
  };

  const handlePreviousPage = () => {
    if (table.getCanPreviousPage()) {
      table.previousPage();
    }
  };

  const handleSortChange = (value: string) => {
    if (value === "reset") {
      setSorting([]);
    } else if (value === "price") {
      setSorting([{ id: value, desc: false }]);
    } else {
      setSorting([{ id: "price", desc: true }]);
    }
  };

  return (
    <div className="w-full">
      <div className="p-2 m-2 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center p-6 gap-x-2">
            <div className="text-primary shrink-0">Sort by:</div>
            <Selector
              onValueChange={handleSortChange}
              items={[
                { name: "Reset", value: "reset" },
                { name: "Price (low to high)", value: "price" },
                { name: "Price (high to low)", value: "price_desc" },
              ]}
              placeholder="Select company size"
            />
          </div>

          <div className="flex gap-x-6">
            <div className="flex items-center gap-x-6">
              <Button size="icon" variant="ghost">
                <ExportIcon width={31.14} height={31.14} />
              </Button>
              <Button size="icon" variant="ghost">
                <DownloadIcon width={31.14} height={31.14} />
              </Button>
              <Button size="icon" variant="ghost">
                <FilterSearchIcon className="w-[31.14px] h-[31.14]" />
              </Button>
              <Button size="icon" variant="ghost">
                <DeleteIcon className="w-[31.14px] h-[31.14]" />
              </Button>
            </div>
            <Button variant="destructive">Add new</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="border-none whitespace-nowrap bg-neutral-100 hover:bg-neutral-100"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <ChevronUp className="inline w-4 h-4" />,
                            desc: <ChevronDown className="inline w-4 h-4" />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </>
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-1">
        <div className="text-sm">
          Show {currentPage} of {totalPagesArray.length}
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-[13px] text-primary leading-5">Page</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePreviousPage}
            disabled={!table.getCanPreviousPage()}
            className="p-0 text-destructive hover:text-destructive/80 w-fit disabled:bg-transparent"
          >
            <ChevronLeft strokeWidth={3} />
          </Button>
          <span className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-destructive">
            {currentPage}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={!table.getCanNextPage()}
            className="p-0 text-destructive hover:text-destructive/80 w-fit disabled:bg-transparent"
          >
            <ChevronRight strokeWidth={3} />
          </Button>

          <TablePageSwitcher
            onSelected={handlePageChange}
            selected={currentPage}
            items={totalPagesArray}
            className="w-[50px] border-0 text-sm leading-5 border-b border-destructive flex items-start focus:ring-0 focus:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
}
