import React, { ChangeEvent, useMemo, useState } from "react";

interface myProps {
  setPageFn: (page: number) => void;
  setLimitFn: (page: number) => void;
  constantLimit?: number;
  totalDataLength?: number;
}
const PaginationComponent: React.FC<myProps> = ({
  setPageFn,
  setLimitFn,
  constantLimit,
  totalDataLength,
}) => {
  const [limit, setLimit] = useState<number>(constantLimit ?? 6);
  const [page, setPage] = useState<number>(1);
  const totalPages: any = useMemo(() => {
    return totalDataLength !== undefined ? Math.ceil(totalDataLength / limit) : null;
  }, [totalDataLength, limit]);

  function handleLimit(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setLimit(value);
    setLimitFn(value);
  }

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
      <p
        onClick={page === 1 || totalPages === Infinity ? () => {} : prevPage}
        className={`  w-fit disabled:text-slate-400 p-[1 px] ${
          page === 1 || totalPages === Infinity
            ? ""
            : "cursor-pointer hover:text-destructive/80"
        }`}
      >
        {"<"}
      </p>
      <span className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-destructive">
        {page}
      </span>
      <p
        onClick={page === totalPages || totalPages === Infinity ? () => {} : nextPage}
        className={`  w-fit disabled:text-slate-400 p-[1 px] ${
          page === totalPages || totalPages === Infinity
            ? ""
            : "cursor-pointer hover:text-destructive/80"
        }`}
      >
        {">"}
      </p>
      {!constantLimit && (
        <div className="p-1 border border-stone-400">
          <input
            type="number"
            value={limit === 0 ? "" : limit}
            onChange={handleLimit}
            className="text-center max-w-12 focus:outline-none "
          />
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;
