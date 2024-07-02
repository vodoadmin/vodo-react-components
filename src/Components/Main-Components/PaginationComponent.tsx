import React, { ChangeEvent, useMemo, useState } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface myProps {
  setPageFn: (page: number) => void;
  setLimitFn: (page: number) => void;
  totalDataLength?: number;
}
const PaginationComponent: React.FC<myProps> = ({
  setPageFn,
  setLimitFn,
  totalDataLength,
}) => {
  const [limit, setLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const totalPages: any = useMemo(() => {
    return totalDataLength !== undefined
      ? Math.ceil(totalDataLength / limit)
      : null;
  }, [totalDataLength, limit]);

  function handleLimit(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setLimit(value);
    setLimitFn(value);
  }

  //   console.log(page, totalPages, limit, totalPages);
  console.log({
    page: page,
    totalPages: totalPages,
    limit: limit,
    totalDataLength: totalDataLength,
  });

  function prevPage() {
    if (page === 1) return;
    setPage(page - 1);
    setPageFn(page - 1);
  }

  function nextPage() {
    if (page === totalPages && totalPages) return;
    setPage(page + 1);
    setPageFn(page + 1);
  }

  return (
    <div className="flex items-center gap-x-2">
      <span className="text-[13px] text-primary leading-5">Page</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={prevPage}
        disabled={page === 1 || totalPages === Infinity}
        className="p-0 text-destructive hover:text-destructive/80 w-fit disabled:bg-transparent"
      >
        <ChevronLeft strokeWidth={3} />
      </Button>
      <span className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-destructive">
        {page}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextPage}
        disabled={page === totalPages || totalPages === Infinity}
        className="p-0 text-destructive hover:text-destructive/80 w-fit disabled:bg-transparent"
      >
        <ChevronRight strokeWidth={3} />
      </Button>
      <div className="p-1 border border-stone-400">
        <input
          type="number"
          value={limit === 0 ? "" : limit}
          onChange={handleLimit}
          className="text-center max-w-12 focus:outline-none "
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
